import './main.scss'

const video = document.getElementById('video');
const content = document.getElementById('content');

console.log(video)
console.log(content)

setTimeout(function () {
    video.classList.add('hide-block');
    content.classList.remove('hide-block');
}, 5000)

