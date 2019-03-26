// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'red';
var start = new Point(50, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 100, 200 ]);

var path2 = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'green'
});
path2.position = view.center + [10,-100];
var path3 = path2.clone();
path3.position = path3.position + [20,20];