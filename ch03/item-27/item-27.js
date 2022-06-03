"use strict";
/*
Item 27:
Use Functional Constructs and Libraries to Help Types Flow
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const csvData = `key,value
abc,123
def,456`;
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');
const rowsA = rawRows.slice(1).map((rowStr) => {
    const row = {};
    rowStr.split(',').forEach((val, j) => {
        row[headers[j]] = val;
    });
    return row;
});
console.log(rowsA);
const rowsB = rawRows.slice(1).map((rowStr) => rowStr.split(',').reduce((row, val, i) => {
    // return {
    //   ...row,
    //   ...{ [headers[i]]: val },
    // };
    return (row[headers[i]] = val), row;
}, {}));
console.log(rowsB);
const rowsC = rawRows
    .slice(1)
    .map((rowStr) => lodash_1.default.zipObject(headers, rowStr.split(',')));
console.log(rowsC);
const rosters = {
    team_01: [
        { name: 'player_01', team: 'team_01', salary: 10 },
        { name: 'player_02', team: 'team_01', salary: 20 },
    ],
    team_02: [
        { name: 'player_03', team: 'team_02', salary: 30 },
        { name: 'player_04', team: 'team_02', salary: 40 },
    ],
    team_03: [
        { name: 'player_05', team: 'team_03', salary: 50 },
        { name: 'player_06', team: 'team_03', salary: 60 },
    ],
};
// let allPlayers: BasketballPlayer[] = [];
// for (const players of Object.values(rosters)) {
//   allPlayers = allPlayers.concat(players);
// }
const allPlayers = Object.values(rosters).flat();
console.log(allPlayers);
const bestPaid = (0, lodash_1.default)(allPlayers)
    .groupBy((player) => player.team)
    .mapValues((players) => lodash_1.default.maxBy(players, (p) => p.salary))
    .values()
    .sortBy((p) => -p.salary)
    .value();
console.log(bestPaid);
const namesA = allPlayers.map((player) => player.name);
const namesB = lodash_1.default.map(allPlayers, (player) => player.name);
const namesC = lodash_1.default.map(allPlayers, 'name');
const salaries = lodash_1.default.map(allPlayers, 'salary');
const teams = lodash_1.default.map(allPlayers, 'team');
const mix = lodash_1.default.map(allPlayers, Math.random() < 0.5 ? 'name' : 'salary');
