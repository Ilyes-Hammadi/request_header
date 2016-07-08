/**
 * Created by ilyes on 7/8/16.
 */
$(document).ready(() => {
  $.get('/api/whoami/', (data) => {
    $('#result').append('<p><span>Software: </span>' + data.software + '</p>');
    $('#result').append('<p><span>IP: </span>' + data.ipaddress + '</p>');
    $('#result').append('<p><span>Language: </span>' + data.language + '</p>');
  })
});
