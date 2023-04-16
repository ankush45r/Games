'using strict'
let ting=new Audio('ting.mp3');
let gameOver=new Audio('gameover.mp3');
let music=new Audio('music.mp3');
e1=document.getElementById('1');
e2=document.getElementById('2');
e3=document.getElementById('3');
e4=document.getElementById('4');
e5=document.getElementById('5');
e6=document.getElementById('6');
e7=document.getElementById('7');
e8=document.getElementById('8');
e9=document.getElementById('9');
let currPlayer=1;
let visited=[];
for(let i=0;i<9;i++){
    visited.push(0);
}
function drawOnBoard(id){
    ting.play();
    if(visited[parseInt(id.id)-1]===0){
        visited[parseInt(id.id)-1]=1;
        if(currPlayer==1){
            id.value='0';
            id.innerHTML=id.value;
            id.style.color='pink';
            currPlayer=2;
        }
        else{
            id.value='X';
            id.innerHTML=id.value;
            id.style.color='blue';
            currPlayer=1;
        }
    }
}

let winner=document.getElementById('win');
let count=0;
function checkAnyWinner(){
    count++;
    music.play();
    if(e1.value===e2.value && e2.value===e3.value && e1.value==='0'){
        winner.innerHTML=1;
    }
    else if(e1.value===e2.value && e2.value===e3.value && e1.value==='X'){
        winner.innerHTML=2;
    }
    else if(e1.value===e4.value && e4.value===e7.value && e1.value==='0'){
        winner.innerHTML=1;
    }
    else if(e1.value===e4.value && e4.value===e7.value && e1.value==='X'){
        winner.innerHTML=2;
    }
    else if(e1.value===e5.value && e5.value===e9.value && e1.value==='0'){
        winner.innerHTML=1;
    }
    else if(e1.value===e5.value && e5.value===e9.value && e1.value==='X'){
        winner.innerHTML=2;
    }
    else if(e2.value===e5.value && e5.value===e8.value && e2.value==='0'){
        winner.innerHTML=1;
    }
    else if(e2.value===e5.value && e5.value===e8.value && e2.value==='X'){
        winner.innerHTML=2;
    }
    else if(e4.value===e5.value && e5.value===e6.value && e4.value==='0'){
        winner.innerHTML=1;
    }
    else if(e4.value===e5.value && e5.value===e6.value && e4.value==='X'){
        winner.innerHTML=2;
    }
    else if(e9.value===e6.value && e6.value===e3.value && e9.value==='0'){
        winner.innerHTML=1;
    }
    else if(e9.value===e6.value && e6.value===e3.value && e9.value==='X'){
        winner.innerHTML=2;
    }
    else if(e9.value===e8.value && e8.value===e7.value && e9.value==='0'){
        winner.innerHTML=1;
    }
    else if(e9.value===e8.value && e8.value===e7.value && e9.value==='X'){
        winner.innerHTML=2;
    }
    else if(e3.value===e5.value && e5.value===e7.value && e3.value==='0'){
        winner.innerHTML=1;
    }
    else if(e3.value===e5.value && e5.value===e7.value && e3.value==='X'){
        winner.innerHTML=2;
    }
    if(win.innerHTML=='1' || win.innerHTML=='2'){
        gameOver.play();
        music.pause();
    }
    if(count==9 && win.innerHTML!='1' && win.innerHTML!='2'){
        winner.innerHTML="Tie";
        music.pause();
    }
}

e1.addEventListener('click',()=>{drawOnBoard(e1);checkAnyWinner()});
e2.addEventListener('click',()=>{drawOnBoard(e2);checkAnyWinner()});
e3.addEventListener('click',()=>{drawOnBoard(e3);checkAnyWinner()});
e4.addEventListener('click',()=>{drawOnBoard(e4);checkAnyWinner()});
e5.addEventListener('click',()=>{drawOnBoard(e5);checkAnyWinner()});
e6.addEventListener('click',()=>{drawOnBoard(e6);checkAnyWinner()});
e7.addEventListener('click',()=>{drawOnBoard(e7);checkAnyWinner()});
e8.addEventListener('click',()=>{drawOnBoard(e8);checkAnyWinner()});
e9.addEventListener('click',()=>{drawOnBoard(e9);checkAnyWinner()});




