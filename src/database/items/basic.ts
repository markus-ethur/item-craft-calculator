import { Item, ItemType } from "../../classes/item.class";

// Wood
const wood = new Item("Wood", ItemType.BASIC, 50);

// Hearwood
const heartwood = new Item("Heartwood", ItemType.BASIC, 50);
const longFineWoodStock = new Item("LongFineWoodStock", ItemType.BASIC, 10, {
  items: [{ item: heartwood, q: 5 }],
  r: 5,
});

export { wood, heartwood, longFineWoodStock };
