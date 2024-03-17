let songs = [
  {
    id: 1,
    name: "Chúng ta của hiện tại",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/chung_ta_cua_hien_tai.jpg",
    songUrl: "./songs/ChungTaCuaHienTai.m4a",
  },
  {
    id: 2,
    name: "Chúng ta của tương lai",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/chung_ta_cua_tuong_lai.jpg",
    songUrl: "./songs/ChungTaCuaTuongLai-SonTungMTP-14032595.mp3",
  },
  {
    id: 3,
    name: "Muộn rồi mà sao còn",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/Sơn_Tùng_M-TP_-_Muộn_rồi_mà_sao_còn.png",
    songUrl: "./songs/MuonRoiMaSaoCon.m4a",
  },
  {
    id: 4,
    name: "MAKING MY WAY",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/artworks-iu2V4IDbvbr4-0-t500x500.jpg",
    songUrl: "./songs/MakingMyWay.m4a",
  },
  {
    id: 5,
    name: "Hôm nay em cưới rồi",
    singer: "Khải Đăng - Thanh Hưng",
    imgUrl: "./images/maxresdefault.jpg",
    songUrl: "./songs/HomNayEmCuoiRoi.m4a",
  },
  {
    id: 6,
    name: "Nơi này có anh",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/noinaycoanh.jpg",
    songUrl: "./songs/NoiNayCoAnh.m4a",
  },
  {
    id: 7,
    name: "Có chắc yêu là đây",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/Sơn_Tùng_M-TP_-_Có_chắc_yêu_là_đây.jpg",
    songUrl: "./songs/cochacyeuladay.m4a",
  },
  {
    id: 8,
    name: "Chúng ta không thuộc về nhau",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/Chúng_ta_không_thuộc_về_nhau.jpeg",
    songUrl: "./songs/Chungtakhongthuocvenhau.m4a",
  },
  {
    id: 9,
    name: "Lạc trôi",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/Lac_troi_single_sontungmtp.jpg",
    songUrl: "./songs/lactroi.m4a",
  },
  {
    id: 10,
    name: "Hãy trao cho anh",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/haytraochoanh.jpg",
    songUrl: "./songs/haytraochoanh.m4a",
  },
  {
    id: 11,
    name: "Khuôn mặt đáng thương",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/khuonmatdangthuong.jpg",
    songUrl: "./songs/Khuonmatdangthuong.m4a",
  },
  {
    id: 12,
    name: "Buông đôi tay nhau ra",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/Buongdoitaynhauramtp.jpg",
    songUrl: "./songs/Buongdoitaynhaura.m4a",
  },
  {
    id: 13,
    name: "Chạy ngay đi",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/220px-Chay_ngay_di.png",
    songUrl: "./songs/Chayngaydi.m4a",
  },
  {
    id: 14,
    name: "Để em rời xa",
    singer: "Hoàng Tôn",
    imgUrl: "./images/deemroixa.jpg",
    songUrl: "./songs/deemroixa.m4a",
  },
  {
    id: 15,
    name: "Em của ngày hôm qua",
    singer: "Sơn Tùng M-TP",
    imgUrl: "./images/220px-Em_của_ngày_hôm_qua.png",
    songUrl: "./songs/Emcuangayhomqua.m4a",
  },
  {
    id: 16,
    name: "Legends Never Die",
    singer: "ft. Against The Current",
    imgUrl: "./images/legendneverdie.jpg",
    songUrl: "./songs/legendneverdie.m4a",
  },
  {
    id: 17,
    name: "K/DA - POP/STARS",
    singer: "ft. Madison Beer, (G)I-DLE, Jaira Burns",
    imgUrl: "./images/KDA_PopStars.jpg",
    songUrl: "./songs/KDA.m4a",
  },
  {
    id: 18,
    name: "ONLY",
    singer: "LeeHi",
    imgUrl: "./images/only.png",
    songUrl: "./songs/only.m4a",
  },
  {
    id: 19,
    name: "운명",
    singer: "WHY",
    imgUrl: "./images/maxresdefault (1).jpg",
    songUrl: "./songs/videoplayback.m4a",
  },
  {
    id: 20,
    name: "Khóa Ly Biệt",
    singer: "Voi Bản Đôn",
    imgUrl: "./images/khoa-ly-biet-nhac-pham-tai-ca-si-mat-na-gay-sot-1699497795.jpg",
    songUrl: "./songs/Khoalybiet.m4a",
  },
];

localStorage.setItem("songs", JSON.stringify(songs));

let songsElement = (document.querySelector(".songs").innerHTML = songs.map(
  (song) =>
    `<div class="song">
<div class="song-image">
  <img src="${song.imgUrl}" alt="" />
</div>
<div class="song-description">
  <h4 class="song-title"><a href="./detail.html?id=${song.id}">${song.name}</a></h4>
  <h4 class="song-singer">${song.singer}</h4>
</div>
</div>`
));
