function peopleWithAgeDrink(old) {
   if (old < 14) {
      return "drink toddy";
   } else if (old >= 14 && old < 18) {
      return "drink coke";
   } else if (old >= 18 && old < 21) {
      return "drink beer";
   } else {
      return "drink whisky";
   }
};

/**
 * const peopleWithAgeDrink = (age) =>
 *   age < 14 ? "drink toddy" :
 *   age < 18 ? "drink coke" :
 *   age < 21 ? "drink beer" : "drink whisky"
 */
