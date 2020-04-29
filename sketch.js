//https://diyaan.github.io/BrickGame/
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Render = Matter.Render;
var engine; 
var world;
var ball;
var paddle;
var rows=5;
var columns=8;
var brickBodies=[];
var paddleWidth=100;
var paddleHeight=20;
var boundryleft
var boundryright
var canvasWidth=400;
var canvasHeight=400;
var boundrytop

//to color : fill( red , green , blue )

var brick;
function setup() {
	createCanvas(canvasWidth, canvasHeight);

	engine = Engine.create();
	world = engine.world;
	ball = Bodies.circle(150 , 250 , 5 , {restitution:1.50, label:'ball'});
	paddle = Bodies.rectangle(150 , 350 , paddleWidth , paddleHeight , {isStatic:true,label:'paddle'} );
	World.add(world , ball);
	World.add(world , paddle);
	
	boundryleft = Bodies.rectangle( 10 , 200 , 20 , 400 , {isStatic:true} );
	boundryright = Bodies.rectangle( 390 , 200 , 20 , 400 , {isStatic:true} );
	boundrytop = Bodies.rectangle( 200 , 10 , 400 , 20 , {isStatic:true} );
	World.add(world , boundryleft );
	World.add(world , boundryright);
	World.add(world , boundrytop);

	//Add all your bricks


	/*for(i=0;i<columns;i=i+1)
	{
		brickBodies[i]=[];
		for (j=0 ;j<rows;j=j+1)

		{
			brick=Bodies.rectangle(27+(52*i) , 12 + (22*j) , 50 , 20 , {isStatic:true,'i':i, 'j':j, label:'brick'});
			brickBodies[i][j]=brick;
			World.add(world , brick);
			 
			
		}

	}*/
	//console.log(brickBodies);
	//Matter.Events.on(engine,'collisionStart',);
	//Engine.run(engine);
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 400,
	    height: 400,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
}

var x=150;
var y=150;

var rowColors = [ 'red' , 'green' , 'yellow' , 'blue' , 'magenta' , 'pink' , 'brown' , 'black']
function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	ellipseMode(CENTER)
	background(220);
	//var i,j 
	//console.log()
	
	//console.log(a)

	fill( 255 )
	rect(paddle.position.x , paddle.position.y  , 100 , 20);
	if (keyIsDown(LEFT_ARROW) && paddle.position.x>paddleWidth/2)
	{
		Body.setPosition(paddle,{x:paddle.position.x-5 , y:paddle.position.y})
	}

	if (keyIsDown(RIGHT_ARROW) && paddle.position.x<width-paddleWidth/2)
	{
		Body.setPosition(paddle,{x:paddle.position.x+5 , y:paddle.position.y})
	}
	

    fill( 255 )
	circle(ball.position.x , ball.position.y , 10);

}


/* function event()
 {
		pairs=event.pairs[0];
		if(pairs.bodyA.label=='brick')
		{
			 pairs.bodyA.i;
			 pairs.bodyA.j;
			 World.remove(world , brickBodies[i][j])
			 brickBodies[i][j]=null
		}

		if(pairs.bodyB.label=='brick')
		{
			 pairs.bodyB.i;
			 pairs.bodyB.j;
			 World.remove(world , brickBodies[i][j])
			 brickBodies[i][j]=null
		}
	}
*/



















