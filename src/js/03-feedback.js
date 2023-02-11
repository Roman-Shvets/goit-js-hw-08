import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
}

const formData = {
    email: '',
    message:''
}

const STORAGE_KEY = 'feedback-form-state';


refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.message.addEventListener('input', throttle(onMessageInput, 500));

populateFields();

function onFormSubmit(event) {
    event.preventDefault();
    if (!localStorage.getItem(STORAGE_KEY)) {
        console.log(formData)
    }
    else console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
}

function onEmailInput(event) {
    formData.email = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onMessageInput(event) {
    formData.message = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFields() {
    const savedInfo = localStorage.getItem(STORAGE_KEY);
    if (savedInfo) {
        refs.email.value = JSON.parse(savedInfo).email;
        refs.message.value = JSON.parse(savedInfo).message;
    }
}