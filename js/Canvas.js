function drawBar(context, x, y, width, height, c) {
    context.fillStyle = c;
    context.fillRect(x, HEIGHT-y-height, width, height); 
  }
  
  function drawLine(context, startX, startY, endX, endY, c){
      context.beginPath();
      context.moveTo(startX,startY);
      context.lineTo(endX,endY);
      context.lineWidth=5;
      context.strokeStyle=c;
      context.stroke();
  }
  
  function drawArc(context, centerX, centerY, radius, startAngle, endAngle){
      context.beginPath();
      context.arc(centerX, centerY, radius, startAngle, endAngle);
      context.stroke();
  }
  
  function drawSlice(context, centerX, centerY, radius, startAngle, endAngle,colour){
      context.beginPath();
      context.moveTo(centerX,centerY);
      context.arc(centerX, centerY, radius, startAngle, endAngle);
      context.closePath();
      context.fillStyle = colour;
      context.fill();
  
  }
  
  var uniWork=[5,6,3,5,7,5,6];
  var digitalArt=[1,3,2,1,3,2,3];
  var sleeping=[7,6,7,8,7,7,6];
  var colour1=["#4CE8ED","#ED7A4C","#2FBD9C","#E83A00"];
  var colour2=["#ED64C1","#9AF068","#6A91F5","#00BD10"];
  var colour3=["#EDD134","#3447ED","#F09A42","#B4BEF5"];
  var x=0;
  var currentGraph;
  
  
  function drawBarChart(context,x) {
      currentGraph=1;
      var padding=30;
      var chartwidth=WIDTH-padding;
      var chartheight=HEIGHT-((2*padding)+250);
      var barlift=2*padding+250;
  
    //Drawing the actual bars
    var numbars = 28;
    var width = chartwidth/numbars;
    var barspace=padding+20;
    for (var i=0; i<numbars; ++i) {
      var height = (uniWork[i]/10)*chartheight;
      var colour = colour1[x];
      drawBar(context, barspace, barlift, width, height, colour);
      barspace = barspace+width;
      height = (digitalArt[i]/10)*chartheight;
      colour = colour2[x];
      drawBar(context, barspace, barlift, width, height, colour);
      barspace = barspace+width;
      height = (sleeping[i]/10)*chartheight;
      colour = colour3[x];
      drawBar(context, barspace, barlift, width, height, colour);
      barspace = barspace+width;
      drawBar(context, barspace, barlift, width, 0, "#000000"); //used to create space between the sets of bars
      barspace = barspace+width;
    }
  
      //Draw the grid and the y axis
      var gridColour="#eeeeee"
      var maxValue=8+1; //this is the highest point that the y-axis will reach
      //var yUnits = (maxValue)/HEIGHT;
      drawLine(context,padding+20,HEIGHT-barlift,WIDTH,HEIGHT-barlift,gridColour); //x-axis
      drawLine(context,padding+20,chartheight,padding+20,chartheight-(chartheight*(maxValue/10)),gridColour); //y-axis
      for (var j=10; j>0; j--) {
          drawLine(context,(padding*2/3)+20,chartheight*(j/10), padding+20, chartheight*(j/10),gridColour); //y-axis marker placements
      }
      
  
      var days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
      context.fillStyle = gridColour;
      context.textBaseline="left"; 
      context.font = "bold 12px Arial";
      for (var z=9; z>0; z--) {
          context.fillText((10-z), padding, chartheight*(z/10)+5); //Writing the y-axis markers
      }
      barspace=0;
      for (var z=0; z<7; z++){
          context.moveTo(padding+20,chartheight-20);
          context.fillText(days[z],barspace+padding+50,chartheight+padding-10); //Writing the x-axis markers
          barspace = barspace+(4*width);
      }
  }
  
  function drawLineChart(context,x){
      currentGraph=2;
      var padding=30;
      var chartwidth=WIDTH-padding;
      var chartheight=HEIGHT-((2*padding)+250);
      var barlift=2*padding+250;
      var numbars = 28;
      var width = chartwidth/numbars;
      context.beginPath();
      //context.strokeStyle=colour1[x];
  
      //Draw the grid and the y axis
      var gridColour="#eeeeee"
      var maxValue=8+1; //this is the highest point that the y-axis will reach
      var yUnits = (maxValue)/HEIGHT;
      drawLine(context,padding+20,HEIGHT-barlift,WIDTH,HEIGHT-barlift,gridColour); //x-axis
      drawLine(context,padding+20,chartheight,padding+20,chartheight-(chartheight*(maxValue/10)),gridColour); //y-axis
      for (var j=10; j>0; j--) {
          drawLine(context,(padding*2/3)+20,chartheight*(j/10), padding+20, chartheight*(j/10),gridColour);
      }
      
      var days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
      context.fillStyle = gridColour;
      context.textBaseline="left"; 
      context.font = "bold 12px Arial";
      for (var z=9; z>0; z--) {
          context.fillText((10-z), padding, chartheight*(z/10)+5); //Writing the y-axis markers
      }
      var barspace=0;
      var j=50;
      for (var z=0; z<7; z++){
          context.moveTo(padding+20,chartheight-20);
          context.fillText(days[z],barspace+padding+50,chartheight+padding-10); //Writing the x-axis markers
          drawLine(context,barspace+padding+50+10,HEIGHT-barlift-10,barspace+padding+50+10, HEIGHT-barlift+10,gridColour); //x-axis marker placement 
          barspace = barspace+(4*width);
      }
  
    //Drawing the actual lines 
    //UNI_WORK
      var colour=colour1[x];
      var startPosX=0;
      var startPosY=HEIGHT-(chartheight*(uniWork[0]/10));
      var endPosX=0;
      for (var i=1; i<7; i++) {
          endPosX=endPosX +(4*width);
          var endPosY=HEIGHT-(chartheight*(uniWork[i]/10));
          drawLine(context,startPosX+padding+20+40,startPosY+padding-200-140,endPosX+padding+20+40,endPosY+padding-200-140,colour);
          //console.log(colour);
          context.stroke();
          startPosX=endPosX;
          startPosY=endPosY;
      }
  
      //DIGITAL ART
      colour=colour2[x];
      startPosX=0;
      startPosY=HEIGHT-(chartheight*(digitalArt[0]/10));
      endPosX=0;
      for (var i=1; i<7; i++) {
          endPosX=endPosX +(4*width);
          endPosY=HEIGHT-(chartheight*(digitalArt[i]/10));
          drawLine(context,startPosX+padding+20+40,startPosY+padding-200-140,endPosX+padding+20+40,endPosY+padding-200-140,colour);
          //console.log(colour);
          context.stroke();
          startPosX=endPosX;
          startPosY=endPosY;
      }
  
      //SLEEPING
      colour=colour3[x];
      startPosX=0;
      startPosY=HEIGHT-(chartheight*(sleeping[0]/10));
      endPosX=0;
      for (var i=1; i<7; i++) {
          endPosX=endPosX +(4*width);
          endPosY=HEIGHT-(chartheight*(sleeping[i]/10));
          drawLine(context,startPosX+padding+20+40,startPosY+padding-200-140,endPosX+padding+20+40,endPosY+padding-200-140,colour);
          //console.log(colour);
          context.stroke();
          startPosX=endPosX;
          startPosY=endPosY;
      }
  
      
  }
  
  function drawPieChart(context,x){
      currentGraph=3;
      var padding=30;
      var chartwidth=WIDTH-padding;
      var chartheight=HEIGHT-((2*padding)+250);
      var weeklyData=[0,0,0];
      var totalHrs=0;
      for (var i=0; i<7; i++) {
          weeklyData[0]=uniWork[i]+weeklyData[0];
          weeklyData[1]=digitalArt[i]+weeklyData[1];
          weeklyData[2]=sleeping[i]+weeklyData[2];
          totalHrs=uniWork[i]+digitalArt[i]+sleeping[i]+totalHrs;
      }
      //console.log(weeklyData[0],weeklyData[1],weeklyData[2],totalHrs); 
      var startAngle =0;
      var sliceAngle=[];
      for (var j=0; j<3; j++) {
          sliceAngle[j]= 2*Math.PI*weeklyData[j]/totalHrs;
          //console.log(sliceAngle);
          var colourArray;
          switch (j){
              case 0:
                  colourArray=colour1[x];
                  break;
              case 1:
                  colourArray=colour2[x];
                  break;
              case 2:
                  colourArray=colour3[x];
          }
          drawSlice(context,chartwidth/2, chartheight/2, Math.min(chartwidth/2,chartheight/2), 
                      startAngle, startAngle+sliceAngle[j],colourArray);
          //console.log(chartwidth/2, chartheight/2, Math.min(chartwidth/2,chartheight/2), 
          //startAngle, startAngle+sliceAngle[j],colourArray);
          startAngle=startAngle+sliceAngle[j];
      }
  }
  
  
  function legend(context,x){
      var startingY=450;
      context.font = "bold 20px Quicksand"; 
      context.fillStyle=colour1[x];
      context.beginPath();
      context.rect(WIDTH/2-100, startingY, 25,25);
      context.fill();
      context.moveTo(WIDTH/2,startingY+100);
      context.fillText("University Work (hours)",WIDTH/2-50,startingY+15);
      context.fillStyle=colour2[x];
      context.beginPath();
      context.rect(WIDTH/2-100, startingY+50, 25,25);
      context.fill();
      context.fillText("Digital Art (hours)",WIDTH/2-50,startingY+15+50);
      context.fillStyle=colour3[x];
      context.beginPath();
      context.rect(WIDTH/2-100, startingY+100, 25,25);
      context.fill();
      context.fillText("Sleeping (hours)",WIDTH/2-50,startingY+15+100);
  }
  
  function changeColour(context,currentGraph){
      x=Math.floor(Math.random()*4);
      console.log(x);
      switch (currentGraph){
          case 1:
              barChart(context,x);
              legend(context,x);
              break;
          case 2:
              lineChart(context,x);
              legend(context,x);
              break;
          case 3:
              pieChart(context,x);
              legend(context,x);
              break;
      } 
  }
  
  
  // main program body
  
  var canvas = document.getElementById("canvas_example");
  var context = canvas.getContext("2d");
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;
  
  function barChart(){
      context.clearRect(0, 0, WIDTH, HEIGHT);
      drawBarChart(context,x);
      legend(context,x);
  }
  
  function lineChart(){
      context.clearRect(0, 0, WIDTH, HEIGHT);
      drawLineChart(context,x);
      legend(context,x);
  }
  
  function pieChart(){
      context.clearRect(0,0,WIDTH,HEIGHT);
      drawPieChart(context,x);
      legend(context,x);
  }