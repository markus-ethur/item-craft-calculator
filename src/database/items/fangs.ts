import { Item, ItemType } from "../../classes/item.class";

export const fang = new Item("Fang");

export const erFang = new Item("Enria (Fang)", ItemType.FANG, {
  items: [{ item: fang, q: 12 }],
  r: 1,
});
export const afFang = new Item("Asofe (Fang)", ItemType.FANG, {
  items: [{ item: fang, q: 6 }],
  r: 1,
});
export const vopFang = new Item("Varnish of Purity (Fang)", ItemType.FANG, {
  items: [{ item: fang, q: 81 }],
  r: 10,
});
export const sckFang = new Item("Synthetic Cokes (Fang)", ItemType.FANG, {
  items: [{ item: fang, q: 33 }],
  r: 5,
});
export const cbFang = new Item("Compound Braids (Fang)", ItemType.FANG, {
  items: [{ item: fang, q: 30 }],
  r: 10,
});
export const dmpFang = new Item("Durable Metal Plate (Fang)", ItemType.FANG, {
  items: [{ item: fang, q: 150 }],
  r: 10,
});
export const mitalloyFang = new Item("Mitril Alloy (Fang)", ItemType.FANG, {
  items: [{ item: fang, q: 131 }],
  r: 10,
});
export const ooFang = new Item("Oriharukon Ore (Fang)", ItemType.FANG, {
  items: [{ item: fang, q: 123 }],
  r: 5,
});
