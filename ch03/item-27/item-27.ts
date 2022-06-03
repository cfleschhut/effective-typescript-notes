/*
Item 27:
Use Functional Constructs and Libraries to Help Types Flow
*/

import _ from 'lodash';

const csvData = `key,value
abc,123
def,456`;

const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');

const rowsA = rawRows.slice(1).map((rowStr) => {
  const row: Record<string, string> = {};

  rowStr.split(',').forEach((val, j) => {
    row[headers[j]] = val;
  });

  return row;
});

console.log(rowsA);

const rowsB = rawRows.slice(1).map((rowStr) =>
  rowStr.split(',').reduce((row: { [column: string]: string }, val, i) => {
    // return {
    //   ...row,
    //   ...{ [headers[i]]: val },
    // };
    return (row[headers[i]] = val), row;
  }, {}),
);

console.log(rowsB);

const rowsC = rawRows
  .slice(1)
  .map((rowStr) => _.zipObject(headers, rowStr.split(',')));

console.log(rowsC);

interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}

const rosters: {
  [team: string]: BasketballPlayer[];
} = {
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

const bestPaid = _(allPlayers)
  .groupBy((player) => player.team)
  .mapValues((players) => _.maxBy(players, (p) => p.salary)!)
  .values()
  .sortBy((p) => -p.salary)
  .value();

console.log(bestPaid);

const namesA = allPlayers.map((player) => player.name);
const namesB = _.map(allPlayers, (player) => player.name);
const namesC = _.map(allPlayers, 'name');

const salaries = _.map(allPlayers, 'salary');
const teams = _.map(allPlayers, 'team');
const mix = _.map(allPlayers, Math.random() < 0.5 ? 'name' : 'salary');
