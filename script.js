
const quizDB = [
    {
        question: "Q1: What does the acronym js stand for in the context of web development?",
        a1: "Java Server",
        a2: "Just Saying",
        a3: "JavaScript",
        a4: "JSON Syntax",
        ans: "ans3"
      
    },
    {
        question: "Q2: Which keyword is used to declare a variable in JavaScript?",
        a1: "let",
        a2: "var",
        a3: "int",
        a4: "const",
        ans: "ans1"
    },
    {
        question:"Q3: In JavaScript, what function is used to print content to the browser console for debugging purposes?",
        a1:"debug.log()",
        a2:"print()",
        a3:"document.write()",
        a4:"console.log()",
        ans:"ans4"  
    },
    {
        question:"Q4: What type of programming paradigm does JavaScript primarily follow?",
        a1:"Functional",
        a2:"Procedural",
        a3:"Logical",
        a4:"Object-Oriented",
        ans:"ans4"  
    },
    {
        question:"Q5: Which JavaScript method is used to add an element to the end of an array?",
        a1:"push()",
        a2:"append()",
        a3:"add()",
        a4:"concatenate()",
        ans:"ans1"  
    }
    
];

const question = document.querySelector('.question');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('input[type="radio"]');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    for (let i = 0; i < answers.length; i++) {
        answers[i].id = 'ans' + (i + 1);
        document.querySelector('label[for="ans' + (i + 1) + '"]').textContent = questionList['a' + (i + 1)];
    }
};

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        showScore.classList.remove('scoreArea');
    }
});
