// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function disableButton() {
  var button  = document.getElementsByClassName("actions");
  button.lastElementChild.disabled = 'true';
};

function hideRow() {
  var row = document.getElementsByClassName("row");
  row[row.length - 1].style.visibility = "hidden";
};

function showLastRow() {
  var row = document.getElementsByClassName("row");
  var lastRow = row[row.length - 1].cloneNode(true);
  row.appendChild(lastRow);
};

// function showLastRow() {
//   var row = document.getElementsByClassName("row");
//   row[row.length - 1].style.visibility = "block";
// };

function deleteRow () {
  var deleteGrade = document.getElementsByClassName("row");
};

function smoothScrolling () {

};

window.onload=hideRow;
