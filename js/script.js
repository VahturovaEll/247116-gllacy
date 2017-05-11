var feedbackOpenButton = document.querySelector('.feedback-button');
var feedbackOverlay = document.querySelector('.feedback-overlay');

var feedbackWindow = document.querySelector('.feedback-window');
var feedbackCloseButton = feedbackWindow.querySelector('.feedback-close');
var feedbackForm = feedbackWindow.querySelector('.feedback-form');

var storageName = localStorage.getItem('name');
var storageEmail = localStorage.getItem('email');

function openFeedbackWindow(event) {
  event.preventDefault();
  feedbackOverlay.classList.remove('feedback-hidden');
  if (storageName && storageEmail) {
    feedbackForm.name.value = storageName;
    feedbackForm.email.value = storageEmail;
    feedbackForm.text.focus();
  } else if (storageName) {
    feedbackForm.name.value = storageName;
    feedbackForm.email.focus();
  } else {
    feedbackForm.name.focus();
  }
}

function closeFeedbackWindow(event) {
  event.preventDefault();
  feedbackOverlay.classList.add('feedback-hidden');
}

function feedbackFormSumtit(event) {
  event.preventDefault();
  localStorage.setItem('name', feedbackForm.name.value);
  localStorage.setItem('email', feedbackForm.email.value);
  feedbackOverlay.classList.add('feedback-hidden');
}

feedbackOpenButton.addEventListener('click', this.openFeedbackWindow);
feedbackCloseButton.addEventListener('click', this.closeFeedbackWindow);
feedbackForm.addEventListener('submit', this.feedbackFormSumtit);