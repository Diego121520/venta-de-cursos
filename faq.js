document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('faq-answer--open');
    });
});