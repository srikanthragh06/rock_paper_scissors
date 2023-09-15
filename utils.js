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

function typeWriterEffect(div,phrase,speed=125){

    const typeWriterDiv=div.querySelector('.typewriter')

    let i=0;
    intervalID=setInterval(function(){
    if (i<phrase.length){
        console.log(phrase[i]);
        typeWriterDiv.textContent+=phrase[i];
        i++;
    }
    else{
        clearInterval(intervalID);
        console.log('end')
    }
    },speed);
}