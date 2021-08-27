let i=0;
let status = [[undefined,undefined,undefined], [undefined,undefined,undefined], [undefined,undefined,undefined]]
function turn() {
    if(i%2 == 0){
        i++;return 'x'}
    i++;
    return 'o'
}

function doit() {
    let x=turn()
    if(x=='o'){x='player1'}
    else{x='player2'}
    document.getElementById("t").innerText=`congrates! ${x} won`
    document.getElementsByTagName('main')[0].style.filter="blur(2px)";
    document.getElementsByTagName('article')[0].style.filter="blur(4px)";
    document.getElementsByTagName('div')[0].style.visibility='visible';}



function hit(param) {
    let reg = turn();
    document.getElementById(param).value = reg;
    document.getElementById(param).setAttribute("disabled",'true')
    if(param == 'first'){status[0][0]=reg}
    if(param == 'second'){status[0][1]=reg}
    if(param == 'third'){status[0][2]=reg}
    if(param == 'forth'){status[1][0]=reg}
    if(param == 'fifth'){status[1][1]=reg}
    if(param == 'sixth'){status[1][2]=reg}
    if(param == 'seventh'){status[2][0]=reg}
    if(param == 'eight'){status[2][1]=reg}
    if(param == 'ninth'){status[2][2]=reg}
    check();
console.log(status)

}
function check() {
    if(status[0][0]==status[1][1] && status[1][1]==status[2][2] &&status[0][0] != undefined){
        doit();return 0;}
if(status[0][2]==status[1][1] && status[2][0]==status[1][1] &&  status[1][1] != undefined){doit();return 0;}

for (let index = 0; index < status.length; index++) {
    if(status[index][0]== status[index][1] && status[index][1] == status[index][2] &&status[index][0] != undefined){doit();return 0;}
}
for (let index = 0; index < status.length; index++) {
    if(status[0][index]== status[1][index] && status[2][index] == status[0][index] &&status[0][index] != undefined){doit();return 0;}
}
if(i==9){draw()}
}
function reset() {
    // i=0;
    // status = [[undefined,undefined,undefined], [undefined,undefined,undefined], [undefined,undefined,undefined]];

    // document.getElementsByTagName('div')[0].style.visibility='hidden';
    // document.getElementsByTagName('main')[0].style.filter="none";
    // document.getElementById('first').value = '';
    // document.getElementById('first').setAttribute("disabled",'')

}
function draw() {
    document.getElementsByTagName('main')[0].style.filter="blur(20px)";
    document.getElementsByTagName('article')[0].style.filter="blur(20px)";
    document.getElementsByTagName('div')[1].style.visibility='visible';
}