let para = document.querySelector("p");
let array_joke = new Array();
let butt = document.getElementById("nxtBtn");

array_joke = ["What does a clock do when it’s hungry? ~ It goes back for seconds.", "Why did Shakespeare always write with a pen? ~ Because pencils made him ask ‘2B or not 2B’?", "What does one eye say to the other eye? ~ Something between us smells", "What was Forrest Gump’s email password? ~ 1forrest1", "Why should you never trust stairs? ~ They’re always up to something", "What’s the spookiest kind of author? ~ A ghost writer", "What did the comedian say to Harry Potter? ~ Why so Sirius", "Yesterday was a 'HISTORY', Tommorrow is a 'MYSTERY'. But, but TODAY is a #gift - full of surprises, that's why it is called 'PRESENT'. Therefore beaware of what shit does the PRESENT gives as a Surprise. Welcome to a New Day!", "The loudspeaker of the big jet clicked on and the captain\’s voice announced in a clear, even tone: \“Now there\’s no cause for alarm but we felt you should know that for the last three hours we\’ve been flying without the benefit of radio, compass, radar, or navigational beam due to the breakdown of certain key components. This means that we are, in the broad sense of the word, lost and not quite sure in which direction we are heading. I\’m sure you\’ll be glad to know however, that we’re making excellent time!\” ", "There\’s one proverb that really depresses him: \“Hair today, gone tomorrow.\” ", " There are these two sausages sizzling in a frying pan.  the one turns to the other and says \"Gees, it's hot in here\" and the second one turns around and goes \"AAAAH , a talking sausage\". "];
let random_joke = Math.floor(Math.random() * array_joke.length);
let joke_s = array_joke[random_joke];
butt.addEventListener("click", () => {
    window.location.reload();
});

//console.log(joke_s);
para.innerText = joke_s;