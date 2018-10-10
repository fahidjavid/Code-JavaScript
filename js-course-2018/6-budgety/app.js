
// BUDGET CONTROLLER
var budgetController = (function(){

    // write code

})();



// UI CONTROLLER
var UIController = (function () {

    // write code

});


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

     document.querySelector( '.add__btn').addEventListener('click', function () {
         console.log('Button was clicked.');
     })

})(budgetController, UIController);