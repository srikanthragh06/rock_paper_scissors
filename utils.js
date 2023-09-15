function hideDiv(div){
    div.style.display = 'none';
}

function showDiv(div,display){
    div.style.display = display;
}

function removeAllBorder(){
    // Get all elements on the page
    var allElements = document.querySelectorAll('*');

    // Loop through each element and remove the border
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.border = 'none';
    }
}

function addTypeWriterEffect(div,phrase,speed=75){

    const typeWriterDiv=div.querySelector('.typewriter');

    if (!typeWriterDiv) {
        console.error("Element with class 'typewriter' not found.");
        return; // Exit the function if the element is not found
    }

    let i=0;
    let intervalID=setInterval(function(){
    if (i<phrase.length){
        typeWriterDiv.textContent+=phrase[i];
        i++;
    }
    else{
        clearInterval(intervalID);
        console.log(`typewriter effect for ${div} completed`);
    }
    },speed);
}

function eraseTypeWriterEffect(div,eraseIterations=1,speed=50){
    const typeWriterDiv=div.querySelector('.typewriter');

    if (!typeWriterDiv) {
        console.error("Element with class 'typewriter' not found.");
        return; // Exit the function if the element is not found
    }

    let newText=typeWriterDiv.textContent;
    let intervalID=setInterval(function(){
    if (eraseIterations>0){
        newText=newText.slice(0,-1);
        typeWriterDiv.textContent=newText
        eraseIterations-=1
    }
    else{
        clearInterval(intervalID);
        console.log(`erase typewriter effect for ${div} completed`);
    }
    },speed);
}

function updateTypeWriterEffect(div,phrase,eraseIterations=1,speed=500){
    eraseTypeWriterEffect(div,eraseIterations,speed);
    setTimeout(function(){
        addTypeWriterEffect(div,phrase,speed);
    }
    ,speed*eraseIterations);
    
}