document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector('.videoContainer')
  const wall = document.getElementById('wallsio-iframe')
  const video = document.querySelector('.video')

  const reinitVideoTimeout = () => {
    setTimeout(() => {
      wall.classList.remove('active')
      videoContainer.classList.add('active')
      video.play()    
    }, 1000 * 10)
  }

  video.addEventListener('ended', () => {
    wall.classList.add('active')
    videoContainer.classList.remove('active')
    reinitVideoTimeout()
  })

  reinitVideoTimeout()
})
