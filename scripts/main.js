document.addEventListener('DOMContentLoaded', init);

function init() {
    //Adds Buttons when javascript is loaded for video
    const videoButtons = document.createElement("div");
    const videoControls = document.querySelector(".videocontainer");
    videoButtons.className = 'buttonplacement';
    videoButtons.innerHTML = '<button class="playPauseBtn">Play/Pause</button><button class="ffBtn">Fast-Forward</button><button class="smBtn">Slow-Mo</button><button class="pourBtn">Soda Pour</button><button class="webmBtn">Load WebM</button>'
    videoControls.append(videoButtons);

    //Adds Buttons when javascript is loaded for audio
    const audioButtons = document.createElement("div");
    const audioControls = document.querySelector(".audiocontainer")
    audioButtons.className = 'buttonplacement';
    audioButtons.innerHTML = '<button class="playPauseBtn">Play/Pause</button><button class="ffBtn">Fast-Forward</button><button class="smBtn">Slow-Mo</button><button class="pourBtn">Soda Pour</button><button class="oggBtn">Load OGG</button>'
    audioControls.append(audioButtons);

    //Video Variables
    const playPause = videoButtons.querySelector(".playPauseBtn");
    const fastForward = videoButtons.querySelector(".ffBtn");
    const slowMo = videoButtons.querySelector(".smBtn");
    const sodaPour = videoButtons.querySelector(".pourBtn");
    const loadWebM = videoButtons.querySelector(".webmBtn");

    //Video Event Listeners
    playPause.addEventListener("click", playPauseVideo);
    fastForward.addEventListener("click", fastForwardVideo);
    slowMo.addEventListener("click", slowMoVideo);
    sodaPour.addEventListener("click", sodaPourVideo);
    loadWebM.addEventListener("click", loadWebMVideo);

    //Audio Variables
    const playPauseA = audioButtons.querySelector(".playPauseBtn");
    const fastForwardA = audioButtons.querySelector(".ffBtn")
    const slowMoA = audioButtons.querySelector(".smBtn");
    const sodaPourA = audioButtons.querySelector(".pourBtn");
    const loadOGG = audioButtons.querySelector(".oggBtn");

    //Audio Event Listeners
    playPauseA.addEventListener("click", playPauseAudio);
    fastForwardA.addEventListener("click", fastForwardAudio);
    slowMoA.addEventListener("click", slowMoAudio);
    sodaPourA.addEventListener("click", sodaPourAudio);
    loadOGG.addEventListener("click", loadOGGAudio);
}

//Counters for button toggling with video
let count = 0;
let ffCount = 0;
let smCount = 0;

//Video Functions
function playPauseVideo(){
    const videoPlayer = document.querySelector(".videoplayer");
    
    if (count === 0){
        count = 1;
        videoPlayer.play()
    } else {
        count = 0;
        videoPlayer.pause()
    }
}

function fastForwardVideo() {
    const videoPlayer = document.querySelector(".videoplayer");

    if (ffCount === 0){
        ffCount = 1;
        videoPlayer.playbackRate = 2;
    } else {
        ffCount = 0;
        videoPlayer.playbackRate = 1;
    }
}

function slowMoVideo() {
    const videoPlayer = document.querySelector(".videoplayer");

    if (smCount === 0){
        smCount = 1;
        videoPlayer.playbackRate = 0.5;
    } else {
        smCount = 0;
        videoPlayer.playbackRate = 1;
    }
}

function sodaPourVideo() {
    const videoPlayer = document.querySelector(".videoplayer");

    videoPlayer.currentTime = 17;
}

function loadWebMVideo() {
    const videoPlayer = document.querySelector(".videoplayer");

    videoPlayer.src = "media/codevideoad.webm"
}

//Counters for button toggling with audio
let countA = 0;
let ffCountA = 0;
let smCountA = 0;

//Audio Functions
function playPauseAudio(){
    const audioPlayer = document.querySelector(".audioplayer");
    
    if (countA === 0){
        countA = 1;
        audioPlayer.play()
    } else {
        countA = 0;
        audioPlayer.pause()
    }
}

function fastForwardAudio(){
    const audioPlayer = document.querySelector(".audioplayer");
    
    if (ffCountA === 0){
        ffCountA = 1;
        audioPlayer.playbackRate = 2;
    } else {
        ffCountA = 0;
        audioPlayer.playbackRate = 1;
    }
}

function slowMoAudio() {
    const audioPlayer = document.querySelector(".audioplayer");

    if (smCountA === 0){
        smCountA = 1;
        audioPlayer.playbackRate = 0.5;
    } else {
        smCountA = 0;
        audioPlayer.playbackRate = 1;
    }
}

function sodaPourAudio() {
    const audioPlayer = document.querySelector(".audioplayer");

    audioPlayer.currentTime = 17;
}

function loadOGGAudio() {
    const audioPlayer = document.querySelector(".audioplayer");

    audioPlayer.src = "media/cokeaudioad.ogg"
}

