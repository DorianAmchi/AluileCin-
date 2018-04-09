window.onload = (function () {
    affichageIndex();
});

function affichageIndex() {

    $("#page").css("display", "none");
    $("<div/>").attr('id', 'containerFilm').addClass('container').appendTo('#albumFilms');
    $("<div/>").attr('id', 'rowFilm').addClass('row').appendTo('#containerFilm');
    for (var i = 0; i < films.length; i++) {
        var film = films[i];
        var id = film.id;
        $("#rowFilm").append(
                $("<div>").attr('id', 'colFilm' + id).addClass('col-sm-4').append(
                $("<div>").attr('id', 'cardFilm' + id).addClass('card mb-4 box-shadow').append(
                $("<img>").attr('id', 'imgFilm' + id).attr('src', film.jaquette).addClass('card-img-top')).append(
                $("<div>").addClass('card-body').append(
                $("<p>").attr('id', 'titreFilm' + id).addClass('card-text').text(film.titre)).append(
                $("<div>").addClass('btn-group').append(
                $("<button>").attr('type', "button").attr('id', 'buttonFilm' + id).addClass('btn btn-sm btn-outline-secondary').text("Details"))))));
    }
    $("<div/>").attr('id', 'containerSeries').addClass('container').appendTo('#albumSeries');
    $("<div/>").attr('id', 'rowSeries').addClass('row').appendTo('#containerSeries');
    for (var i = 0; i < series.length; i++) {
        var serie = series[i];
        var id = film.id;
        $("#rowSeries").append(
                $("<div>").attr('id', 'colSerie' + id).addClass('col-sm-4').append(
                $("<div>").attr('id', 'cardSerie' + id).addClass('card mb-4 box-shadow').append(
                $("<img>").attr('id', 'imgSerie' + id).attr('src', serie.jaquette).addClass('card-img-top')).append(
                $("<div>").addClass('card-body').append(
                $("<p>").attr('id', 'titreSerie' + id).addClass('card-text').text(serie.titre)).append(
                $("<div>").addClass('btn-group').append(
                $("<button>").attr('type', "button").attr('id', 'buttonSerie' + id).addClass('btn btn-sm btn-outline-secondary').text("Details"))))));
    }
}

/**function affichageUrl(){
    var nbFilm = film.length;
    for (var i = 0; i < films.length; i++) {
        var film = films[i];
        var id = film.id;
        $("#rowFilm").append(
                $("<div>").attr('id', 'colFilm' + id).addClass('col-sm-4').append(
                $("<div>").attr('id', 'cardFilm' + id).addClass('card mb-4 box-shadow').append(
                $("<img>").attr('id', 'imgFilm' + id).attr('src', film.jaquette).addClass('card-img-top')).append(
                $("<div>").addClass('card-body').append(
                $("<p>").attr('id', 'titreFilm' + id).addClass('card-text').text(film.titre)).append(
                $("<div>").addClass('btn-group').append(
                $("<button>").attr('type', "button").attr('id', 'buttonFilm' + id).addClass('btn btn-sm btn-outline-secondary').text("Details"))))));
    }
    $("<div/>").attr('id', 'containerSeries').addClass('container').appendTo('#albumSeries');
    $("<div/>").attr('id', 'rowSeries').addClass('row').appendTo('#containerSeries');
    for (var i = 0; i < series.length; i++) {
        var serie = series[i];
        var id = film.id;
        $("#rowSeries").append(
                $("<div>").attr('id', 'colSerie' + id).addClass('col-sm-4').append(
                $("<div>").attr('id', 'cardSerie' + id).addClass('card mb-4 box-shadow').append(
                $("<img>").attr('id', 'imgSerie' + id).attr('src', serie.jaquette).addClass('card-img-top')).append(
                $("<div>").addClass('card-body').append(
                $("<p>").attr('id', 'titreSerie' + id).addClass('card-text').text(serie.titre)).append(
                $("<div>").addClass('btn-group').append(
                $("<button>").attr('type', "button").attr('id', 'buttonSerie' + id).addClass('btn btn-sm btn-outline-secondary').text("Details"))))));
    }
}**/
