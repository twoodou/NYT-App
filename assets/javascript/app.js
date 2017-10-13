var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0e4ddb67392042e983e2d8c5cb1a2653",
  'q': "california",
  'begin_date': "20001112",
  'end_date': "20081112"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
