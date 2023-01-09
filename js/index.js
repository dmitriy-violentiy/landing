//ФОТО-СЛАЙДЕР
const images = document.querySelectorAll('.slider .slider-line img')
const sliderLine = document.querySelector('.slider-line')
let sliderCount = 0;
let sliderWidth;

function initSlider() {
   sliderWidth = document.querySelector('.slider').offsetWidth;
   sliderLine.style.sliderWidth = sliderWidth*images.length + 'px';
   images.forEach( item => {
      item.style.sliderWidth = sliderWidth + 'px';
      item.style.height = 'auto';
      rollSlider()
   })
}
window.addEventListener('resize', initSlider)
initSlider()

//найдем высоту текстового слайда
let sliderTextHeight = document.querySelector('#text-slide1').offsetHeight;
//меняем слайды текстового слайдера по нажатию на стрелки
function changeTextSlider() {
   if(document.getElementById('dot1').classList.contains('dot_active')) {
      document.querySelector('#text-slide1').style.margin = `0 0 0 0`
   } else if (document.getElementById('dot2').classList.contains('dot_active')){
      document.querySelector('#text-slide1').style.margin = `${-sliderTextHeight}px 0 0 0`
   } else if (document.getElementById('dot3').classList.contains('dot_active')) {
      document.querySelector('#text-slide1').style.margin = `${-2*sliderTextHeight}px 0 0 0`
   }
}

//меняем кнопки фото-слайдера по нажатию на стрелки
function changeButtonSlider() {
   if(document.getElementById('dot1').classList.contains('dot_active')) {
      galleryBut1.classList.add('gallery-button_active')
      galleryBut2.classList.remove('gallery-button_active')
      galleryBut3.classList.remove('gallery-button_active')
   } else if (document.getElementById('dot2').classList.contains('dot_active')){
      galleryBut1.classList.remove('gallery-button_active')
      galleryBut2.classList.add('gallery-button_active')
      galleryBut3.classList.remove('gallery-button_active')
   } else if (document.getElementById('dot3').classList.contains('dot_active')) {
      galleryBut1.classList.remove('gallery-button_active')
      galleryBut2.classList.remove('gallery-button_active')
      galleryBut3.classList.add('gallery-button_active')
   }
}

//ФУНКЦИЯ КЛИКА НА СТРЕЛКУ ВПРАВО
function rightArrow() {
//перелистывание слайдов
sliderCount++;
if(sliderCount >= images.length) {
   sliderCount = 0;
}
rollSlider()

//изменение дотов при нажатии стрелки
let dot_active = document.querySelector('.dot.dot_active') 
dot_active.classList.remove('dot_active')
dot_active.nextElementSibling.classList.add('dot_active')

   //зацикливание дотов по кругу
   if(document.querySelector('.right-arrow').classList.contains('dot_active')) {
      document.querySelector('.right-arrow').classList.remove('dot_active')
      dot1.classList.add('dot_active')
   }

changeTextSlider()
changeButtonSlider()
}

//клик на стрелку вправо
document.querySelector('.right-arrow').addEventListener('click', function() {
   rightArrow()
})
//клик на стрелку вправо mobile
document.getElementById('right_arr_mob').addEventListener('click', function(event) {
   event.preventDefault()
   rightArrow()
})


//ФУНКЦИЯ КЛИКА НА СТРЕЛКУ ВЛЕВО
function leftArrow() {
   //перелистывание слайдов
   sliderCount--
   if(sliderCount < 0) {
      sliderCount = images.length - 1;
   }
   rollSlider()

   //изменение дотов при нажатии стрелки
   let dot_active = document.querySelector('.dot.dot_active') 
   dot_active.classList.remove('dot_active')
   dot_active.previousElementSibling.classList.add('dot_active')

   //зацикливание дотов по кругу
   if(document.querySelector('.left-arrow').classList.contains('dot_active')) {
      document.querySelector('.left-arrow').classList.remove('dot_active')
      dot3.classList.add('dot_active')
   }

   changeTextSlider()
   changeButtonSlider()
}
//клик на стрелку влево
document.querySelector('.left-arrow').addEventListener('click', function() {
   leftArrow()
})
//клик на стрелку влево mobile
document.getElementById('left_arr_mob').addEventListener('click', function(event) {
   event.preventDefault()
   leftArrow()
})

