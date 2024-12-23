import { needThisAmount } from "./helper/calc";
import { blacksmith } from "./database/items";

// 1760xp
// 2000xp
// 400k

const totalXp = 354000;
const totalSpear = Math.floor(totalXp / 1760);
const totalPickaxe = Math.floor(totalXp / 2000);

// needThisAmount(blacksmith.noviceSpear, 202);

// needThisAmount(blacksmith.wroughtIronPickaxe, 10);

needThisAmount(blacksmith.wroughtIronBar, 10);
