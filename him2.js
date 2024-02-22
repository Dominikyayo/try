document.getElementById('play-button').addEventListener('click', function () {
    var videoContainer = document.getElementById('video-container');
    var videoPlayer = document.getElementById('video-player');
    var buttonContainer = document.getElementById('button-container');

    buttonContainer.style.display = 'none';

    videoContainer.classList.remove('hidden');
    videoContainer.style.top = '50%';
    videoContainer.style.left = '50%';
    videoContainer.style.transform = 'translate(-50%, -50%)';

    videoPlayer.play();
});

document.getElementById('video-player').addEventListener('ended', function () {
    var videoContainer = document.getElementById('video-container');
    var buttonContainer = document.getElementById('button-container');

    videoContainer.classList.add('hidden');
    buttonContainer.style.display = 'block';
});