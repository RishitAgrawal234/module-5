var allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";

function buildAndShowHomeHTML (categories) {

  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (homeHtml) {

      var chosenCategoryShortName = chooseRandomCategory(categories).short_name;

      var homeHtmlToInsertIntoMain = insertProperty(homeHtml, 
                                                    "randomCategoryShortName", 
                                                    "'" + chosenCategoryShortName + "'");

      insertHtml("#main-content", homeHtmlToInsertIntoMain);
    },
    false);
  }
function chooseRandomCategory (categories) {
  var randomArrayIndex = Math.floor(Math.random() * categories.length);
  return categories[randomArrayIndex];
}
