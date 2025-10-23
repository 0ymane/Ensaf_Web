function checkAnswers() {

    const correctAnswers = {
        q1: 'c',
        q2: 'c',
        q3: 'b',
        q4: 'b',
        q5: 'c',
        q6: 'c',
        q7: 'a',
        q8: 'b',
        q9: 'c',
        q10: 'a'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const totalQuestions = 10;

    /* RESET */
    for (let i = 1; i <= totalQuestions; i++) {
        const feedback = document.getElementById(`feedback-q${i}`);
        if (feedback) feedback.textContent = '';
      }
    document.getElementById('totalScore').textContent = '';

    /* Answer Logic */
    for (let i = 1; i <= totalQuestions; i++) {
        const qName = `q${i}`;
        const selected = form.querySelector(`input[name="${qName}"]:checked`);
        const feedback = document.getElementById(`feedback-q${i}`);

        if (!selected) {
          feedback.textContent = 'No answer selected.';
          continue;
        }

    if (selected.value === correctAnswers[qName]) {
      feedback.textContent = '✅ Correct!';
      score++;
    } else {
      feedback.textContent = `❌ Wrong. The correct answer was "${correctAnswers[qName]}".`;
    }
  }

  // Show final score
  const totalScore = document.getElementById('totalScore');
  totalScore.textContent = `Your score: ${score} / ${totalQuestions}`;

  totalScore.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
