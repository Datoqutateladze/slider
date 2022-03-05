let arrowleft =  document.getElementById('left-arrow');
let arrowright = document.getElementById('right-arrow');
let sliderContent = document.getElementById('slider-cont');
let dotslist = document.getElementsByClassName('dot');

let data = [
    {
        id: 1,
        imageUrl: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
        title: 'nature',
        url: 'https://www.youtube.com/'
    },

    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
        title: 'camera lens',
        url: 'https://www.youtube.com/'
    },

    {
        id: 3,
        imageUrl: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg',
        title: 'butterflies',
        url: 'https://www.youtube.com/'
    },
    {
        id: 4,
        imageUrl: 'https://www.gettyimages.dk/gi-resources/images/500px/983703508.jpg',
        title: 'extreme',
        url: 'https://www.youtube.com/'
    }
]


function aTag(item){
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2(item){
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);
    

    return tagtitle;
}

function createImgtag(item){
    let tagimage = document.createElement('div');
    tagimage.style.backgroundImage = `url(${item.imageUrl})`;
    tagimage.setAttribute('class', 'slidebg');

    // let tagimage = document.createElement('img');
    // tagimage.setAttribute('src', item.imageUrl);
    // tagimage.setAttribute('alt', item.title);

    return tagimage;
}

let sliderIndex = 0;

function createDots(item){
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (elem) => { 
         let dotelem = document.createElement('div');
         dotelem.setAttribute('class', 'dot');
         dotelem.setAttribute('data-id', elem.id-1);

         dotelem.onclick = function(event) {
             let id =  event.target.getAttribute('data-id');
             sliderIndex = id;
             setSlide();
         }

         dots.appendChild(dotelem);
    });
    return dots;
}

function dotactive(){
    dotslist[sliderIndex].classList.add('active');
}

function setSlide(){
    sliderContent.innerHTML = ' ';
    let slideItem = aTag(data[sliderIndex]);
    let h2Tag =  createH2 (data[sliderIndex]);
    let imgtag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgtag);
    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    dotactive();
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowleft.addEventListener('click', arrowleftClick);
arrowright.addEventListener('click', arrowRightClick);


setSlide();