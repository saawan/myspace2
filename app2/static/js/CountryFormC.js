/* globals app2 */

(function() {

  app2.CountryFormC = Trillo.inherits(Trillo.Controller, function(viewSpec) {
    Trillo.Controller.call(this, viewSpec);
  });

  var CountryFormC = app2.CountryFormC.prototype;
  var Controller = Trillo.Controller.prototype;

  CountryFormC.handleAction = function(actionName, selectedObj, $e, targetController) {
    if (actionName === "ok") {
      this.doSubmitForm(selectedObj);
      return true;
    }
    return Controller.handleAction.call(this, actionName, selectedObj);
  };

  CountryFormC.doSubmitForm = function(selectedObj) {
    var postData = Trillo.stringify(this.getData());
    console.log("Will post 2: " + postData);
    /*
    $.ajax({
      url : "replace by url of API, which handles post",
      type : 'post',
      data : postData,
      contentType : "application/json"
    }).done(function() {
      // normally we will call framework API to display a message to the user.
      console.log("Form submitted successfully")
    });
    */
  }
})();