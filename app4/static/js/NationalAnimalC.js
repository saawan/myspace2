/* globals app4 */

(function() {

  app4.NationalAnimalC = Trillo.inherits(Trillo.Controller, function(viewSpec) {
    Trillo.Controller.call(this, viewSpec);
  });

  var NationalAnimalC = app4.NationalAnimalC.prototype;
  var Controller = Trillo.Controller.prototype;

  NationalAnimalC.handleAction = function(actionName, selectedObj, $e, targetController) {
    if (actionName === "edit") {
      this.showForm(selectedObj);
      return true;
    }
    return Controller.handleAction.call(this, actionName, selectedObj);
  };
  
  NationalAnimalC.showForm = function showForm(selectedObj) {
    this.showView({
      name : "CountryForm",
      container : 'trillo-dialog2-container',
      data : selectedObj
    });
  };
})();
