

let subRedditChoice1 = document.getElementById('subred-choiceOne');
let soccerPostsContainer = document.getElementById('soccer-posts-container');
subRedditChoice1.addEventListener('click', function () {
  let soccerHeader = new XMLHttpRequest();
  soccerHeader.open('GET', 'https://www.reddit.com/r/soccer/.json')
  soccerHeader.send();

  soccerHeader.addEventListener('load', function () {
    let soccerObj = JSON.parse(this.responseText);
    let children = soccerObj.data.children;
    
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
    }
  });
});
let subRedditChoice2 = document.getElementById('subred-choiceTwo');
subRedditChoice2.addEventListener('click', function(){
  console.log('clicked')
  let trackAndFieldHeader = new XMLHttpRequest();
  trackAndFieldHeader.open('GET','https://www.reddit.com/r/trackandfield/.json');
  trackAndFieldHeader.send();
  subRedditChoice2.addEventListener('load', function(){
    
    let test =  document.createElement('div');
    test.innerHTML = 'hi';
    soccerPostsContainer.appendChild(test);
  });
});


