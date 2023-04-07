var STROKE_COLOR = "black"; // "#888888"; 
var STROKE_WIDTH = 1;
var BG_COLOR = "ffffff"; // "000000";

var WIDTH=300,
    preheader="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n",
    header="<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\""+WIDTH+"px\" height=\""+WIDTH+"px\" viewBox=\"0 0 "+WIDTH+" "+WIDTH+"\" enable-background=\"new 0 0 "+WIDTH+" "+WIDTH+"\" xml:space=\"preserve\">\n",
    footer="</svg>",
    colored=true,
    color=BG_COLOR,
    dt=[[[],[],[],[]],[[],[],[],[]]],
    angs=[[],[]],
    colors=[[],[]],
    REP=[0, 0],
    RAD=WIDTH/2,
    container=document.getElementById("container"),
    mandala="";

function generate(genR0, genR1, genT0, genT1, genAng0, genAng1, genColor0, genColor1){
    mandala=header;
    if(genR0){
        REP[0]=Math.floor(Math.random()*4)+2;
    }

    
    for(i=0; i<REP[0]; ++i)
    {
        for(j=0; j<4;j++){
            if(genT0 || dt[0][j].length <= i){
                dt[0][j][i]=Math.random()*RAD;
            }
        }
    }

    dt[0][0].sort().reverse();
    dt[0][3].sort().reverse();
    

    for(i=0; i<REP[0]; ++i)
    {
	var curang=0;
    if(genAng0 || angs[0].length <= i){
        angs[0][i]=Math.floor(Math.random()*3);
    }
    ang = Math.PI/(1<<(angs[0][i]+2));

	if(colored)
	{
        if(genColor0 || colors[0].length <= i){
            colors[0][i]=Math.floor(Math.random()*16777216).toString(16);
        }
	    color=colors[0][i];
	}
	while(curang<2*Math.PI)
	{
	    mandala+=("<path d=\"M "+(RAD+dt[0][0][i]*Math.cos(curang))+","+(RAD+dt[0][0][i]*Math.sin(curang))+" C "+(RAD+dt[0][1][i]*Math.cos(curang))+","+(RAD+dt[0][1][i]*Math.sin(curang))+" "+(RAD+dt[0][2][i]*Math.cos(curang+ang))+","+(RAD+dt[0][2][i]*Math.sin(curang+ang))+" "+(RAD+dt[0][3][i]*Math.cos(curang+ang))+" "+(RAD+dt[0][3][i]*Math.sin(curang+ang))+" Z\" stroke=\""+STROKE_COLOR+"\" fill=\"#"+color+"\" stroke-width=\""+STROKE_WIDTH+"\" />\n");
	    curang+=ang;
	    mandala+=("<path d=\"M "+(RAD+dt[0][0][i]*Math.cos(curang+ang))+","+(RAD+dt[0][0][i]*Math.sin(curang+ang))+" C "+(RAD+dt[0][1][i]*Math.cos(curang+ang))+","+(RAD+dt[0][1][i]*Math.sin(curang+ang))+" "+(RAD+dt[0][2][i]*Math.cos(curang))+","+(RAD+dt[0][2][i]*Math.sin(curang))+" "+(RAD+dt[0][3][i]*Math.cos(curang))+" "+(RAD+dt[0][3][i]*Math.sin(curang))+" Z\" stroke=\""+STROKE_COLOR+"\" fill=\"#"+color+"\" stroke-width=\""+STROKE_WIDTH+"\" />\n");
	    curang+=ang;
	}
    }
    if(genR1){
        REP[1]=Math.floor(Math.random()*3)+1;
    }

    for(i=0; i<REP[1]; ++i)
    {
        for(j=0; j<4;j++){
            if(genT1 || dt[1][j].length <= i){
                dt[1][j][i]=Math.random()*RAD;
            }
        }
    }

    dt[1][0].sort().reverse();
    dt[1][1].sort().reverse();
    dt[1][2].sort().reverse();
    dt[1][3].sort().reverse();


    for(i=0; i<REP[1]; ++i)
    {
	curang=0;
    if(genAng1 || angs[1].length <= i){
        angs[1][i]=Math.floor(Math.random()*3);
    }
    ang = Math.PI/(1<<(angs[1][i]+3));
    if(colored)
	{
        if(genColor1 || colors[1].length <= i){
            colors[1][i]=Math.floor(Math.random()*16777216).toString(16);
        }
	    color=colors[1][i];        
	}
	while(curang<2*Math.PI)
	{
	    mandala+=("<path d=\"M "+(RAD+dt[1][0][i]*Math.cos(curang))+","+(RAD+dt[1][0][i]*Math.sin(curang))+" C "+(RAD+dt[1][1][i]*Math.cos(curang+ang))+","+(RAD+dt[1][1][i]*Math.sin(curang+ang))+" "+(RAD+dt[1][2][i]*Math.cos(curang+ang))+","+(RAD+dt[1][2][i]*Math.sin(curang+ang))+" "+(RAD+dt[1][3][i]*Math.cos(curang))+" "+(RAD+dt[1][3][i]*Math.sin(curang))+" Z\" stroke=\""+STROKE_COLOR+"\" fill=\"#"+color+"\" stroke-width=\""+STROKE_WIDTH+"\" />\n");
	    curang+=ang;
	    mandala+=("<path d=\"M "+(RAD+dt[1][0][i]*Math.cos(curang+ang))+","+(RAD+dt[1][0][i]*Math.sin(curang+ang))+" C "+(RAD+dt[1][1][i]*Math.cos(curang))+","+(RAD+dt[1][1][i]*Math.sin(curang))+" "+(RAD+dt[1][2][i]*Math.cos(curang))+","+(RAD+dt[1][2][i]*Math.sin(curang))+" "+(RAD+dt[1][3][i]*Math.cos(curang+ang))+" "+(RAD+dt[1][3][i]*Math.sin(curang+ang))+" Z\" stroke=\""+STROKE_COLOR+"\" fill=\"#"+color+"\" stroke-width=\""+STROKE_WIDTH+"\" />\n");
	    curang+=ang;
	}
    }

    mandala+=footer;
    container.innerHTML=mandala;
    var a=document.getElementById("download");
    a.href = window.URL.createObjectURL(new Blob([preheader+mandala], {type: 'image/svg'}));
    a.download = "mandala.svg";
    genHTML();
}

