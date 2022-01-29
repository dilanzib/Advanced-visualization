//READ DATA: 
var country = []; //skapar arrays , Ladder score
<<<<<<< HEAD
=======
var life = [];
>>>>>>> dev

d3.csv("./js/world-happiness-report-2021.csv", function(data) {
    //console.log(data.length);
    data.forEach(function(d) {
<<<<<<< HEAD
        country.push({ "Country": d.country, "Score": d.ladderscore }); //för över data till arrayen
        //console.log(d.country); //skriver ut länderna enskilt 
    });

    //Top 10 tabell enligt score
    for (i = 0; i < 10; i++) {
        $("#table tbody").append("<tr><td><b>" + (i + 1) + "</b> " + data[i].country + "</td><td>" + data[i].ladderscore + "</td></tr>")
    }
=======
        country.push({ "Country": d.country, "Score": d.life }); //för över data till arrayen
    });

    //Top 10 tabell enligt score
    var option = document.getElementById("state").value;


    for (i = 0; i < 10; i++) {
        $("#table tbody").append("<tr><td><b>" + (i + 1) + "</b> " + data[i].country + "</td><td>" + data[i].ladderscore + "</td></tr>")
}
>>>>>>> dev
});