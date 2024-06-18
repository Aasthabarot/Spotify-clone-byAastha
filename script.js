console.log('welcome to Spotify :)');

console.log('JavaScript is working!');

document.addEventListener('DOMContentLoaded', () => {
    const songItems = document.querySelectorAll('.songItem');
    songItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('Song item clicked!');
        });
    });
});


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');

let Songs=[
    {songname:"Play Rain",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songname:"Love Clouds",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songname:"Run Away",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songname:"House of Lord",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songname:"Darling!!",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songname:"YOU",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songname:"Friends",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songname:"As You Cry",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songname:"Worthy",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songname:"Over And Over",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]




//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
progressbar.addEventListener('timeupdate',()=>{
       console.log('timeupdate');
       //update seekbar
});