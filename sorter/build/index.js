"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { Sorter } from "./Sorter";
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedListCollection_1 = require("./LinkedListCollection");
// code without any abstract classes and inheritance
/*
let numbersCollection = new NumbersCollection([4, -5, 2, 6, 8]);
let numSorter = new Sorter(numbersCollection);
numSorter.sort();

console.log(numbersCollection.data);

let charactersCollection = new CharactersCollection("XaBbyxs");
let charSorter = new Sorter(charactersCollection);
charSorter.sort();

console.log(charactersCollection.data);

let linkedListCollection = new LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(20);
linkedListCollection.add(-2000);
linkedListCollection.add(12000);

let linkSorter = new Sorter(linkedListCollection);
linkSorter.sort();
linkedListCollection.print();
*/
// Number Array
let numbersCollection = new NumbersCollection_1.NumbersCollection([4, -5, 2, 6, 8]);
numbersCollection.sort();
console.log(numbersCollection.data);
// String
let charactersCollection = new CharactersCollection_1.CharactersCollection("XaBbyxs");
charactersCollection.sort();
console.log(charactersCollection.data);
// Linked List
let linkedListCollection = new LinkedListCollection_1.LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(20);
linkedListCollection.add(-2000);
linkedListCollection.add(12000);
linkedListCollection.sort();
linkedListCollection.print();
