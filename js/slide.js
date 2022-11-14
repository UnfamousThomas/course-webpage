    var i = 0 // Alguspunkt
    var images = [] //Piltide list
    var time = 1000 * 6; //Millisekundites aeg millal pilte vahetada. 1 sekund = 1000 millisekundit
    if (document.getElementById("tom-slide") != null) { //Kui on Thomase slaidid siis vali need pildid
        images[0] = 'assets/imgs/Thomas/Simba1.jpg';
        images[1] = 'assets/imgs/Thomas/Simba2.jpg';
    } else if (document.getElementById("mia-slide") != null) { //Kui on Mia slaidid siis vali need pildid
        //images[0] = 'todo';
    } else if (document.getElementById("merlin-slide") != null) { //Kui on Merlini slaidid siis vali need pildid
        //images[0] = 'todo';
    }

        changeSlide(); //Alusta slaidide vahetamist



function changeSlide() {
    document.getElementById("slide").src = images[i]; //Vaheta elemendi, mille id on "slide", "src" tagi väärtust

    //Muuda numbrit
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }

    //Oota time väärtus ennem kui jooksutad changeSlide() uuesti
    setTimeout("changeSlide()", time)
}

