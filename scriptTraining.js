"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != '' && a != null && b != '' && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done!');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    WriteYourGenres: function () {
        for (let i = 0; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genres === '' || genres == null) {
                console.log('Вы ввели не корректные данные или не ввели их совсем')
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Либимый жанр ${i + 1} - это ${item}`);
        });
    }
};