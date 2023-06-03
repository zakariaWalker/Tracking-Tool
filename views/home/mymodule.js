const myModule = {
  init: function() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'tS2PHJmvJzo', // Replace with your YouTube video ID
        events: {
          onReady: () => {
            // Get the player's zoom control.
            // const zoom = player.getControl('zoom');
            // Add a listener for the zoom control's onChange event.
            // zoom.onChange(() => {
            //   // Zoom in or out of the video, depending on the zoom control's value.
            //   player.zoom(zoom.getValue());
            // });
          }
        }
      });

      // Add a listener for the window's resize event.
      window.addEventListener('resize', () => {
        // Get the YouTube iframe element.
        const iframe = document.getElementById('player');

        // Calculate the new zoom factor.
        const zoomFactor = iframe.offsetHeight / window.innerHeight;

        // Set the iframe's zoom factor.
        iframe.style.zoom = zoomFactor;
      });
    };
  }
};

export default myModule;
