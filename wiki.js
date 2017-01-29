var appendData = document.getElementById("data");
var searchText = document.getElementById("search");
var submit = document.getElementById("submit");
var random = document.getElementById("random");
var resultString = "";

//if event listener supported...
if(submit.addEventListener){
    
    //add eventlistener
    submit.addEventListener("click", searchWiki, false);   
}

if(random.addEventListener){

    random.addEventListener("click", getRandomArticle, false);
}

function checkResults(){
    
    if(resultString.length > 0){
        
        resultString = " ";
    }
}

function searchWiki(){
    
var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + searchText.value + "&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&origin=*";
    
    
var xRequest = new XMLHttpRequest();
xRequest.onreadystatechange = function(){

if(xRequest.readyState == 4 && xRequest.status == 200){
            
            var data = xRequest.responseText;
           //console.log(data);
            var json = JSON.parse(data);
            //console.log(json);
    
            //check if resultString contains anything, if so delete results.
            checkResults();
            
              var keys = Object.keys(json.query.pages);
                
                keys.forEach(function(key){
                resultString += "<div class='outer'>";
                resultString += "<a href='https://en.wikipedia.org/wiki/"+json.query.pages[key].title +"'>";
                resultString += "<div class='inner'>";
                resultString += "<p class='title'>";
                resultString += json.query.pages[key].title;
                resultString += "</div>";
                resultString += "</a>";
                resultString += "<div class='inner2'>";
                resultString += "<p class='excerpt'>"
                resultString += json.query.pages[key].extract;
                resultString += "</p>"
                resultString += "</div>"
                resultString +="</div>"
                });
            }
 
            appendData.innerHTML = resultString;
    
    }

xRequest.open("GET", url);
xRequest.send(null);
    
}

function getRandomArticle(){

var randUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=30&origin=*";
    
var randRequest = new XMLHttpRequest();
    
var randNum;
var choiceArticle = "";
    
randRequest.onreadystatechange = function(){

if(randRequest.readyState == 4 && randRequest.status == 200){
            
       var randData = randRequest.responseText;
       var randJSON = JSON.parse(randData);
       console.log(randJSON);
        
        var randomKeys = Object.keys(randJSON.query.random);
        console.log(randomKeys); 
        
        randNum = Math.floor(Math.random() * randomKeys.length);
        console.log(randNum);
        
        choiceArticle = randJSON.query.random[randNum].title;
        console.log(choiceArticle);
    
        window.open("https://en.wikipedia.org/wiki/" + choiceArticle, "_blank");
        
    }

    
}

randRequest.open("GET", randUrl);
randRequest.send(null); 
    
    
}


