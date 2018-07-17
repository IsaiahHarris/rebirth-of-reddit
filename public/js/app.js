
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


//nature page


// subRedditChoice2.addEventListener('click', function () {
//   console.log('clicked');
//   let natureHead = new XMLHttpRequest();
//   natureHead.open('GET', 'https://www.reddit.com/r/natureismetal/.json?raw_json=1');
//   natureHead.send();

//   natureHead.addEventListener('load', function () {
//     soccerPostsContainer.innerHTML = '';
//     let natureObj = JSON.parse(this.responseText);
//     console.log(natureObj);
//     let natureChildren = natureObj.data.children1;
//     for (let i = 0; i < natureChildren.length; i++) {
//       let naturePostImage = document.createElement('div');
//       naturePostImage.className = 'nature-post-image';
//       if (natureObj.data.children[i].data.url.charAt(natureObj.data.children[i].data.url.length - 1) === 'g') {

//         naturePostImage.style.backgroundImage = 'url("' + natureObj.data.children[i].data.url + '")'

//       } else if (natureObj.data.children[i].data.url.charAt(natureObj.data.children[i].data.url.length - 1) !== 'g' && natureObj.data.children[i].data.thumbnail.charAt(natureObj.data.children[i].data.thumbnail.length - 1) === 'g') {
//         naturePostImage.style.backgroundImage = 'url("' + natureObj.data.children[i].data.thumbnail + '")'
//       } else {
//         naturePostImage.style.backgroundImage = 'url("' + 'https://vignette.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest/scale-to-width-down/480?cb=20160625173435' + '")';
//       }

//       soccerPostsContainer.appendChild(naturePostImage);

//       let naturePostTitle = document.createElement('div');
//       naturePostTitle.className = 'nature-post-title';
//       naturePostTitle.innerHTML = natureObj.data.children[i].data.title;
//       soccerPostsContainer.appendChild(naturePostTitle);

//       let naturePostAuthor = document.createElement('div');
//       naturePostAuthor.className = 'nature-post-author';
//       if (natureObj.data.children[i].data.score > -1) {
//         naturePostAuthor.innerHTML = 'by ' + natureObj.data.children[i].data.author + ' 👍🏿 ' + natureObj.data.children[i].data.score;
//       } else {
//         naturePostAuthor.innerHTML = 'by ' + natureObj.data.children[i].data.author + ' 👎🏿 ' + natureObj.data.children[i].data.score;
//       }

//       naturePostTitle.appendChild(naturePostAuthor);

//       let naturePostDescription = document.createElement('div');
//       naturePostDescription.className = 'nature-posts-description';
//       if (natureObj.data.children[i].data.selftext === '') {
//         naturePostDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis ligula. Ut venenatis ante vel tortor mattis, at feugiat mi dapibus. Nullam volutpat turpis quis lectus aliquam, suscipit commodo mauris vulputate. Nulla facilisi. Nulla ultrices feugiat lorem vel scelerisque. Nulla iaculis, leo et facilisis lobortis, nisi massa egestas sapien, in placerat dui quam ut sem. Aenean eu euismod magna, nec tempor metus. Proin mollis, sem sed laoreet ornare, odio nunc ultricies mi, pellentesque posuere tellus libero efficitur erat. Donec nunc ipsum, vehicula eget condimentum in, volutpat ut lacus. Ut maximus sem a pellentesque iaculis. Aliquam sit amet commodo nisl. Aliquam rhoncus, quam at pellentesque pulvinar, dui dui congue est, venenatis congue nunc augue at magna. Morbi eu est et magna mollis mattis. Vivamus auctor lectus et accumsan elementum.';
//       } else {
//         naturePostDescription.innerHTML = natureObj.data.children[i].data.selftext;
//       }
//       naturePostAuthor.appendChild(naturePostDescription);
//       naturePostDescription.addEventListener('click', function () {
//         if (naturePostDescription.className === 'nature-posts-description') {
//           naturePostDescription.className = 'active';
//         } else if (naturePostDescription.className === 'active') {
//           naturePostDescription.className = 'nature-posts-description';
//         }
//       })
//     }
//   })
// })

// //Hawaii page

