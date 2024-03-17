let song = document.getElementById("song");
let urlParams = new URLSearchParams(window.location.search);
let songId = urlParams.get("id");
let songObj = JSON.parse(localStorage.getItem("songs")).find(
  (song) => song.id === Number(songId)
);
let songRandomList = [];
if (songObj === undefined) {
  window.location = "./playlist.html";
}
song.src = songObj.songUrl;
document.getElementsByTagName("img")[0].src = songObj.imgUrl;
document.querySelector(".detail-title").innerHTML = songObj.name;
document.querySelector(".detail-description").innerHTML = songObj.singer;
let progress = document.getElementById("progress");
let songVolume = document.getElementById("song-volume");
let ctrlIcon = document.getElementById("ctrlIcon");
let ctrlVolume = document.getElementById("ctrlVolume");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let repeat = document.getElementById("repeat");
let randomSong = document.getElementById("random");
let repeatOne = document.getElementById("repeat-one-toggle");
let intervalId;

song.onloadedmetadata = () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.play();
  } else song.pause();
  songVolume.max = 100;
  songVolume.value = 10;
  song.volume = 0.1;
  document.querySelector(".song-start").innerHTML = "0:00";
  document.querySelector(".song-end").innerHTML = `${Math.floor(
    song.duration / 60
  )}:${
    Math.floor(song.duration % 60) < 10
      ? "0" + Math.floor(song.duration % 60)
      : Math.floor(song.duration % 60)
  }`;
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

song.addEventListener("play", () => {
  intervalId = setInterval(() => {
    progress.value = song.currentTime;
    document.querySelector(".song-start").innerHTML = `${Math.floor(
      song.currentTime / 60
    )}:${
      Math.floor(song.currentTime % 60) < 10
        ? "0" + Math.floor(song.currentTime % 60)
        : Math.floor(song.currentTime % 60)
    }`;
  }, 250);
});

song.addEventListener("pause", () => {
  if (song.currentTime === song.duration) {
    if (repeatOne.classList.contains("fa-toggle-on")) {
      song.play();
      ctrlIcon.classList.add("fa-pause");
      ctrlIcon.classList.remove("fa-play");
    } else {
      if (repeat.classList.contains("active-repeat")) {
        if (randomSong.classList.contains("active-random")) {
          let songList = JSON.parse(localStorage.getItem("songs"));
          songId = `${Math.floor(Math.random() * songList.length)}`;
          forward.onclick();
        } else forward.onclick();
      } else {
        if (randomSong.classList.contains("active-random")) {
          if (songRandomList.length > 0) {
            let randomNumber = Math.floor(
              Math.random() * songRandomList.length
            );
            let randomNumberElement = songRandomList[randomNumber];
            [songRandomList[randomNumber], ...rest] = songRandomList;
            songRandomList = rest;
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
            document.getElementsByTagName("img")[0].src =
              randomNumberElement.imgUrl;
            document.querySelector(".detail-title").innerHTML =
              randomNumberElement.name;
            document.querySelector(".detail-description").innerHTML =
              randomNumberElement.singer;
            song.src = randomNumberElement.songUrl;
          } else {
            randomSong.classList.remove("active-random");
            songRandomList = [];
            ctrlIcon.classList.add("fa-rotate-left");
            ctrlIcon.classList.remove("fa-pause");
          }
        } else {
          ctrlIcon.classList.add("fa-rotate-left");
          ctrlIcon.classList.remove("fa-pause");
        }
      }
    }
  }
  clearInterval(intervalId);
});

progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

songVolume.oninput = () => {
  song.volume = Number(songVolume.value) / 100;
  if (Number(songVolume.value) === 0) {
    ctrlVolume.classList.add("fa-volume-xmark");
    ctrlVolume.classList.remove("fa-volume-low");
  } else {
    ctrlVolume.classList.remove("fa-volume-xmark");
    ctrlVolume.classList.add("fa-volume-low");
  }
};

forward.onclick = () => {
  let nextSong = JSON.parse(localStorage.getItem("songs")).find(
    (song) => song.id === Number(songId) + 1
  );
  if (nextSong === undefined) {
    nextSong = JSON.parse(localStorage.getItem("songs"))[0];
    songId = "1";
  } else {
    songId = `${Number(songId) + 1}`;
  }
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
  document.getElementsByTagName("img")[0].src = nextSong.imgUrl;
  document.querySelector(".detail-title").innerHTML = nextSong.name;
  document.querySelector(".detail-description").innerHTML = nextSong.singer;
  song.src = nextSong.songUrl;
};

backward.onclick = () => {
  let prevSong = JSON.parse(localStorage.getItem("songs")).find(
    (song) => song.id === Number(songId) - 1
  );
  if (prevSong === undefined) {
    let songsLength = JSON.parse(localStorage.getItem("songs")).length;
    prevSong = JSON.parse(localStorage.getItem("songs"))[songsLength - 1];
    songId = `${songsLength}`;
  } else {
    songId = `${Number(songId) - 1}`;
  }
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
  document.getElementsByTagName("img")[0].src = prevSong.imgUrl;
  document.querySelector(".detail-title").innerHTML = prevSong.name;
  document.querySelector(".detail-description").innerHTML = prevSong.singer;
  song.src = prevSong.songUrl;
};

repeat.onclick = () => {
  if (repeat.classList.contains("active-repeat"))
    repeat.classList.remove("active-repeat");
  else repeat.classList.add("active-repeat");
};

randomSong.onclick = () => {
  if (randomSong.classList.contains("active-random")) {
    randomSong.classList.remove("active-random");
    songRandomList = [];
  } else {
    randomSong.classList.add("active-random");
    songRandomList = JSON.parse(localStorage.getItem("songs"));
  }
};

ctrlVolume.onclick = () => {
  if (ctrlVolume.classList.contains("fa-volume-low")) {
    ctrlVolume.classList.add("fa-volume-xmark");
    ctrlVolume.classList.remove("fa-volume-low");
    songVolume.value = 0;
    song.volume = 0;
  } else {
    songVolume.value = 10;
    song.volume = 0.1;
    ctrlVolume.classList.remove("fa-volume-xmark");
    ctrlVolume.classList.add("fa-volume-low");
  }
};

repeatOne.onclick = () => {
  if (repeatOne.classList.contains("fa-toggle-off")) {
    repeatOne.classList.remove("fa-toggle-off");
    repeatOne.classList.add("fa-toggle-on");
    document.getElementById("repeat-one-song-title").innerHTML =
      "Lặp lại 1 bài: ĐANG BẬT";
  } else {
    repeatOne.classList.add("fa-toggle-off");
    repeatOne.classList.remove("fa-toggle-on");
    document.getElementById("repeat-one-song-title").innerHTML =
      "Lặp lại 1 bài: ĐANG TẮT";
  }
};
