import { Item, ItemType } from "../../classes/item.class";

// Wood
// const wood = new Item("Wood", ItemType.BASIC, 50);

// // Hearwood
// const heartwood = new Item("Heartwood", ItemType.BASIC, 50);
// const longFineWoodStock = new Item("LongFineWoodStock", ItemType.BASIC, 10, {
//   items: [{ item: heartwood, q: 5 }],
//   r: 5,
// });

// Lineage 2 Calculator

// Basic Mats
export const sop = new Item("Stone of Purity");
export const va = new Item("Varnish");
export const ab = new Item("Animal Bone");
export const mg = new Item("Mold Glue");
export const ml = new Item("Mold Lubricant");
export const mh = new Item("Mold Hardener");
export const tr = new Item("Thread");
export const su = new Item("Suede");
export const er = new Item("Enria");
export const oo = new Item("Oriharukon Ore");
export const co = new Item("Coal");
export const io = new Item("Iron Ore");
export const ch = new Item("Charcoal");
export const mo = new Item("Mithril Ore");
export const an = new Item("Adamantite Nugget");
export const stt = new Item("Stem");
export const ton = new Item("Thons");
export const sn = new Item("Silver Nugget");
export const af = new Item("Asofe");
export const ans = new Item("Animal Skin");

// Seven Signs
export const gs = new Item("Gemstone S", ItemType.MAMMON); // implement AA value
export const sx = new Item("Crystal S", ItemType.MAMMON); // implement AA value

// Crafted Mats
export const cbp = new Item("Coarse Bone Powder", ItemType.CRAFTED_MATS, {
  items: [{ item: ab, q: 10 }],
  r: 1,
});
export const vop = new Item("Varnish of Purity", ItemType.CRAFTED_MATS, {
  items: [
    { item: va, q: 3 },
    { item: sop, q: 1 },
    { item: cbp, q: 3 },
  ],
  r: 1,
});
export const hgs = new Item("High Grade Suede", ItemType.CRAFTED_MATS, {
  items: [
    { item: su, q: 3 },
    { item: cbp, q: 1 },
  ],
  r: 1,
});
export const ck = new Item("Cokes", ItemType.CRAFTED_MATS, {
  items: [
    { item: co, q: 3 },
    { item: ch, q: 3 },
  ],
  r: 1,
});
export const sck = new Item("Synthetic Cokes", ItemType.CRAFTED_MATS, {
  items: [
    { item: ck, q: 3 },
    { item: oo, q: 1 },
  ],
  r: 1,
});
export const st = new Item("Steel", ItemType.CRAFTED_MATS, {
  items: [
    { item: va, q: 5 },
    { item: io, q: 5 },
  ],
  r: 1,
});
export const mt = new Item("Metallic Thread", ItemType.CRAFTED_MATS, {
  items: [
    { item: io, q: 5 },
    { item: tr, q: 10 },
  ],
  r: 1,
});
export const dmp = new Item("Durable Metal Plate", ItemType.CRAFTED_MATS, {
  items: [
    { item: mo, q: 5 },
    { item: mt, q: 5 },
  ],
  r: 1,
});
export const bh = new Item("Braided Hemp", ItemType.CRAFTED_MATS, {
  items: [{ item: stt, q: 5 }],
  r: 1,
});
export const cor = new Item("Cord", ItemType.CRAFTED_MATS, {
  items: [
    { item: st, q: 2 },
    { item: tr, q: 25 },
  ],
  r: 20,
});
export const mf = new Item("Metallic Fiber", ItemType.CRAFTED_MATS, {
  items: [
    { item: sn, q: 15 },
    { item: cor, q: 20 },
  ],
  r: 20,
});
export const mitalloy = new Item("Mithril Alloy", ItemType.CRAFTED_MATS, {
  items: [
    { item: mo, q: 1 },
    { item: vop, q: 1 },
    { item: st, q: 2 },
  ],
  r: 1,
});

