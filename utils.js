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
