const searchInput = document.querySelector("[data-search]")
var questions;

const fetchQuestion = () => {
    fetch('../../faq.JSON')
        .then(res => res.json())
        .then(data => {
            questions = [...data]
            console.log(data);
        })
}
fetchQuestion();

searchInput.addEventListener("input", e => {
    document.getElementById("search-ques").innerHTML = " "
    const value = e.target.value;

    var matchedQuestions = questions?.filter(question => question?.q.toLowerCase()?.includes(value.toLowerCase()));
    console.log(matchedQuestions);

    matchedQuestions.length > 0 ? matchedQuestions.forEach(user => {
        const p = document.createElement('div');
        p.innerHTML = `
       <a class="text-decoration-none" href="#${user.id}"><b>Q: ${user.q}</b> </a>
        `;
        document.getElementById("search-ques").appendChild(p);
    }) : document.getElementById("search-ques").innerHTML = " "
})
function display() {
    document.getElementById("search-ques").style.display = 'block'
}
document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('search-ques');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

window.onload = () => {
    Array.from(document.querySelectorAll('.summary__question')).map((i, j) => i.parentElement.setAttribute('id', `q-${j+1}`))
}
