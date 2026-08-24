import React, { useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import { movies } from './sahteVeri';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';

export default function App() {
  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */
  const [savedMovies, setSavedMovies] = useState([]);
  const [movieList, setMovieList] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {
    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
    const foundMovie = savedMovies.find((item) => item.id === movie.id);

    if (!foundMovie) {
      setSavedMovies([...savedMovies, movie]);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={savedMovies} />
      {/* 
      Görev 3: 2 adet route tanımlayın.
      1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
      2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
      */}
      <Switch>
        <Route path="/" exact>
          <FilmListesi movies={movieList} />
        </Route>
        <Route path="/filmler/:id">
          <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}
