$(function() {
function addStudentsToList(students) {
  alert(students);
}

$.get(' https://crystal-pepsi.herokuapp.com/students', addStudentsToList);
});