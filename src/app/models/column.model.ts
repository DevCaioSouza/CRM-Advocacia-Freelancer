import { User } from "../interfaces/User";

export class Column {
  push(storedUserName: string) {
    throw new Error('Method not implemented.');
  }
  constructor(public name: string, public tasks: any[]){}
}
