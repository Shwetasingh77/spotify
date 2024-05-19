console.log("Welcome to Spotify")
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {
        songName:"Salam-e-Ishq", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"   
    },
    {
        songName:"wariyo", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"   
    },{
        songName:"i love you", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"   
    },{
        songName:"Aadha Ishq", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"   
    },
    {
        songName:"Bhula Dena", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"   
    },
    {
        songName:"Rabba", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"   
    },
    {
        songName:"Teri Ore", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"   
    },
    {
        songName:"Sukkran-allah", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"   
    },
    {
        songName:"Cielo", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"   
    },
    {
        songName:"Tere Bina", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"   
    } 
    
]
songitems.forEach((element,i)=> {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress; 
})
myProgressBar.addEventListener('change',()=>{
 audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    // console.log(e.target);
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`songs/${songIndex+1}.mp3`;

    audioElement.currentTime=0  ;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;

    audioElement.currentTime=0  ;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;

    audioElement.currentTime=0  ;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
// Function to update the currently playing song name
function updateCurrentSongName(songName) {
    const currentSongNameElement = document.getElementById('currentSongName');
    currentSongNameElement.textContent = songName;
}

// Update timestamps and song name every second
setInterval(() => {
    // Loop through each timestamp element
    timestamps.forEach((timestamp, index) => {
        // Get the audio element corresponding to the timestamp
        const audio = document.getElementById(index);

        // Update the timestamp with the current time
        timestamp.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    });

    // Update the currently playing song name
    updateCurrentSongName(currentlyPlayingSongName);
}, 1000);
