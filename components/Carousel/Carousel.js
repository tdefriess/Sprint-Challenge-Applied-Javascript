/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let imgList = [
  '/assets/carousel/computer.jpeg',
  '/assets/carousel/mountains.jpeg',
  '/assets/carousel/trees.jpeg',
  '/assets/carousel/turntable.jpeg'
]

function carousel(imgArr){
  const caroDiv = document.createElement('div'),
    leftBtn = document.createElement('div'),
    rightBtn = document.createElement('div');

  caroDiv.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  leftBtn.addEventListener('click', () => {
    console.log('Left btn click');
  })
  rightBtn.addEventListener('click', () => {
    console.log('Right btn click');
  })

  caroDiv.append(leftBtn);
  imgArr.forEach(element => {
    const img = document.createElement('img');
    img.src = element;
    caroDiv.append(img);
  });
  caroDiv.append(rightBtn);

  return caroDiv;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(carousel(imgList));