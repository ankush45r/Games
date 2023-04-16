let rolldice = document.getElementById('rolldice');
rolldice.addEventListener(onclick, generateRandom);

let target = 50;
let p1_score = 0, p2_score = 0;
let curr_player = 1;
document.getElementById("p1").classList.add('color1');
document.getElementById('p2').classList.add('color2');

let curr_1 = 0, curr_2 = 0;

function generateRandom() {
    if (p1_score < target && p2_score < target) {
        let x = Math.ceil(Math.random() * 6);
        document.getElementById('dice_no').src = `dice${x}.png`;
        if (curr_player == 1) {
            let curr = document.getElementById('curr_1');
            if (x != 1) {
                curr_1 += x;
                curr.innerHTML = curr_1;
            }
            else {
                curr.innerHTML = 0;
                curr_1 = 0;
                curr_player = 2;
                document.getElementById('p2').classList.add('color1');
                document.getElementById('p2').classList.remove('color2');
                document.getElementById('p1').classList.add('color2');
                document.getElementById('p1').classList.remove('color1');
            }
        }
        else {
            let curr = document.getElementById('curr_2');
            if (x != 1) {
                curr_2 += x;
                curr.innerHTML = curr_2;
            }
            else {
                curr.innerHTML = 0;
                curr_2 = 0;
                curr_player = 1;
                document.getElementById('p1').classList.add('color1');
                document.getElementById('p1').classList.remove('color2');
                document.getElementById('p2').classList.add('color2');
                document.getElementById('p2').classList.remove('color1');
            }
        }
    }

}

function hold() {
    if (p1_score < target && p2_score < target) {
        if (curr_player == 1) {
            p1_score += curr_1;
            document.getElementById('score1').innerHTML = p1_score;
            curr_1 = 0;
            document.getElementById('curr_1').innerHTML = curr_1;
            curr_player = 2;
            document.getElementById('p2').classList.add('color1');
            document.getElementById('p2').classList.remove('color2');
            document.getElementById('p1').classList.add('color2');
            document.getElementById('p1').classList.remove('color1');
        }
        else {
            p2_score += curr_2;
            document.getElementById('score2').innerHTML = p2_score;
            curr_2 = 0;
            document.getElementById('curr_2').innerHTML = curr_2;
            curr_player = 1;
            document.getElementById('p1').classList.add('color1');
            document.getElementById('p1').classList.remove('color2');
            document.getElementById('p2').classList.add('color2');
            document.getElementById('p2').classList.remove('color1');
        }
        if (p1_score >= target) {
            document.getElementById('won1').innerHTML = "PLAYER 1 WON";
        }
        else if (p2_score >= target) {
            document.getElementById('won2').innerHTML = "PLAYER 2 WON";
        }
    }
    if (p1_score >= target) {
        document.getElementById('won1').innerHTML = "PLAYER 1 WON";
        document.getElementById('won2').innerHTML = "PLAYER 2 LOSE"
        document.getElementById('p1').classList.remove('color2');
        document.getElementById('p1').classList.add('win_color');
        document.getElementById('p2').classList.add('not_win');
        document.getElementById('p2').classList.remove('color1');
    }
    else if (p2_score >= target) {
        document.getElementById('won2').innerHTML = "PLAYER 2 WON";
        document.getElementById('won1').innerHTML = "PLAYER 1 LOSE";
        document.getElementById('p2').classList.remove('color2');
        document.getElementById('p2').classList.add('win_color');
        document.getElementById('p1').classList.remove('color1');
        document.getElementById('p1').classList.add('not_win');
    }

}

function reset() {
    curr_player = 1;
    document.getElementById("p1").classList.add('color1');
    document.getElementById('p1').classList.remove('color2');
    document.getElementById('p2').classList.add('color2');
    document.getElementById('p2').classList.remove('color1');
    document.getElementById('p1').classList.remove('not_win');
    document.getElementById('p2').classList.remove('not_win');
    p1_score = p2_score = curr_1 = curr_2 = 0;
    document.getElementById('won1').innerHTML = 'PLAYER 1';
    document.getElementById('won2').innerHTML = 'PLAYER 2';
    document.getElementById('score1').innerHTML = p1_score;
    document.getElementById('score2').innerHTML = p2_score;
    document.getElementById('curr_1').innerHTML = curr_1;
    document.getElementById('curr_2').innerHTML = curr_2;

    document.getElementById('p1').classList.remove('win_color');
    document.getElementById('p2').classList.remove('win_color');

}


