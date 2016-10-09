$(function() {

  $('.student-dropdown').change(getStudentTimetable);

  $.get(' https://crystal-pepsi.herokuapp.com/students', addStudentsToList);

  function addStudentsToList(students) {
    for (index in students) {
      $('.student-dropdown').append($('<option>', {value: students[index], text: students[index]}));
    }

    getStudentTimetable();
  }

  function processTimetable(timetable) {
    console.log(timetable);
  }

  function getStudentTimetable() {
    var student = $( '.student-dropdown option:selected').val();
    var studentUrl = 'https://crystal-pepsi.herokuapp.com/students/:student_name/meetings'
      .replace(':student_name', student);

    $.get(studentUrl, processTimetable);
  }
});