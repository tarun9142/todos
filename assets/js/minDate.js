
// to set the current date as minimum value of due date 

var currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = currentDate.getFullYear();

currentDate = yyyy + '-' + mm + '-' + dd;

var inputDate = document.querySelector('input[type=date]');
inputDate.setAttribute('min',currentDate);