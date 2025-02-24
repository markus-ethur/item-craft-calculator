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
  MATS = "mats",
  CRAFTED_MATS = "crafted_mats",
  BLACKSMITH = "blacksmith",
  WEAPON_PARTS = "weapon_parts",
  JEWELRY_PARTS = "jewelry_parts",
  MAMMON = "mammon",
  WEAPON = "weapon",
  JEWELRY = "jewelry",
  FANG = "fang",
}

export class Item {
  id: string;
  name: string;
  type?: ItemType;
  stackSize: number;
  recipe?: Recipe;

  constructor(
    name: string,
    type?: ItemType,
    recipe?: Recipe,
    stackSize?: number
  ) {
    this.id = randomUUID();
    this.name = name;
    this.recipe = recipe;
    this.type = type || ItemType.MATS;
    this.stackSize = stackSize || 1;
  }
}
