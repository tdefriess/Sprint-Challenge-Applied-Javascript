// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
  console.log(response);
  topicList = response.data.topics;
  console.log(topicList)
  topicList.forEach(element => {
      tab(element);
  });
})
.catch( error => {
  console.log('The data was not returned', error);
})

function tab(topic){
    const topicCard = document.createElement('div');

    topicCard.classList.add('tab');

    topicCard.textContent = topic;

    topics = document.querySelector('.topics');

    topics.append(topicCard);

    return
}