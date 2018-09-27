
import Student from "@/api/student";

export enum Ranges {
  firstName = "Rank Order Leaderboard!F2:F",
  lastName = "Rank Order Leaderboard!G2:G",
  house = "Rank Order Leaderboard!I2:I",
  guild = "Rank Order Leaderboard!J2:J",
  xp  = "Rank Order Leaderboard!N2:N",
  level = "Rank Order Leaderboard!P2:P",
  gold = "Rank Order Leaderboard!R2:R",
}

export default class SheetApi {
  private gapiClient: any;
  private spreadsheetId: string;
  constructor(gapi: any, sheetID: string) {
    console.log("start requesting");
    this.gapiClient = gapi;
    this.spreadsheetId = sheetID;
  }

  // public get getLeaderboard() {
  //   let b: Student[] = [];
  //   this.loadLeaderBoard().then((res) => {
  //     b = res;
  //     console.log(b);
  //     return b;
  //   });
  // }

  public async loadLeaderBoard() {
    let first = await this.getData(Ranges.firstName);
    let last = await this.getData(Ranges.lastName);
    let house = await this.getData(Ranges.house);
    let guild = await this.getData(Ranges.guild);
    let xp = await this.getData(Ranges.xp);
    let level = await this.getData(Ranges.level);
    let gold = await this.getData(Ranges.gold);
    return new Promise<Student[]>((resolve) => {
      let students: Student[] = [];
      for (let i = 0; i < first.length; i++) {
        let s: Student = {
          firstName: first[i],
          lastName: last[i],
          house: house[i],
          guild: guild[i],
          xp: xp[i],
          level: level[i],
          gold: gold[i],
        };
        //console.log(s);
        //console.log(students);
        if (students !== null) {
          students.push(s);
        } else {
          students = [s];
        }
      }
      resolve(students);
    });
  }

  // returns the data in array format
  public async getData(requestRange: string){
    return new Promise<string[]>((resolve) => {
      let results = Array<string>();
      this.gapiClient.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: requestRange,
      }).then((res: any) => {
        console.log(res);
        const vals = JSON.parse(res.body).values;
        // console.log(JSON.parse(res.body).values);
        for (const f of vals) {
          results.push(f[0]);
        }
        resolve(results);
      });
      //return results;
    });
  }
}
