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
  [basic.an.name]: 217,
  [basic.ab.name]: 832,
  [basic.ans.name]: 6892,
  [basic.amh.name]: 12,
  [basic.af.name]: 145,
  [basic.bh.name]: 288,
  [basic.ch.name]: 4103,
  [co.name]: 2483,
  [basic.cbp.name]: 328,
  [ck.name]: 303,
  // compound braid ??
  [basic.cor.name]: 401,
  [basic.dmp.name]: 168,
  // crafted leather
  [basic.er.name]: 245,
  [basic.hgs.name]: 171,
  // leather
  [basic.io.name]: 2404,
  [basic.mf.name]: 3442,
  [basic.mt.name]: 1741,
  [mo.name]: 4,
  // mold
  [mg.name]: 61,
  [mh.name]: 201,
  [ml.name]: 63,
  [basic.oo.name]: 12,
  [basic.sn.name]: 3153,
  [basic.st.name]: 36,
  [basic.stt.name]: 3496,
  [basic.sop.name]: 38,
  [basic.su.name]: 2685,
  [basic.ton.name]: 569,
  [basic.tr.name]: 16096,
  [basic.va.name]: 660,

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

needThisAmount(basic.dmp, 757, haveMats);

// process.exit(0);
// needThisAmount(basic.dmp, 924);
// needThisAmount(fangs.sckFang, 462);
// needThisAmount(fangs.mitalloyFang, 462);
// needThisAmount(fangs.dmpFang, 924);

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
