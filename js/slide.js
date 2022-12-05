//Autor Thomas Palts, 2022
//Kirjeldus: Aitab teha lihtsaid pildigaleriisid, mis vahetavad ise x aja tagant ning ka millele saab vajutada et pilti vahetada.

// Muutuja et leht teaks mis pildi peal ta hetkel on
var i = 0
//Nimekiri piltide allikatest
var images = []
/*Aeg mille tagant vahetada pilte. Kuna setTimeOut() all pool võtab mikrosekundeid. Siis kuna 1 sekund = 1000 mikrosekundit, ehk siis me ootame 6 sekundit iga
pildi vahetusega, mis võrdub 6000 mikrosekundit.*/
var time = 1000 * 6;

var to;
//Kui on id "tom-slide" olemas siis vali need pildid
if (document.getElementById("tom-slide") != null) {
    //Piltide asukoha kausta adress
    var source = 'assets/imgs/Thomas/'
    //Piltide nimed (Uurisin ka for loopi kasutamist, aga Google ütleb et JSil pole otsest accessi kaustadele et failid automaatselt siia lisada)
    images[0] = source + 'Simba1.jpg';
    images[1] = source + 'Simba2.jpg';
    images[2] = source + 'Tripsu1.jpg';
    images[3] = source + 'Tripsu2.jpg';
    images[4] = source + 'Trispu3.jpg';
    images[5] = source + 'Tripsu4.jpg';
    //Kui on id "mia-slide" olemas siis vali need pildid
} else if (document.getElementById("mia-slide") != null) {
    //Piltide asukoha kausta adress
    var source = 'assets/imgs/Mia/'
    //Piltide nimed (Uurisin ka for loopi kasutamist, aga Google ütleb et JSil pole otsest accessi kaustadele et failid automaatselt siia lisada)
    images[0] = source + 'nora1.jpg';
    images[1] = source + 'nora2.jpg';
    images[2] = source + 'nora3.jpg';
    images[3] = source + 'nora4.jpg';
    //Kui on id "merlin-slide" olemas siis vali need pildid
} else if (document.getElementById("merlin-slide") != null) {
    //Piltide asukoha kausta adress
    var source = 'assets/imgs/Merlin/'
    //Piltide nimed (Uurisin ka for loopi kasutamist, aga Google ütleb et JSil pole otsest accessi kaustadele et failid automaatselt siia lisada)
    images[0] = source + 'cleo.jpeg'
    images[1] = source + 'kity.jpeg'
    images[2] = source + 'koos.jpeg'
    images[3] = source + 'nurr.jpeg'
    /*        Kui on id "all-slide" olemas siis vali need pildid
            Selle puhul on tegemist sellise pildiseeriaga, mis läheb pealehele ja näitab kõiki pilte.*/
} else if (document.getElementById("all-slide") != null) {
    var source = 'assets/imgs/Merlin/'
    images[0] = source + 'cleo.jpeg'
    images[1] = source + 'kity.jpeg'
    images[2] = source + 'koos.jpeg'
    images[3] = source + 'nurr.jpeg'
    source = 'assets/imgs/Thomas/'
    images[4] = source + 'Simba1.jpg';
    images[5] = source + 'Simba2.jpg';
    images[6] = source + 'Tripsu1.jpg';
    images[7] = source + 'Tripsu2.jpg';
    images[8] = source + 'Trispu3.jpg';
    images[9] = source + 'Tripsu4.jpg';
    source = 'assets/imgs/Mia/'
    images[10] = source + 'nora1.jpg';
    images[11] = source + 'nora2.jpg';
    images[12] = source + 'nora3.jpg';
    images[13] = source + 'nora4.jpg';
}
//Kutsub funktsiooni
changeSlide();

//Registreerib event handleri, ehk siis kui vajutad slaidide peale, siis kutsub funktsiooni handleClick
document.getElementById("slide").addEventListener("click", handleClick)


//Tühi funktsioon, mis alustab piltide vahetamist
function changeSlide() {
    //Leia lehelt element mille id on "slide" ning vaheta selle src väärtus listi alusel
    document.getElementById("slide").src = images[i];

    //Kui i on väiksem kui kogu piltide arv suurenda i väärtust
    if (i < images.length - 1) {
        i++
        //Kui ei ole väiksem siis pane i = 0, viies pildid tagasi algusesse
    } else {
        i = 0
    }

    //Oota time väärtus (mikrosekundites) ennem kui jooksutad changeSlide() uuesti et vahetada pilti
    to = setTimeout("changeSlide()", time)

}


function handleClick(event) {
    //Eemaldab varem schedulitud pildi vahetuse
    clearTimeout(to)

    //Vahetab pilti
    changeSlide()
}




