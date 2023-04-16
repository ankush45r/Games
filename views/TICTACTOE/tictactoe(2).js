'using strict'

let ting = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let music = new Audio('music.mp3');

let boxes = document.getElementsByClassName('box');
let turn = '0';
function checkAnyWinner() {
    let winArray = [
        [0, 1, 2, -2, 49, 0],
        [3, 4, 5, -2, 150, 0],
        [6, 7, 8, -2, 247, 0],
        [0, 3, 6, -103, 145, 90],
        [1, 4, 7, -2, 146, 90],
        [2, 5, 8, 97, 149, 90],
        [0, 4, 8, 0, 150, 45],
        [2, 4, 6, 0, 150, -45]
    ];
    winArray.forEach(e => {
        if (boxes[e[0]].innerHTML === boxes[e[1]].innerText && boxes[e[1]].innerText === boxes[e[2]].innerText && boxes[e[0]].innerText != "") {
            gameOver.play();
            document.getElementById('win').innerText = boxes[e[0]].innerText;
            console.log('x');
            document.querySelector('.line').style.transform = `translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.opacity = 1;
        }
    })
}


// Array.from(boxes).forEach(e => {
//     e.addEventListener('click', () => {
//         ting.play();
//         if (e.innerText === '') {
//             if (turn == '0') {
//                 e.innerText = '0';
//                 e.style.color = 'pink';
//                 turn = 'X';
//                 checkAnyWinner();
//             }
//             else {
//                 e.innerText = 'X';
//                 e.style.color = 'blue';
//                 turn = '0';
//                 checkAnyWinner();
//             }
//         }
//     })
// })


document.querySelector('.grid').addEventListener('click', (e) => {
    ting.play();
    if (e.target.innerText === '') {
        if (turn == '0') {
            e.target.innerText = '0';
            e.target.style.color = 'pink';
            turn = 'X';
            checkAnyWinner();
        }
        else {
            e.target.innerText = 'X';
            e.target.style.color = 'blue';
            turn = '0';
            checkAnyWinner();
        }
    }
})

// document.querySelector('.restart').addEventListener('click' , ()=>{
//     reset();
// })

function reset() {
    Array.from(boxes).forEach(e => {
        e.innerText = "";
        turn = '0';
    })
    document.getElementById('win').innerHTML = '';
    document.querySelector('.line').style.opacity = 0;
    document.querySelector('.line').style.transform = `translate(${0}px,${0}px) rotate(${0}deg)`;
}

document.querySelector('.restart').addEventListener('click', () => {
    reset();
})
