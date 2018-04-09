window.onload = (function () {
    affichageIndex();
});

function affichageIndex() {

    $("#page").css("display", "inline-block");
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
                $("<button>").attr('type', "button").attr('id', 'buttonFilm' + id).click(function() {var id = film.id; affichagePage(id);}).addClass('btn btn-sm btn-outline-secondary').text("Details"))))));
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

function affichagePage(id) {
    var film = films[id];
    $("#carousel").css("display", "none");
    $("#albumFilms").css("display", "none");
    $("#albumSeries").css("display", "none");
    $("#page")
            .append(
            $("<img>").attr('id', 'bannerFilm').attr('src', film.jaquette).attr("alt","Responsive image").addClass("img-fluid"))
            .append(
            $("<h1>").addClass("nom").text(film.titre))
            .append(
            $("<p>").addClass("buttonPage").append(
            $("<button>").attr("type","button").attr("data-toggle","collapse").attr("data-target","#collapseResume").attr("aria-expanded","false").attr("aria-controls","collapseResume").addClass("btn btn-primary").text("Résumé")).append(
            $("<button>").attr("type","button").attr("data-toggle","collapse").attr("data-target","#collapseDetails").attr("aria-expanded","false").attr("aria-controls","collapseDetails").addClass("btn btn-primary").text("Details")))
            .append(
            $("<div>").addClass("row").append($("<div>").addClass("col").append(
            $("<div>").addClass("collapse multi-collapse").attr("id","collepasResume").append(
            $("<div>").addClass("card card-body").text(film.description))).append(
            $("<div>").addClass("col").append(
            $("<div>").addClass("collapse multi-collapse").attr("id","collapseDetails").append(
            $("<div>").addClass("card card-body").text(film.categorie))))));
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
