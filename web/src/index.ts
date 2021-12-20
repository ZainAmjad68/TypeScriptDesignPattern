/*import { User } from "../models/User";

let user1 = new User({ name: "Zain", age: 23 });

console.log(user1.get("name"));
user1.set({ name: "Amjad" });

user1.on("change", () => {
  console.log("change triggered");
});

user1.on("saved", () => {
  console.log("Saved");
});

user1.trigger("change");
user1.trigger("save");


import axios from "axios";

axios.post("http://localhost:3000/users", {name:"Zain", age:23});

axios.get("http://localhost:3000/users/1");
*/

import { User } from "../models/User";

let user1 = new User({ id:1 });

user1.set({name:"Zain Amjad", age:32});
user1.save();
//user1.fetch();