document.addEventListener('DOMContentLoaded', function () {
    const secim = document.getElementById('tabSec');
    const tablo1 = document.querySelector('.tablo1');
    const tablo2 = document.querySelector('.tablo2');
    const tablo3 = document.querySelector('.tablo3');
    const tablo4 = document.querySelector('.tablo4');
    const tablo5 = document.querySelector('.tablo5');
    const tablo6 = document.querySelector('.tablo6');

    const renk = document.getElementsByTagName('tr');
    const gün = document.querySelectorAll('td')[2];

    if (gün == "Salı-Perşembe") {
        renk.style.backgroundColor = 'red';
    }
    else if (gün == "Pazartesi-Çarşamba-Cumartesi") {
        renk.style.backgroundColor = 'red';
    }
    else if (gün == "Pazartesi-Çarşamba") {
        renk.style.backgroundColor = 'red';
    }
    else if (gün == "Cuma-Cumartesi") {
        renk.style.backgroundColor = 'red';
    }

    tablo1.style.display = "table";
    tablo2.style.display = "none";
    tablo3.style.display = "none";
    tablo4.style.display = "none";
    tablo5.style.display = "none";
    tablo6.style.display = "none";


    secim.addEventListener('change', function () {

        const deger = secim.value;

        if (deger === "first") {
            tablo1.style.display = "table";
            tablo2.style.display = "none";
            tablo3.style.display = "none";
            tablo4.style.display = "none";
            tablo5.style.display = "none";
            tablo6.style.display = "none";
        }
        else if (deger === "second") {
            tablo2.style.display = "table";
            tablo1.style.display = "none";
            tablo3.style.display = "none";
            tablo4.style.display = "none";
            tablo5.style.display = "none";
            tablo6.style.display = "none";
        }
        else if (deger === "third") {
            tablo1.style.display = "none";
            tablo2.style.display = "none";
            tablo3.style.display = "table";
            tablo4.style.display = "none";
            tablo5.style.display = "none";
            tablo6.style.display = "none";
        }
        else if (deger === "fourth") {
            tablo1.style.display = "none";
            tablo2.style.display = "none";
            tablo3.style.display = "none";
            tablo4.style.display = "table";
            tablo5.style.display = "none";
            tablo6.style.display = "none";
        }
        else if (deger === "fifth") {
            tablo1.style.display = "none";
            tablo2.style.display = "none";
            tablo3.style.display = "none";
            tablo4.style.display = "none";
            tablo5.style.display = "table";
            tablo6.style.display = "none";
        }
        else if (deger === "sixth") {
            tablo1.style.display = "none";
            tablo2.style.display = "none";
            tablo3.style.display = "none";
            tablo4.style.display = "none";
            tablo5.style.display = "none";
            tablo6.style.display = "table";
        }


    });

})


