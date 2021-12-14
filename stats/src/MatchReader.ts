import { stringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface dataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  static fromCSV(filename: string) {
    const csvReader = new CsvFileReader(filename);
    return new MatchReader(csvReader);
  }

  matchData: MatchData[] = [];
  constructor(public reader: dataReader) {}

  load(): void {
    this.reader.read();
    this.matchData = this.reader.data.map((row: string[]): MatchData => {
      return [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
