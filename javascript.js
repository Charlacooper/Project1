
const quotes = [
  {
    text: "Therefore, if anyone is in Christ, he is a new creation.  The old has passed away; behold, the new has come.",
    author: "2 Corinthians 5:17"
  },
  {
    text: "Come to me, all who are weary, and I will give you rest.",
    author: "Matthew 11:28"
  },
  {
    text: "I can do all things through him who strengthens me.",
    author: "Philippians 4:13"
  },
  {
    text: "Trust in the Lord with all your heart, and do not lean on your own understanding.",
    author: "Proverbs 3:5"
  },
  {
     text: "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
     author: "Matthew 6:33"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to display a new quote
function displayNewQuote() {
  const quote = getRandomQuote();
  document.getElementById("text").textContent = quote.text;
  document.getElementById("author").textContent = quote.author;
}


document.getElementById("new-quote").addEventListener("click", displayNewQuote);


window.addEventListener("load", displayNewQuote);
