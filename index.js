var source_x,source_y,destination_x,destination_y;
var s,x,y,z;

var operation="wall";
var speed=50;
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
        if(operation=="destination" || operation=="weight"){
            document.getElementById(operation).style.color = "black";
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
        if(operation=="source" || operation=="weight"){
            document.getElementById(operation).style.color = "black";
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
    else if(s=="weight"){
        if(operation=="source" || operation=="destination"){
            document.getElementById(operation).style.color = "black";
        }
        if(operation!="weight"){
            operation="weight";
            document.getElementById(s).style.color = "rgb(43, 187, 180)";
        }
        else{
            operation="wall";
            document.getElementById(s).style.color = "black";
        }
    }
}
function setSpeed(s){
    speed=110-10*parseInt(document.getElementById("time").value);
    console.log(speed);
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
    else if(operation=="weight"){
        weight(s);
    }
}

function source(s){
    if(document.getElementById(s).class == "unvisited"){
        x=source_x+"_"+source_y;
        y=document.getElementById(x);
        y.innerHTML="";
        y.class = "unvisited";
        y=s.split("_");
        source_x = parseInt(y[0]);
        source_y = parseInt(y[1]);
        document.getElementById(s).class = "source";
        document.getElementById(s).innerHTML = '<i class="material-icons" style="color:red;font-size:22px">my_location</i>';
        x = parseInt(y[0]);
        z = parseInt(y[1]);
        weights[x][z] = 1;
    }
}

function destination(s){
    if(document.getElementById(s).class == "unvisited"){
        x=destination_x+"_"+destination_y;
        y=document.getElementById(x);
        y.innerHTML="";
        y.class = "unvisited";
        y=s.split("_");
        destination_x = parseInt(y[0]);
        destination_y = parseInt(y[1]);
        document.getElementById(s).class = "destination";
        document.getElementById(s).innerHTML = '<i class="material-icons" style="color:green;font-size:22px">place</i>';
        x = parseInt(y[0]);
        z = parseInt(y[1]);
        weights[x][z] = 1;
    }
}

function weight(s){
    if(document.getElementById(s).class == "unvisited"){
        y = s.split("_");
        x = parseInt(y[0]);
        z = parseInt(y[1]);
        weights[x][z] = parseInt(document.getElementById("quantity").value);
        document.getElementById(s).innerHTML = weights[x][z].toString();
    }
}



function wall(s){
    if(document.getElementById(s).class == "unvisited"){
        y = s.split("_");
        x = parseInt(y[0]);
        z = parseInt(y[1]);
        weights[x][z] = 1;
        document.getElementById(s).innerHTML = "";
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
        y = s.split("_");
        x = parseInt(y[0]);
        z = parseInt(y[1]);
        weights[x][z] = 1;
        document.getElementById(s).innerHTML = "";
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
                weights[i][j] = 1;
                y.innerHTML="";
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