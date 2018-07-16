
//main container
let soccerPostsContainer = document.getElementById('soccer-posts-container');

//random choice generator

let randomSubRedChoices = ['https://www.reddit.com/r/Pizza/.json?raw_json=1', 'https://www.reddit.com/r/japanpics/.json?raw_json=1', 'https://www.reddit.com/r/Astronomy/.json?raw_json=1'];

let lastSubRed;
let randomSubRed = null;
let randomize = () => {
  randomSubRed = randomSubRedChoices[Math.floor(Math.random() * randomSubRedChoices.length)];

  //console.log("new", randomSubRed);

  while (randomSubRed === lastSubRed) {
    randomSubRed = randomSubRedChoices[Math.floor(Math.random() * randomSubRedChoices.length)];
  }
  lastSubRed = randomSubRed;
}



//soccer page
let subRedditChoice1 = document.getElementById('subred-choiceOne');
subRedditChoice1.addEventListener('click', function () {
  console.log('clicked');
  let soccerHeader = new XMLHttpRequest();
  soccerHeader.open('GET', 'https://www.reddit.com/r/soccer/.json?raw_json=1')
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
      if (soccerObj.data.children[i].data.score > -1){
        soccerPostsAuthor.innerHTML = 'by ' + soccerObj.data.children[i].data.author + ' 👍🏿 ' +soccerObj.data.children[i].data.score;
      }else {
        soccerPostsAuthor.innerHTML = 'by ' + soccerObj.data.children[i].data.author + ' 👎🏿 ' +soccerObj.data.children[i].data.score;
      }
      
      soccerPostTitle.appendChild(soccerPostsAuthor);

      let soccerPostDescription = document.createElement('div');
      soccerPostDescription.className = 'soccer-posts-description';
      if(soccerObj.data.children[i].data.selftext === ''){
        soccerPostDescription.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis ligula. Ut venenatis ante vel tortor mattis, at feugiat mi dapibus. Nullam volutpat turpis quis lectus aliquam, suscipit commodo mauris vulputate. Nulla facilisi. Nulla ultrices feugiat lorem vel scelerisque. Nulla iaculis, leo et facilisis lobortis, nisi massa egestas sapien, in placerat dui quam ut sem. Aenean eu euismod magna, nec tempor metus. Proin mollis, sem sed laoreet ornare, odio nunc ultricies mi, pellentesque posuere tellus libero efficitur erat. Donec nunc ipsum, vehicula eget condimentum in, volutpat ut lacus. Ut maximus sem a pellentesque iaculis. Aliquam sit amet commodo nisl. Aliquam rhoncus, quam at pellentesque pulvinar, dui dui congue est, venenatis congue nunc augue at magna. Morbi eu est et magna mollis mattis. Vivamus auctor lectus et accumsan elementum.';
      }else{
        soccerPostDescription.innerHTML = soccerObj.data.children[i].data.selftext;
      }
      soccerPostsAuthor.appendChild(soccerPostDescription);
      soccerPostDescription.addEventListener('click', function () {
        if (soccerPostDescription.className ==='soccer-posts-description') {
          soccerPostDescription.className = 'active';
        } else if(soccerPostDescription.className === 'active'){
          soccerPostDescription.className = 'soccer-posts-description';
        }
      })
    }
  });
});

//nature page

