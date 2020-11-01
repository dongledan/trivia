// src/components/Questions

export function shuffle(incorrect, correct) {
  const answers = correct ? [correct, ...incorrect] : incorrect;
  let currentIndex = answers.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = answers[currentIndex];
    answers[currentIndex] = answers[randomIndex];
    answers[randomIndex] = temporaryValue;
  }
  return answers;
}