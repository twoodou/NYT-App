$(".search").on("click", function(event) {		//When you click dat search button
  event.preventDefault();

  var term = $(".termField").val();       //This takes whatevers in the term fieldbox
  var num = $(".numField").val();       //This takes whatevers in the number of records fieldbox
  var startYear = $(".startYearField").val() + "0101";       //This takes whatevers in the start year fieldbox
  var endYear = $(".endYearField").val() + "0101";       //This takes whatevers in the end year fieldbox

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "0e4ddb67392042e983e2d8c5cb1a2653",
    'q': term,
    'begin_date': startYear,
    'end_date': endYear
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    
    for(var i = 0; i < num; i++){
      console.log(result);
      $(".articles").append("Title: " + result.response.docs[i].headline.main+ "<br>");   //change 0 to i when we put into a for loop
      $(".articles").append("Author: " +result.response.docs[i].source + "<br>");   //change 0 to i when we put into a for loop
      $(".articles").append("Section: " + result.response.docs[i].headline.kicker+ "<br>");   //change 0 to i when we put into a for loop
      $(".articles").append("Date: " + result.response.docs[i].pub_date + "<br>");
      $(".articles").append("Link: " + result.response.docs[i].web_url + "<br>");
  }
    


  }).fail(function(err) {
    throw err;
  });
  /*
	console.log(term);	//testing if the variable are saving correctly 
	console.log(num);	 
	console.log(startYear);	//REPLACE this with 
	console.log(endYear);	//REPLACE this with 
  */
});


