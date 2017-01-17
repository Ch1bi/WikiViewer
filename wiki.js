//for use with the Wikipedia api

var searchText = document.getElementById("search");
var submit = document.getElementById("submit");

//if event listener supported...
if(submit.addEventListener){
    
    //add eventlistener
    submit.addEventListener("click", searchWiki, false);   
}

function searchWiki(){
    
let topic = searchText.value;
var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search="+topic+ "&format=json&callback=?";
    
    
// Use request as first parameter to fetch method
var req = new Request(url, {method: 'GET', cache: 'reload', credentials:"same-origin", mode: "cors", headers: {
      'Api-User-Agent': 'Example/1.0'
    },});
fetch(req).then(function(response) {
  console.log(response);
});
}

