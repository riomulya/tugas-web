var quote = document.querySelector('cite');
var generateNew = document.querySelector('.genQuote');
var n = 0;
var newQuotes = [
  "Some people don't like change, but you need to embrace change if the alternative is disaster. - Elon Musk",
  'The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent. - Arnold Schwarzenegger',
  'Some body has to be number 1, why not me. - Faze Censor',
  "You never want to fail because you didn't work hard enough - Arnold Schwarzenegger",
  'There is no rules. - Marc Fitt',
  'Skills are cheap, Passion is priceless. - Gary Vaynerchuk',
  'He who is not courageous enough to take risks will accomplish nothing in life. - Muhammad Ali',
  'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough. - Mark Zuckerberg ',
  'I think the saddest people always try their hardest to make people happy because they know what it’s like to feel absolutely worthless and they don’t want anyone else to feel like that. - Robin Williams',
  'Everything you want is on the other side of fear.  - Jack Canfield ',
];

generateNew.addEventListener('click', function () {
  if (n < 9) {
    quote.textContent = newQuotes[n];
    n++;
  } else {
    quote.textContent = newQuotes[n];
    n = 0;
  }
});
