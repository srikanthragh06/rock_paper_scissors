
function generateCPUMove(moves){
    const moveFloat=Math.random()*3;
    if (moveFloat<1) {
        moves.cpuMove='r'
    }
    else if (moveFloat>=1 && moveFloat<2) 
    { 
        moves.cpuMove='p' 
    }
    else{ 
        moves.cpuMove='s' 
    }
}

function getResult(moves){
    if (moves.userMove==moves.cpuMove){
        return 0;
    }
    else if ((moves.userMove=='r' && moves.cpuMove=='s')||(moves.userMove=='p' && moves.cpuMove=='r')||(moves.userMove=='s' && moves.cpuMove=='p')){
        return 1;
    }
    else{
        return -1;
    }
}




function main(){

    
    // tag initialization
    const footer=document.querySelector('.footer');
    const userScoreDisplay=document.querySelector('.score__user-score');
    const cpuScoreDisplay=document.querySelector('.score__cpu-score');
    const header=document.querySelector('.header');
    const middleTitle=document.querySelector('.middle__title-container')
    const middleResult=document.querySelector('.middle__result-container');
    const middleWaiting=document.querySelector('.middle__waiting-container');
    const userHands=document.querySelectorAll(".userHands");
    const stageHand1=document.querySelector('.middle__result-container__stage__hand1');
    const stageHand2=document.querySelector('.middle__result-container__stage__hand2');
    const resultUpdateText=document.querySelector('.middle__result-container__updation-text');
    const resultDetailsText=document.querySelector('.middle__result-container__details-text');

    //variables initialization
    
    const score={userScore:0,cpuScore:0};
    
    const moves={userMove:'r',cpuMove:'r'};
    let needHandListeners=false;
    let isHandListenersAdded=false;
    let isHandListenersRemoved=false;
    
    let needResults=false;
    let isResultRunning=false;

    // Execution

    removeAllBorder();
    hideDiv(userScoreDisplay);
    hideDiv(cpuScoreDisplay);
    hideDiv(header);
    //hideDiv(middleTitle);
    hideDiv(middleWaiting);
    hideDiv(middleResult);
    
    middleTitle.addEventListener('click',function(){
        hideDiv(footer);
        hideDiv(middleTitle);
        addTypeWriterEffect(middleWaiting,"make your move...",'flex');
        addTypeWriterEffect(userScoreDisplay,"user_score: 0",'block');
        addTypeWriterEffect(cpuScoreDisplay,"cpu_score: 0",'block');
        showDiv(header,'flex');
        needHandListeners = true;
    });

    const clickUserHands = [
        function() {
            console.log("user rock clicked");
            moves.userMove='r';
            generateCPUMove(moves);
            needHandListeners=false;
            needResults=true;
        },
        function() {
            console.log("user paper clicked");
            moves.userMove='p';
            generateCPUMove(moves);
            needHandListeners=false;
            needResults=true;
        },
        function() {
            console.log("user scissors clicked");
            moves.userMove='s';
            generateCPUMove(moves);
            needHandListeners=false;
            needResults=true;
        },
    ];
      
    setInterval(function() {
        
        if (needHandListeners && !isHandListenersAdded) {
            console.log("hand listeners added");
            
            for ( i=0;i<userHands.length;i++){
                userHands[i].addEventListener('click', clickUserHands[i]);
            }

            isHandListenersAdded=true;
            isHandListenersRemoved=false;
        } 
        else if (!needHandListeners && !isHandListenersRemoved) {
            console.log("hand listeners removed");
            
            for ( i=0;i<userHands.length;i++){
                userHands[i].removeEventListener('click', clickUserHands[i]);
            }

            isHandListenersRemoved = true;
            isHandListenersAdded=false;
        }
    }, 25);

    function placeResultImgs(){
        let imgDiv=stageHand1.querySelector('img');
        if (moves.userMove=='r'){
            imgDiv.src='img/rock_right.png';
        }
        else if (moves.userMove=='p'){
            imgDiv.src='img/paper_right.png';
        }
        else {
            imgDiv.src='img/scissors_right.png';
        }

        imgDiv=stageHand2.querySelector('img');
        if (moves.cpuMove=='r'){
            imgDiv.src='img/rock_left.png';
        }
        else if (moves.cpuMove=='p'){
            imgDiv.src='img/paper_left.png';
        }
        else {
            imgDiv.src='img/scissors_left.png';
        }
    }

    function updateResultDetails(){
        if (moves.userMove==moves.cpuMove) {
            addTypeWriterEffect(resultDetailsText,"well that's a draw",'block');
        }
        else if ((moves.userMove=='r' && moves.cpuMove=='p')||(moves.userMove=='p' && moves.cpuMove=='r')){
            addTypeWriterEffect(resultDetailsText,"paper beats rock!!",'block');
        }
        else if ((moves.userMove=='r' && moves.cpuMove=='s')||(moves.userMove=='s' && moves.cpuMove=='r')){
            addTypeWriterEffect(resultDetailsText,"rock beats scissors!!",'block');
        }
        else if ((moves.userMove=='s' && moves.cpuMove=='p')||(moves.userMove=='p' && moves.cpuMove=='s')){
            addTypeWriterEffect(resultDetailsText,"scissors beats paper!!",'block');
        }

    }
    
    function updateResultUpdate(res){
        if (res==1){
            addTypeWriterEffect(resultUpdateText,"user_score++;",'block');
        }
        else if(res==0){
            addTypeWriterEffect(resultUpdateText,"hmmmm...",'block');
        }
        else{
            addTypeWriterEffect(resultUpdateText,"cpu_score++;",'block');
        }
    }

    function updateScore(res){

        if (res==1){
            let scoreDigits=findDigits(score.userScore);
            score.userScore+=1;
            updateTypeWriterEffect(userScoreDisplay,score.userScore.toString(),'block',scoreDigits,750);
        }
        else if(res==-1){
            let scoreDigits=findDigits(score.cpuScore);
            score.cpuScore+=1;
            updateTypeWriterEffect(cpuScoreDisplay,score.cpuScore.toString(),'block',scoreDigits,750);
        }
    }

    function runResults(){
        isResultRunning=true;

        

        setTimeout(() => {
            hideDiv(middleResult);
            emptyDivTypeWriterText(resultDetailsText);
            emptyDivTypeWriterText(resultUpdateText);

            emptyDivTypeWriterText(middleWaiting);
            showDiv(middleWaiting,'flex');
            addTypeWriterEffect(middleWaiting,"make your move...",'flex');
            needHandListeners=true;
        }, 2500);

        hideDiv(middleWaiting);
        placeResultImgs(moves);
        let res=getResult(moves);
        setTimeout(() => {
            
            updateResultUpdate(res);
        }, 600);
        updateResultDetails();
        
        updateScore(res);

        
        showDiv(middleResult,'flex');
        isResultRunning=false;
    }

    setInterval(function() {
        if (needResults && !isResultRunning){
            runResults();
            needResults=false;
        }
    },25);
    

}
main();