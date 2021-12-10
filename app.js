// дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

// санхүүгийн К
var financeController = (function () {})();

//Холбогч К
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. oruulah ugugdliig delgetsees olj avna.
    console.log("object");
    // 2.olj avsan ugugdulvvdee sanhvvgiin controllert damjuulj tend hadgalna.
    // 3. olj avsan ugugdulvvdee web deeree tohiroh hesegt n gargana.
    // 4. tusviig tootsoolno.
    // 5. etsesiin vldegdel, tootsoog delgetsend gargana.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
