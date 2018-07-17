
//main container
let postsContainer = document.getElementById('posts-container');
//subreddit choices
let soccerSubRedChoice = document.getElementById('soccer-subRed');
let natureSubRedChoice = document.getElementById('nature-subRed');
let hawaiiSubRedChoice = document.getElementById('hawaii-subRed');
let randomSubRedChoice = document.getElementById('random-subRed')
//random choice generator

 let randomSubRedChoices = ['Pizza', 'japanpics', 'Astronomy', 'NatureIsFuckingLit', 'electricdaisycarnival', 'ArchitecturePorn', 'CoolPics'];


  function randomSubRedditFunc(){
    
    // let lastSubRed;
    let randomize = randomSubRedChoices[Math.floor(Math.random() * randomSubRedChoices.length)];
  console.log(randomize);
    // while (randomSubRed === lastSubRed) {
    //   randomSubRed = randomSubRedChoices[Math.floor(Math.random() * randomSubRedChoices.length)];
    // }
    // lastSubRed = randomSubRed;
    // postsContainer.innerHTML = '';
    // const getRandomObj = new XMLHttpRequest();
    // getRandomObj.addEventListener('load', getRedditData);
    // getRandomObj.open('GET', `https://www.reddit.com/r/${randomize}/.json?raw_json=1`);
    // getRandomObj.send();
    sendRedditRequest(randomize)();
    
}



function sendRedditRequest(subReddit) {

  return function () {
    let request = new XMLHttpRequest();
    request.open('GET', `https://www.reddit.com/r/${subReddit}/.json?raw_json=1`)
    request.send();
    request.addEventListener('load', getRedditData);
  }
}
soccerSubRedChoice.addEventListener('click', sendRedditRequest('soccer'));
natureSubRedChoice.addEventListener('click', sendRedditRequest('natureismetal'));
hawaiiSubRedChoice.addEventListener('click', sendRedditRequest('hawaiipics'));
randomSubRedChoice.addEventListener('click', randomSubRedditFunc);


//soccer page





function getRedditData() {

  const responseObj = JSON.parse(this.responseText);
  console.log(responseObj);
  let children = responseObj.data.children;
  
  postsContainer.innerHTML = '';
  for (let i = 0; i < children.length; i++) {
    const postsCard = document.createElement('div');
    let postImage = document.createElement('div');
    if (responseObj.data.children[i].data.url.charAt(responseObj.data.children[i].data.url.length - 1) === 'g') {
      postImage.style.backgroundImage = 'url("' + responseObj.data.children[i].data.url + '")'
    } else if (responseObj.data.children[i].data.url.charAt(responseObj.data.children[i].data.url.length - 1) !== 'g' && responseObj.data.children[i].data.thumbnail.charAt(responseObj.data.children[i].data.thumbnail.length - 1) === 'g') {
      postImage.style.backgroundImage = 'url("' + responseObj.data.children[i].data.thumbnail + '")'
    }else {
      postImage.style.backgroundImage = 'url("' + 'https://vignette.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest/scale-to-width-down/480?cb=20160625173435' + '")';
    }
    postImage.className = 'posts-image';
    postsCard.appendChild(postImage);

    let postTitle = document.createElement('div');
    postTitle.className = 'posts-title';
    postTitle.innerHTML = children[i].data.title;
    postsCard.appendChild(postTitle);

    let postsAuthor = document.createElement('div');
    postsAuthor.className = 'posts-author';
    if (children[i].data.score > -1) {
      postsAuthor.innerHTML = 'by ' + children[i].data.author + ' 👍🏿 ' + children[i].data.score;
    } else {
      postsAuthor.innerHTML = 'by ' + children[i].data.author + ' 👎🏿 ' + children[i].data.score;
    }

    postTitle.appendChild(postsAuthor);

    let postDescription = document.createElement('div');
    postDescription.className = 'posts-description';
    if (children[i].data.selftext === '') {
      postDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis ligula. Ut venenatis ante vel tortor mattis, at feugiat mi dapibus. Nullam volutpat turpis quis lectus aliquam, suscipit commodo mauris vulputate. Nulla facilisi. Nulla ultrices feugiat lorem vel scelerisque. Nulla iaculis, leo et facilisis lobortis, nisi massa egestas sapien, in placerat dui quam ut sem. Aenean eu euismod magna, nec tempor metus. Proin mollis, sem sed laoreet ornare, odio nunc ultricies mi, pellentesque posuere tellus libero efficitur erat. Donec nunc ipsum, vehicula eget condimentum in, volutpat ut lacus. Ut maximus sem a pellentesque iaculis. Aliquam sit amet commodo nisl. Aliquam rhoncus, quam at pellentesque pulvinar, dui dui congue est, venenatis congue nunc augue at magna. Morbi eu est et magna mollis mattis. Vivamus auctor lectus et accumsan elementum.';
    } else {
      postDescription.innerHTML = children[i].data.selftext;
    }
    postsAuthor.appendChild(postDescription);
    postDescription.addEventListener('click', function () {
      if (postDescription.className === 'posts-description') {
        postDescription.className = 'active';
      } else if (postDescription.className === 'active') {
        postDescription.className = 'posts-description';
      }
    })
    
    postsContainer.appendChild(postsCard);
  }
}


let searchButton = document.getElementById('search-button');
let searchBar = document.getElementById('search-bar');
searchButton.addEventListener('click', function(){
  console.log('clicked')
  sendRedditRequest(searchBar.innerHTML)();
})