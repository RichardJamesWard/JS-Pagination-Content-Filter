// List to be paginated stored in StudentList variable
var StudentList = $('.student-item');

// Generate an array of students for each page 
var pages = (function() {
	StudentList.slice();
	var pagesArray = [];
	while (StudentList.length) {
		// Each page is Limited to a 10 student maximum
		pagesArray.push(StudentList.splice(0,10));
		}
	return pagesArray;
}());


// Append buttons to page  
var appendButtons = (function() {
	$('.page').append('<div class="pagination"><ul></ul></div>');
	// Number of pages to show is determined from the pageList length.
	for (var i = 1; i <=  pages.length; i++) {
		$('.pagination ul').append('<li><a href="#">' + i + '</a></li>');
		}
}());


// The Show page function 
function showPage(pageNumber, pageList) {
  // When page is first loaded, hide all students on the page
  $(".student-list li").hide(); 
  // ...then show students on first page
  $(pageList[pageNumber]).show();
  // When button is clicked...
  $(".pagination ul li a").click(function() {
  	// ...first hide all students on the page
  	$(".student-list li").hide(); 
  	// ...then display page that corresponds to that button (the button's HTML content -1 gives the correct index value)
  	$(pageList[this.innerHTML-1]).show();
  	});
 };

// Execute showPages function
showPage(0, pages);