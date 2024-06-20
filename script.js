console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Pure Love", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 

    
})
 
const updatePlayPauseIcons = (isPlaying) => {
    if (isPlaying) {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            if (parseInt(element.id) === songIndex) {
                element.classList.remove('fa-play-circle');
                element.classList.add('fa-pause-circle');
            } else {
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
            }
        });
    } else {
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        });
    }
};


masterPlay.addEventListener('click', () => {
    console.log('Play/Pause button clicked');
    if (audioElement.paused || audioElement.currentTime <= 0) {
        console.log('Playing audio');
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        console.log('Pausing audio');
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

const scrollToPlayingSong = (index) => {
    songItems[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const playSong = (index) => {
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    scrollToPlayingSong(index); // Scroll the currently playing song into view
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        if (audioElement.src.includes(songs[i].filePath)) {
            if (audioElement.paused) {
                audioElement.play();
                updatePlayPauseIcons(true);
            } else {
                audioElement.pause();
                updatePlayPauseIcons(false);
            }
        } else {
            songIndex = i;
            playSong(songIndex);
        }
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSong(songIndex);
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    playSong(songIndex);
});

audioElement.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songIndex);
});