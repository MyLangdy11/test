const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
  document.documentElementById("ul").style.display="block";
});

// JavaScript
const newsContainer = document.querySelector('.news-container');
const popupContainer = document.querySelector('.popup-container');
const popupTitle = document.querySelector('.popup-title');
const popupParagraph = document.querySelector('.popup-paragraph');
const popupImage = document.querySelector('.popup-image');
const closePopup = document.querySelector('.close-popup');

// Fetch news items from a data source (e.g., an API or a JavaScript object)
const newsItems = [
  {
    title: 'News Item 1',
    paragraph: 'This is the content for News Item 1.',
    image: 'https://www.khmertimeskh.com/wp-content/uploads/2021/02/16803.jpg'
  },
  {
    title: 'News Item 2',
    paragraph: 'This is the content for News Item 1.',
    image: 'https://www.khmertimeskh.com/wp-content/uploads/2021/02/16803.jpg'
  },
  // Add more news items here
];

// Populate the news items on the page
newsItems.forEach(item => {
  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');

  const titleElement = document.createElement('h3');
  titleElement.classList.add('news-title');
  titleElement.textContent = item.title;

  const paragraphElement = document.createElement('p');
  paragraphElement.classList.add('news-paragraph');
  paragraphElement.textContent = item.paragraph;

  const imageElement = document.createElement('img');
  imageElement.classList.add('news-image');
  imageElement.src = item.image;
  imageElement.alt = 'News Image';

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('open-popup');
  buttonElement.textContent = 'View Details';

  newsItem.appendChild(titleElement);
  newsItem.appendChild(paragraphElement);
  newsItem.appendChild(imageElement);
  newsItem.appendChild(buttonElement);

  newsContainer.appendChild(newsItem);

  buttonElement.addEventListener('click', () => {
    popupTitle.textContent = item.title;
    popupParagraph.textContent = item.paragraph;
    popupImage.src = item.image;
    popupImage.alt = 'Popup Image';
    popupContainer.style.display = 'block';
  });
});

closePopup.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == popupContainer) {
    popupContainer.style.display = 'none';
  }
});