const guestSpeaker = document.getElementById('guest-speaker');

const guestsArr = [{
  name: 'Akira Toriyama',
  title: 'Creator of Dragon Ball Universe',
  bio: 'Japanese manga artist and character designer at Funimation studios.',
  img: './assets/Akira-Toriyama.jpg',
  bg: './assets/chess-board_1.png',
},
{
  name: 'Toyotarou',
  title: 'Lead anime artist of Dragon Ball Universe',
  bio: 'Is best known for illustrating Dragon Ball Super (2015–present), which is written by series creator Akira Toriyama.',
  img: './assets/Toyotaro.jpg',
  bg: './assets/chess-board_1.png',
},
{
  name: 'Sean Schemmel',
  title: 'Voice actor of Goku dubbed',
  bio: 'American voice actor, ADR director and screenwriter',
  img: './assets/Sean-Schemmel.jpg',
  bg: './assets/chess-board_1.png',
},
{
  name: 'Christopher Sabat',
  title: 'Voice actor of Vegeta, Piccolo, Yamcha and Shenron dubbed',
  bio: 'Voice actor for English-versions of Japanese anime and video games, including a variety of Dragon Ball characters at Funimation studios',
  img: './assets/Christopher-Sabat.jpg',
  bg: './assets/chess-board_1.png',
},
{
  name: 'Ken Kuraragi',
  title: 'Father of the Playstation',
  bio: ' He is known as "The Father of the PlayStation", as he oversaw the development of the original console and its successors and spinoffs',
  img: './assets/Ken.jpg',
  bg: './assets/chess-board_1.png',
},
{
  name: 'Lee Byung-chul',
  title: 'Owner of Samsung',
  bio: 'He was the founder of the Samsung Group, which is South Koreas largest business group',
  img: './assets/Lee_Byung-chul.jpg',
  bg: './assets/chess-board_1.png',
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
  image.classList.add('guest-image');
  image.src = guestsArr[i].img;

  const bg = document.createElement('img');
  bg.classList.add('bg-card');
  bg.src = guestsArr[i].bg;

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
  .appendChild(bg);

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
