var vo;
var v;
var amp;
var song;
function setup() {
	createCanvas(500, 500);
	ply = createButton('play');
	song = loadSound('most_romantic_2017.mp3', function(){
	});
	ply.mousePressed(function(){
		if(!song.isPlaying()){
			song.play();
		}else{
			song.stop();
		}
	});
	amp = new p5.Amplitude();
}

function draw() {
	v = amp.getLevel();
	vo = map(v,0,1,0,500);
	stroke(random(0,255),random(0,255),random(0,255));
	//fill(vo/3,0,vo/2);
	ellipse(250,250,vo,vo);
}