function changeTd(self, t, i, j){
    dt[t][i][j] = parseFloat(self.value);
    generate(false, false, false, false, false, false, false, false);
}
function changeTdAng(self, t, i){
    angs[t][i] = parseFloat(self.value);
    generate(false, false, false, false, false, false, false, false);
}
function changeTdColor(self, t, i){
    colors[t][i] = self.value.trim();
    generate(false, false, false, false, false, false, false, false);
}
function changeRep(self, t){
    REP[t] = parseInt(self.value);
    generate(false, false, false, false, false, false, false, false);
}

function genTable(t){
    var html ="<table><thead><tr>"
    for(var i=1; i<=4; i++){
        html+="<th>"+i+"</th>";
    }
    html+="</tr></thead><tbody>";
    for(var j=0; j < REP[t]; j++){
        html += "<tr>";
        for(var i=0; i<4; i++){
            html+="<td><input type='text' oninput='changeTd(this, "+t+", "+i+", "+j+")' value='"+dt[t][i][j]+"' id='dt_"+t+"_"+i+"_"+j+"' /></td>";
        }
        html += "</tr>";
    }
    html += "</tbody></table>";
    tgen = (!t)? "true, false" : "false, true";
    html += "<input type='button' value='▶' onclick='generate(false, false, "+tgen+", false, false, false, false)' />";
    return html;
}

