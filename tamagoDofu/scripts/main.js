let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Tamago-dofu.jpg") {
        myImage.setAttribute("src", "images/Koya-dofu.jpg");
    } else {
        myImage.setAttribute("src", "images/Tamago-dofu.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    let myName = prompt("あなたの名前を入力してください。");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = myName + "が大好きな"
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName + "が大好きな"
}

myButton.onclick = function() {
    setUserName();
}
