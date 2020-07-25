var grid = document.getElementById("grid");
var row=grid.insertRow(0);
var i,j,cell;
for(i=0;i<44;i++){
    cell=row.insertCell(0);
}
var s;
for(i=0;i<20;i++){
    row=grid.insertRow(0);
    for(j=0;j<44;j++){
        cell=row.insertCell(0);
    }
}
for (i=0;i<grid.rows.length;i++) {
    row=grid.rows[i];
    for(j=0;j<grid.rows[i].cells.length;j++){
        s=i+"_"+j;
        row.cells[j].setAttribute("id",s);
    }
}
var x,y;
for(i=0;i<21;i++){
    for(j=0;j<44;j++){
        x=i+"_"+j;
        y=document.getElementById(x);
        y.class = "unvisited";
        y.setAttribute("onmouseover","wall1(this.id)")
        y.setAttribute("onclick","change(this.id)");
    }
}
