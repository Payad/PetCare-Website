const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

navToggle.addEventListener('click', function () {
    if (sidebar.classList.contains('showSideBar')) {
        sidebar.classList.toggle('showSideBar');
    } else if (!sidebar.classList.contains('showSideBar')) {
        sidebar.classList.toggle('showSideBar');
    }
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.toggle('showSideBar');
});

/* FAQ section functionality */
const questions = document.querySelectorAll('.questions');
const btns = document.querySelectorAll('.question-btns')


// questions.forEach((question) => {
//     const btn = question.querySelector('.drop-down');
//     console.log(btn);
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         console.log(question);

//         question.classList.toggle('show-text');
//     })
// })
    btns.forEach((btn) => {
btn.addEventListener('click', function(e) {
    const question = e.currentTarget.parentElement.parentElement;
    console.log(question);

    questions.forEach((item) => {
        if (item !== question) {
            item.classList.remove('show-text');
        }
    })

    question.classList.toggle('show-text');
})
});