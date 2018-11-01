'use strict';

angular.module("app").service("operator", function () {
  var self = this;

  self.resolveOperation = function (text) {
    var returnResult = false;
    text = self.removed(text);
    try {
      returnResult = eval(text);
    }
    catch {
      alert("Sintaxis error.")
      returnResult = false;
    }
    finally {
      return returnResult;
    }
  }

  self.removed = function (text) {
    if (text.charAt(0) == '0') {
      text = text.substring(1);
      return self.removed(text);
    } else {
      return text;
    }
  }
});