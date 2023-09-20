const questions = [
    {
        'question': 'What disease commonly spread on pirate ships with no access to fresh food supplies?',
        'answers': ['Scurvy', 'Dysentery', 'Gangrene', 'Tuberculosis'],
        'answer': 'Scurvy'
    },

    {
        'question': 'Compared to their body weight, what animal is the strongest?',
        'answers': ['Dung Beetle', 'Elephant', 'Ant', 'Cow'],
        'answer': 'Dung Beetle'
    },

    {
        'question': "What meat is used in a shepherd's pie?",
        'answers': ['Chicken', 'Beef', 'Pork', 'Lamb'],
        'answer': 'Lamb'
    },

    {
        'question': 'Which planet has the most moons',
        'answers': ['Jupiter', 'Saturn', 'Neptune', 'Venus'],
        'answer': 'Saturn'
    },

    {
        'question': 'Where is the smallest bone in the human body located',
        'answers': ['Nose', 'Pinky Finger', 'Ear', 'Pinky Toe'],
        'answer': 'Ear'
    }
];

const inputAnswer = document.getElementById("answer");
const score = 0;
const curQuestion = questions[0];
const quizQuestion = document.getElementById('question');

function nextQuestion() {
    curQuestion;
    quizQuestion.innerHTML = curQuestion.question;
}

function checkAnswer() {
    if (inputAnswer === curQuestion.answer) {
        alert = 'Correct!';
        score += 1;
        curQuestion += 1;
        nextQuestion();
    } else {
        alert = 'Incorrect :(';
        curQuestion += 1;
        nextQuestion();
    }
}