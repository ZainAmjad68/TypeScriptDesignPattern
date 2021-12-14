//import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";

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
let numbersCollection = new NumbersCollection([4, -5, 2, 6, 8]);
numbersCollection.sort();
console.log(numbersCollection.data);

// String
let charactersCollection = new CharactersCollection("XaBbyxs");
charactersCollection.sort();

console.log(charactersCollection.data);

// Linked List
let linkedListCollection = new LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(20);
linkedListCollection.add(-2000);
linkedListCollection.add(12000);

linkedListCollection.sort();
linkedListCollection.print();
