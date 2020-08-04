// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log('Articles:', response);
    cardContainer = document.querySelector('.cards-container');
    let articleLists = response.data.articles;
    Object.values(articleLists).forEach(element => {
        element.forEach(item => {
            cardContainer.append(article(item));
        })
    });
})
.catch( error => {
  console.log('The data was not returned', error);
})

function article(thing){
    const articleCard = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgDiv = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span');

    articleCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');

    headline.textContent = thing.headline;
    img.src = thing.authorPhoto;
    span.textContent = thing.authorName;

    articleCard.append(headline);
    articleCard.append(author);
    author.append(imgDiv);
    imgDiv.append(img);
    author.append(span);
    
    return articleCard;
}