let subRedditChoice2 = document.getElementById('subred-choiceTwo');
subRedditChoice2.addEventListener('click', function () {
  console.log('clicked');
  let natureHead = new XMLHttpRequest();
  natureHead.open('GET', 'https://www.reddit.com/r/natureismetal/.json?raw_json=1');
  natureHead.send();

  natureHead.addEventListener('load', function () {
    soccerPostsContainer.innerHTML = '';
    let natureObj = JSON.parse(this.responseText);
    console.log(natureObj);
    let natureChildren = natureObj.data.children;
    for (let i = 0; i < natureChildren.length; i++) {
      let naturePostImage = document.createElement('div');
      naturePostImage.className = 'nature-post-image';
      if(natureObj.data.children[i].data.url.split('').reverse().join('').charAt(0) === 'g'){

        naturePostImage.style.backgroundImage = 'url("'+natureObj.data.children[i].data.url+'")' 

      }else if(natureObj.data.children[i].data.url.split('').reverse().join('').charAt(0) !== 'g' && natureObj.data.children[i].data.thumbnail.split('').reverse().join('').charAt(0) === 'g') {
        naturePostImage.style.backgroundImage = 'url("'+natureObj.data.children[i].data.thumbnail+'")' 
      }else {
        naturePostImage.style.backgroundImage = 'url("' +'https://vignette.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest/scale-to-width-down/480?cb=20160625173435' +'")';
      }

      soccerPostsContainer.appendChild(naturePostImage);

      let naturePostTitle = document.createElement('div');
      naturePostTitle.className = 'nature-post-title';
      naturePostTitle.innerHTML = natureObj.data.children[i].data.title;
      soccerPostsContainer.appendChild(naturePostTitle);
      
      let naturePostAuthor = document.createElement('div');
      naturePostAuthor.className = 'nature-post-author';
      if (natureObj.data.children[i].data.score > -1){
        naturePostAuthor.innerHTML = 'by ' + natureObj.data.children[i].data.author + ' 👍🏿 ' +natureObj.data.children[i].data.score;
      }else {
        naturePostAuthor.innerHTML = 'by ' + natureObj.data.children[i].data.author + ' 👎🏿 ' +natureObj.data.children[i].data.score;
      }
      
      naturePostTitle.appendChild(naturePostAuthor);

      let naturePostDescription = document.createElement('div');
      naturePostDescription.className = 'nature-posts-description';
      if(natureObj.data.children[i].data.selftext === ''){
        naturePostDescription.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis ligula. Ut venenatis ante vel tortor mattis, at feugiat mi dapibus. Nullam volutpat turpis quis lectus aliquam, suscipit commodo mauris vulputate. Nulla facilisi. Nulla ultrices feugiat lorem vel scelerisque. Nulla iaculis, leo et facilisis lobortis, nisi massa egestas sapien, in placerat dui quam ut sem. Aenean eu euismod magna, nec tempor metus. Proin mollis, sem sed laoreet ornare, odio nunc ultricies mi, pellentesque posuere tellus libero efficitur erat. Donec nunc ipsum, vehicula eget condimentum in, volutpat ut lacus. Ut maximus sem a pellentesque iaculis. Aliquam sit amet commodo nisl. Aliquam rhoncus, quam at pellentesque pulvinar, dui dui congue est, venenatis congue nunc augue at magna. Morbi eu est et magna mollis mattis. Vivamus auctor lectus et accumsan elementum.';
      }else{
        naturePostDescription.innerHTML = natureObj.data.children[i].data.selftext;
      }
      naturePostAuthor.appendChild(naturePostDescription);
      naturePostDescription.addEventListener('click', function () {
        if (naturePostDescription.className ==='nature-posts-description') {
          naturePostDescription.className = 'active';
        } else if(naturePostDescription.className === 'active'){
          naturePostDescription.className = 'nature-posts-description';
        }
      })
    }
  })
})

//Hawaii page

let hawaiiSubRedChoice = document.getElementById('hawaii-subredId');
hawaiiSubRedChoice.addEventListener('click', function () {
  console.log('clicked');

  let hawaiiHead = new XMLHttpRequest();
  hawaiiHead.open('GET', 'https://www.reddit.com/r/hawaiipics/.json?raw_json=1')
  hawaiiHead.send();
  hawaiiHead.addEventListener('load', function () {
    soccerPostsContainer.innerHTML = '';
    let hawaiiObj = JSON.parse(this.responseText);
    console.log(hawaiiObj);
    let hawaiiChildren = hawaiiObj.data.children;
    for (let i = 0; i < hawaiiChildren.length; i++) {
      let hawaiiPostImage = document.createElement('div');
      hawaiiPostImage.className = 'hawaii-post-image';
      if(hawaiiObj.data.children[i].data.url.split('').reverse().join('').charAt(0) === 'g'){

        hawaiiPostImage.style.backgroundImage = 'url("'+hawaiiObj.data.children[i].data.url+'")' 

      }else if(hawaiiObj.data.children[i].data.url.split('').reverse().join('').charAt(0) !== 'g' && hawaiiObj.data.children[i].data.thumbnail.split('').reverse().join('').charAt(0) === 'g') {
        hawaiiPostImage.style.backgroundImage = 'url("'+hawaiiObj.data.children[i].data.thumbnail+'")' 
      }else {
        hawaiiPostImage.style.backgroundImage = 'url("' +'https://vignette.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest/scale-to-width-down/480?cb=20160625173435' +'")';
      }
      soccerPostsContainer.appendChild(hawaiiPostImage);

      let hawaiiPostTitle = document.createElement('div');
      hawaiiPostTitle.innerHTML = hawaiiObj.data.children[i].data.title;
      hawaiiPostTitle.className = 'hawaii-post-title';
      soccerPostsContainer.appendChild(hawaiiPostTitle);

      let hawaiiPostAuthor = document.createElement('div');
      hawaiiPostAuthor.className = 'hawaii-post-author';
      if (hawaiiObj.data.children[i].data.score > -1){
        hawaiiPostAuthor.innerHTML = 'by ' + hawaiiObj.data.children[i].data.author + ' 👍🏿 ' +hawaiiObj.data.children[i].data.score;
      }else {
        hawaiiPostAuthor.innerHTML = 'by ' + hawaiiObj.data.children[i].data.author + ' 👎🏿 ' +hawaiiObj.data.children[i].data.score;
      }
      hawaiiPostTitle.appendChild(hawaiiPostAuthor);

      let hawaiiPostDescription = document.createElement('div');
      hawaiiPostDescription.className = 'hawaii-post-description';
      hawaiiPostDescription.addEventListener('click', function () {
        if (hawaiiPostDescription.className ==='hawaii-post-description') {
          hawaiiPostDescription.className = 'active';
        } else if(hawaiiPostDescription.className === 'active'){
          hawaiiPostDescription.className = 'hawaii-post-description';
        }
      })
      if(hawaiiObj.data.children[i].data.selftext === ''){
        hawaiiPostDescription.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis ligula. Ut venenatis ante vel tortor mattis, at feugiat mi dapibus. Nullam volutpat turpis quis lectus aliquam, suscipit commodo mauris vulputate. Nulla facilisi. Nulla ultrices feugiat lorem vel scelerisque. Nulla iaculis, leo et facilisis lobortis, nisi massa egestas sapien, in placerat dui quam ut sem. Aenean eu euismod magna, nec tempor metus. Proin mollis, sem sed laoreet ornare, odio nunc ultricies mi, pellentesque posuere tellus libero efficitur erat. Donec nunc ipsum, vehicula eget condimentum in, volutpat ut lacus. Ut maximus sem a pellentesque iaculis. Aliquam sit amet commodo nisl. Aliquam rhoncus, quam at pellentesque pulvinar, dui dui congue est, venenatis congue nunc augue at magna. Morbi eu est et magna mollis mattis. Vivamus auctor lectus et accumsan elementum.';
      }else{
        hawaiiPostDescription.innerHTML = hawaiiObj.data.children[i].data.selftext;
      }
      hawaiiPostTitle.appendChild(hawaiiPostDescription);
    }
  })
})

