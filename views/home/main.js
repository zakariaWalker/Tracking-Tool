import {myModule} from './mymodule';

myModule.init();

// Get the YouTube player.
let player;

window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'tS2PHJmvJzo' // Replace with your YouTube video ID
  });
};

// Add a listener for the zoom controls.
document.getElementById('zoom-in').addEventListener('click', () => {
  // player.zoom(1);
  // Implement custom zoom functionality
});

document.getElementById('zoom-out').addEventListener('click', () => {
  // player.zoom(-1);
  // Implement custom zoom functionality
});
