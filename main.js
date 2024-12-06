let countSpan = document.querySelector(".quiz-info .count span")
let bulletContainer = document.querySelector(".bullets .spans")
let quizArea = document.querySelector('.quiz-area')
let answersArea = document.querySelector('.answers-area')
let submitButton = document.querySelector('.submit-button')
let bullets = document.querySelector('.bullets')
let resultsContainer = document.querySelector('.results')
let countdownElements = document.querySelector('.countdown')
let currentIndex = 0 ;
let rightAnswers = 0;
let countdownInterval ;

function getQuestion () {

    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            let questionObject = JSON.parse(this.responseText)
            let questionCount = questionObject.length
            createBullets(questionCount);

            addQuestionData(questionObject[currentIndex], questionCount)

            countdown(30,questionCount)

            submitButton.onclick = () => {
                let theRightAnswer = questionObject[currentIndex].right_answer;
                currentIndex++
                checkAnswer(theRightAnswer , questionCount)
                quizArea.innerHTML = "";
                answersArea.innerHTML = '';
                addQuestionData(questionObject[currentIndex], questionCount)

                handelBullets();
                clearInterval(countdownInterval)
                countdown(30,questionCount)


                showResults(questionCount);
            }
        }
    }

    myRequest.open('GET' , "htmlQuestion.json" , true) 
    myRequest.send();

}

getQuestion();

function createBullets (num) {
    countSpan.innerHTML = num
    for (let i = 0; i < num; i++) {
        let theBullet = document.createElement("span")
        if (i === 0 ) {
            theBullet.className = 'on';
        }

        bulletContainer.appendChild(theBullet)


        
    }
}

function addQuestionData (obj , count) {

    if (currentIndex < count) {
        let questionTitle = document.createElement('h2');
        let questionText = document.createTextNode(obj.title)
        questionTitle.appendChild(questionText)
        quizArea.appendChild(questionTitle)
    
        for (let i = 1; i <= 4 ; i++) {
            let mainDiv = document.createElement("div")
            mainDiv.className = "answer";
            let radioInput = document.createElement("input")
            radioInput.name = "question"
            radioInput.type = "radio"
            radioInput.id = `answer_${i}`
            radioInput.dataset.answer = obj[`answer_${i}`]
            if(i === 1) [
                radioInput.checked = true
            ]
    
            let theLabel = document.createElement("label")
            theLabel.htmlFor = `answer_${i}`
            let labelText = document.createTextNode(obj[`answer_${i}`])
            theLabel.appendChild(labelText);
    
            mainDiv.appendChild(radioInput);
            mainDiv.appendChild(theLabel)
    
            answersArea.appendChild(mainDiv)
        }
    }

}

function checkAnswer (rAnswer , count) {
    let answers = document.getElementsByName('question')
    let theChosenAnswer;
    
    for(let i=0 ; i < answers.length ; i++) {
        if (answers[i].checked) {
            theChosenAnswer = answers[i].dataset.answer
        }
    }
    if (rAnswer === theChosenAnswer) {
        rightAnswers++;
    }

}

function handelBullets () {
    let bulletsSpans = document.querySelectorAll('.bullets .spans span');
    let arraySpans = Array.from(bulletsSpans);
    arraySpans.forEach((span , index) => {
        if (currentIndex === index) {
            span.className = "on"
        }
    })
}

function showResults(count) {
    let theResults;
    if (currentIndex === count) {
        quizArea.remove()
        answersArea.remove()
        submitButton.remove()
        bullets.remove();

        
        if (rightAnswers > (count/2) && rightAnswers < count) {
            theResults = `<span class = 'good'>Good</span> , ${rightAnswers} From ${count}`
        } else if (rightAnswers === count) {
            theResults = `<span class = 'perfect'>Perfect</span> , All Answers is Right`
        } else {
            theResults = `<span class = 'bad'>Bad</span> , ${rightAnswers} From ${count}`
        }

        resultsContainer.innerHTML = theResults
        resultsContainer.style.padding = "20px"
        resultsContainer.style.backgroundColor = "white"
        resultsContainer.style.marginTop = "10px"
        resultsContainer.style.textAlign = "center"
        resultsContainer.style.fontSize = "24px"

    }
}

function countdown (duration , count) {
    if (currentIndex < count) {
        let minutes,seconds
        countdownInterval = setInterval(function () {

            minutes=parseInt(duration / 60);
            seconds=parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes
            seconds = seconds < 10 ? `0${seconds}` : seconds

            countdownElements.innerHTML = `${minutes}:${seconds}`

            if (--duration < 0) {
                clearInterval(countdownInterval);
                submitButton.click();
            }


        },1000)
    }
}