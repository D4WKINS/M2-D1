
const createTapestry =  function(){


    for(let i = 0; i<19; i++){
        // `<img src="cover-1.webp" class="album-cover">
        let tapestry = document.getElementById('tapestry');
        let div = document.createElement('div')
        div.classList.add(' col-md-4 col-lg-3')
        let img = document.createElement('img')
        img.setAttribute('src','cover-1.webp')
        img.classList.add('album-cover')

        let cover = ` <div class="col-md-4 col-lg-3 "> ${img} </div>`
        tapestry.appendChild(cover)
    }
}

createTapestry()