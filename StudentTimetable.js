$(function() {
  $.get('https://crystal-pepsi.herokuapp.com/students', addStudents);
  $('.student-dropdown').change(getStudentTimetable);

  function addStudents(students) {
    for (var index in students) {
      $('.student-dropdown').append($('<option>', {value: students[index], text: students[index]}));
    }

    getStudentTimetable();
  }

  function getStudentTimetable() {
    var student = $( '.student-dropdown option:selected').text();
    var studentUrl = 'https://crystal-pepsi.herokuapp.com/students/:student_name/meetings'
      .replace(':student_name', student);

    $.get(studentUrl, processTimetable);
  }

  function processTimetable(meetings) {
    var instructionalMeetings = [];

    for (var index in meetings) {
      var tags = meetings[index].tags;
      if (tags.indexOf('instructional') > -1) {
        instructionalMeetings.push(meetings[index]);
      }
    }

    var percentage = getTotalDuration(instructionalMeetings)/getTotalDuration(meetings) * 100;
    $('.duration-text').text(percentage);
  }

  function getTotalDuration(meetings) {
    var duration = 0;
    for (var index in meetings) {
       duration += meetings[index].duration;
    }

    return duration;
  }
});