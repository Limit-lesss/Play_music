let progress = document.getElementById("progress");
let volume = document.getElementById("volume");
let song = document.getElementById("song");
let controlPlay = document.getElementById("controlPlay");

song.onloadedmetadata = function(){
    progress.max = song.duration ;
    progress.value = song.currentTime ;
}
let play = true;

function playPause(){
    if(play){
        song.play();
        controlPlay.classList.replace("fa-play","fa-pause");
        play = false ;
    }else{
        song.pause();
        controlPlay.classList.replace("fa-pause","fa-play");
        play = true ;
    }
}

if(play){
    setInterval(()=>{
        progress.value = song.currentTime ;
    },500);
}
progress.onchange = function(){
    song.currentTime = progress.value ; 
}
volume.value = 100;
volume.onchange = function(){
    song.volume = Math.round((volume.value/100)*10)/10 ;
}

