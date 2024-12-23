import { randomUUID } from "node:crypto";

interface RecipeItem {
  item: Item;
  q: number;
}

interface Recipe {
  items: RecipeItem[];
  r: number;
}

export enum ItemType {
  BASIC = "basic",
  BLACKSMITH = "blacksmith",
}

export class Item {
  id: string;
  name: string;
  type: ItemType;
  stackSize: number;
  recipe?: Recipe;

  constructor(
    name: string,
    type: ItemType,
    stackSize: number,
    recipe?: Recipe
  ) {
    this.id = randomUUID();
    this.name = name;
    this.type = type;
    this.stackSize = stackSize;
    this.recipe = recipe;
  }
}
