"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matchData = [];
    }
    static fromCSV(filename) {
        const csvReader = new CsvFileReader_1.CsvFileReader(filename);
        return new MatchReader(csvReader);
    }
    load() {
        this.reader.read();
        this.matchData = this.reader.data.map((row) => {
            return [
                (0, utils_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
