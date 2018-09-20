
class SheetApi {
    //private sheet =  google.sheets({version: "v4"});
    constructor() {
        console.log("start requesting");
    }

    // public getLeaderboard() {
    //     this.sheet.spreadsheets.values.get({
    //         spreadsheetId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
    //         range: "Class Data!A2:E",
    //     }, (err: boolean, res: any) => {
    //         if (err){
    //             //console.log(err);
    //             return err;
    //         }
    //         const rows = res.data.values;
    //         //console.log(rows);
    //         return rows;
    //     } );
    // }
}

export const sheetApi = new SheetApi();
