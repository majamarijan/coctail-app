export const urls = {
  coctails: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
  search: {
    byName: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    byIngredient: "www.thecocktaildb.com/api/json/v1/1/search.php?i=",
  },
  list: {
    ingredients: 'www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
    categories: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    glasses: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list',
    alcoholic: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list',
  },
  filter: {
    byType: {alcoholic: 'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic', nonAlcoholic: 'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'},
    byIngredient: 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
    byCategory: {ordinary: 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink', coctail: 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'},
    byGlass: {coctail: 'www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', flute: 'www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute'}
  },

} 