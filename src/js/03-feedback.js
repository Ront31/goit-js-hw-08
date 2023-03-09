import throttle from 'lodash.throttle';

const inpetEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
