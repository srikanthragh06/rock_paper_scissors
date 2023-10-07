function findDigits(n) {
    if (n == 0) {
        return 1;
    }
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}

function hideDiv(div) {
    div.style.display = "none";
}

function showDiv(div, display) {
    div.style.display = display;
}

function emptyDivTypeWriterText(div) {
    typeWriterText = div.querySelector(".typewriter");
    typeWriterText.textContent = "";
}

function removeAllBorder() {
    // Get all elements on the page
    var allElements = document.querySelectorAll("*");

    // Loop through each element and remove the border
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.border = "none";
    }
}

function addTypeWriterEffect(div, phrase, display = "block", speed = 50) {
    div.style.display = display;
    const typeWriterDiv = div.querySelector(".typewriter");

    if (!typeWriterDiv) {
        console.error("Element with class 'typewriter' not found.");
        return; // Exit the function if the element is not found
    }

    let i = 0;
    let intervalID = setInterval(function () {
        if (i < phrase.length) {
            typeWriterDiv.textContent += phrase[i];
            i++;
        } else {
            clearInterval(intervalID);
        }
    }, speed);
}

function eraseTypeWriterEffect(div, eraseIterations = 1, speed = 50) {
    const typeWriterDiv = div.querySelector(".typewriter");

    if (!typeWriterDiv) {
        console.error("Element with class 'typewriter' not found.");
        return; // Exit the function if the element is not found
    }

    let newText = typeWriterDiv.textContent;
    let intervalID = setInterval(function () {
        if (eraseIterations > 0) {
            newText = newText.slice(0, -1);
            typeWriterDiv.textContent = newText;
            eraseIterations -= 1;
        } else {
            clearInterval(intervalID);
        }
    }, speed);
}

function updateTypeWriterEffect(
    div,
    phrase,
    display = "block",
    eraseIterations = 1,
    speed = 50
) {
    eraseTypeWriterEffect(div, eraseIterations, speed);
    setTimeout(function () {
        addTypeWriterEffect(div, phrase, display, speed);
    }, speed * eraseIterations);
}

function fadeOut(div) {
    div.classList.add("fade-out");
    // div.style.display='none';
}

function fadeIn(div, display) {
    div.classList.add("fade-in");
    // div.style.display = display;
}
