
function generateCPUMove(){
    const moveFloat=Math.random()*3;
    let move;

    if (moveFloat<1) {move=0}
    else if (moveFloat>=1 && moveFloat<2) { move=1 }
    else{ move=2 }

    return move;

}






function main(){
    // tag initialization
    const scoreDisplay=document.querySelector('.score');
    const userScoreDisplay=document.querySelector('.score__user-score');
    const cpuScoreDisplay=document.querySelector('.score__cpu-score');
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
    //hideDiv(scoreDisplay);
    //hideDiv(header);
    hideDiv(middleTitle);
    //hideDiv(middleWaiting);
    hideDiv(middleResult);
    
    addTypeWriterEffect(middleWaiting,"make your move...",50);
    addTypeWriterEffect(userScoreDisplay,"user_score: 0",50);
    addTypeWriterEffect(cpuScoreDisplay,"cpu_score: 0",50);
    setTimeout(function() {
        updateTypeWriterEffect(userScoreDisplay,"1",1);
    },3000);


}
main();