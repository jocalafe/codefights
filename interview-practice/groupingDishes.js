
//You have a list of dishes. Each dish is associated with a list of ingredients used to prepare it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

//Return an array where each element is a list with the first element equal to the name of the ingredient and all of the other elements equal to the names of dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically. The result array should be sorted lexicographically by the names of the ingredients in its elements.

function groupingDishes(dishes) {
  var ingredients = {};
  var groupedDishes = [];
  var i, j;
  for (i = 0; i < dishes.length; i++) {
    for (j = 1; j < dishes[i].length; j++) {
      if (!ingredients[dishes[i][j]]) {
        ingredients[dishes[i][j]] = [dishes[i][0]];
      } else {
        ingredients[dishes[i][j]].push(dishes[i][0]);
        ingredients[dishes[i][j]].sort();
      }
    }
  }
  Object.keys(ingredients).sort().forEach(key => {
    if(ingredients[key].length > 1) {
      groupedDishes.push([]);
      groupedDishes[groupedDishes.length-1].push(key);
      groupedDishes[groupedDishes.length-1] = groupedDishes[groupedDishes.length-1].concat(ingredients[key]);
    }
  });
  return groupedDishes;
}
