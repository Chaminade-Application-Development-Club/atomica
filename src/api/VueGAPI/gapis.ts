function loadGAPIScript(gapiUrl: any) {
  return new Promise((resolve, reject) => {
    const script: any = document.createElement("script");
    script.src = gapiUrl;
    script.onreadystatechange = script.onload = () => {
      const interval = setInterval(() => {
        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
          clearInterval(interval);
          console.log("gapi.js loaded.");
          resolve();
        }
      }, 100);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}
export const gapiPromise = loadGAPIScript("https://apis.google.com/js/api.js");
