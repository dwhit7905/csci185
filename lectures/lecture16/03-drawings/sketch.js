function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    
    fill('brown')
    rect(500, 450, 100, 550);
    
    fill("green")
    circle(550, 300, 300);

    fill("green")
    circle(680, 395, 250);

    fill("green")
    circle(450, 395, 250);

    // https://p5js.org/reference/#/p5/rect
    // fill('brown')
    // rect(500, 450, 100, 550);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    point(110, 20);

    // https://p5js.org/reference/#/p5/text
    text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    fill('red');
    strokeWeight(1);
    ellipse(434, 395, 40, 40);

    fill('red');
    strokeWeight(1);
    ellipse(634, 367, 40, 40);

    fill('red');
    strokeWeight(1);
    ellipse(555, 275, 40, 40);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}