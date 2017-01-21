//for use with the Wikipedia api

var searchText = document.getElementById("search");
var submit = document.getElementById("submit");
var xRequest;
var appendData = document.getElementById("data");

//if event listener supported...
if(submit.addEventListener){
    
    //add eventlistener
    submit.addEventListener("click", searchWiki, false);   
}

function searchWiki(){
    
var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + searchText.value + "&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&origin=*";
    
xRequest = new XMLHttpRequest();
xRequest.onreadystatechange = function(){

if(xRequest.readyState == 4 && xRequest.status == 200){
            
        var data = xRequest.responseText;
        //console.log(data);
    
        var json = JSON.parse(data);
        console.log(json);
      
}
}
xRequest.open("GET", url);
xRequest.send(null);
    
}

