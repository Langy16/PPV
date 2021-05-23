let dark = document.getElementById("dark")
let light = document.getElementById("light")
let vysouvací = document.getElementById("vysouvací")
let vyslišta = document.getElementById("vyslišta")
let číslo = "10%"
let barva = 0;

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

light.addEventListener("click", function (event) {
    if (barva == 0) {
        barva = 1
        document.body.style.color = "black";
        document.body.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
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
        document.getElementById("zobraz").style.backgroundColor = "rgba(211, 209, 209, 0.2)";
        document.getElementById("seznam").style.backgroundColor = "rgba(211, 209, 209, 0.2)";
        document.getElementsByTagName("h1")[0].style.color = "rgb(0, 4, 250)";
    }
});
dark.addEventListener("click", function (event) {
    if (barva == 1) {
        barva = 0
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
        document.getElementById("zobraz").style.backgroundColor = "black";
        document.getElementById("seznam").style.backgroundColor = "rgb(127,127,127)";
        document.getElementsByTagName("h1")[0].style.color = "goldenrod";
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
let Up1 = ["Terén", "Vytvoření Terénu mapy", "25.11.2020"]
let Up2 = ["Rytířova", "Postavení Obydlí v rytířově:", "-Varanova Bouda", "-4 vyšší baráky", "-4 širší baráky", "-Regalův pokoj", "-Les", "2.3.2021"]
let Up3 = ["Herní Mechanika", "Přidání Mise: Úvodní mise v Rytířově", "Přidání funkčních přátelských i nepřátelských NPC", "4.3.2021"]
let Up4 = ["Dabing", "Nadabování 5 postav:", "-Varan:", "-Regala", "-Langa", "-Generál XXX", "-Weed", "10.3.2021"]
let Up5 = ["Demo", "Vydání první plně funkčí verze hry", "15.3.2021"]
let Updaty = [Up1, Up2, Up3, Up4, Up5]

function CLICK(sender) {
    if (document.getElementsByClassName("popistext") != null) {
        let délka = document.getElementsByClassName("popistext").length
        for (let item = 0; item < délka; item++) {
            console.log(document.getElementsByClassName("popistext")[0])
            document.getElementById("popis").removeChild(document.getElementsByClassName("popistext")[0])
        }
    }
    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
        if (document.getElementsByTagName("li")[i] == sender) {
            let index = i;
            let kad = Updaty[index]
            document.getElementById("nazev").innerHTML = kad[0]
            document.getElementById("datum").innerHTML = kad[kad.length - 1]
            for (let i = 1; i < kad.length - 1; i++) {
                let x = document.createElement("p")
                x.innerHTML = kad[i]
                x.className = "popistext";
                document.getElementById("popis").appendChild(x);
            }
        }
    }
};
window.addEventListener('load', (event) => {
    for (let i = 1; i < document.getElementsByTagName("li").length; i++) {
        if (document.getElementsByTagName("li").length - 1 == i) {
            let index = i;
            let kad = Updaty[index]
            document.getElementById("nazev").innerHTML = kad[0]
            document.getElementById("datum").innerHTML = kad[kad.length - 1]
            for (let i = 1; i < kad.length - 1; i++) {
                let x = document.createElement("p")
                x.innerText = kad[i]
                x.className = "popistext";
                document.getElementById("popis").appendChild(x);
            }
        }
    }
});