function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let counter = 0;
    let y = 0; 
    let width = 10;
    let x = 500;
    while (counter < 100) {
        circle(x, y, width);
        y+= 7;
        counter += 1;
        width += 2;
        x += 2; 
        ++counter
    }
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
