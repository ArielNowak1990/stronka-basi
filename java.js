$(document).ready(function () {

    var bazaFotek = document.getElementsByClassName("next");
    var bazaFot = bazaFotek;
    var miejsce = document.getElementById("kurwa");
    var i = 0;

    function myLoop() {
        setTimeout(function () {
            if (i < bazaFotek.length) {
                var toto = bazaFotek[i].getAttribute('src');
                miejsce.src = toto;
                var sprawdz = function () {
                    for (let q = 0; q < bazaFotek.length; q++)
                        bazaFotek[q].id = " sas";
                };
                sprawdz();
                bazaFotek[i].id = "actu";
                i++;
                myLoop()
            }
            else {
                i = 0;
                myLoop();
            }
        },
            2000)
    };

    var klik = function () {
        for (let k = 0; k < bazaFot.length; k++)
            bazaFot[k].onclick = function () {
                var g = bazaFot[k].getAttribute('src');
                miejsce.src = g;
                var sprawdz = function () {
                    for (let q = 0; q < bazaFotek.length; q++)
                        bazaFotek[q].id = " sas";
                };
                sprawdz();
                bazaFotek[k].id = "actu";
                i = 0;
            };
    };

    var cudo = $("#fba");
    cudo.mouseover(function () {
        document.getElementById("fejs_logo").style.display = "block";
    });

    cudo.mouseout(function () {
        document.getElementById("fejs_logo").style.display = "none";
    });

    var przygas = $(".chmurka");
for (let i=0; i<przygas.length; i++)
{
    console.log(przygas[i]);
    var kolorowy = przygas[i].getAttribute("backgroundColor");

    przygas.mouseover(function () {
        this.style.backgroundColor = "plum";
    });

    przygas.mouseout(function () {
        this.style.backgroundColor = kolorowy;
    });
};

    //    var polozenie = document.getElementById("polozenie");
    //     document.addEventListener('mousemove', lokalizatorek);

    //     function lokalizatorek(e){
    //         polozenie.innerHTML = `
    //         X/Y: ${e.screenY}, ${e.clientY}`;
    //     };



    // var najedz = document.getElementsByClassName("chmurka");
    // for (let z=0; z<najedz.length; z++)
    // {
    //     var najedz_img = [];
    //     najedz_img[z] = najedz[z].getElementsByTagName("img");
    //     console.log(najedz_img[z]);  
    // };

    klik();
    myLoop();

});


// var nacisnij = document.getElementsByClassName("chmurka");
// for(let z=0; z<nacisnij.length; z++)
// {
// nacisnij[z].onclick = function ()
//     {
//         var zoom = this.querySelectorAll("img")[0].src;
//         console.log(zoom);   
//     };
// };

// var nacisnij = document.getElementsByClassName("chmurka");
// for (let z = 0; z < nacisnij.length; z++) {
//     nacisnij[z].onclick = function () {
//         var zoom = this.querySelectorAll("img")[0].src;
//         var odkoduj = document.getElementById("ukryty");
//         odkoduj.style.display = "block";
//         console.log(odkoduj);
//         var fota = document.createElement("div");
//         fota.innerHTML = ("<img src='" + zoom + "' alt='' width='150px' height='150px'>");
//         odkoduj.appendChild(fota);
//     };
// };


// var nacisnij = document.getElementsByClassName("chmurka");
// for (let z = 0; z < nacisnij.length; z++) {
//     nacisnij[z].onclick = function wlacz() {
//         var zoom = this.querySelectorAll("img")[0].src;
//         var odkoduj = document.getElementById("ukryty");
//         odkoduj.style.display = "block";
//         console.log(odkoduj);
//         var fota = document.createElement("div");
//         fota.innerHTML = ("<img src='" + zoom + "' alt='' width='150px' height='150px'>");
//         odkoduj.appendChild(fota);
//     };
// };

// var zamkn = document.getElementsByClassName("chmurka");
// var zamknij = document.querySelector("#ukryty span");
// var odkoduj = document.getElementById("ukryty");

// zamknij.onclick = function(){
//     odkoduj.style.display = "none";
// }
// console.log(zamknij);

var nacisnij = document.getElementsByClassName("chmurka");
for (let z = 0; z < nacisnij.length; z++) {
    nacisnij[z].onclick = function wlacz() {
        var zoom = this.querySelectorAll("img")[0].src;
        var odkoduj = document.getElementById("ukryty");
        odkoduj.style.display = "block";
        console.log(odkoduj);
        var place = document.getElementById("place");
        place.setAttribute("src", zoom)
        // var place_src = place.getAttribute("src");
        // place_src = zoom
        // console.log(place_src);
        
        // var fota = document.createElement("div");
        // fota.innerHTML = ("<img src='" + zoom + "' alt='' width='150px' height='150px'>");
        // odkoduj.appendChild(fota);
    };
};

var zamkn = document.getElementsByClassName("chmurka");
var zamknij = document.querySelector("#ukryty span");
var odkoduj = document.getElementById("ukryty");

zamknij.style.cursor = "pointer";


zamknij.onclick = function(){
    odkoduj.style.display = "none";
};
console.log(zamknij);

var pauzuj = document.getElementById("stoj_kostka");
var kostka = document.getElementById("kostka");
var scena = document.getElementById("scena");

pauzuj.onclick = function()
{
    if (kostka.style.animation !== "0s ease 0s 1 normal none running none")
    {
    kostka.style.animation = "none";
    scena.style.animation =  "none";
    console.log("zatrzymano");
    var wl_wyl = document.getElementById("buton").innerHTML;   
    }
    else
    {
    kostka.style.animation =" obracaniekostki 10s infinite alternate";
    scena.style.animation = " obracanie 10s infinite alternate";
    console.log("wlacza");
    };
}


