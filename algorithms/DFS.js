function DFS(){
    clearPath();
    var stack=[];
    var parent=[];
    var visit=[];
    var path=[];
    var x,y,z,x1,y1,z1,c,flag,flg;
    c=0;
    for(i=0;i<21;i++){
        for(j=0;j<44;j++){
            visit.push(0);
            parent.push(c);
            c++;
        }
    }
    flag=0;
    x= parseInt((source_x)*44) + parseInt(source_y);
    stack.push(x);
    z1=source_x+"_"+source_y;
    document.getElementById(z1).style.backgroundColor="rgb(43, 187, 180)";
    var timer = setInterval(function(){
        y=stack.length;
        z=stack[y-1];
        y=z%44;
        x=Math.trunc(z/44);
        flg=0;
        if(x!=0 && flg==0){
            x1=x-1;
            y1=y;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                stack.push(x1*44 + y1);
                parent[x1*44 + y1]=z;
                visit[x1*44 + y1]=1;
                document.getElementById(z1).style.backgroundColor="rgb(43, 187, 180)";
                flg=1;
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                parent[x1*44 + y1]=z;
                flag=1;
                findPath();
                clearInterval(timer);
            }
        }
        if(x!=20 && flg==0){
            x1=x+1;
            y1=y;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                stack.push(x1*44 + y1);
                parent[x1*44 + y1]=z;
                visit[x1*44 + y1]=1;
                document.getElementById(z1).style.backgroundColor="rgb(43, 187, 180)";
                flg=1;
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                parent[x1*44 + y1]=z;
                flag=1;
                findPath();
                clearInterval(timer);
            }
        }
        if(y!=0 && flg==0){
            x1=x;
            y1=y-1;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                stack.push(x1*44 + y1);
                parent[x1*44 + y1]=z;
                visit[x1*44 + y1]=1;
                document.getElementById(z1).style.backgroundColor="rgb(43, 187, 180)";
                flg=1;
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                parent[x1*44 + y1]=z;
                flag=1;
                findPath();
                clearInterval(timer);
            }
        }
        if(y!=43 && flg==0){
            x1=x;
            y1=y+1;
            z1=x1+"_"+y1;
            if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                stack.push(x1*44 + y1);
                parent[x1*44 + y1]=z;
                visit[x1*44 + y1]=1;
                document.getElementById(z1).style.backgroundColor="rgb(43, 187, 180)";
                flg=1;
            }
            else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                parent[x1*44 + y1]=z;
                flag=1;
                findPath();
                clearInterval(timer);
            }
        } 
        if(flg==0){
            while(flg==0){
                if(stack.length!=1){
                    stack.pop();
                }
                else{
                    clearInterval(timer);
                    break;
                }
                y=stack.length;
                z=stack[y-1];
                y=z%44;
                x=Math.trunc(z/44);
                if(x!=0 && flg==0){
                    x1=x-1;
                    y1=y;
                    z1=x1+"_"+y1;
                    if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                        flg=1;
                    }
                    else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                        flg=1;
                    }
                }
                if(x!=20 && flg==0){
                    x1=x+1;
                    y1=y;
                    z1=x1+"_"+y1;
                    if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                        flg=1;
                    }
                    else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                        flg=1;
                    }
                }
                if(y!=0 && flg==0){
                    x1=x;
                    y1=y-1;
                    z1=x1+"_"+y1;
                    if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                        flg=1;
                    }
                    else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                        flg=1;
                    }
                }
                if(y!=43 && flg==0){
                    x1=x;
                    y1=y+1;
                    z1=x1+"_"+y1;
                    if(document.getElementById(z1).class=="unvisited" && visit[x1*44 + y1]==0){
                        flg=1;
                    }
                    else if(document.getElementById(z1).class=="destination" && visit[x1*44 + y1]==0){
                        flg=1;
                    }
                } 
            }
        }
    },30);
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