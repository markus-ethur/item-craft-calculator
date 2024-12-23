import { Item } from "../classes/item.class";

export function needThisAmount(item: Item, amount: number) {
  let matsNeeded: { [key: string]: number } = {};

  function calculate(calcItem: Item, calcAmount: number) {
    if (
      calcItem.recipe &&
      calcItem.recipe.items.length > 0 &&
      calcItem.recipe.r > 0
    ) {
      const multiplier = Math.ceil(calcAmount / calcItem.recipe.r);

      for (const recipeItem of calcItem.recipe.items) {
        const totalNeeded = recipeItem.q * multiplier;

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

  const sortedMats: {
    [type: string]: {
      [name: string]: number;
    };
  } = {};

  Object.keys(matsNeeded).forEach((mat) => {
    const type = mat.split(".")[0];
    const name = mat.split(".")[1];

    sortedMats[type] = {
      ...sortedMats[type],
      [name]: matsNeeded[mat],
    };
  });

  console.log(sortedMats);
}
