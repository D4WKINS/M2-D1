
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


const albumInfo = () =>{
    let overlay = document.getElementsByClassName('album-overlay')
    let overlayP = document.getElementsByClassName('overlayP')
    let display = 'off';
    for(let i =0; i<overlayP.length; i++){
        if( display == 'on'){
            display = 'off'
            overlayP[i].style.display = "none"
            overlay[i].classList.remove("album-info")
            overlay[i].classList.remove("h-100")
            overlay[i].classList.remove("w-100")
        }
        else if(display == 'off')
        display = 'on'
        overlayP[i].style.display = "block"
        overlay[i].classList.add("album-info")
        overlay[i].classList.add("h-100")
        overlay[i].classList.add("w-100")
    }
}