let dark = document.getElementById("dark")
let light = document.getElementById("light")
let vysouvací = document.getElementById("vysouvací")
let vyslišta = document.getElementById("vyslišta")
let x;
let číslo = "10%"

function LoadRan() {
    let ikonky = ["Regala", "Špirkova", "Kaufland", "Norma", "Varan", "Zš", "Weed", "Autosalon", "Kad", "TenRyt", "inVosa", "outVosa", "TenZár", "Pryt", "Pobi", "Pšpi", "Pvar", "Malo", "Rmin", "Smin", "Kmin", "Imin", "Zmin", "Zsmin", "Ukryt"]
    for (var ikonka of ikonky) {
        x = document.createElement("i")
        x.className = "fas fa-map-marker " + ikonka;
        document.getElementById("mapid").appendChild(x);
    }
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
}

light.addEventListener("click", function (event) {
    document.body.style.color = "black";
    document.getElementById("piny").style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
    document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(211, 209, 209, 0.2)";
    document.getElementById("jméno").style.color = "rgb(0, 4, 250)";
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
    for (let i of document.getElementsByTagName("h3")) {
        i.style.color = "rgb(0, 4, 250)"
    }
    for (let i of document.getElementsByTagName("span")) {
        i.style.color = "rgb(0, 4, 250)"
    }

});
dark.addEventListener("click", function (event) {
    document.getElementById("piny").style.backgroundColor = "rgb(127,127,127)";
    document.body.style.color = "rgb(129, 116, 116)";
    document.body.style.backgroundColor = "rgb(127,127,127)";
    document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    document.getElementById("jméno").style.color = "goldenrod";
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
    for (let i of document.getElementsByTagName("h3")) {
        i.style.color = "goldenrod"
    }
    for (let i of document.getElementsByTagName("span")) {
        i.style.color = "goldenrod"
    }
});

vyslišta.addEventListener("click", function (event) {
    if (vysouvací.style.width == číslo) {
        vysouvací.style.width = "0%";
        vysouvací.style.boxShadow = "none"
    }
    else {
        vysouvací.style.width = číslo;
        if (light.style.color == "goldenrod") {
            vysouvací.style.boxShadow = "5px 5px 10px 5px rgb(0, 0, 0, 0.3)";
        }
        else {
            vysouvací.style.boxShadow = "5px 5px 10px 5px rgb(0, 0, 0)"
        }

    }

});


function Hlavní(sender, number) {
    let kdoH;
    let značkaH;
    let itemy = document.getElementsByClassName("druhy")[number].getElementsByTagName("p")
    let int = 1;
    for (var předměty of itemy) {
        CLICK(předměty, int, number)
        int++
    }
}
function CLICK(sender, number, numH) {
    let item = sender
    let kdo;
    let značka;
    switch (numH) {
        case 0:
            switch (number) {
                case 1:
                    kdo = document.getElementById("Weed")
                    značka = document.getElementsByClassName("Weed")[0]
                    break;
                case 2:
                    kdo = document.getElementById("Autosalon")
                    značka = document.getElementsByClassName("Autosalon")[0]
                    break;
                case 3:
                    kdo = document.getElementById("Kad")
                    značka = document.getElementsByClassName("Kad")[0]
                    break;
            }
            break;
        case 1:
            switch (number) {
                case 1:
                    kdo = document.getElementById("Regala")
                    značka = document.getElementsByClassName("Regala")[0]
                    break;
                case 2:
                    kdo = document.getElementById("Špirkova")
                    značka = document.getElementsByClassName("Špirkova")[0]
                    break;
                case 3:
                    kdo = document.getElementById("Varan")
                    značka = document.getElementsByClassName("Varan")[0]
                    break;
                case 4:
                    kdo = document.getElementById("Norma")
                    značka = document.getElementsByClassName("Norma")[0]
                    break;
                case 5:
                    kdo = document.getElementById("Kaufland")
                    značka = document.getElementsByClassName("Kaufland")[0]
                    break;
                case 6:
                    kdo = document.getElementById("Zš")
                    značka = document.getElementsByClassName("Zš")[0]
                    break;
            }
            break;
        case 2:
            switch (number) {
                case 1:
                    kdo = document.getElementById("TenRyt")
                    značka = document.getElementsByClassName("TenRyt")[0]
                    break;
                case 2:
                    kdo = document.getElementById("inVosa")
                    značka = document.getElementsByClassName("inVosa")[0]
                    break;
                case 3:
                    kdo = document.getElementById("outVosa")
                    značka = document.getElementsByClassName("outVosa")[0]
                    break;
                case 4:
                    kdo = document.getElementById("TenZár")
                    značka = document.getElementsByClassName("TenZár")[0]
                    break;
            }
            break;
        case 3:
            switch (number) {
                case 1:
                    kdo = document.getElementById("Pryt")
                    značka = document.getElementsByClassName("Pryt")[0]
                    break;
                case 2:
                    kdo = document.getElementById("Pobi")
                    značka = document.getElementsByClassName("Pobi")[0]
                    break;
                case 3:
                    kdo = document.getElementById("Pšpi")
                    značka = document.getElementsByClassName("Pšpi")[0]
                    break;
                case 4:
                    kdo = document.getElementById("Pvar")
                    značka = document.getElementsByClassName("Pvar")[0]
                    break;
            }
            break;
        case 4:
            switch (number) {
                case 1:
                    kdo = document.getElementById("Malo")
                    značka = document.getElementsByClassName("Malo")[0]
                    break;
                case 2:
                    kdo = document.getElementById("Rmin")
                    značka = document.getElementsByClassName("Rmin")[0]
                    break;
                case 3:
                    kdo = document.getElementById("Smin")
                    značka = document.getElementsByClassName("Smin")[0]
                    break;
                case 4:
                    kdo = document.getElementById("Kmin")
                    značka = document.getElementsByClassName("Kmin")[0]
                    break;
                case 5:
                    kdo = document.getElementById("Imin")
                    značka = document.getElementsByClassName("Imin")[0]
                    break;
                case 6:
                    kdo = document.getElementById("Zmin")
                    značka = document.getElementsByClassName("Zmin")[0]
                    break;
                case 7:
                    kdo = document.getElementById("Zsmin")
                    značka = document.getElementsByClassName("Zsmin")[0]
                    break;
                case 8:
                    kdo = document.getElementById("Ukryt")
                    značka = document.getElementsByClassName("Ukryt")[0]
                    break;
            }
            break;
    }
    if (item.style.textDecoration != "line-through") {
        item.style.textDecoration = "line-through"
        item.style.opacity = "0.5"
        značka.style.visibility = "hidden";
        kdo.className = "far fa-circle"
        kdo.style.opacity = "0.5"
    }
    else {
        item.style.textDecoration = "none"
        item.style.opacity = "1"
        značka.style.visibility = "visible";
        kdo.className = "far fa-check-circle"
        kdo.style.opacity = "1"
    }
}