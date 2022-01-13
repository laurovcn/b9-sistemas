import { ObjectId } from "mongodb";

export default class Game {
  constructor(public description: string, public id?: ObjectId) {}
}