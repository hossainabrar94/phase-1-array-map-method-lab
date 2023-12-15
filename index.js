const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTitle = tutorials.map(function(sentence){
    const words = sentence.split(' ')
    let upperCase = words.map(function(sentence1){
      return sentence1.charAt(0).toUpperCase() + sentence1.slice(1)
    })
    return upperCase.join(' ')
  })
  return newTitle
}