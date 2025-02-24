import { Item } from "../classes/item.class";

type HaveMats = {
  [name: Item["name"]]: number;
};

export function needThisAmount(
  item: Item,
  amount: number,
  haveMats?: HaveMats
) {
  let matsNeeded: { [key: string]: number } = {};
  let remainingMats = { ...haveMats };

  function calculate(calcItem: Item, calcAmount: number) {
    if (
      calcItem.recipe &&
      calcItem.recipe.items.length > 0 &&
      calcItem.recipe.r > 0
    ) {
      // if (haveMats && haveMats[calcItem.name]) {
      //   const diff = haveMats[calcItem.name] - calcAmount;
      //   if (diff >= 0) {
      //     haveMats[calcItem.name] = diff;
      //     return;
      //   } else {
      //     calcAmount = Math.abs(diff);
      //     haveMats[calcItem.name] = 0;
      //   }
      // }

      const multiplier = Math.ceil(calcAmount / calcItem.recipe.r);

      for (const recipeItem of calcItem.recipe.items) {
        let totalNeeded = recipeItem.q * multiplier;

        if (remainingMats && remainingMats[recipeItem.item.name]) {
          const diff = remainingMats[recipeItem.item.name] - totalNeeded;
          if (diff >= 0) {
            remainingMats[recipeItem.item.name] = diff;
            continue;
          } else {
            totalNeeded = Math.abs(diff);
            remainingMats[recipeItem.item.name] = 0;
          }
        }

        const matsIndex = `${recipeItem.item.type}.${recipeItem.item.name}`;
        matsNeeded[matsIndex] = matsNeeded[matsIndex]
          ? matsNeeded[matsIndex] + totalNeeded
          : totalNeeded;

        calculate(recipeItem.item, totalNeeded);
      }
    }
  }

  calculate(item, amount);
  console.log(`# Mats needed for - ${amount}x ${item.name}(s)`);

  const sortedMats: { [name: string]: number } = {};

  Object.keys(matsNeeded).forEach((mat) => {
    const type = mat.split(".")[0];
    const name = mat.split(".")[1];
    sortedMats[name] = matsNeeded[mat];
  });
  console.log(sortedMats);

  return { remainingMats, sortedMats, matsNeeded };
}
