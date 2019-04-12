// 1. Initialize Firebase
const config = {
  apiKey: 'AIzaSyCbaDBRoB73Wo-g9jMMjRNXXB7l8PuQjZQ',
  authDomain: 'project-one-f75c6.firebaseapp.com',
  databaseURL: 'https://project-one-f75c6.firebaseio.com',
  projectId: 'project-one-f75c6',
  storageBucket: 'project-one-f75c6.appspot.com',
  messagingSenderId: '272761884868',
};
firebase.initializeApp(config);

const database = firebase.database();
var userBirthYear = 0;
var chineseZodiacArray = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep',];
var chineseZodiacRemainder = 0;
var userChineseZodiac = "";

// 2. Button for adding users
$('#add-user-btn').on('click', (event) => {
  event.preventDefault();
  // Clear last Zodiac
  $("#user-zodiac").empty();

  // Grabs user input
  const userName = $('#name-input').val().trim();
  const userBirth = $('#birth-input').val().trim();
  userBirthYear = moment(userBirth).years();
  console.log(userBirthYear);
  // Determine a user's Chinese zodiac by the remainder of the year by 12
  chineseZodiacRemainder = userBirthYear % 12;
  console.log(chineseZodiacRemainder);
  userChineseZodiac = chineseZodiacArray[chineseZodiacRemainder];
  console.log(userChineseZodiac);

  if (userName.length === 0 || userBirthYear.length === 0) {
    alert("Please enter the whole form!");
    return false
  } else {
    alert("Form submitted!");
  }

  // Creates local "newuser" object for holding user data
  const newuser = {
    name: userName,
    birthYear: userBirthYear,
    chineseZodiac: userChineseZodiac,
    dateAdded: firebase.database.ServerValue.TIMESTAMP,
  };

  // Uploads user data to the database
  database.ref().push(newuser);

  // Clears all of the text-boxes
  $('#name-input').val('');
  $('#birth-input').val('');


  console.log(chineseZodiacRemainder);

  if (chineseZodiacRemainder === 4) {
    $("#user-zodiac").append('<h3>Your Chinese Zodiac is: Rat</h3>' +
      '<p><img class="image float-left mr-2" title="rat zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/rat.gif" alt="" width="69" height="69">Rats have a strong intellectual gifting and are usually smart, witty, curious and perceptive people. They also have good taste and can be charming and humorous. Rats make good friends as they are loyal and generous to those within their intimate circle.</p>' +
      '<p><strong>Strengths:</strong> Intelligent, willing to learn and open to challenges<br>' +
      '<strong>Weaknesses:</strong> Greedy or money-minded<br>' +
      '<strong>Compatibility: </strong>Dragon, Monkey</p>');
  } else if (chineseZodiacRemainder === 5) {
    $("#user-zodiac").append('<h3>Your Chinese Zodiac is: Ox</h3>' +
      '<p><img class="image float-left mr-2" title="ox zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/ox.gif" alt="" width="69" height="69">The Ox is known to be diligent, focused and dependable. Such a person would most likely pay great attention to detail and have a serious personality. Those born in the Year of the Ox are usually strong and protective companions who enjoy the company of family and friends. However, they can also be introverted and solitary creatures.</p>' +
      '<p><strong>Strengths:</strong> Trustworthy, industrious and able to accomplish set goals<br>' +
      '<strong>Weaknesses:</strong> Stubborn, insecure and prone to feelings of loneliness<br>' +
      '<strong>Compatibility: </strong>Snake, Rooster</p>');
  }
  else if (chineseZodiacRemainder === 6) {
    $("#user-zodiac").append('<h3>Your Chinese Zodiac is: Tiger</h3>' +
      '<p><img class="image float-left mr-2" title="tiger zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/tiger.gif" alt="" width="69" height="69">Being natural leaders and go-getters, Tigers have a pretty impressive persona. Filled with courage, ambition and energy, they are also very passionate about life though they exhibit frequent mood swings. Unbeknownst to most people, Tigers are very affectionate too.</p>' +
      '<p><strong>Strengths:</strong> Confident with strong leadership qualities<br>' +
      '<strong>Weaknesses:</strong> Can be temperamental at times<br>' +
      '<strong>Compatibility: </strong>Horse, Dog</p>');
  } else if (chineseZodiacRemainder === 7) {
    $("#user-zodiac").append('<h3>Your Zodiac is: Rabbit</h3>' +
      '<p><img class="image float-left mr-2" title="rabbit zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/hare.gif" alt="" width="69" height="69">Rabbits are homely people who like nothing better than to entertain friends and family by the hearth. Their genuine kindness, empathy and warmth make them popular with almost everyone. Unfortunately, these very same traits also result in them being a frequent victim of exploitation.<br>' +
      '<strong> </strong></p>' +
      '<p><strong>Strengths:</strong> Sincere and compassionate<br>' +
      '<strong>Weaknesses:</strong> Easily manipulated due to their non-confrontational nature<br>' +
      '<strong>Compatibility: </strong>Goat, Pig</p>');
  } else if (chineseZodiacRemainder === 8) {
    $("#user-zodiac").append('<h3>Your Zodiac is: <h3>Dragon</h3>' +
      '<p><img class="image float-left mr-2" title="dragon zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/dragon.gif" alt="" width="69" height="69">The Sign of the Dragon is considered the most auspicious Zodiac Sign in Chinese Astrology. It is common to see many Chinese couples try to conceive a baby born in the Year of the Dragon as they believe their child will then become very successful. Generally, Dragons are incredibly high-spirited and possess a magnetic personality. They’re innate leaders and make good people managers. On the down side, they also suffer from a superiority complex.<br>' +
      '<strong>Strengths:</strong> Charismatic and dynamic leadership qualities<br>' +
      '<strong>Weaknesses: </strong>Conceited and self-centered<br>' +
      '<strong>Compatibility: </strong>Monkey, Rat</p>');
  } else if (chineseZodiacRemainder === 9) {
    $("#user-zodiac").append('<h3>Your Zodiac is: Snake</h3>' +
      '<p><img class="image float-left mr-2" title="snake zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/snake.gif" alt="" width="69" height="69">Like their namesake, those born under the Sign of the Snake can be rather dangerous and should be treated with caution. Otherwise, they are actually outgoing and generous people. Snakes are clever, logical yet instinctive, and hard workers. They are also good investors.<br>' +
      '<strong> </strong></p>' +
    '<p><strong>Strengths:</strong> Smart; and have good analytical and financial skills<br>' +
      '<strong>Weaknesses:</strong> Insecure and easily jealous<br>' +
      '<strong>Compatibility: </strong>Rooster, Ox</p>');
  } else if (chineseZodiacRemainder === 10) {
    $("#user-zodiac").append('<h3>Your Zodiac is: Horse</h3>' +
      '<p><img class="image float-left mr-2" title="horse zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/horse.gif" alt="" width="69" height="69">Horses love to be free and are independent people who take great pleasure in travelling. Though they enjoy love and intimacy, they can come across as a rolling stone who is unable to commit and settle down. Surprisingly, horses are highly seductive and clever with money. They can also be touchy creatures.<br>' +
      '<strong> </strong></p>' +
      '<p><strong>Strengths:</strong> Self-sufficient and a financial expert<br>' +
      '<strong>Weaknesses:</strong> Impatient<br>' +
      '<strong>Compatibility: </strong>Dog, Tiger</p>');
  } else if (chineseZodiacRemainder === 11) {
    $("#user-zodiac").append('<h3>Your Zodiac is: Goat</h3>' +
      '<p><img class="image float-left mr-2" title="goat zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/sheep.gif" alt="" width="69" height="69">Goats are thinkers with tremendous creative ability, who prefer to be left undisturbed in their contemplations. They also set a great store by appearances. Though they have admirable strengths, goats suffer from a lot of self doubt and need a lot of love and encouragement to ease their constant anxiety.<br>' +
      '<strong></strong></p>' +
      '<p><strong>Strengths:</strong> Inventive and resourceful<br>' +
      '<strong>Weaknesses:</strong> Disorganized, insecure and edgy<br>' +
      '<strong>Compatibility: </strong>Pig, Rabbit</p>');
  } else if (chineseZodiacRemainder === 0) {
    $("#user-zodiac").append('<h3>Your Zodiac is: Monkey</h3>' +
      '<p><img class="image float-left mr-2" title="monkey zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/monkey.gif" alt="" width="69" height="69">Monkeys are fun-loving people who are usually live-wires everywhere they go. Their optimism and enthusiasm is contagious but they tend to be a little wild. Monkeys have poor morals and put themselves first. They are also bad at maintaining committed relationships.<br>' +
      '<strong></strong></p>' +
      '<p><strong>Strengths:</strong> Optimistic and possess good listening skills<br>' +
      '<strong>Weaknesses:</strong> Selfish and self-indulgent<br>' +
      '<strong>Compatibility: </strong>Rat, Dragon</p>');
  } else if (chineseZodiacRemainder === 1) {
    $("#user-zodiac").append('<h3>Your Zodiac is: Rooster</h3>' +
      '<p><img class="image float-left mr-2" title="rooster zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/rooster.gif" alt="" width="69" height="69">Roosters are honest, down-to-earth and trusting people. They are neat, tend to be traditionalists and can be real sticklers. Roosters are also observant and ingenious creatures.<br>' +
      '<strong></strong></p>' +
      '<p><strong>Strengths:</strong> Truthful and sensible<br>' +
      '<strong>Weaknesses:</strong> Perfectionist, gullible<br>' +
      '<strong>Compatibility: </strong>Ox, Snake</p>');
  } else if (chineseZodiacRemainder === 2) {
    $("#user-zodiac").append('<h3>Your Zodiac is: Dog</h3>' +
      '<p><img class="image float-left mr-2" title="dog zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/dog.gif" alt="" width="69" height="69">Resembling the animal influencing their horoscope, Dogs are devoted to those they love. They are usually successful business people but are quite unlucky in their romantic life. &nbsp;Dogs can turn out to be rigid and temperamental; and often cover up using white lies.</p>' +
      '<p><strong>Strengths:</strong> Loyal and sensitive<br>' +
      '<strong>Weaknesses:</strong> Inflexible, have a bad habit of fibbing and prone to mood swings<br>' +
      '<strong>Compatibility: </strong>Tiger, Horse</p>');
  } else if (chineseZodiacRemainder === 3) {
    $("#user-zodiac").append('<h3>Your Zodiac is: Pig</h3>' +
      '<p><img class="image float-left mr-2" title="pig zodiac sign" src="http://www.bzodiac.com/wp-content/uploads/2010/09/boar.gif" alt="" width="69" height="69">Unlike their animal counterpart, Pigs have exquisite taste. They are also pleasant and gracious. Pigs make good friends and are generally accommodating but don’t let their geniality fool you! Pigs can be very nasty when there is conflict.</p>' +
      '<p><strong>Strengths:</strong> Helpful and well-mannered<br>' +
      '<strong>Weaknesses:</strong> Vengeful<br>' +
      '<strong>Compatibility: </strong>Rabbit, Goat</p>');
  }
});

// 3. Create Firebase event for adding user to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot) {
  // console.log(childSnapshot.val());

  // Store everything into a variable.
  var userName = childSnapshot.val().name;
  var userBirthYear = childSnapshot.val().birthYear;
  var userChineseZodiac = childSnapshot.val().chineseZodiac;
  // console.log(userBirthYear);

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(userName).attr("class", "user-name"),
    $("<td>").text(userBirthYear).attr("class", "user-birthyear"),
    $("<td>").text(userChineseZodiac).attr("class", "user-chinesezodiac"),
  );

  // Append the new row to the table
  $("#user-table > tbody").append(newRow);
});