//перелистывание слайдов
function rollSlider() {
   sliderLine.style.transform = 'translate(-'+sliderCount*sliderWidth+'px)';
}

let galleryBut1 = document.getElementById('gallery-but1')
let galleryBut2 = document.getElementById('gallery-but2')
let galleryBut3 = document.getElementById('gallery-but3')

//нажатие на кнопки
galleryBut1.addEventListener('click', function() {
   galleryBut1.classList.add('gallery-button_active')
   galleryBut2.classList.remove('gallery-button_active')
   galleryBut3.classList.remove('gallery-button_active')

   sliderCount = 0;

   dot1.classList.add('dot_active')
   dot2.classList.remove('dot_active')  
   dot3.classList.remove('dot_active')

   //изменение текстового слайда по нажатию кнопки
   document.querySelector('#text-slide1').style.margin = `0 0 0 0`

   sliderLine.style.transform = 'translate('+ 0 +'px)';
})
galleryBut2.addEventListener('click', function() {
   galleryBut1.classList.remove('gallery-button_active')
   galleryBut2.classList.add('gallery-button_active')
   galleryBut3.classList.remove('gallery-button_active')

   sliderCount = 1;

   dot1.classList.remove('dot_active')
   dot2.classList.add('dot_active')  
   dot3.classList.remove('dot_active')

   //изменение текста по нажатию кнопки
   document.querySelector('#text-slide1').style.margin = `${-sliderTextHeight}px 0 0 0`

   //изменение слайда
   sliderLine.style.transform = 'translate('+ -sliderWidth +'px)';
})
galleryBut3.addEventListener('click', function() {
   galleryBut1.classList.remove('gallery-button_active')
   galleryBut2.classList.remove('gallery-button_active')
   galleryBut3.classList.add('gallery-button_active')

   sliderCount = 2;

   dot1.classList.remove('dot_active')
   dot2.classList.remove('dot_active')  
   dot3.classList.add('dot_active')

   //изменение текста по нажатию кнопки
   document.querySelector('#text-slide1').style.margin = `${-2*sliderTextHeight}px 0 0 0`

   //изменение слайда
   sliderLine.style.transform = 'translate('+ -sliderWidth*2 +'px)';
})

//нажатие на доты
let dot1 = document.getElementById('dot1')
dot1.addEventListener('click', function() {
   dot1.classList.add('dot_active')
   dot2.classList.remove('dot_active')  
   dot3.classList.remove('dot_active')

   sliderCount = 0;

   galleryBut1.classList.add('gallery-button_active')
   galleryBut2.classList.remove('gallery-button_active')
   galleryBut3.classList.remove('gallery-button_active')

   //изменение текста по нажатию доты
   document.querySelector('#text-slide1').style.margin = "0 0 0 0"

   sliderLine.style.transform = 'translate('+ 0 +'px)';
})

let dot2 = document.getElementById('dot2')
dot2.addEventListener('click', function() {
   dot1.classList.remove('dot_active')
   dot2.classList.add('dot_active')  
   dot3.classList.remove('dot_active')

   sliderCount = 1;

   galleryBut1.classList.remove('gallery-button_active')
   galleryBut2.classList.add('gallery-button_active')
   galleryBut3.classList.remove('gallery-button_active')

   //изменение текста по нажатию доты
   document.querySelector('#text-slide1').style.margin = `${-sliderTextHeight}px 0 0 0`

   sliderLine.style.transform = 'translate('+ -sliderWidth +'px)';
})

let dot3 = document.getElementById('dot3')
dot3.addEventListener('click', function() {
   dot1.classList.remove('dot_active')
   dot2.classList.remove('dot_active')  
   dot3.classList.add('dot_active') 

   sliderCount = 2;

   galleryBut1.classList.remove('gallery-button_active')
   galleryBut2.classList.remove('gallery-button_active')
   galleryBut3.classList.add('gallery-button_active')

   //изменение текста по нажатию доты
   document.querySelector('#text-slide1').style.margin = `${-2*sliderTextHeight}px 0 0 0`
   
   sliderLine.style.transform = 'translate('+ -sliderWidth*2 +'px)';
})
