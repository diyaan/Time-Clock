function setup() {


	createCanvas(400 , 400);
	angleMode(DEGREES);



}





function draw() {

	background(0);

	strokeWeight(4);
	stroke(255);
	noFill();
	ellipse(200 , 200 , 300 , 300 );

	fill(150 , 100 , 100);
	textSize(21);
	text('6' , 190 , 340);

	fill(150 , 100 , 100);
	textSize(21);
	text('12' , 190 , 75);

	fill(150 , 100 , 100);
	textSize(21);
	text('3' , 325 , 200);

	fill(150 , 100 , 100);
	textSize(21);
	text('9' , 60 , 200);

	var d = day();
	var m = month();
	var yr = year();

	fill(255 , 255 , 150);
	noStroke();
	textSize(30);
	text(d +'/'+m+'/'+yr , 10 , 390);


	translate(200 , 200);
	rotate(-90);

	var hr = hour();
	var min = minute();
	var sec = second();
	
	//fill(255);
	//noStroke();
	//text(hr + ':' + min +':' + sec , 10 , 200);

	strokeWeight(8);
	stroke(255 , 100 , 150);
	noFill();
	let end1 = map(sec , 0 , 60 , 0 , 360);
	//arc(0 , 0 , 300 , 300 , 0 , end1);



	stroke(150 , 100 , 255);
	let end2 = map(min , 0 , 60 , 0 , 360);
	//arc(0 , 0 , 280 , 280 , 0 , end2);


	stroke(150 , 255 , 100);
	let end3 = map(hr % 12 , 0 , 12 , 0 , 360);
	//arc(0 , 0 , 260 , 260 , 0 , end3);
	

	push();
	rotate(end1);
	stroke(255 , 100 , 150);
	line(0 , 0 , 100 , 0);
	pop();

	push();
	rotate(end2);
	stroke(150 , 100 , 255);
	line(0 , 0 , 100 , 0);
	pop();

	push();
	rotate(end3);
	stroke(150 , 255 , 100);
	line(0 , 0 , 100 , 0);
	pop();


	stroke(0);
	point(0 , 0);


}