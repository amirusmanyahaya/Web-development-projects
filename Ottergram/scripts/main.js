var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-title="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAILS_CLASS = "hidden-details";
var ESC_KEY = "Escape";
function setDetails(imageUrl, titleText) {
  "use strict";
  var detailedImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailedImage.setAttribute("src", imageUrl);

  var detailedImageTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailedImageTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumbnail) {
  "use strict";
  thumbnail.addEventListener("click", function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumbnail);
    showDetails(HIDDEN_DETAILS_CLASS);
  });
}

function getAllThumbnails() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}

function hideDetails(className) {
  "use strict";
  document.body.classList.add(className);
}

function showDetails(className) {
  "use strict";
  document.body.classList.remove(className);
}

function addKeyHandler() {
  "use strict";
  document.body.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.code === ESC_KEY) {
      hideDetails(HIDDEN_DETAILS_CLASS);
    }
  });
}

function initialize() {
  "use strict";
  var thumbnails = getAllThumbnails();
  thumbnails.forEach(addThumbClickHandler);
  addKeyHandler();
}

initialize();
