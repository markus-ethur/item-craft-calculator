import { Item, ItemType } from "../../classes/item.class";
import { basic } from "../items";

const wood = basic["wood"];
const longFineWoodStock = basic["longFineWoodStock"];

const coal = new Item("Coal", ItemType.BLACKSMITH, 10, {
  items: [{ item: wood, q: 40 }],
  r: 25,
});
// Iron
const ironOre = new Item("IronOre", ItemType.BLACKSMITH, 20);
const iron = new Item("Iron", ItemType.BLACKSMITH, 20, {
  items: [
    { item: ironOre, q: 40 },
    { item: coal, q: 25 },
  ],
  r: 20,
});
const ironBar = new Item("IronBar", ItemType.BLACKSMITH, 20, {
  items: [{ item: iron, q: 1 }],
  r: 2,
});
const ironNails = new Item("IronNails", ItemType.BLACKSMITH, 200, {
  items: [{ item: ironBar, q: 1 }],
  r: 50,
});

// Wrought Iron
const IronOrePure = new Item("IronOrePure", ItemType.BLACKSMITH, 20);
const wroughtIron = new Item("wroughtIron", ItemType.BLACKSMITH, 20, {
  items: [
    { item: IronOrePure, q: 40 },
    { item: coal, q: 100 },
  ],
  r: 20,
});
const wroughtIronBar = new Item("WroughtIronBar", ItemType.BLACKSMITH, 20, {
  items: [{ item: wroughtIron, q: 1 }],
  r: 2,
});
const wroughtIronSpike = new Item("WroughtIronSpike", ItemType.BLACKSMITH, 10, {
  items: [{ item: wroughtIronBar, q: 1 }],
  r: 1,
});

// Blacksmith
const noviceSpear = new Item("NoviceSpear", ItemType.BLACKSMITH, 1, {
  items: [
    { item: longFineWoodStock, q: 1 },
    { item: wroughtIronSpike, q: 1 },
    { item: ironNails, q: 2 },
  ],
  r: 1,
});
const wroughtIronPickaxe = new Item(
  "WroughtIronPickaxe",
  ItemType.BLACKSMITH,
  1,
  {
    items: [
      { item: longFineWoodStock, q: 1 },
      { item: wroughtIronBar, q: 2 },
    ],
    r: 1,
  }
);

export {
  coal,
  ironOre,
  iron,
  ironBar,
  ironNails,
  IronOrePure,
  wroughtIron,
  wroughtIronBar,
  wroughtIronSpike,
  noviceSpear,
  wroughtIronPickaxe,
};
