// ========================
// EXERCICE 1.1 - Afficher/Masquer
// ========================
const toggleBtn = document.getElementById('toggleBtn');
const textToToggle = document.getElementById('textToToggle');

toggleBtn.addEventListener('click', function() {
    if (textToToggle.style.display === 'none') {
        textToToggle.style.display = 'block';
        toggleBtn.textContent = 'Masquer';
    } else {
        textToToggle.style.display = 'none';
        toggleBtn.textContent = 'Afficher';
    }
});

// ========================
// EXERCICE 1.2 - Changer de couleur
// ========================
const changeColorBtn = document.getElementById('changeColorBtn');
const colorDiv = document.getElementById('colorDiv');
const colors = ['lightblue', 'lightcoral', 'lightgreen', 'lightyellow', 'lightpink'];
let colorIndex = 0;

changeColorBtn.addEventListener('click', function() {
    colorIndex = (colorIndex + 1) % colors.length;
    colorDiv.style.backgroundColor = colors[colorIndex];
});

// ========================
// EXERCICE 1.3 - Événements de souris
// ========================
const hoverDiv = document.getElementById('hoverDiv');

hoverDiv.addEventListener('mouseenter', function() {
    hoverDiv.style.backgroundColor = 'orange';
});

hoverDiv.addEventListener('mouseleave', function() {
    hoverDiv.style.backgroundColor = 'lightgreen';
});

// ========================
// EXERCICE 1.4 - Validation de formulaire
// ========================
const myForm = document.getElementById('myForm');
const errorMsg = document.getElementById('errorMsg');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;

    if (nom === '' || email === '') {
        errorMsg.textContent = 'Veuillez remplir tous les champs!';
    } else {
        errorMsg.textContent = '';
        alert('Formulaire soumis avec succès!\nNom: ' + nom + '\nEmail: ' + email);
        myForm.reset();
    }
});

// ========================
// EXERCICE 1.5 - Timer
// ========================
let seconds = 0;
const timerDisplay = document.getElementById('timer');

setInterval(function() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const hoursStr = hours < 10 ? '0' + hours : hours;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secsStr = secs < 10 ? '0' + secs : secs;

    timerDisplay.textContent = hoursStr + ':' + minutesStr + ':' + secsStr;
}, 1000);

// ========================
// EXERCICE 2 - Manipulation des tableaux
// ========================

// Fonction 1: Générer un nombre aléatoire entre 0 et n
function alea(n) {
    return Math.floor(Math.random() * n);
}

// Fonction 2: Créer un tableau de nombres aléatoires
function createRandomArray(n, max) {
    const tableau = [];
    for (let i = 0; i < n; i++) {
        tableau.push(alea(max));
    }
    return tableau;
}

// Fonction 3: Trouver l'élément maximum d'un tableau
function maxElement(tableau) {
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}

// Fonction 4: Compter les occurrences d'un élément
function nbOccurrences(tableau, element) {
    let count = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === element) {
            count++;
        }
    }
    return count;
}

// Test des fonctions de tableaux
const testArrayBtn = document.getElementById('testArrayBtn');
const arrayResults = document.getElementById('arrayResults');

testArrayBtn.addEventListener('click', function() {
    const randomArray = createRandomArray(10, 50);
    const max = maxElement(randomArray);
    const occurrences = nbOccurrences(randomArray, max);

    arrayResults.innerHTML = `
        <p><strong>Tableau aléatoire créé:</strong> [${randomArray.join(', ')}]</p>
        <p><strong>Élément maximum:</strong> ${max}</p>
        <p><strong>Nombre d'occurrences de ${max}:</strong> ${occurrences}</p>
        <p><strong>Test alea(10):</strong> ${alea(10)}</p>
    `;
});

// ========================
// QUIZ JAVASCRIPT
// ========================

// Réponses correctes du quiz
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

// Fonction pour réinitialiser le quiz
function resetQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('result').innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const feedback = document.getElementById('feedback-q' + i);
        feedback.innerHTML = '';
        feedback.style.display = 'none';
    }
}

// Fonction pour afficher le résultat
function showResult() {
    let score = 0;
    let total = 10;

    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector('input[name="q' + i + '"]:checked');
        if (selected && selected.value === correctAnswers['q' + i]) {
            score++;
        }
    }

    const percentage = (score / total) * 100;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = 'Votre score: ' + score + ' / ' + total + ' (' + percentage + '%)';

    if (percentage >= 80) {
        resultDiv.style.backgroundColor = '#d4edda';
        resultDiv.style.color = '#155724';
    } else if (percentage >= 50) {
        resultDiv.style.backgroundColor = '#fff3cd';
        resultDiv.style.color = '#856404';
    } else {
        resultDiv.style.backgroundColor = '#f8d7da';
        resultDiv.style.color = '#721c24';
    }
}

// Fonction pour afficher les réponses
function showAnswers() {
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector('input[name="q' + i + '"]:checked');
        const feedback = document.getElementById('feedback-q' + i);

        if (selected) {
            if (selected.value === correctAnswers['q' + i]) {
                feedback.innerHTML = '✓ Correct!';
                feedback.style.backgroundColor = '#d4edda';
                feedback.style.color = '#155724';
            } else {
                feedback.innerHTML = '✗ Incorrect. La bonne réponse est: ' + correctAnswers['q' + i].toUpperCase();
                feedback.style.backgroundColor = '#f8d7da';
                feedback.style.color = '#721c24';
            }
        } else {
            feedback.innerHTML = '⚠ Pas de réponse. La bonne réponse est: ' + correctAnswers['q' + i].toUpperCase();
            feedback.style.backgroundColor = '#fff3cd';
            feedback.style.color = '#856404';
        }

        feedback.style.display = 'block';
    }
}