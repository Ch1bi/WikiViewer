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
            var json = JSON.parse(data);
            //console.log(json);
            var keys = Object.keys(json.query.pages);
            //console.log(keys);
    
            var resultString = "";
            
            for(var i = 0; i < keys.length; i++){
                  
                resultString += "<a href='https://en.wikipedia.org/wiki"+json.query.pages[keys[i]].title+"'>";
                resultString += "<div class='outer'>";
                resultString += "<p class='title'>";
                resultString += json.query.pages[keys[i]].title;
                
                resultString += "</div>";
                resultString += "</a>";
            }
    
    data.innerHTML = resultString;
    
    }
}
xRequest.open("GET", url);
xRequest.send(null);
    
}

