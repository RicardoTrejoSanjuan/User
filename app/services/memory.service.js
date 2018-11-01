'use strict';

angular.module("app").service("memory", function ($log) {
  var self = this;

  // MC
  self.memoryClear = function () {
    localStorage.removeItem("memoryCal");
    localStorage.setItem("memoryCal", 0);
  }

  // M+
  self.memoryAdd = function (number) {
    localStorage.memoryCal = parseFloat(localStorage.memoryCal) + number;
  }

  // M-
  self.memorySubtractions = function (number) {
    localStorage.memoryCal = parseFloat(localStorage.memoryCal) - number;
  }

  // MS
  self.memoryStorage = function (number) {
    localStorage.setItem("memoryCal", number);
  }

  // MR    
  self.memoryRecall = function () {
    return localStorage.getItem("memoryCal") === null ? 0 : localStorage.getItem("memoryCal");
  }
});