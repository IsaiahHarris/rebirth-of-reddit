
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
    postsCard.className = 'posts-card';
    let postImage = document.createElement('div');
    if (responseObj.data.children[i].data.url.charAt(responseObj.data.children[i].data.url.length - 1) === 'g') {
      postImage.style.backgroundImage = 'url("' + responseObj.data.children[i].data.url + '")'
    } else if (responseObj.data.children[i].data.url.charAt(responseObj.data.children[i].data.url.length - 1) !== 'g' && responseObj.data.children[i].data.thumbnail.charAt(responseObj.data.children[i].data.thumbnail.length - 1) === 'g') {
      postImage.style.backgroundImage = 'url("' + responseObj.data.children[i].data.thumbnail + '")'
    }else {
      postImage.style.backgroundImage = 'url("' + 'https://photos.smugmug.com/Soccer/SY-20152016/Vs-Kaimuki-Vars-021016/i-QPwzKSQ/0/60ab5670/X3/DSC_4901-X3.jpg' + '")';
    }
    postImage.className = 'posts-image';
    postsCard.appendChild(postImage);

    let postTitle = document.createElement('div');
    postTitle.className = 'posts-title';
    postTitle.addEventListener('click', function () {
    if (postTitle.className === 'posts-title') {
      postTitle.className = 'posts-title-active';
    } else if (postTitle.className === 'posts-title-active') {
      postTitle.className = 'posts-title';
    }
  })
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
      postDescription.innerHTML = "Lorizzle ipsum nizzle i'm in the shizzle amizzle, consectetizzle adipiscing dawg. Rizzle things fo shizzle, bow wow wow volutpizzle, suscipizzle quizzle, gravida vel, check it out. Pellentesque yo tortizzle. Go to hizzle eros. izzle dolizzle dapibizzle turpis tempizzle cool. Maurizzle pellentesque nibh away turpis. Sheezy izzle pimpin'. Fizzle shizznit rhoncizzle boofron. In shizznit habitasse bow wow wow dictumst. dapibizzle. Curabitizzle tellus urna, pretium daahng dawg, mattizzle ac, eleifend vitae, nunc. The bizzle suscipizzle. Hizzle semper velit sed purizzle.";
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

let plusx = document.getElementById('iconx');
console.log(plusx);
plusx.addEventListener('click', function(){
  console.log('clicked');
  console.log('hiiiiii');
})
})