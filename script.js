
const createTapestry =  function(){


    for(let i = 0; i<19; i++){
        // `<img src="cover-1.webp" class="album-cover">
        let tapestry = document.getElementById('tapestry');
        let div = document.createElement('div')
        div.classList.add('col-md-4')
        div.classList.add('col-lg-3')
        let img = document.createElement('img')
        img.setAttribute('src','cover-1.webp')
        img.classList.add('album-cover')

       
        tapestry.appendChild(div)
        div.appendChild(img)
    }
}

createTapestry()