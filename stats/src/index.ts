import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCSV("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man City");

matchReader.load();
summary.buildAndPrintReport(matchReader.matchData);

// Solution using Inheritance
/*import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

console.log(reader.data);

let manCwins = 0;

for (let match of reader.data) {
  if (match[1] === "Man City" && match[5] === MatchResult.HomeWin) {
    manCwins++;
  } else if (match[2] === "Man City" && match[5] === MatchResult.AwayWin) {
    manCwins++;
  }
}

console.log(`Manchested City won ${manCwins} games`);
*/

/*
// Solution using Composition
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

const csvReader = new CsvFileReader("football.csv");

const reader = new MatchReader(csvReader);
reader.load();

console.log(reader.matchData);

let manCwins = 0;

for (let match of reader.matchData) {
  if (match[1] === "Man City" && match[5] === MatchResult.HomeWin) {
    manCwins++;
  } else if (match[2] === "Man City" && match[5] === MatchResult.AwayWin) {
    manCwins++;
  }
}

console.log(`Manchested City won ${manCwins} games`);
*/
