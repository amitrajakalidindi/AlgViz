function wall(s){
    if(document.getElementById(s).class == "unvisited"){
        document.getElementById(s).class = "visited";
        document.getElementById(s).style.backgroundColor = "black";
    }
    else{
        document.getElementById(s).class = "unvisited";
        document.getElementById(s).style.backgroundColor = "white";
    }
}
function wall1(s){
    var flag=0;
    if(event.which==1){
        flag=1;
    }
    if(document.getElementById(s).class == "unvisited" && flag){
        document.getElementById(s).class = "visited";
        document.getElementById(s).style.backgroundColor = "black";
    }
    else if(flag){
        document.getElementById(s).class = "unvisited";
        document.getElementById(s).style.backgroundColor = "white";
    }
    mouseDown=0;
}