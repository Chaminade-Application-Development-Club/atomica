export default class GoogleAuthService {
  public authenticated: any;
  public authInstance: any;
  constructor() {
    this.authenticated = this.isAuthenticated();
    this.authInstance = null;

    this.login = this.login.bind(this);
    this.setSession = this.setSession.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  public login(event: any) {
    return this.authInstance.signIn()
      .then(this.setSession);
  }

  public logout(event: any) {
    this.authInstance.signOut((response: any) => console.log(response));
    localStorage.clear();
    this.authenticated = false;
  }

  public setSession (response: any) {
    const profile = this.authInstance.currentUser.get().getBasicProfile();
    const authResult = response.Zi
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expires_in * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.access_token)
    localStorage.setItem('id_token', authResult.id_token)
    localStorage.setItem('expires_at', expiresAt)

    this.authenticated = true

    localStorage.setItem('id', profile.getId());
    localStorage.setItem('full_name', profile.getName());
    localStorage.setItem('first_name', profile.getGivenName());
    localStorage.setItem('last_name', profile.getFamilyName());
    localStorage.setItem('image_url', profile.getImageUrl());
    localStorage.setItem('email', profile.getEmail());
  }

  public isAuthenticated () {
    const expiresAt: any = JSON.parse(localStorage.getItem("expires_at") || "{}");
    return new Date().getTime() < expiresAt;
  }

  public getUserData() {
    return {
      firstName: localStorage.getItem("first_name"),
      lastName: localStorage.getItem("last_name"),
      email: localStorage.getItem("email"),
    };
  }
}
