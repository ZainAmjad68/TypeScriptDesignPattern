import { User, UserProps } from "../models/User";
import { Views } from "./Views";

export class UserEdit extends Views<User, UserProps> {
    template(): string {
        return `
        <div>
        <div class="user-show"></div>
        <div class="user-edit"></div>
        </div>`
    }
}