let randomHead = document.getElementById('random-subRed');
randomHead.addEventListener('click', function () {
  console.log('clicked');
  randomize();
  let randomSubReddit = new XMLHttpRequest();
  randomSubReddit.open('GET', randomSubRed);
  randomSubReddit.send();
  randomSubReddit.addEventListener('load', function () {
    soccerPostsContainer.innerHTML = '';
    let randomObj = JSON.parse(this.responseText);
    console.log(randomObj);

    let randomChildren = randomObj.data.children;
    for (let i = 0; i < randomChildren.length; i++) {

      let randomPostImage = document.createElement('div');
      if(randomObj.data.children[i].data.url.split('').reverse().join('').charAt(0) === 'g'){

        randomPostImage.style.backgroundImage = 'url("'+randomObj.data.children[i].data.url+'")' 

      }else if(randomObj.data.children[i].data.url.split('').reverse().join('').charAt(0) !== 'g' && randomObj.data.children[i].data.thumbnail.split('').reverse().join('').charAt(0) === 'g') {
        randomPostImage.style.backgroundImage = 'url("'+randomObj.data.children[i].data.thumbnail+'")' 
      }else {
        randomPostImage.style.backgroundImage = 'url("' +'https://vignette.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest/scale-to-width-down/480?cb=20160625173435' +'")';
      }
      
      randomPostImage.className = 'random-post-image';
      soccerPostsContainer.appendChild(randomPostImage);

      let randomPostTitle = document.createElement('div');
      randomPostTitle.innerHTML = randomObj.data.children[i].data.title;
      randomPostTitle.className = 'random-post-title';
      soccerPostsContainer.appendChild(randomPostTitle);

      let randomPostAuthor = document.createElement('div');
      if (randomObj.data.children[i].data.score > -1){
        randomPostAuthor.innerHTML = 'by ' + randomObj.data.children[i].data.author + ' 👍🏿 ' +randomObj.data.children[i].data.score;
      }else {
        randomPostAuthor.innerHTML = 'by ' + randomObj.data.children[i].data.author + ' 👎🏿 ' +randomObj.data.children[i].data.score;
      }
      
      randomPostAuthor.className = 'random-post-author';
      randomPostTitle.appendChild(randomPostAuthor);

      let randomPostDescription = document.createElement('div');
      
      if(randomObj.data.children[i].data.selftext === ''){
        randomPostDescription.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis ligula. Ut venenatis ante vel tortor mattis, at feugiat mi dapibus. Nullam volutpat turpis quis lectus aliquam, suscipit commodo mauris vulputate. Nulla facilisi. Nulla ultrices feugiat lorem vel scelerisque. Nulla iaculis, leo et facilisis lobortis, nisi massa egestas sapien, in placerat dui quam ut sem. Aenean eu euismod magna, nec tempor metus. Proin mollis, sem sed laoreet ornare, odio nunc ultricies mi, pellentesque posuere tellus libero efficitur erat. Donec nunc ipsum, vehicula eget condimentum in, volutpat ut lacus. Ut maximus sem a pellentesque iaculis. Aliquam sit amet commodo nisl. Aliquam rhoncus, quam at pellentesque pulvinar, dui dui congue est, venenatis congue nunc augue at magna. Morbi eu est et magna mollis mattis. Vivamus auctor lectus et accumsan elementum.';
      }else{
        randomPostDescription.innerHTML = randomObj.data.children[i].data.selftext;
      } 
      randomPostDescription.className = 'random-post-description'
      randomPostAuthor.appendChild(randomPostDescription)

      randomPostDescription.addEventListener('click', function () {
        if (randomPostDescription.className ==='random-post-description') {
          randomPostDescription.className = 'active';
        } else if(randomPostDescription.className === 'active'){
          randomPostDescription.className = 'random-post-description';
        }
      })
    }
  })
})



