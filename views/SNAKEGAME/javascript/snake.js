let inputDir = { x: 0, y: 0 };
const foodsound = new Audio('music/music.mp3');
foodsound.play();
// const gameOverSound = new Audio('../songs/gameover.mp3');
// const moveSound = new Audio('../songs/move.mp3');
// const musicSound = new Audio('../songs/music.mp3');
let speed = 10,score=0,score_;

let size=25;

let lastPaintTime = 0;
let snakeArr = [
    { x: Math.floor(Math.random() * 25), y: Math.floor(Math.random() * 25)  }
]
let food = { x: Math.floor(Math.random() * 24), y: Math.floor(Math.random() *24)  };
let pause_btn=0;
function pause(){
    pause_btn=1;

}

function play(){
    pause_btn=0;
}
// Game functions
function main(currTime) {
    window.requestAnimationFrame(main);
    if ((currTime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    // console.log(currTime);
    lastPaintTime = currTime;
    if(pause_btn==0){
    gameEngine();
    }
}


function isCollide(snakeArr){
    for(let i=1;i<snakeArr.length;i++){
        if(snakeArr[0].x===snakeArr[i].x && snakeArr[0].y===snakeArr[i].y){
            score=0;
            // gameOverSound.play();
            alert('Game over');
            return true;
        }
        if(snakeArr[0].x>=size || snakeArr[0].y>=size || snakeArr[0].x<0 || snakeArr[0].y<0){
            // gameOverSound.play();
            score=0;
            alert('Game over');
            return true;
        }
    }
    if(snakeArr[0].x>=size || snakeArr[0].y>=size || snakeArr[0].x<0 || snakeArr[0].y<0){
        // gameOverSound.play();
        score=0;
        alert('Game over');
        return true;
    }
    return false;
}

function gameEngine() {
    if(isCollide(snakeArr)){
        document.getElementById('your_score').innerHTML=score;
        snakeArr=[
            { x: 13, y: 15 }
        ]
        food = { x: 5, y: 7 };
        inputDir = {x:0,y:0};
    }
    // for(let i=0;i<snakeArr.length;i++){
    //     console.log(snakeArr[i]);
    // }
    //Part 1: Updating the snake array

    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        score+=1;
        if(score_<score){
            score_=score;
            localStorage.setItem('highscore',JSON.stringify(score_));
            document.getElementById('highest').innerHTML=score_;
        }
        document.getElementById("your_score").innerHTML=score;
        // foodsound.play();
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });

        food = { x: Math.floor(Math.random() * 22+2), y: Math.floor(Math.random() * 22+2) };
        console.log("x");

    }

    //Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] =  {...snakeArr[i]};
    // console.log({...snakeArr[i]});
    // console.log("this->"+snakeArr[i])
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //Part 2: Render the snake and food
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElementPet = document.createElement('div');
        snakeElement.appendChild(snakeElementPet);
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index == 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElementPet.classList.add('snakePet');
            snakeElement.classList.add('tail');
        }
        board.appendChild(snakeElement);
    })
    // Adding food element to the board
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);


}

let highscore=localStorage.getItem('highscore');
if(highscore===null){
    score_=0;
    localStorage.setItem('highscore',JSON.stringify(score_));
    document.getElementById('highest').innerHTML=score_;
}
else{
    score_=JSON.parse(highscore);
    document.getElementById('highest').innerHTML=score_;
}

window.requestAnimationFrame(main);

function up(){
    inputDir.x=0;
    inputDir.y=-1;
}

function down(){
    inputDir.x=0;
    inputDir.y=1;
}

function left(){
    inputDir.x=-1;
    inputDir.y=0;
}

function right(){
    inputDir.x=1;
    inputDir.y=0;
}

// deciding the direction of the snake to move next
document.addEventListener('keydown', e => {
    // moveSound.play();
    // inputDir = {x: 0, y: 1}
    switch (e.key) {
        case 'ArrowUp':
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case 'ArrowDown':
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case 'ArrowLeft':
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case 'ArrowRight':
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }

})






















//Main logic starts here