function genTableAngs(t){
    var html ="Angles "+t+" ";
    tgen = (!t)? "true, false" : "false, true";
    html += "<input type='button' value='▶' onclick='generate(false, false, false, false, "+tgen+", false, false)' />";
    html += "<table><tbody><tr>";
    for(var i=0; i<REP[t]; i++){
        html+="<td><input type='number' oninput='changeTdAng(this, "+t+", "+i+")' onchange='changeTdAng(this, "+t+", "+i+")' value='"+angs[t][i]+"' id='ang_"+t+"_"+i+"' /></td>";
    }
    html += "</tr></tbody></table><br />";
    return html;
}

function genTableColors(t){
    var html ="Colors "+t+" ";
    tgen = (!t)? "true, false" : "false, true";
    html += "<input type='button' value='▶' onclick='generate(false, false, false, false, false, false, "+tgen+")' />";
    html +="<table><tbody><tr>";
    for(var i=0; i<REP[t]; i++){
        html+="<td><input type='text' oninput='changeTdColor(this, "+t+", "+i+")' onchange='changeTdColor(this, "+t+", "+i+")' value='"+colors[t][i]+"' id='ang_"+t+"_"+i+"' /></td>";
    }
    html += "</tr></tbody></table><br />";
    return html;
}

function parseAlls(self){
    var json = self.value; 
    const obj = JSON.parse(json);
    REP = obj.REP;
    dt = obj.dt;
    angs = obj.angs;
    colors = obj.colors;
    generate(false, false, false, false, false, false, false, false);

}

function genHTML(){
    var html ="";
    
    html += '<div id="repsWrapper">';

    html += "<input class='reps' type='number' value='"+REP[0]+"' oninput='changeRep(this, 0)' id='REP0' />";
    html += "<input type='button' value='▶' onclick='generate(true, false, false, false, false, false, false, false)' />&nbsp; &nbsp;";
    html += "<input class='reps' type='number' value='"+REP[1]+"' oninput='changeRep(this, 1)' id='REP1' />";
    html += "<input type='button' value='▶' onclick='generate(false, true, false, false, false, false, false, false)' />";

    html += '</div><div style="clear:both"></div>';

    html += '<div id="tabsWrapper">';
    html += '<div id="tab1" class="active" onClick="selectTab(1);">Tds</div>\
    <div id="tab2" onClick="selectTab(2);">Angles</div>\
    <div id="tab3" onClick="selectTab(3);">Colors</div>';

    html += '<div style="clear:both"></div>';

    html += '<div id="tab1Content">';

    html += genTable(0);
    html += genTable(1);

    html += '</div>';


    html += '<div id="tab2Content">';

    html += genTableAngs(0);
    html += genTableAngs(1);

    html += '</div>';

    html += '<div id="tab3Content">';

    html += genTableColors(0);
    html += genTableColors(1);

    html += '</div>';
    html += '</div>';

    let alls = {
        REP: REP,
        dt: dt,
        angs: angs,
        colors: colors
    }
    let json = JSON.stringify(alls);

    html += "<textarea oninput='parseAlls(this)' style='width:100%'>"+json+"</textarea>";

    document.getElementById("settings").innerHTML = html;
}

function selectTab(tabIndex) {
    for (var i=1; i<=3; i++){
        console.log("tab" + i + "Content");
        console.log(( i == tabIndex)? "block" : "none");
        document.getElementById("tab" + i + "Content").style.display = ( i == tabIndex)?
    "block" : "none";
        if (i == tabIndex){
            document.getElementById("tab" + i).classList.add("active");
        }else{
            document.getElementById("tab" + i).classList.remove("active");
        }

    }
  }

function toggleColor()
{
    if(colored)
	colored=false;
    else
	colored=true;
    color=BG_COLOR;
    generate(false, false, false, false, false, false, true, true);
}

generate(true, true, true, true, true, true, true, true);
