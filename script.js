const quizData= [
    {
        Question: 'How ols is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        Question:'What is the best programming language in 2019?',
        a: 'java',
        b: 'c',
        c: 'python',
        d: 'javascript',
        correct: 'd'
    },{
        Question: 'who is the president of US?',
        a: 'Joe Bidden',
        b: 'Barack Obama',
        c: 'Donald Trump',
        d:  'kenyatta',
        correct: 'a'
    },{
        Question: 'What does HTML stand for?',
        a: 'hypertext-markup-language',
        b: 'Cascading Style Sheet',
        c: 'jayson object notation',
        d: 'hypertext transfer protocol',
        correct: 'a',
    },{
       Question:'whet year was javascript launched?',
       a: '2020',
       b: '1995',
       c: '1996',
       d: 'None of the above',
       answer: 'c'
    }
];
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');

let currentQuiz= 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData= quizData;
    [currentQuestion];
    questionEl.innerHTML= currentquizData;
     Question;

     a_text.innerText= currentQuizData.a;
     b_text.innerText= currentQuizData.b;
     c_text.innerText= currentQuizData.c;
     d_text.innerText= currentQuizData.d;

    currentQuestion++;
}

 