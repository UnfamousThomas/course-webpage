    var i = 0 // Alguspunkt
    var images = [] //Piltide list
    var time = 1000 * 6; //Millisekundites aeg millal pilte vahetada. 1 sekund = 1000 millisekundit


    if (document.getElementById("tom-slide") != null) { //Kui on Thomase slaidid siis vali need pildid
        var source = 'assets/imgs/Thomas/'
        images[0] = source + 'Simba1.jpg';
        images[1] = source + 'Simba2.jpg';
        images[2] = source + 'Tripsu1.jpg';
        images[3] = source + 'Tripsu2.jpg';
        images[4] = source + 'Trispu3.jpg';
        images[5] = source + 'Tripsu4.jpg';
    } else if (document.getElementById("mia-slide") != null) { //Kui on Mia slaidid siis vali need pildid
        images[0] = 'assets/imgs/Mia/nora1.jpg';
        images[1] = 'assets/imgs/Mia/nora2.jpg';
        images[2] = 'assets/imgs/Mia/nora3_uus.jpg';
        images[3] = 'assets/imgs/Mia/nora4.jpg';
    } else if (document.getElementById("merlin-slide") != null) { //Kui on Merlini slaidid siis vali need pildid
        var source = 'assets/imgs/Merlin/'
        images[0] = source + 'cleo.jpeg'
        images[1] = source + 'kity.jpeg'
        images[2] = source + 'koos.jpeg'
        images[3] = source + 'nurr.jpeg'
    }

        changeSlide(); //Alusta slaidide vahetamist

//Kuidas panna pilte:
//1. Lisa pildid assets/imgs/nimi alla
//2. Lisa rida 4.st algavale if, else ifi enda elemendi alla pildid (vaata tom-slide näidet), näiteks:
// images[0] = 'assets/imgs/Mia/Pilt.jpg';
//3. Seejärel oma htmlil selline asi, kui seda juba ei ole:
//<div id="mia-slide"> NB! See peab matchima üleval oleva elementid'ga (e.g tom-slide, mia-slide, merlin-slide)
//<img id="slide" width="800" height="800" src="" alt="">
//</div>
//4. Vaata üle et HTML headis on "<script src="js/slide.js" defer></script>"


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