// let hawaiiSubRedChoice = document.getElementById('hawaii-subredId');
// hawaiiSubRedChoice.addEventListener('click', function () {
//   console.log('clicked');

//   let hawaiiHead = new XMLHttpRequest();
//   hawaiiHead.open('GET', 'https://www.reddit.com/r/hawaiipics/.json?raw_json=1')
//   hawaiiHead.send();
//   hawaiiHead.addEventListener('load', function () {
//     soccerPostsContainer.innerHTML = '';
//     let hawaiiObj = JSON.parse(this.responseText);
//     console.log(hawaiiObj);
//     let hawaiiChildren = hawaiiObj.data.children;
//     for (let i = 0; i < hawaiiChildren.length; i++) {
//       let hawaiiPostImage = document.createElement('div');
//       hawaiiPostImage.className = 'hawaii-post-image';
//       if (hawaiiObj.data.children[i].data.url.charAt(hawaiiObj.data.children[i].data.url.length - 1) === 'g') {

//         hawaiiPostImage.style.backgroundImage = 'url("' + hawaiiObj.data.children[i].data.url + '")'

//       } else if (hawaiiObj.data.children[i].data.url.charAt(hawaiiObj.data.children[i].data.url.length - 1) !== 'g' && hawaiiObj.data.children[i].data.thumbnail.charAt(hawaiiObj.data.children[i].data.thumbnail.length - 1) === 'g') {
//         hawaiiPostImage.style.backgroundImage = 'url("' + hawaiiObj.data.children[i].data.thumbnail + '")'
//       } else {
//         hawaiiPostImage.style.backgroundImage = 'url("' + 'https://vignette.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest/scale-to-width-down/480?cb=20160625173435' + '")';
//       }
//       soccerPostsContainer.appendChild(hawaiiPostImage);

//       let hawaiiPostTitle = document.createElement('div');
//       hawaiiPostTitle.innerHTML = hawaiiObj.data.children[i].data.title;
//       hawaiiPostTitle.className = 'hawaii-post-title';
//       soccerPostsContainer.appendChild(hawaiiPostTitle);

//       let hawaiiPostAuthor = document.createElement('div');
//       hawaiiPostAuthor.className = 'hawaii-post-author';
//       if (hawaiiObj.data.children[i].data.score > -1) {
//         hawaiiPostAuthor.innerHTML = 'by ' + hawaiiObj.data.children[i].data.author + ' 👍🏿 ' + hawaiiObj.data.children[i].data.score;
//       } else {
//         hawaiiPostAuthor.innerHTML = 'by ' + hawaiiObj.data.children[i].data.author + ' 👎🏿 ' + hawaiiObj.data.children[i].data.score;
//       }
//       hawaiiPostTitle.appendChild(hawaiiPostAuthor);

//       let hawaiiPostDescription = document.createElement('div');
//       hawaiiPostDescription.className = 'hawaii-post-description';
//       hawaiiPostDescription.addEventListener('click', function () {
//         if (hawaiiPostDescription.className === 'hawaii-post-description') {
//           hawaiiPostDescription.className = 'active';
//         } else if (hawaiiPostDescription.className === 'active') {
//           hawaiiPostDescription.className = 'hawaii-post-description';
//         }
//       })
//       if (hawaiiObj.data.children[i].data.selftext === '') {
//         hawaiiPostDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis ligula. Ut venenatis ante vel tortor mattis, at feugiat mi dapibus. Nullam volutpat turpis quis lectus aliquam, suscipit commodo mauris vulputate. Nulla facilisi. Nulla ultrices feugiat lorem vel scelerisque. Nulla iaculis, leo et facilisis lobortis, nisi massa egestas sapien, in placerat dui quam ut sem. Aenean eu euismod magna, nec tempor metus. Proin mollis, sem sed laoreet ornare, odio nunc ultricies mi, pellentesque posuere tellus libero efficitur erat. Donec nunc ipsum, vehicula eget condimentum in, volutpat ut lacus. Ut maximus sem a pellentesque iaculis. Aliquam sit amet commodo nisl. Aliquam rhoncus, quam at pellentesque pulvinar, dui dui congue est, venenatis congue nunc augue at magna. Morbi eu est et magna mollis mattis. Vivamus auctor lectus et accumsan elementum.';
//       } else {
//         hawaiiPostDescription.innerHTML = hawaiiObj.data.children[i].data.selftext;
//       }
//       hawaiiPostTitle.appendChild(hawaiiPostDescription);
//     }
//   })
// })

