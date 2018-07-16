
//main container
let soccerPostsContainer = document.getElementById('soccer-posts-container');

//random choice generator

let randomSubRedChoices = ['https://www.reddit.com/r/Pizza/.json', 'https://www.reddit.com/r/japanpics/.json'];


function getRandomSubReds(){
  var randomSubRed = randomSubRedChoices[Math.floor(Math.random() * randomSubRedChoices.length)];
  
  while (randomSubRed === lastSubRed){
    randomSubRed = randomSubRedChoices[Math.floor(Math.random() * randomSubRedChoices.length)];
  }
  lastSubRed = randomSubRed;
}


//soocer page
let subRedditChoice1 = document.getElementById('subred-choiceOne');
subRedditChoice1.addEventListener('click', function () {
  console.log('clicked');
  let soccerHeader = new XMLHttpRequest();
  soccerHeader.open('GET', 'https://www.reddit.com/r/soccer/.json')
  soccerHeader.send();

  soccerHeader.addEventListener('load', function () {
    let soccerObj = JSON.parse(this.responseText);
    let children = soccerObj.data.children;
    console.log(soccerObj);
    soccerPostsContainer.innerHTML = '';
    for (let i = 0; i < children.length; i++) {

      let soccerPostImage = document.createElement('div');
      soccerPostImage.className = 'soccer-posts-image';
      soccerPostsContainer.appendChild(soccerPostImage);

      let soccerPostTitle = document.createElement('div');
      soccerPostTitle.className = 'soccer-posts-title';
      soccerPostTitle.innerHTML = soccerObj.data.children[i].data.title;
      soccerPostsContainer.appendChild(soccerPostTitle);

      let soccerPostsAuthor = document.createElement('div');
      soccerPostsAuthor.className = 'soccer-posts-author';
      soccerPostsAuthor.innerHTML = 'by ' + soccerObj.data.children[i].data.author + ' 👍🏿 ' + soccerObj.data.children[i].data.ups + ' 👎🏿 ' + soccerObj.data.children[i].data.downs;
      soccerPostTitle.appendChild(soccerPostsAuthor);

      let soccerPostDescription = document.createElement('div');
      soccerPostDescription.className = 'soccer-posts-description';
      soccerPostDescription.innerHTML = soccerObj.data.children[i].data.selftext;
      soccerPostsAuthor.appendChild(soccerPostDescription);
    }
  });
});

//nature page

let subRedditChoice2 = document.getElementById('subred-choiceTwo');
subRedditChoice2.addEventListener('click', function () {
  console.log('clicked');
  let natureHead = new XMLHttpRequest();
  natureHead.open('GET', 'https://www.reddit.com/r/natureismetal/.json');
  natureHead.send();

  natureHead.addEventListener('load', function () {
    soccerPostsContainer.innerHTML = '';
    let natureObj = JSON.parse(this.responseText);
    console.log(natureObj);
    let natureChildren = natureObj.data.children;
    for (let i = 0; i < natureChildren.length; i++) {
      let naturePostImage = document.createElement('div');
      naturePostImage.className = 'nature-post-image';
      naturePostImage.style.backgroundImage = 'url("'+ natureObj.data.children[i].data.url+'")'

if(natureObj.data.children[i].data.url === 'https://i.imgur.com/UXcJdPS.gifv'){
  naturePostImage.style.backgroundImage = 'url("'+ natureObj.data.children[i].data.thumbnail+'")'
}
        

      soccerPostsContainer.appendChild(naturePostImage);

      let naturePostTitle = document.createElement('div');
      naturePostTitle.className = 'nature-post-title';
      naturePostTitle.innerHTML = natureObj.data.children[i].data.title;
      soccerPostsContainer.appendChild(naturePostTitle);

      let naturePostAuthor = document.createElement('div');
      naturePostAuthor.className = 'nature-post-author';
      naturePostAuthor.innerHTML = 'by ' + natureObj.data.children[i].data.author + ' 👍🏿 ' + natureObj.data.children[i].data.ups + ' 👎🏿 ' + natureObj.data.children[i].data.downs;
      naturePostTitle.appendChild(naturePostAuthor);
    }
  })
})

//Hawaii page

let hawaiiSubRedChoice = document.getElementById('hawaii-subredId');
hawaiiSubRedChoice.addEventListener('click', function(){
  console.log('clicked');
  
  let hawaiiHead = new XMLHttpRequest();
  hawaiiHead.open('GET', 'https://www.reddit.com/r/hawaiipics/.json')
  hawaiiHead.send();
  hawaiiHead.addEventListener('load', function(){
    soccerPostsContainer.innerHTML = '';
    let hawaiiObj = JSON.parse(this.responseText);
    console.log(hawaiiObj);
    let hawaiiChildren = hawaiiObj.data.children;
    for (let i = 0; i < hawaiiChildren.length; i++) {
      let hawaiiPostImage = document.createElement('div');
      hawaiiPostImage.className = 'hawaii-post-image';
      hawaiiPostImage.style.backgroundImage = 'url("'+ hawaiiObj.data.children[i].data.thumbnail+'")'
      soccerPostsContainer.appendChild(hawaiiPostImage);

      let hawaiiPostTitle = document.createElement('div');
      hawaiiPostTitle.innerHTML = hawaiiObj.data.children[i].data.title;
      hawaiiPostTitle.className = 'hawaii-post-title';
      soccerPostsContainer.appendChild(hawaiiPostTitle);

      let hawaiiPostAuthor = document.createElement('div');
      hawaiiPostAuthor.className = 'hawaii-post-author';
      hawaiiPostAuthor.innerHTML = hawaiiObj.data.children[i].data.author + ' 👍🏿 ' + hawaiiObj.data.children[i].data.ups + ' 👎🏿 ' + hawaiiObj.data.children[i].data.downs;
      hawaiiPostTitle.appendChild(hawaiiPostAuthor);

      let hawaiiPostDescription = document.createElement('div');
      hawaiiPostDescription.className = 'hawaii-post-description';
      hawaiiPostDescription.innerHTML = hawaiiObj.data.children[i].data.selftext;
      hawaiiPostTitle.appendChild(hawaiiPostDescription);
    }
  })
})

let randomHead = document.getElementById('random-subRed');
randomHead.addEventListener('click', function(){
  console.log('clicked');
  let randomSubReddit = new XMLHttpRequest();
  randomSubReddit.open('GET', randomSubRed);
  randomSubReddit.send();
  randomSubReddit.addEventListener('load', function(){
    soccerPostsContainer.innerHTML = '';
    let randomObj = JSON.parse(this.responseText);
    console.log(randomObj);
  })
})