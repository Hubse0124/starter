// дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description ",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// санхүүгийн К
var financeController = (function () {
  // private data
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // private
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // private
  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
  return {
    addItem: function (type, desc, val) {
      console.log("added");
    },
  };
})();

//Холбогч К
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. oruulah ugugdliig delgetsees olj avna.
    var input = uiController.getInput();
    // console.log(input);
    // 2.olj avsan ugugdulvvdee sanhvvgiin controllert damjuulj tend hadgalna.
    financeController.addItem(input.type, input.description, input.value);
    // 3. olj avsan ugugdulvvdee web deeree tohiroh hesegt n gargana.
    // 4. tusviig tootsoolno.
    // 5. etsesiin vldegdel, tootsoog delgetsend gargana.
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("application started");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
