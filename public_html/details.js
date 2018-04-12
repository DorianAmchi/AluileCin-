var url1 = window.location.href;
var id = url1.substring(url1.lastIndexOf('=') + 1);

        $.ajax({
            type: "GET",
            url: "http://192.168.1.54:12107/films/"+id,
            dataType: 'json',
            success: function (data) {
                affichagePage(data);
            },
            error: function (param1, param2) {
                alert("trouduc");
            }
        });

function affichagePage(data) {
    var film = data;
    $('#page')
            .append($('<img>').attr('id', 'bannerFilm').attr('src', film.jaquette).attr('alt', 'Responsive image').addClass('img-fluid'))
            .append($('<h1>').addClass('nom').text(film.titre))
            .append($('<div>').addClass('row')
                    .append($('<div>').addClass('col')
                            .append($('<div>').attr('id', 'resume')
                                    .append($('<div>').addClass('card card-body').text(film.description))))
                    .append($('<div>').addClass('col')
                            .append($('<div>').attr('id', 'details')
                                    .append($('<div>').addClass('card card-body')
                                            .append($("<h3>").addClass("categorie").text("Catégorie : " +  film.categorie))
                                            .append($("<h3>").addClass("realisateur").text("Réalisateur : " + film.auteur))))));
        }