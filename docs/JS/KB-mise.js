let dark = document.getElementById("dark")
let light = document.getElementById("light")
let vyhledávač = document.getElementById("vyhledávač")
let vyhledávačikonka = document.getElementById("vyhledávač-ikonka")
let vysouvací = document.getElementById("vysouvací")
let vyslišta = document.getElementById("vyslišta")
let číslo = "10%"
let barva = 0

function LoadRan() {
    let px1440 = window.matchMedia("(max-width: 1440px)")
    myFunction(px1440)
    px1440.addListener(myFunction)
    function myFunction(px1440) {
        if (px1440.matches) {
            číslo = "15%"
        }
    }

    let px1024 = window.matchMedia("(max-width: 1024px)")
    myFunction2(px1024)
    px1024.addListener(myFunction2)
    function myFunction2(px1024) {
        if (px1024.matches) {
            číslo = "20%"
        }
    }

    let px768 = window.matchMedia("(max-width: 768px)")
    myFunction3(px768)
    px768.addListener(myFunction3)
    function myFunction3(px768) {
        if (px768.matches) {
            číslo = "25%"
        }
    }

    let px425 = window.matchMedia("(max-width: 425px)")
    myFunction4(px425)
    px425.addListener(myFunction4)
    function myFunction4(px425) {
        if (px425.matches) {
            číslo = "100%"
        }
    }
    let světlý = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (světlý) {
        barva = 1;
    }
}


function HledatMisi() {
    let input = vyhledávač.value
    input = input.toLowerCase();
    let Mise = document.getElementsByClassName("Mise");

    for (i = 1; i < Mise.length; i++) {
        if (!document.getElementsByClassName("název")[i].innerHTML.toLowerCase().includes(input)) {
            Mise[i].style.display = "none";
        }
        else {
            Mise[i].style.display = "flex";
        }
    }
}



vyhledávač.addEventListener("focusin", function (event) {
    vyhledávačikonka.style.visibility = "hidden";
});
vyhledávač.addEventListener("focusout", function (event) {
    vyhledávač.value = "";
    vyhledávačikonka.style.visibility = "visible";
});

light.addEventListener("click", function (event) {
    if (barva == 0) {
        barva = 1
        document.body.style.color = "black";
        document.body.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(211, 209, 209, 0.2)";
        document.getElementById("jméno").style.color = "rgb(0, 4, 250)";
        vyhledávač.style.backgroundColor = "rgba(128, 128, 128, 0.25)";
        vyhledávačikonka.style.color = "color: rgba(0, 0, 0, 0.5)";
        for (let i of document.getElementsByTagName("a")) {
            i.style.color = "black";
        }
        light.style.color = "goldenrod";
        dark.style.color = "black";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "rgba(211, 209, 209, 0.2)";
        if (vysouvací.style.width == číslo) {
            vysouvací.style.boxShadow = "5px 5px 10px 5px rgba(0, 0, 0, 0.3)";
            vysouvací.style.borderBottom = " 1px solid rgba(0, 0, 0, 0.3)";
            vysouvací.style.borderRight = " 1px solid rgba(0, 0, 0, 0.3)";
        }
        else {
            vysouvací.style.boxShadow = "none";
            vysouvací.style.border = "none"
        }
        vysouvací.style.backgroundColor = "rgb(246,246,246)";
        for (let i of document.getElementsByTagName("h1")) {
            i.style.color = "rgb(0, 4, 250)"
        }
        for (let i of document.getElementsByTagName("span")) {
            i.style.color = "rgb(0, 4, 250)"
        }
        document.getElementById("obsah").style.color = "black";
        for (let i of document.getElementsByClassName("podmise")) {
            i.style.backgroundColor = "rgb(246,246,246)"
        }
        for (let i of document.getElementsByClassName("Mise")) {
            i.style.borderBottom = "5px solid grey"
        }
        document.getElementsByClassName("konečný")[0].style.borderBottom = "none"
    }
});
dark.addEventListener("click", function (event) {
    if (barva == 1) {
        barva = 0
        document.body.style.color = "rgb(129, 116, 116)";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        document.getElementById("jméno").style.color = "goldenrod";
        vyhledávač.style.backgroundColor = "rgba(128, 128, 128, 0.25)";
        vyhledávačikonka.style.color = "color: rgba(0, 0, 0, 0.5)";
        for (let i of document.getElementsByTagName("a")) {
            i.style.color = "rgb(129, 116, 116)";
        }
        light.style.color = "rgb(129, 116, 116)";
        dark.style.color = "rgba(4, 4, 255, 0.75)";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        vysouvací.style.backgroundColor = "rgb(51,51,51)";
        if (vysouvací.style.width == číslo) {
            vysouvací.style.boxShadow = "5px 5px 10px 5px rgb(0, 0, 0)";
            vysouvací.style.borderBottom = "1px solid rgb(0, 0, 0)";
            vysouvací.style.borderRight = "1px solid rgb(0, 0, 0)";
        }
        else {
            vysouvací.style.boxShadow = "none";
            vysouvací.style.border = "none";
        }
        for (let i of document.getElementsByTagName("h1")) {
            i.style.color = "goldenrod"
        }
        for (let i of document.getElementsByTagName("span")) {
            i.style.color = "goldenrod"
        }
        document.getElementById("obsah").style.color = "rgb(129, 116, 116)";
        for (let i of document.getElementsByClassName("podmise")) {
            i.style.backgroundColor = "rgb(51,51,51)"
        }
        for (let i of document.getElementsByClassName("Mise")) {
            i.style.borderBottom = "5px solid black"
        }
        document.getElementsByClassName("konečný")[0].style.borderBottom = "none"
    }
});

vyslišta.addEventListener("click", function (event) {
    if (vysouvací.style.width == číslo) {
        vysouvací.style.width = "0%";
        vysouvací.style.boxShadow = "none"
    }
    else {
        vysouvací.style.width = číslo;
        if (barva == 1) {
            vysouvací.style.boxShadow = "5px 5px 10px 5px rgb(0, 0, 0, 0.3)";
        }
        else {
            vysouvací.style.boxShadow = "5px 5px 10px 5px rgb(0, 0, 0)"
        }

    }

});