function shortestPath(){
    clearPath();
    var visit=[];
    var parent=[];
    var arr=[];
    var path=[];
    var i,j,x,y,z,c=0;
    var x1,y1,z1,p;
    var mini=100000,flag=0;
    for(i=0;i<21;i++){
        for(j=0;j<44;j++){
            visit.push(0);
            parent.push(c);
            arr.push(100000);
            c++;
        }
    }
    x= parseInt((source_x)*44) + parseInt(source_y);
    arr[x]=0;
    var timer = setInterval(function(){
        mini=100000;
        for(i=0;i<21;i++){
            for(j=0;j<44;j++){
                if(arr[i*44 + j]<mini && visit[i*44 + j]==0){
                    mini=arr[i*44 + j];
                    z=i*44 + j;
                }
            }
        }    
        if(mini==100000){
            findPath();
            clearInterval(timer);
        }
        y=z%44;
        x=Math.trunc(z/44);
        visit[z]=1;
        if(x!=0){
            x1=x-1;
            y1=y;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                if(arr[x1*44 + y1]>weights[x1][y1]+arr[x*44 + y]){
                    arr[x1*44 + y1]=weights[x1][y1]+arr[x*44 + y];
                    parent[x1*44 + y1]=z;
                }
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                if(arr[x1*44 + y1]>weights[x1][y1]+arr[x*44 + y]){
                    arr[x1*44 + y1]=weights[x1][y1]+arr[x*44 + y];
                    parent[x1*44 + y1]=z;
                }
            }
        }
        if(x!=20){
            x1=x+1;
            y1=y;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                if(arr[x1*44 + y1]>weights[x1][y1]+arr[x*44 + y]){
                    arr[x1*44 + y1]=weights[x1][y1]+arr[x*44 + y];
                    parent[x1*44 + y1]=z;
                }
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                if(arr[x1*44 + y1]>weights[x1][y1]+arr[x*44 + y]){
                    arr[x1*44 + y1]=weights[x1][y1]+arr[x*44 + y];
                    parent[x1*44 + y1]=z;
                }
            }
        }
        if(y!=0){
            x1=x;
            y1=y-1;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                if(arr[x1*44 + y1]>weights[x1][y1]+arr[x*44 + y]){
                    arr[x1*44 + y1]=weights[x1][y1]+arr[x*44 + y];
                    parent[x1*44 + y1]=z;
                }
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                if(arr[x1*44 + y1]>weights[x1][y1]+arr[x*44 + y]){
                    arr[x1*44 + y1]=weights[x1][y1]+arr[x*44 + y];
                    parent[x1*44 + y1]=z;
                }
            }
        }
        if(y!=43){
            x1=x;
            y1=y+1;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                if(arr[x1*44 + y1]>weights[x1][y1]+arr[x*44 + y]){
                    arr[x1*44 + y1]=weights[x1][y1]+arr[x*44 + y];
                    parent[x1*44 + y1]=z;
                }
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                if(arr[x1*44 + y1]>weights[x1][y1]+arr[x*44 + y]){
                    arr[x1*44 + y1]=weights[x1][y1]+arr[x*44 + y];
                    parent[x1*44 + y1]=z;
                }
            }
        }
        z=x+"_"+y;
        if(document.getElementById(z).class=="destination"){
            document.getElementById(z).style.backgroundColor="rgb(43, 187, 180)";
            flag=1;
            findPath();
            clearInterval(timer);
        }
        else{
            document.getElementById(z).style.backgroundColor="rgb(43, 187, 180)";
        }
    },speed);
    function findPath(){
        if(flag==1){
            p = parseInt((destination_x)*44) + parseInt(destination_y);
            while(parent[p]!=p){
                path.push(p);
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
    }
}
