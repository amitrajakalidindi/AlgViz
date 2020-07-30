var source_x,source_y,destination_x,destination_y;
var s,x,y;
var operation="wall";
source_x = 10;
source_y = 7;
destination_x=10;
destination_y=36;

s=source_x+"_"+source_y;
document.getElementById(s).innerHTML='<i class="material-icons" style="color:red;font-size:22px">my_location</i>';
document.getElementById(s).class="source";


s=destination_x+"_"+destination_y;
document.getElementById(s).innerHTML='<i class="material-icons" style="color:green;font-size:22px">place</i>';
document.getElementById(s).class="destination";

function setOperation(s){
    if(s=="source"){
        if(operation=="destination"){
            document.getElementById("destination").style.color = "black";
        }
        if(operation!="source"){
            operation="source";
            document.getElementById(s).style.color = "rgb(43, 187, 180)";
        }
        else{
            operation="wall";
            document.getElementById(s).style.color = "black";
        }
    }
    else if(s=="destination"){
        if(operation=="source"){
            document.getElementById("source").style.color = "black";
        }
        if(operation!="destination"){
            operation="destination";
            document.getElementById(s).style.color = "rgb(43, 187, 180)";
        }
        else{
            operation="wall";
            document.getElementById(s).style.color = "black";
        }
    }
}
function change(s){
    if(operation=="wall"){
        wall(s);
    }
    else if(operation=="source"){
        source(s);
    }
    else if(operation=="destination"){
        destination(s);
    }
}

function source(s){
    if(document.getElementById(s).class == "unvisited"){
        x=source_x+"_"+source_y;
        y=document.getElementById(x);
        y.innerHTML="";
        y.class = "unvisited";
        y=s.split("_");
        source_x = y[0];
        source_y = y[1];
        document.getElementById(s).class = "source";
        document.getElementById(s).innerHTML = '<i class="material-icons" style="color:red;font-size:22px">my_location</i>';
    }
}

function destination(s){
    if(document.getElementById(s).class == "unvisited"){
        x=destination_x+"_"+destination_y;
        y=document.getElementById(x);
        y.innerHTML="";
        y.class = "unvisited";
        y=s.split("_");
        destination_x = y[0];
        destination_y = y[1];
        document.getElementById(s).class = "destination";
        document.getElementById(s).innerHTML = '<i class="material-icons" style="color:green;font-size:22px">place</i>';
    }
}



function wall(s){
    if(document.getElementById(s).class == "unvisited"){
        document.getElementById(s).class = "wall";
        document.getElementById(s).style.backgroundColor = "black";
    }
    else if(document.getElementById(s).class == "wall"){
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
        document.getElementById(s).class = "wall";
        document.getElementById(s).style.backgroundColor = "black";
    }
    else if(document.getElementById(s).class == "wall" && flag){
        document.getElementById(s).class = "unvisited";
        document.getElementById(s).style.backgroundColor = "white";
    }
    mouseDown=0;
}

function clearE(){
    for(i=0;i<21;i++){
        for(j=0;j<44;j++){
            x=i+"_"+j;
            y=document.getElementById(x);
            if(y.class=="unvisited" || y.class=="wall"){
                y.class = "unvisited";
                y.style.backgroundColor = "white";
            }
            else if(y.class=="source" || y.class=="destination"){
                y.style.backgroundColor = "white";
            }
        }
    }
}

function clearPath(){
    for(i=0;i<21;i++){
        for(j=0;j<44;j++){
            x=i+"_"+j;
            y=document.getElementById(x);
            if(y.class=="unvisited"){
                y.style.backgroundColor = "white";
            }
            else if(y.class=="source" || y.class=="destination"){
                y.style.backgroundColor = "white";
            }
        }
    }
}