let postWrappers = document.querySelectorAll('#post');

const setMainImg = (igPost, photo) => {
  const mainImg = `<img className='${photo.className}' src="${photo.src}" alt="${photo.alt}" />`
  igPost.innerHTML = mainImg;

  return mainImg;
}

const renderIndicator = (navIndicator, photos, active = 0) => {
  let indicatorActive = '<div class="rounded-full w-2 h-2 mx-0.5" style="background-color: rgb(96, 165, 250)"></div>';
  let indicator = '<div class="rounded-full w-2 h-2 mx-0.5" style="background-color: rgb(156, 163, 175)"></div>';

  navIndicator.innerHTML = "";
  photos.forEach((p, idx) => {
    if (active == idx) {
      navIndicator.innerHTML += indicatorActive;
    } else {
      navIndicator.innerHTML += indicator;
    }
  });
}

const hideElement = (el) => {
  el.classList.add('hidden');
}

const showElement = (el) => {
  el.classList.remove('hidden');
}

postWrappers.forEach((pw, idx) => {
  let it = 0;
  let photoWrapper = pw.querySelector('#ig_photos');
  let navIndicator = pw.querySelector('#nav_indicator');
  let photos = [...photoWrapper.querySelectorAll('img')];
  let postNavigation = pw.querySelector('#post_navigation');
  const leftBtn = postNavigation.querySelectorAll('button')[0];
  const rightBtn = postNavigation.querySelectorAll('button')[1];
  const commentSection = pw.querySelector('#comment_section');
  const postButton = pw.querySelector('#post_button');

  setMainImg(photoWrapper, photos[it]);
  renderIndicator(navIndicator, photos);
  if (photos.length === 1) {
    hideElement(leftBtn);
    hideElement(rightBtn);
  } else {
    hideElement(leftBtn);
  }

  leftBtn.addEventListener('click', (e) => {
    if (it > 0) setMainImg(photoWrapper, photos[--it])
    if (it === 0) {
      hideElement(leftBtn);
      showElement(rightBtn);
    } else {
      showElement(leftBtn);
      showElement(rightBtn);
    }
    renderIndicator(navIndicator, photos, it)
  })

  rightBtn.addEventListener('click', (e) => {
    if (it < photos.length) setMainImg(photoWrapper, photos[++it])
    if (it === photos.length - 1) {
      showElement(leftBtn);
      hideElement(rightBtn);
    } else {
      showElement(leftBtn);
      showElement(rightBtn);
    }
    renderIndicator(navIndicator, photos, it)
  })

  commentSection.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      postButton.classList.remove('text-blue-200')
      postButton.classList.add('text-blue-400')
    } else {
      postButton.classList.add('text-blue-200')
      postButton.classList.remove('text-blue-400')
    }
  })
});