// let randomHead = document.getElementById('random-subRed');
// randomHead.addEventListener('click', function () {
//   console.log('clicked');
//   randomize();
//   let randomSubReddit = new XMLHttpRequest();
//   randomSubReddit.open('GET', randomSubRed);
//   randomSubReddit.send();
//   randomSubReddit.addEventListener('load', function () {
//     soccerPostsContainer.innerHTML = '';
//     let randomObj = JSON.parse(this.responseText);
//     console.log(randomObj);

//     let randomChildren = randomObj.data.children;
//     for (let i = 0; i < randomChildren.length; i++) {

//       let randomPostImage = document.createElement('div');
//       if (randomObj.data.children[i].data.url.charAt(randomObj.data.children[i].data.url.length - 1) === 'g') {

//         randomPostImage.style.backgroundImage = 'url("' + randomObj.data.children[i].data.url + '")'

//       } else if (randomObj.data.children[i].data.url.charAt(randomObj.data.children[i].data.url.length - 1) !== 'g' && randomObj.data.children[i].data.thumbnail.charAt(randomObj.data.children[i].data.thumbnail.length - 1) === 'g') {
//         randomPostImage.style.backgroundImage = 'url("' + randomObj.data.children[i].data.thumbnail + '")'
//       } else {
//         randomPostImage.style.backgroundImage = 'url("' + 'https://vignette.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest/scale-to-width-down/480?cb=20160625173435' + '")';
//       }

//       randomPostImage.className = 'random-post-image';
//       soccerPostsContainer.appendChild(randomPostImage);

//       let randomPostTitle = document.createElement('div');
//       randomPostTitle.innerHTML = randomObj.data.children[i].data.title;
//       randomPostTitle.className = 'random-post-title';
//       soccerPostsContainer.appendChild(randomPostTitle);

//       let randomPostAuthor = document.createElement('div');
//       if (randomObj.data.children[i].data.score > -1) {
//         randomPostAuthor.innerHTML = 'by ' + randomObj.data.children[i].data.author + ' 👍🏿 ' + randomObj.data.children[i].data.score;
//       } else {
//         randomPostAuthor.innerHTML = 'by ' + randomObj.data.children[i].data.author + ' 👎🏿 ' + randomObj.data.children[i].data.score;
//       }

//       randomPostAuthor.className = 'random-post-author';
//       randomPostTitle.appendChild(randomPostAuthor);

//       let randomPostDescription = document.createElement('div');

//       if (randomObj.data.children[i].data.selftext === '') {
//         randomPostDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis ligula. Ut venenatis ante vel tortor mattis, at feugiat mi dapibus. Nullam volutpat turpis quis lectus aliquam, suscipit commodo mauris vulputate. Nulla facilisi. Nulla ultrices feugiat lorem vel scelerisque. Nulla iaculis, leo et facilisis lobortis, nisi massa egestas sapien, in placerat dui quam ut sem. Aenean eu euismod magna, nec tempor metus. Proin mollis, sem sed laoreet ornare, odio nunc ultricies mi, pellentesque posuere tellus libero efficitur erat. Donec nunc ipsum, vehicula eget condimentum in, volutpat ut lacus. Ut maximus sem a pellentesque iaculis. Aliquam sit amet commodo nisl. Aliquam rhoncus, quam at pellentesque pulvinar, dui dui congue est, venenatis congue nunc augue at magna. Morbi eu est et magna mollis mattis. Vivamus auctor lectus et accumsan elementum.';
//       } else {
//         randomPostDescription.innerHTML = randomObj.data.children[i].data.selftext;
//       }
//       randomPostDescription.className = 'random-post-description'
//       randomPostAuthor.appendChild(randomPostDescription)

//       randomPostDescription.addEventListener('click', function () {
//         if (randomPostDescription.className === 'random-post-description') {
//           randomPostDescription.className = 'active';
//         } else if (randomPostDescription.className === 'active') {
//           randomPostDescription.className = 'random-post-description';
//         }
//       })
//     }
//   })
// })



