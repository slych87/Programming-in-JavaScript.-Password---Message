const input = document.getElementById('pass');
const div = document.querySelector('.message');
const password = "user";
const message = "wyjechałam na zwasze";

input.addEventListener('input', (e) => {
    // console.log(e.target.value);
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = '';
    }
    else {
        div.textContent = "";
    } x

    input.addEventListener('focus', () => {
        e.target.classList.add('active');
    })
    input.addEventListener('blur', (e) => {
        e.target.classList.remove('active');
    })
})