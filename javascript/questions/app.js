//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        // close other question when open a new question 
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })
        // show question when click the button
        question.classList.toggle('show-text');
    });
});




// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });