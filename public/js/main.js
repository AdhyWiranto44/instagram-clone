let postMenu = document.querySelector('#post_menu');
let postModal = document.querySelector('#post_modal');
let body = document.querySelector('body');

postMenu.addEventListener('click', (e) => {
  postModal.classList.toggle('hidden');
  body.classList.add('h-screen');
  body.classList.add('overflow-y-hidden');
});

postModal.querySelector('#exit_button').addEventListener('click', (e) => {
  postModal.classList.toggle('hidden');
  body.classList.remove('h-screen');
  body.classList.remove('overflow-y-hidden');
});