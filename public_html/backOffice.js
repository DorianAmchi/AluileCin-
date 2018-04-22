//Intéraction avec le serveur.
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://192.168.1.54:12107/films",
        dataType: 'json',
        success: function (data) {
            affichage(data);
        },
        error: function (param1, param2) {
            alert("trouduc");
        }
    });

});

function affichage(listeDeFilms) {
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
    for (var i = 0; i < listeDeFilms.length; i++) {
        var film = listeDeFilms[i];
        var tr = $("<tr>");
        $(tr).append($("<td>").text(film.titre))
                .append($("<td>").text(film.categorie))
                .append($("<button>").addClass("btn btn-danger").text("Supprimer").click("deleteFilm(id)"));
        $(tbody).append(tr);
    }
}

function recupFilm() {
    var film = {
        "id": "",
        "titre": $("#titreFilm").val(),
        "auteur": $("#realFilm").val(),
        "description": $("#descriptionFilm").val(),
        "jaquette": $("#jaquetteFilm").val(),
        "categorie": $("#jaquetteFilm").val()
    };

    $.ajax({
        type: "POST",
        url: "http://192.168.1.54:12107/films",
        dataType: 'json',
        data: film,
        success: function (f) {
            alert("film ajouté.")
        },
        error: function (param1, param2) {
            alert("pb ajout film");
        }
    });
}

function deleteFilm(id) {
    $.ajax({
        type: "DELETE",
        url: "http://192.168.1.54:12107/films/" + id,
        dataType: 'json',
        success: function (f) {
            alert("film ajouté.")
        },
        error: function (param1, param2) {
            alert("pb ajout film");
        }
    });
}

function admin() {
    var pseudo = $("#inputPseudo").val();
    var pass = $("#inputPass").val();
    if (pseudo === "dorian" && pass === "amchi") {
        window.open("/backOffice.html");
    } else {
        alert("faux");
    }
}