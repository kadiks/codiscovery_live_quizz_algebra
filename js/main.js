const els = {
    question: null,
    questionCount: null,
    questionScreen: null,
    answerTitle: null,
    answerDetails: null,
    answerScreen: null,
    possibilities: null,
    answerQuestion: null,
    nextQuestionBtn: null
};
let question = null;
let questionNumber = 1;
let questionNumberTotal = 3;
let score = 0;

const init = () => {
    els.question = document.querySelector('#question');
    els.questionCount = document.querySelector('#question-count');
    els.questionScreen = document.querySelector('#question-screen');
    els.answerTitle = document.querySelector('#answer-title');
    els.answerQuestion = document.querySelector('#answer-question');
    els.answerDetails = document.querySelector('#answer-details');
    els.answerQuestion = document.querySelector('#answer-question');
    els.answerScreen = document.querySelector('#answer-screen');
    els.possibilities = document.querySelector('#possibilities');
    els.nextQuestionBtn = document.querySelector('#next');


    showNewQuestion();
    

    els.possibilities.addEventListener('click', ({ target }) => {
        console.log(target.innerHTML);
        giveAnswer(parseInt(target.innerHTML));
    });

    els.nextQuestionBtn.addEventListener('click', () => {
        console.log('click next question btn');
        // questionNumber = questionNumber + 1;
        questionNumber++;
        if (questionNumber <= questionNumberTotal) {
            showNewQuestion();
            els.questionScreen.style.display = 'block';
            els.answerScreen.style.display = 'none';
        } else {
            els.questionScreen.style.display = 'none';
            els.answerScreen.style.display = 'block';
            els.nextQuestionBtn.style.display = 'none';

            els.answerTitle.innerHTML = 'Congratulations!';
            els.answerQuestion.innerHTML = `Your score is: ${score} / ${questionNumberTotal}`;
            els.answerDetails.innerHTML = '';
            
            // els.answerDetails.innerHTML = `You said ${userAnswer}. The actual answer was ${question.answer}`;
        }
    });
};

const showNewQuestion = () => {
    els.questionCount.innerHTML = `${questionNumber} / ${questionNumberTotal}`;
    question = generateQuestion();
    els.question.innerHTML = question.title;
    els.possibilities.innerHTML = question.possibilities.map((possibility) => {
        return `<li>${possibility}</li>`;
    }).join('');
};

const giveAnswer = (userAnswer) => {
    if (userAnswer === question.answer) {
        els.answerTitle.innerHTML = 'Good job!';
        els.answerQuestion.innerHTML = '';
        els.answerDetails.innerHTML = '';
        score++;
    } else {
        els.answerTitle.innerHTML = 'Wrong answer';
        els.answerQuestion.innerHTML = question.title;
        els.answerDetails.innerHTML = `You said ${userAnswer}. The actual answer was ${question.answer}`;
    }
    els.questionScreen.style.display = 'none';
    els.answerScreen.style.display = 'block';
}

window.onload = init;