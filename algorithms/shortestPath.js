function shortestPath(){
    var visit=[];
    var parent=[];
    var queue=[];
    var path=[];
    var i,j,x,y,z,c=0;
    var x1,y1,z1,p;
    var flag=0;
    for(i=0;i<21;i++){
        for(j=0;j<44;j++){
            visit.push(0);
            parent.push(c);
            c++;
        }
    }
    x= (source_x)*44 + source_y;
    queue.push(x);
    visit[x]=1;
    console.log("started");
    while(queue.length!=0){
        z=queue.shift();
        y=z%44;
        x=Math.trunc(z/44);
        if(x!=0){
            x1=x-1;
            y1=y;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                queue.push(x1*44 + y1);
                visit[x1*44 + y1]=1;
                parent[x1*44 + y1]=z;
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                queue.push(x1*44 + y1);
                visit[x1*44 + y1]=1;
                parent[x1*44 + y1]=z;
            }
        }
        if(x!=20){
            x1=x+1;
            y1=y;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                queue.push(x1*44 + y1);
                visit[x1*44 + y1]=1;
                parent[x1*44 + y1]=z;
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                queue.push(x1*44 + y1);
                visit[x1*44 + y1]=1;
                parent[x1*44 + y1]=z;
            }
        }
        if(y!=0){
            x1=x;
            y1=y-1;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                queue.push(x1*44 + y1);
                visit[x1*44 + y1]=1;
                parent[x1*44 + y1]=z;
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                queue.push(x1*44 + y1);
                visit[x1*44 + y1]=1;
                parent[x1*44 + y1]=z;
            }
        }
        if(y!=43){
            x1=x;
            y1=y+1;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                queue.push(x1*44 + y1);
                visit[x1*44 + y1]=1;
                parent[x1*44 + y1]=z;
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                queue.push(x1*44 + y1);
                visit[x1*44 + y1]=1;
                parent[x1*44 + y1]=z;
            }
        }
        z=x+"_"+y;
        if(document.getElementById(z).class=="destination"){
            document.getElementById(z).style.backgroundColor="rgb(43, 187, 180)";
            flag=1;
            break;
        }
        else{
            document.getElementById(z).style.backgroundColor="rgb(43, 187, 180)";
        }
    }
    if(flag==1){
        p = parseInt((destination_x)*44) + parseInt(destination_y);
        console.log("inparent");
        console.log(parent.length);
        console.log(p);
        console.log(destination_x);
        console.log(destination_y);
        while(parent[p]!=p){
            path.push(p);
            console.log(p);
            p=parent[p];
        }
        path.push(p);
        for(i=0;i<path.length;i++){
            y=path[i]%44;
            x=Math.trunc(path[i]/44);
            p=x+"_"+y;
            document.getElementById(p).style.backgroundColor="orange";
        }
    }
    console.log("ended");
}
