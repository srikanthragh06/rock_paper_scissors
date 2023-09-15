
function generateCPUMove(){
    const moveFloat=Math.random()*3;
    let move;

    if (moveFloat<1) {move=0}
    else if (moveFloat>=1 && moveFloat<2) { move=1 }
    else{ move=2 }

    return move;

}

function startGameTitleTransition(titleDiv){
    titleDiv.style.transform = "translateY(-50px)";
}



function main(){
    // tag initialization
    const header=document.querySelector('.header')
    const middleTitle=document.querySelector('.middle__title-container')
    const middleResult=document.querySelector('.middle__result-container');
    const middleWaiting=document.querySelector('.middle__waiting-container');
    const hands=document.querySelectorAll(".hands")

    //variables initialization
    const userPts=0;
    const cpuPts=0;
    const score={userScore:0,cpuScore:0};
    
    let userMove;

    // Execution

    removeAllBorder();
    //hideDiv(header);
    hideDiv(middleTitle);
    //hideDiv(middleWaiting);
    hideDiv(middleResult);
    console.log(hands);
    startDivTransition(middleTitle);

}
main();