// Blacksmith Parts
export const maeholder = new Item("Maestro Holder", ItemType.BLACKSMITH, {
  items: [
    { item: vop, q: 10 },
    { item: ml, q: 10 },
    { item: mh, q: 10 },
  ],
  r: 1,
});
export const warholder = new Item("Warsmith Holder", ItemType.BLACKSMITH, {
  items: [
    { item: maeholder, q: 2 },
    { item: mg, q: 10 },
    { item: tr, q: 20 },
  ],
  r: 1,
});
export const steelMold = new Item("Steel Mold", ItemType.BLACKSMITH, {
  items: [
    { item: io, q: 5 },
    { item: co, q: 5 },
    { item: bh, q: 5 },
  ],
  r: 1,
});
export const silverMold = new Item("Silver Mold", ItemType.BLACKSMITH, {
  items: [
    { item: bh, q: 5 },
    { item: ck, q: 5 },
    { item: sn, q: 10 },
  ],
  r: 1,
});
export const blackFrame = new Item("Blacksmith Frame", ItemType.BLACKSMITH, {
  items: [
    { item: silverMold, q: 1 },
    { item: vop, q: 5 },
    { item: mo, q: 10 },
  ],
  r: 1,
});
export const artFrame = new Item("Artisan Frame", ItemType.BLACKSMITH, {
  items: [
    { item: steelMold, q: 1 },
    { item: vop, q: 5 },
    { item: an, q: 10 },
  ],
  r: 1,
});
export const warMold = new Item("Warsmith Mold", ItemType.BLACKSMITH, {
  items: [
    { item: artFrame, q: 1 },
    { item: er, q: 5 },
    { item: mh, q: 10 },
  ],
  r: 1,
});
export const maestroMold = new Item("Maestro Mold", ItemType.BLACKSMITH, {
  items: [
    { item: blackFrame, q: 1 },
    { item: af, q: 5 },
    { item: mg, q: 10 },
  ],
  r: 1,
});

// Weapon Parts
export const amh = new Item("Arcana Mace Head", ItemType.WEAPON_PARTS);

// Weapons
export const ArcanaMace = new Item("Arcana Mace", ItemType.WEAPON, {
  items: [
    { item: warholder, q: 4 },
    { item: amh, q: 17 },
    { item: gs, q: 43 },
    { item: hgs, q: 77 },
    { item: er, q: 77 },
    { item: sck, q: 154 },
    { item: mitalloy, q: 154 },
    { item: sx, q: 211 },
    { item: dmp, q: 308 },
  ],
  r: 1,
});

// Jewelry Parts
export const ttNeckChain = new Item(
  "Tateossian Necklace Chain",
  ItemType.JEWELRY_PARTS
);
export const ttRingGem = new Item(
  "Tateossian Ring Gem",
  ItemType.JEWELRY_PARTS
);
export const ttEarPart = new Item(
  "Tateossian Earring Part",
  ItemType.JEWELRY_PARTS
);

// Jewelry
export const TTSNecklace = new Item("Tateossian's Necklace", ItemType.JEWELRY, {
  items: [
    { item: warMold, q: 1 },
    { item: gs, q: 4 },
    { item: ttNeckChain, q: 17 },
    { item: sx, q: 24 },
    { item: ton, q: 32 },
    { item: vop, q: 96 },
    { item: mf, q: 160 },
  ],
  r: 1,
});
export const TTSRing = new Item("Tateossian's Ring", ItemType.JEWELRY, {
  items: [
    { item: maestroMold, q: 1 },
    { item: ttRingGem, q: 17 },
    { item: gs, q: 2 },
    { item: sx, q: 12 },
    { item: ton, q: 17 },
    { item: vop, q: 51 },
    { item: mf, q: 85 },
  ],
  r: 1,
});
export const TTSEar = new Item("Tateossian's Earring", ItemType.JEWELRY, {
  items: [
    { item: warMold, q: 1 },
    { item: ttEarPart, q: 17 },
    { item: gs, q: 3 },
    { item: sx, q: 18 },
    { item: ton, q: 21 },
    { item: vop, q: 63 },
    { item: mf, q: 105 },
  ],
  r: 1,
});
