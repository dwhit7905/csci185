const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2); // how many redraws per second

    // fill("#9caf88");
    strokeWeight(1);

    // generate a random x-position, y-position, and size:
    

    // Draw a random circle:
    let counter = 0;
    while (counter < 250){
        let color = colors[randomInt(0,4)]
        // let color = colors[3];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        circle(x, y, size);
        square(x, y, size);
        counter ++;
    }



    //     counter = 0;
    //     fill("pink");
    // while (counter < 500){
        
    //     let x = randomInt(0, canvasWidth /2, canvasWidth);
    //     let y = randomInt(0, canvasHeight /2);
    //     let size = randomInt(25, 125);
    //     circle(x, y, size);
    //     counter ++;
    // }

}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
   
    let counter = 0;
    while (counter < 250){
        let color = colors[randomInt(0,4)]
        // let color = colors[3];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        circle(x, y, size);
        square(x, y, size);
        counter ++;
    }
   
   
    // // clear();

    // // generate a random x-position, y-position, and size:
    // let x = randomInt(0, canvasWidth);
    // let y = randomInt(0, canvasHeight);
    // let size = randomFloat(25, 125);

    // // draw a random circle each time the program animates:
    // circle(x, y, size);
}
