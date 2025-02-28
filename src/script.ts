import { Item } from "./classes/item.class";
import { basic, fangs } from "./database/items";
import {
  ab,
  an,
  cbp,
  ck,
  co,
  mg,
  mh,
  mitalloy,
  ml,
  mo,
  sck,
  vop,
  warholder,
} from "./database/items/basic";
import { needThisAmount } from "./helper/calc";

let haveMats = {
  [basic.an.name]: 224, // Adamantite Nugget
  [basic.ab.name]: 3474, // Animal Bone
  [basic.ans.name]: 10025, // Animal Skin
  [basic.amh.name]: 53, // Arcana Mace Head
  [basic.af.name]: 276, // Asofe
  [basic.bh.name]: 431, // Braided Hemp
  [basic.ch.name]: 2159, // Charcoal
  [co.name]: 179, // Coal
  [basic.cbp.name]: 1559, // Coarse Bone Powder
  [ck.name]: 1203, // Cokes
  // compound braid ??
  [basic.cor.name]: 592, // Cord
  [basic.dmp.name]: 239, // Durable Metal Plate
  // crafted leather
  [basic.er.name]: 260, // Enria
  [basic.hgs.name]: 239, // High Grade Suede
  // leather
  [basic.io.name]: 624, // Iron Ore
  [basic.mf.name]: 3830, // Metallic Fiber
  [basic.mt.name]: 2120, // Metallic Thread

  [basic.mitalloy.name]: 401, // Mithril Alloy
  [mo.name]: 16, // Mithril Ore
  // mold
  [mg.name]: 0, // Mold Glue
  [mh.name]: 81, // Mold Hardener
  [ml.name]: 0, // Mold Lubricant
  [basic.oo.name]: 88, // Oriharukon Ore

  [basic.silverMold.name]: 2, // Silver Mold

  [basic.sn.name]: 3561, // Silver Nugget
  [basic.st.name]: 16, // Steel

  [basic.steelMold.name]: 8, // Steel Mold

  [basic.stt.name]: 5580, // Stem
  [basic.sop.name]: 392, // Stone of Purity
  [basic.su.name]: 3385, // Suede

  [basic.sck.name]: 65, // Synthetic Cokes

  [basic.ton.name]: 585, // Tons
  [basic.tr.name]: 11781, // Thread
  [basic.va.name]: 6912, // Varnish
  [vop.name]: 594, // Varnish of Purity
  [warholder.name]: 12,

  // buy
  [basic.ttRingGem.name]: 102, // 40k
  [basic.ttNeckChain.name]: 51, // 40k
  [basic.ttEarPart.name]: 102, // 40k

  // fangs
  // [sck.name]: 462,
  // [mitalloy.name]: 462,
};

// ## All - Unity / 3x / Farmed
// --------------------------------------
// | 3   | 2    - Recipe AM
// | 3   | 1    - Recipe Neck
// | 6   | 6    x- Recipe Ear
// | 6   | 3    - Recipe Ring
// | 12  | 12   x- Warsmith Holder
// | 6   | 0    - Warsmith Mold
// | 3   | 0    - Maestro Mold
// | 51  | 51   x- Arcana Mace Head
// | 51  | 51   x- Tateossian Necklace Chain
// | 51  | 51   x- Tateossian Earring Part
// | 51  | 51   x- Tateossian Ring Gem
// | 156 | 54   x- Gemstone S (100k AA , 10,2kk)
// | 231 | 231  x- High Grade Suede
// | 231 | 231  x- Enria
// | 210 | 210  x- Thons
// | 462 | 65   - Synthetic Cokes
// | 462 | 401  - Mithril Alloy
// | 795 | 0    - Crystal S
// | 924 | 175  - Durable Metal Plate
// | 630 | 0    - Varnish of Purity
// | 1050| 1050 x- Metallic Fiber
// --------------------------------------

// 349 oriharukon ore

// console.log("---------------------------------");
// console.log(getRecipeList(basic.ArcanaMace.recipe));
// console.log(getRecipeList(basic.TTSNecklace.recipe));
// console.log(getRecipeList(basic.TTSEar.recipe));
// console.log(getRecipeList(basic.TTSRing.recipe));
// console.log("---------------------------------");

// needThisAmount(basic.maeholder, 16, haveMats);

craftAMsAndTTs();

// needThisAmount(basic.dmp, 757, haveMats);

// process.exit(0);
// needThisAmount(basic.dmp, 924);
needThisAmount(fangs.sckFang, 397);
needThisAmount(fangs.mitalloyFang, 61);
// needThisAmount(fangs.dmpFang, 924);

