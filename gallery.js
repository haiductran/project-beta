var images = document.querySelector('.image img')
var left = document.querySelector('.left')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelectorAll('.gallery__inner')
var gallery = document.querySelectorAll('.gallery')

var currentindex = 0;

images.foreach((item, index) => {
    item.addEventlistenner('click', function() {
        gallery.classlist.add('show')
        galleryImg.src = images.add('show')

    })
})