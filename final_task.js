let songs = [
  {
    title: 'Here Come The Sun',
    artist: 'The Beatles',
    duration: 350,
    genre: 'Pop',
  },
  {
    title: 'Imagine',
    artist: 'John Lennon',
    duration: 180,
    genre: 'Rock',
  },
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: 354,
    genre: 'Rock',
  },
  {
    title: 'Under Pressure',
    artist: 'Queen',
    duration: 454,
    genre: 'Rock',
  },
  {
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    duration: 365,
    genre: 'Folk',
  },
  {
    title: 'Hotel California',
    artist: 'Eagles',
    duration: 390,
    genre: 'Rock',
  },
  {
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    duration: 295,
    genre: 'Pop',
  },

  {
    title: 'Every Breath You Take',
    artist: 'The Police',
    duration: 243,
    genre: 'Rock',
  },
  {
    title: 'Sweet Child o Mine',
    artist: 'Guns N Roses',
    duration: 356,
    genre: 'Rock',
  },

  {
    title: 'Hey Jude',
    artist: 'The Beatles',
    duration: 250,
    genre: 'Pop',
  },
];

function groupByArtist(songs) {
  let groupedSongs = {};
  songs.forEach((song) => {
    if (!groupedSongs[song.artist]) {
      groupedSongs[song.artist] = [];
    }
    groupedSongs[song.artist].push(song);
  });
  return groupedSongs;
}

function groupByGenre(songs) {
  let groupedSongs = {};
  songs.forEach((song) => {
    if (!groupedSongs[song.genre]) {
      groupedSongs[song.genre] = [];
    }
    groupedSongs[song.genre].push(song);
  });
  return groupedSongs;
}

function playlist(songs) {
  let totalDuration = 0;
  let playlist = [];
  while (totalDuration < 3600) {
    let randomSong = songs[Math.floor(Math.random() * songs.length)];
    if (totalDuration + randomSong.duration <= 3600) {
      playlist.push(randomSong);
      totalDuration += randomSong.duration;
    } else {
      break;
    }
  }
  console.log('Total duration:', totalDuration);
  return playlist;
}

let groupedSongsByArtist = groupByArtist(songs);
console.log('Grouped by artist:', groupedSongsByArtist);

let groupedSongsByGenre = groupByGenre(songs);
console.log('Grouped by genre:', groupedSongsByGenre);

let randomPlaylist = playlist(songs);
console.log('Less than 1 hour playlist:', randomPlaylist);
