let audio = document.querySelector("#audioPlayer");
let pause = document.querySelector(".pause");
let back = document.querySelector(".back");
let forward = document.querySelector(".forward");
let rangeBar = document.querySelector("#rangeBar")
let audioPlayer = document.querySelector("#audioPlayer")

setTimeout(()=>{
    rangeBar.max = audioPlayer.duration;
},500);
let id;
pause.innerHTML = '<i class="fa-solid fa-play"></i>';
rangeBar.value = 0;
pause.addEventListener('click' ,function () {
    if (audio.paused) {
        audio.play();
        pause.innerHTML = '<i class="fa-solid fa-pause"></i>';
        // rangeBar.value = 0;

    col();
} else {
    audio.pause();
    pause.innerHTML = '<i class="fa-solid fa-play"></i>';
  
}

});

function col() {
    clearInterval(id);
    id = setInterval(() => {
        rangeBar.value = Math.floor(audioPlayer.currentTime);
    }, 1000);
}
 
    console.dir(audioPlayer)

    
timeline.addEventListener('input', function() {
    audio.currentTime = timeline.value;
});
