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
    audioButtons.innerHTML = '<button>Play</button><button>Pause</button><button>Fast-Forward</button><button>Slow-Mo</button><button>Soda Pour</button><button>Load OGG</button>'
    audioControls.append(audioButtons);

    //Video Variables
    const videoPlayer = document.querySelector(".videoplayer");
    const playPause = videoButtons.querySelector(".playPauseBtn");
    const fastForward = videoButtons.querySelector(".ffBtn");
    const slowMo = videoButtons.querySelector(".smBtn");
    const sodaPour = videoButtons.querySelector(".pourBtn");
    const loadWebM = videoButtons.querySelector(".webmBtn");
    const webMVideo = videoControls.querySelector("source");
    let count = 0;
    let ffCount = 0;
    let smCount = 0;

    //Video Event Listeners
    playPause.addEventListener("click", playPauseVideo);
    fastForward.addEventListener("click", fastForwardVideo);
    slowMo.addEventListener("click", slowMoVideo);
    sodaPour.addEventListener("click", sodaPourVideo);
    loadWebM.addEventListener("click", loadWebMVideo);

    //Video Functions
    function playPauseVideo(){
        if (count === 0){
            count = 1;
            videoPlayer.play()
        } else {
            count = 0;
            videoPlayer.pause()
        }
    }

    function fastForwardVideo() {
        if (ffCount === 0){
            ffCount = 1;
            videoPlayer.playbackRate = 2;
        } else {
            ffCount = 0;
            videoPlayer.playbackRate = 1;
        }
    }

    function slowMoVideo() {
        if (smCount === 0){
            smCount = 1;
            videoPlayer.playbackRate = 0.5;
        } else {
            smCount = 0;
            videoPlayer.playbackRate = 1;
        }
    }

    function sodaPourVideo() {
        videoPlayer.currentTime = 17;
    }

    function loadWebMVideo() {
        videoPlayer.src = "media/codevideoad.webm"
    }
}