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
  [basic.an.name]: 217, // Adamantite Nugget
  [basic.ab.name]: 2090, // Animal Bone
  [basic.ans.name]: 7912, // Animal Skin
  [basic.amh.name]: 12, // Arcana Mace Head
  [basic.af.name]: 163, // Asofe
  [basic.bh.name]: 362, // Braided Hemp
  [basic.ch.name]: 4353, // Charcoal
  [co.name]: 2645, // Coal
  [basic.cbp.name]: 432, // Coarse Bone Powder
  [ck.name]: 303, // Cokes
  // compound braid ??
  [basic.cor.name]: 481, // Cord
  [basic.dmp.name]: 175, // Durable Metal Plate
  // crafted leather
  [basic.er.name]: 248, // Enria
  [basic.hgs.name]: 186, // High Grade Suede
  // leather
  [basic.io.name]: 2887, // Iron Ore
  [basic.mf.name]: 3463, // Metallic Fiber
  [basic.mt.name]: 1741, // Metallic Thread
  [mo.name]: 14, // Mithril Ore
  // mold
  [mg.name]: 67, // Mold Glue
  [mh.name]: 206, // Mold Hardener
  [ml.name]: 63, // Mold Lubricant
  [basic.oo.name]: 14, // Oriharukon Ore
  [basic.sn.name]: 3227, // Silver Nugget
  [basic.st.name]: 49, // Steel
  [basic.stt.name]: 4131, // Stem
  [basic.sop.name]: 90, // Stone of Purity
  [basic.su.name]: 2757, // Suede
  [basic.ton.name]: 569, // Tons
  [basic.tr.name]: 16341, // Thread
  [basic.va.name]: 690, // Varnish

  [warholder.name]: 4,
  [vop.name]: 674,

  // buy
  [basic.ttRingGem.name]: 102, // 40k
  [basic.ttNeckChain.name]: 51, // 40k
  [basic.ttEarPart.name]: 102, // 40k

  // fangs
  // [sck.name]: 462,
  // [mitalloy.name]: 462,
};

// ## Arcana Mace x3
// --------------------------------------
// Recipe                1  | 3   | 1 (Pegar no NPC)
// Warsmith Holder      4   | 12  | 0
// Arcana Mace Head     17  | 51  | 12
// Gemstone S           43  | 129 | 0
// High Grade Suede     77  | 231 | 0
// Enria                77  | 231 | 0
// Synthetic Cokes      154 | 462 | 0
// Mithril Alloy        154 | 462 | 0
// Crystal S            211 | 633 | 0
// Durable Metal Plate  308 | 924 | 175
// --------------------------------------

// ## Tateossian Necklace x3
// ----------------------------------------
// Recipe                     1 | 3   | 1
// Warsmith Mold              1 | 3   | 0
// Gemstone S                 4 | 12  | 0
// Tateossian Necklace Chain 17 | 51  | 0
// Crystal S                 24 | 72  | 0
// Thons                     32 | 96  | 0
// Varnish of Purity         96 | 288 | 0
// Metallic Fiber           160 | 480 | 0
// ----------------------------------------

// ## Tateossian Earring x3
// ---------------------------------------
// Recipe                    1 | 6   | 6 - OK
// Warsmith Mold             1 | 3   | 0
// Tateossian Earring Part  17 | 51  | 0
// Gemstone S                3 | 9   | 0
// Crystal S                18 | 54  | 0
// Thons                    21 | 63  | 0
// Varnish of Purity        63 | 189 | 0
// Metallic Fiber          105 | 315 | 0
// ---------------------------------------

// ## Tateossian Ring x3
// ------------------------------------
// Recipe                  1 | 6   | 3
// Maestro Mold            1 | 3   | 0
// Tateossian Ring Gem    17 | 51  | 0
// Gemstone S              2 | 6   | 0
// Crystal S              12 | 36  | 0
// Thons                  17 | 51  | 0
// Varnish of Purity      51 | 153 | 0
// Metallic Fiber         85 | 255 | 0
// ------------------------------------

// console.log("---------------------------------");
// console.log(getRecipeList(basic.ArcanaMace.recipe));
// console.log(getRecipeList(basic.TTSNecklace.recipe));
// console.log(getRecipeList(basic.TTSEar.recipe));
// console.log(getRecipeList(basic.TTSRing.recipe));
// console.log("---------------------------------");

craftAMsAndTTs();

// needThisAmount(basic.dmp, 757, haveMats);

// process.exit(0);
// needThisAmount(basic.dmp, 924);
needThisAmount(fangs.sckFang, 462);
needThisAmount(fangs.mitalloyFang, 462);
needThisAmount(fangs.dmpFang, 924);

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

  console.log("# Remaining Mats");
  console.log(r3);

  console.log("# Total Mats needed");
  // console.log(totalMats);

  const basicMats: { [name: string]: number } = {};
  const craftedMats: { [name: string]: number } = {};
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
        } else if (ba.type === "blacksmith") {
          blacksmithMats[ba.name] = totalMats[mat];
        } else {
          otherMats[ba.name] = totalMats[mat];
        }
      }
    });
  }

  console.log("## Basic Mats");
  console.log(basicMats);

  console.log("## Crafted Mats");
  console.log(craftedMats);

  console.log("## Blacksmith Mats");
  console.log(blacksmithMats);

  console.log("## Other Mats");
  console.log(otherMats);
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
