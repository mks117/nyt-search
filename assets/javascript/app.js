// 6be1a80129c5428a8986b72877df08e9

//url: https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$('.searchBtn').on('click', function(){
	var searchTerm = $('#searchTerm').val();
	var numberOfRecords = $('#retrieveRecords').val();
	var startYear = $('#startYear').val();
	var endYear = $('#endYear').val();
	
	console.log("searchTerm:" + searchTerm);
	console.log("numbRecords" + numberOfRecords);
	console.log("startYear: " + startYear);
	console.log("endYear: " + endYear);

	queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6be1a80129c5428a8986b72877df08e9" + "&q=" + searchTerm;

	if(startYear.length > 0){
		queryUrl += "&begin_date=" + startYear + "0101";
	}
	if(endYear.length > 0) {
		queryUrl += "&end_date=" + endYear + "1230";
	}

	
	$.ajax({
	  url: queryUrl,
	  method: 'GET',
	}).done(function(result) {
	  
	  var results = result.response.docs;

	  console.log(results);
	  
	  for (var i=0; i<numberOfRecords; i++){

	  	var title = results[i].headline.main;
	  	var section = results[i].section_name;
	  	var date = results[i].pub_date;
	  	var link = results[i].web_url;

	  	var articleCounter = (i+1);


	  	$('#topArticles').append(

	  		'<div class="articleDiv">' + 
	  			'<h2>' + articleCounter + ": " + title + "</h2>" + 
	  			'<p>Section: ' + section + '</p>' + 
	  			'<p>Date: ' + date + '</p>' +
	  			'<a href=' + link + '> Article Link' + '</a>' + 
	  		'</div>'
	  	)
	  }

	  // console.log(title);

	}).fail(function(err) {
	  throw err;
	});



});

