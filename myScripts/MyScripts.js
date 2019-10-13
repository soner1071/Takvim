window.onload = function () {
    var i, j, sayac = 0;
    var DivParent = document.getElementById("DivParent");
    var tablo = document.getElementById("tablo");
 
    //#region Table
    for (i = 1; i <= 5; i++) {

        var tr = document.createElement("tr");//tr elementi oluşuyor
     
        for (j = 1; j <= 7; j++) {
            sayac++;

            var td = document.createElement("td");//td elementi oluşuyor
            td.id = "id" + sayac;//her bir td ye id atandı

            td.style.backgroundColor = "#70e0b3";
            td.style.borderColor = "black";
            td.style.textAlign = "center";
            td.style.paddingTop = "60px";
            td.style.borderStyle = "solid";
            td.style.width = "100px";
            td.style.height = "100px";
            if (sayac < 31) {
                var mytext = document.createTextNode(sayac);
                td.appendChild(mytext);//mytext(rakamlar),tdnin childı yapıldı
            }

            tr.appendChild(td);//td tr'nin childı yapıldı
        }

        tablo.appendChild(tr);
 }
    //#endregion

    //#region Jsondata
    var data = [{ "title": "event 1", "date": "2014/09/25" },

    { "title": "event 2", "date": "2014/09/26", "enddate": "2014/09/29" },

    { "title": "event 3", "date": "2014/09/27" },

    { "title": "event 4", "date": "2014/09/30" }];


    
    document.getElementById("events").innerHTML = data[1].title;//event 2 yi divin içinde göster
   // $('#events')[0].innerHTML = data[1].title;

    var event2 = "date: " + data[1].date + "\n" + "endDate: " + data[1].enddate;//eventin başlangıç ve bitiş tarihlerini objeye atadım
    var event1 = "date: " + data[0].date;
    var event3 = "date: " + data[2].date;
    var event4 = "date: " + data[3].date;

    var myJSON0 = data[0].title;
    var myJSON1 = data[1].title;
    var myJSON2 = data[2].title;
    var myJSON3 = data[3].title;
    //#endregion 
   
    //#region date
        document.getElementById("events2").onmouseover = function () {
            alert(event2);// ayın 26 ve 29 su arasındaki tarihlere tıklandığında event bilgisini alert yoluyla gösterdim
        }
    

    var p29 = document.createElement("p"); //p elementi oluşturdum
    p29.style.backgroundColor = "#4cff00";
    var text29 = document.createTextNode(myJSON1);
    p29.appendChild(text29);
    tablo.children[4].children[0].appendChild(p29);//5.satır 1.sütundaki td nin içine p childını yerleştirdim
    document.getElementById("id29").onclick = function () {
        alert(event2);
    }
    
    var p25 = document.createElement("p");
    p25.style.backgroundColor = "#4cff00";
    var text25 = document.createTextNode(myJSON0);
    p25.appendChild(text25);
    tablo.children[3].children[3].appendChild(p25);
    document.getElementById("id25").onclick = function () {
        alert(event1);
    }

    var p30 = document.createElement("p");
    p30.style.backgroundColor = "#4cff00";
    var text30 = document.createTextNode(myJSON3);
    p30.appendChild(text30);
    tablo.children[4].children[1].appendChild(p30);
    document.getElementById("id30").onclick = function () {
        alert(event4);
    }

    var p27 = document.createElement("p");
    p27.style.backgroundColor = "#4cff00";
    var text27 = document.createTextNode(myJSON2);
    p27.appendChild(text27);
    tablo.children[3].children[5].appendChild(p27);
    document.getElementById("id27").onclick = function () {
        alert(event3);
    }
   
   //#endregion
}
