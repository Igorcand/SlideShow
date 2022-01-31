"use strict";

const images = [
    {'id' : '1', 'url' : '../Desafio SlideShow/img/chrono.jpg' },
    {'id' : '2', 'url' : '../Desafio SlideShow/img/inuyasha.jpg' },
    {'id' : '3', 'url' : '../Desafio SlideShow/img/ippo.png' },
    {'id' : '4', 'url' : '../Desafio SlideShow/img/tenchi.jpg' },
    {'id' : '5', 'url' : '../Desafio SlideShow/img/tenjhotenge.jpg' },
    {'id' : '6', 'url' : '../Desafio SlideShow/img/yuyuhakusho.jpg' }
]

const containerItems = document.querySelector('#container-items')



const loadImage = (images, container) =>{
    images.forEach(images => {
        container.innerHTML += `
        <div class='item'>
            <img  src='${images.url}' 
        </div>
        `
    })

}

loadImage(images, containerItems)

let items = document.querySelectorAll('.item')

const next = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const previous = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore( lastItem, items[0])
    items = document.querySelectorAll('.item')
}
document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

