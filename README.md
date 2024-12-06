```markdown
# Quiz App  

This is a dynamic Quiz Application built with HTML, CSS, and JavaScript. It features a timer for each question and stores the quiz questions and answers in a JSON file for easy management.  

## Features  

- 📚 **Dynamic Questions**: Questions and answers are fetched from a JSON file.  
- ⏱️ **Timer**: Each question has a 30-second timer to answer.  
- 📊 **Results Screen**: Shows the total score at the end of the quiz.  

## How It Works  

1. Questions and answers are stored in a `questions.json` file.  
2. The app fetches questions dynamically and displays them one by one.  
3. A 30-second timer starts for each question. If the timer runs out, it moves to the next question automatically.  
4. After completing all questions, the app displays the total score along with correct/incorrect answers.  

## Prerequisites  

- A modern web browser with JavaScript enabled.  
- JSON file (`questions.json`) with the following structure:  

```json
[
  {
    "title": "Why We Use <br> Element",
      "answer_1": "To Make Text Bold",
      "answer_2": "To Make Text Italic",
      "answer_3": "To Add Breakline",
      "answer_4": "To Create Horizontal Line",
      "right_answer": "To Add Breakline"
  },
  {
    "title": "Is <img> Element Has Attribute href",
      "answer_1": "Yes",
      "answer_2": "No Its For Anchor Tag <a>",
      "answer_3": "All Elements Has This Attribute",
      "answer_4": "Answer 1 And 3 Is Right",
      "right_answer": "No Its For Anchor Tag <a>"
  }
]
```  

## Installation  

1. Clone this repository:  
   ```bash  
   git clone (https://github.com/MostafaNegm222/Quiz-App)  
   ```  
2. Open the project folder:  
   ```bash  
   cd <project-folder>  
   ```  
3. Open the `index.html` file in your browser.  

## Usage  

1. The quiz begins as soon as you start the app.  
2. Choose the correct answer for each question within the 30-second timer.  
3. After answering all questions, view your results.  

## Customization  

- **Add Questions**: Add more questions by updating the `questions.json` file.  
- **Modify Timer**: Change the timer duration in the JavaScript file.  

## Demo  

Check out the live demo here: [**Live App Link**](https://mostafanegm222.github.io/Quiz-App/)


## License  

This project is open source and available under the [MIT License](LICENSE).  

## Contributing  

Contributions are welcome! Feel free to submit issues or pull requests.  

## Contact  

If you have any questions, feel free to reach out!  
