// const music = document.getElementById("music");
const music = new Audio("assets/audio/1.mp3");
// const songItems = document.querySelectorAll(".song_Item");
// music.play();

const songs = [
  {
    id: "1",
    songName: `On My Way <br />
    <div class="subtitle">Alan Walker</div>`,
    poster: "assets/img/1.png",
  },
  {
    id: "2",
    songName: `Maahaul <br />
    <div class="subtitle">Raj Pandit</div>`,
    poster: "assets/img/2.png",
  },
  {
    id: "3",
    songName: `Tu Meri Roja <br />
    <div class="subtitle">Hesham Abdul</div>`,
    poster: "assets/img/3.png",
  },
  {
    id: "4",
    songName: `Idfc <br />
    <div class="subtitle">blackbear</div>`,
    poster: "assets/img/4.png",
  },
  {
    id: "5",
    songName: `Dheela <br />
    <div class="subtitle">Abhijit</div>`,
    poster: "assets/img/5.png",
  },
  {
    id: "6",
    songName: `Manike <br />
    <div class="subtitle">Yohini</div>`,
    poster: "assets/img/6.png",
  },
  {
    id: "7",
    songName: `Pyar Hota Kai Baar Hai <br />
    <div class="subtitle">Arijit Singh</div>`,
    poster: "assets/img/7.png",
  },
  {
    id: "8",
    songName: `Jhoome Jo Pathaan <br />
    <div class="subtitle">Vishal-Shekhar</div>`,
    poster: "assets/img/8.png",
  },
  {
    id: "9",
    songName: `Bazigar <br />
    <div class="subtitle">DIVINE</div>`,
    poster: "assets/img/9.png",
  },
  {
    id: "10",
    songName: ` Arabic Kuthu <br />
    <div class="subtitle">Alan Walker</div>`,
    poster: "assets/img/10.png",
  },

  {
    id: "11",
    songName: `Unbreakable <br />
    <div class="subtitle">Fadeey</div>`,
    poster: "assets/img/11.png",
  },
  {
    id: "12",
    songName: `Detention <br />
    <div class="subtitle">Melanie M</div>`,
    poster: "assets/img/12.png",
  },
  {
    id: "13",
    songName: `You Wish You Knew <br />
    <div class="subtitle">Zayn</div>`,
    poster: "assets/img/13.png",
  },
  {
    id: "14",
    songName: `Angle <br />
    <div class="subtitle">Zack Night</div>`,
    poster: "assets/img/14.png",
  },
  {
    id: "15",
    songName: `Sadka<br />
    <div class="subtitle">Vishal Shekhar</div>`,
    poster: "assets/img/15.png",
  },
  {
    id: "16",
    songName: `Falak<br />
    <div class="subtitle">Vishal Shekhar</div>`,
    poster: "assets/img/16.png",
  },
  {
    id: "17",
    songName: `Bhula Dunga<br />
    <div class="subtitle">Darshan Raval</div>`,
    poster: "assets/img/17.png",
  },
  {
    id: "18",
    songName: `Dotara<br />
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "assets/img/18.png",
  },
  {
    id: "19",
    songName: `Harleys In Hawaii <br />
    <div class="subtitle">Katy Perry</div>`,
    poster: "assets/img/19.png",
  },
  {
    id: "20",
    songName: `Adiye <br />
    <div class="subtitle">Dhibu Ninan</div>`,
    poster: "assets/img/20.png",
  },
  {
    id: "21",
    songName: `Phir Aur Kya Chahiye <br />
    <div class="subtitle">Arijit Singh</div>`,
    poster: "assets/img/21.png",
  },
  {
    id: "22",
    songName: `Sajna <br />
    <div class="subtitle">Badshah</div>`,
    poster: "assets/img/22.png",
  },
  {
    id: "23",
    songName: `Tere Pyar Me <br />
    <div class="subtitle">Arijit Singh</div>`,
    poster: "assets/img/23.png",
  },
  {
    id: "24",
    songName: `Tabahi <br />
    <div class="subtitle">Arman Malik</div>`,
    poster: "assets/img/24.png",
  },
  {
    id: "25",
    songName: `Zihal e Miskin <br />
    <div class="subtitle">Javed Mohsin</div>`,
    poster: "assets/img/25.png",
  },
  {
    id: "26",
    songName: `Nseeb <br />
    <div class="subtitle">Vishal Mishra</div>`,
    poster: "assets/img/26.png",
  },
  {
    id: "27",
    songName: `Kya Muze Pyar Hai <br />
    <div class="subtitle">KK</div>`,
    poster: "assets/img/27.png",
  },
  {
    id: "28",
    songName: `Sanak <br />
    <div class="subtitle">Badshah</div>`,
    poster: "assets/img/28.png",
  },
  {
    id: "29",
    songName: `Cupid <br />
    <div class="subtitle">FIFTY FIFTY</div>`,
    poster: "assets/img/29.png",
  },
  {
    id: "30",
    songName: `Uh girl <br />
    <div class="subtitle">Chris Thrace</div>`,
    poster: "assets/img/30.png",
  },
];

//Array
Array.from(document.getElementsByClassName("song_Item")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

//-----PLAY---In Master Play button--and-Waves
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  //on which situation music will play
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-circle-fill");
  }
});

//-----------------
//Music, popular artist section buttons/scrollbar
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");

let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 300;
});

pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 300;
});

//Music, trending song section buttons/scroller
let trnd_song_left = document.getElementById("trnd_song_left");
let trnd_song_right = document.getElementById("trnd_song_right");

let trnd_song = document.getElementsByClassName("trnd_song")[0];

trnd_song_right.addEventListener("click", () => {
  trnd_song.scrollLeft += 300;
});

trnd_song_left.addEventListener("click", () => {
  trnd_song.scrollLeft -= 300;
});

//
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.style.add("bi-play-circle-fill");
    el.style.remove("bi-pause-circle-fill");
  });
};
//Background
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("song_Item")).forEach((el) => {
    el.style.background = "rgba(105,105,105, 0)";
  });
};

// Play song that you click
let index = 0;
let poster_masterPlay = document.getElementById("poster_masterPlay");
let title = document.getElementById("title");
// index++;
// console.log(index);

Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `assets/audio/${index}.mp3`;
    poster_masterPlay.src = `assets/img/${index}.png`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-circle-fill");

    // titles
    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("song_Item"))[
      index - 1
    ].style.background = "rgba(105,105,105, 1)";
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});

// timing
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  // console.log(min1);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerHTML = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  //  console.log(seek.value);

  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

//340

let vol_Icon = document.getElementById("vol_Icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_Icon.classList.remove("bi bi-volume-up-fill");
    vol_Icon.classList.remove("bi bi-volume-down-fill");
    vol_Icon.classList.add("bi bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_Icon.classList.remove("bi bi-volume-up-fill");
    vol_Icon.classList.add("bi bi-volume-down-fill");
    vol_Icon.classList.remove("bi bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_Icon.classList.add("bi bi-volume-up-fill");
    vol_Icon.classList.remove("bi bi-volume-down-fill");
    vol_Icon.classList.remove("bi bi-volume-off-fill");
  }
  //Control Volume
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

// let back = document.getElementById("back");
// let next = document.getElementById("next");

// back.addEventListener("click", () => {
//   index -= 1;
// });
