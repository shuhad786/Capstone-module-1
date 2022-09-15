const guestSpeaker = document.getElementById('guest-speaker');
const MguestSpeaker = document.getElementById('Mguest-speaker');

const guestsArr = [{
  name: 'Akira Toriyama',
  title: 'Creator of Dragon Ball Universe',
  bio: 'Japanese manga artist and character designer at Funimation studios.',
  img: './assets/Akira-Toriyama.jpg',
},
{
  name: 'Toyotarou',
  title: 'Lead anime artist of Dragon Ball Universe',
  bio: 'He has drawn several Dragon Ball-related manga and is best known for illustrating Dragon Ball Super (2015 – present), which is written by series creator Akira Toriyama.',
  img: './assets/Toyotaro.jpg',
},
{
  name: 'Sean Schemmel',
  title: 'Voice actor of Goku dubbed',
  bio: 'American voice actor, ADR director and screenwriter',
  img: './assets/Sean-Schemmel.jpg',
},
{
  name: 'Christopher Sabat',
  title: 'Voice actor of Vegeta, Piccolo, Yamcha and Shenron dubbed',
  bio: 'Voice actor for English-versions of Japanese anime and video games, including a variety of Dragon Ball characters at Funimation studios',
  img: './assets/Christopher-Sabat.jpg',
},
];

for (let i = 0; i < guestsArr.length; i += 1) {
  const container1 = document.createElement('div');
  container1.classList.add('desktop-grid', 'mt-5', 'mb-5');

  const card1 = document.createElement('div');
  card1.classList.add('col1');

  const card2 = document.createElement('div');
  card2.classList.add('col2');

  const image = document.createElement('img');
  image.classList.add('img-fluid', 'guest-image');
  image.src = guestsArr[i].img;

  const nameElement = document.createElement('h4');
  nameElement.innerHTML = guestsArr[i].name;
  nameElement.classList.add('name-card');

  const title = document.createElement('h6');
  title.innerHTML = guestsArr[i].title;
  title.classList.add('title-card');

  const bio = document.createElement('p');
  bio.innerHTML = guestsArr[i].bio;
  bio.classList.add('bio');

  guestSpeaker
    .appendChild(container1)
    .appendChild(card1)
    .appendChild(image);

  guestSpeaker
    .appendChild(container1)
    .appendChild(card1)
    .appendChild(card2)
    .appendChild(nameElement);

  guestSpeaker
    .appendChild(container1)
    .appendChild(card1)
    .appendChild(card2)
    .appendChild(title);

  guestSpeaker
    .appendChild(container1)
    .appendChild(card1)
    .appendChild(card2)
    .appendChild(bio);
}

const MguestsArr = [{
  name: 'Akira Toriyama',
  title: 'Creator of Dragon Ball Universe',
  bio: 'Japanese manga artist and character designer at Funimation studios.',
  img: './assets/Akira-Toriyama.jpg',
},
{
  name: 'Toyotarou',
  title: 'Lead anime artist of Dragon Ball Universe',
  bio: 'He has drawn several Dragon Ball-related manga and is best known for illustrating Dragon Ball Super (2015 – present), which is written by series creator Akira Toriyama.',
  img: './assets/Toyotaro.jpg',
},
{
  name: 'Sean Schemmel',
  title: 'Voice actor of Goku dubbed',
  bio: 'American voice actor, ADR director and screenwriter',
  img: './assets/Sean-Schemmel.jpg',
},
{
  name: 'Christopher Sabat',
  title: 'Voice actor of Vegeta, Piccolo, Yamcha and Shenron dubbed',
  bio: 'Voice actor for English-versions of Japanese anime and video games, including a variety of Dragon Ball characters at Funimation studios',
  img: './assets/Christopher-Sabat.jpg',
},
];

for (let i = 0; i < MguestsArr.length; i += 1) {
  const container2 = document.createElement('div');
  container2.classList.add('mobile-grid', 'mt-5');

  const card3 = document.createElement('div');
  card3.classList.add('row1');

  const card4 = document.createElement('div');
  card4.classList.add('row2');

  const image = document.createElement('img');
  image.classList.add('img-fluid', 'guest-image');
  image.src = guestsArr[i].img;

  const nameElement = document.createElement('h4');
  nameElement.innerHTML = guestsArr[i].name;
  nameElement.classList.add('Mname-card');

  const title = document.createElement('h6');
  title.innerHTML = guestsArr[i].title;
  title.classList.add('Mtitle-card');

  const bio = document.createElement('p');
  bio.innerHTML = guestsArr[i].bio;
  bio.classList.add('Mbio');

  MguestSpeaker
    .appendChild(container2)
    .appendChild(card3)
    .appendChild(image);

  MguestSpeaker
    .appendChild(container2)
    .appendChild(card3)
    .appendChild(card4)
    .appendChild(nameElement);

  MguestSpeaker
    .appendChild(container2)
    .appendChild(card3)
    .appendChild(card4)
    .appendChild(title);

  MguestSpeaker
    .appendChild(container2)
    .appendChild(card3)
    .appendChild(card4)
    .appendChild(bio);
}
