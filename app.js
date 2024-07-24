document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById('video-container')
  const wall = document.getElementById('wall')
  const video = document.getElementById('video')
  const videoSource = document.getElementById('video-source')
  const showVideo = new URL(window.location.href).searchParams.get('novideo') === null
  const videoDelayParam = parseInt(new URL(window.location.href).searchParams.get('videoDelay'))
  const videoDelay = isNaN(videoDelayParam) ? 60 : videoDelayParam

  const setVideoSource = () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      videoSource.src = './video-landscape.mp4'
    } else {
      videoSource.src = './video-portrait.mp4'
    }

    video.load()
  }

  const reinitVideoTimeout = () => {
    setTimeout(() => {
      videoContainer.classList.add('active')
      video.play()    
    }, 1000 * videoDelay)
  }

  video.addEventListener('ended', () => {
    wall.classList.add('active')
    videoContainer.classList.remove('active')
    reinitVideoTimeout()
  })

  if (showVideo) {
    window.addEventListener('resize', setVideoSource)
    setVideoSource()
    reinitVideoTimeout()
  }
})