// 5764 + 2937 = 8701

// console.log(totalMats);

// needThisAmount(basic.dmp, 301);
// needThisAmount(basic.TTSEar, 6);
// needThisAmount(basic.TTSRing, 6);

// 488 ring
// 732 ear
// 975 neck
// 3,415,000 AA

// 633 * 100,000 = 63,300,000 (crystal S)

// console.log(488000 * 2 + 732000 * 2 + 975000);

function craftAMsAndTTs() {
  const { remainingMats: rAM, sortedMats: sAM } = needThisAmount(
    basic.ArcanaMace,
    3,
    haveMats
  );

  const { remainingMats: r1, sortedMats: s1 } = needThisAmount(
    basic.TTSNecklace,
    3,
    rAM
  );
  const { remainingMats: r2, sortedMats: s2 } = needThisAmount(
    basic.TTSEar,
    6,
    r1
  );
  const { remainingMats: r3, sortedMats: s3 } = needThisAmount(
    basic.TTSRing,
    6,
    r2
  );

  const totalMats: { [name: string]: number } = {};

  Object.keys(sAM).forEach((mat) => {
    const q = sAM[mat];
    totalMats[mat] = totalMats[mat] ? totalMats[mat] + q : q;
  });
  Object.keys(s1).forEach((mat) => {
    const q = s1[mat];
    totalMats[mat] = totalMats[mat] ? totalMats[mat] + q : q;
  });
  Object.keys(s2).forEach((mat) => {
    const q = s2[mat];
    totalMats[mat] = totalMats[mat] ? totalMats[mat] + q : q;
  });
  Object.keys(s3).forEach((mat) => {
    const q = s3[mat];
    totalMats[mat] = totalMats[mat] ? totalMats[mat] + q : q;
  });

  // console.log("# Remaining Mats");
  // console.log(r3);

  console.log("# Total Mats needed");
  // console.log(totalMats);

  const basicMats: { [name: string]: number } = {};
  const craftedMats: { [name: string]: number } = {};
  const craftedMatsAdv: {
    [name: string]: {
      name: string;
      q: number;
      recipe?: {
        name: string;
        q: number;
      }[];
    };
  } = {};
  const otherMats: { [name: string]: number } = {};
  const blacksmithMats: { [name: string]: number } = {};

  const basicArray = Object.values(basic);

  for (let ba of basicArray) {
    Object.keys(totalMats).forEach((mat: string) => {
      if (ba.name === mat) {
        if (ba.type === "mats") {
          basicMats[ba.name] = totalMats[mat];
        } else if (ba.type === "crafted_mats") {
          craftedMats[ba.name] = totalMats[mat];
          craftedMatsAdv[ba.name] = {
            name: ba.name,
            q: totalMats[mat],
            // recipe: [],
          };

          // console.log(ba.name);

          if (ba.recipe) {
            const [item, r] = Object.values(ba.recipe);

            let recipe: { name: string; q: number }[] = [];

            for (let i of item) {
              const { item, q } = i;
              recipe.push({ name: item.name, q: q * totalMats[mat] });
            }

            craftedMatsAdv[ba.name].recipe = recipe;

            // console.log("\n");
            // console.log(totalMats[mat]);
          }
        } else if (ba.type === "blacksmith") {
          blacksmithMats[ba.name] = totalMats[mat];
        } else {
          otherMats[ba.name] = totalMats[mat];
        }
      }
    });
  }
  function logAll() {
    console.log("## Basic Mats");
    console.log(basicMats);

    console.log("## Crafted Mats");
    console.log(craftedMats);

    Object.keys(craftedMatsAdv).forEach((cm) => {
      console.log(`${cm} - ${craftedMatsAdv[cm].q}`);

      if (craftedMatsAdv[cm].recipe) {
        craftedMatsAdv[cm].recipe.map((r) => {
          // console.log(Object.values(r));

          console.log(`-- ${r.name} - ${r.q} (${haveMats[r.name]})`);
        });
      }
    });

    console.log("## Blacksmith Mats");
    console.log(blacksmithMats);

    console.log("## Other Mats");
    console.log(otherMats);
  }

  logAll();
}

function getRecipeList(recipe: Item["recipe"]): string {
  if (!recipe) {
    return "";
  }
  let recipeList = "";

  if (recipe.items) {
    recipeList = recipe.items
      .map((r) => `${r.item.name} ${r.q} | ${r.q * 3} | 0`)
      .join("\n");
  }
  return recipeList;
}
