//Intéraction avec le serveur.
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://192.168.1.54:12108/films",
        dataType: 'json',
        success: function (data) {
        },
        error: function (param1, param2) {
            alert("trouduc");
        }
    });
});

function admin() {
    var pseudo = $("#inputPseudo").val();
    var pass = $("#inputPass").val();
    if (pseudo === "dorian" && pass === "amchi") {
        window.open("http://localhost:8383/aluileciné/backOffice.html");
    } else {
        alert("faux");
    }
}

$(document).ready(function () {
    var table = $("<table>");
    $("#film").append(table);
    $(table).addClass("table table-dark")
            .append($("<thead>")
                    .append($("<tr>")
                            .append($("<th>").text("Titre"))
                            .append($("<th>").text("Catégorie"))
                            .append($("<th>").text("Supprimer"))));
    var tbody = $("<tbody>");
    $(table).append(tbody);
    for (var i = 0; i < listeDeFilm.length; i++) {
        var film = listeDeFilm[i];
        var tr = $("<tr>");
        $(tr).append($("<td>").text(film.titre)).append($("<td>").text(film.categorie)).append($("<button>").addClass("btn btn-danger").text("Supprimer"));
        $(tbody).append(tr);
    }



});