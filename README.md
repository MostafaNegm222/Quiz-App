# Quiz App

## 1. Description

A dynamic quiz application built with HTML, CSS and JavaScript. Questions are stored in a JSON file for easy management, and each question has a 30-second timer.

## 2. Technologies and Versions

- HTML5, CSS3, vanilla JavaScript (no build step)

## 3. Requirements and Dependencies

- A modern web browser with JavaScript enabled
- No packages to install

## 4. Installation and Run Steps

```bash
git clone https://github.com/MostafaNegm222/Quiz-App.git
cd Quiz-App
```

Open `index.html` in a browser. (Serving the folder with a static server also works and is more reliable for the JSON fetch.)

## 5. Environment Variables

None required.

## 6. Usage and Main Features

- Questions and answers are fetched dynamically from `htmlQuestion.json` and displayed one by one.
- A 30-second timer runs per question; when it runs out, the app moves to the next question automatically.
- After the last question, a results screen shows the total score with correct/incorrect answers.
- To edit the quiz, edit `htmlQuestion.json` (fields: `title`, `answer_1`..`answer_4`, `right_answer`).

## 7. Screenshots / Demo

- Live demo: https://mostafanegm222.github.io/Quiz-App/

## 8. Running Tests

No automated tests in this repo.
