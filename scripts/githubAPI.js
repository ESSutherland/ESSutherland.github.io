function callAPI(){

$('#repos').html('<div id="loader"><img src="images/load.gif" alt="loading..."></div>');

var username = "ESSutherland"
var requri   = 'https://api.github.com/users/'+username;
var repouri  = 'https://api.github.com/users/'+username+'/starred';

requestJSON(requri, function(json) {
  if(json.message == "Not Found" || username == '') {
    $('#repos').html("<h2>No User Info Found</h2>");
  }

  else {
    var outhtml = '<h2>Repositories</h2>';
    var repositories;
    $.getJSON(repouri, function(json){
      repositories = json;
      outputPageContent();
    });

    function outputPageContent() {
      if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p>'; }
      else {
        $.each(repositories, function(index) {
          outhtml = outhtml + '<div class="repodiv"><p class="label"><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</p></a>';

          if(repositories[index].description != null){
            outhtml = outhtml + '<p class="desc"><strong>Description</strong>: '+repositories[index].description+'</p>';
          }
          else{
            outhtml = outhtml + '<p class="desc"><strong>Description</strong>: None </p>';
          }
          outhtml = outhtml + '<p class="lang"><strong>Language</strong>: '+repositories[index].language+'</p>'
          outhtml = outhtml + '</div>';
        });
        outhtml = outhtml + '<div class="resetfloat"></div>';
      }
      $('#repos').html(outhtml);
    }
  }
});
}

function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}
