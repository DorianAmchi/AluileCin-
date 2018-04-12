//Intéraction avec le serveur.
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://192.168.1.54:12107/films",
        dataType: 'json',
        success: function (data) {
            affichageIndex(data);
        },
        error: function (param1, param2) {
            alert("trouduc");
        }
    });
});

//Manipulation du DOM
function affichageIndex(listeDeFilm) {
    $("<div/>").attr('id', 'containerFilm').addClass('container').appendTo('#albumFilms');
    $("<div/>").attr('id', 'rowFilm').addClass('row').appendTo('#containerFilm');
    for (var i = 0; i < listeDeFilm.length; i++) {
        var film = listeDeFilm[i];
        var id = film.id;
        $("#rowFilm").append(
            $("<div>").attr('id', 'colFilm' + film.id).addClass('col-sm-4').append(
                $("<div>").attr('id', 'cardFilm' + film.id).addClass('card mb-4 box-shadow').append(
                    $("<img>").attr('id', 'imgFilm' + film.id).attr('src', film.jaquette).addClass('card-img-top')).append(
                    $("<div>").addClass('card-body').append(
                        $("<p>").attr('id', 'titreFilm' + film.id).addClass('card-text').text(film.titre)).append(
                        $("<div>").addClass('btn-group').append(
                            $("<button>").attr('type', "button").attr('id', 'button' + film.id).addClass('btn btn-sm btn-outline-secondary').append(
                                $("<a>").attr("href", "http://aluilecine.my/details.html?id=" + film.id).text("Details")))))));
    }
}

