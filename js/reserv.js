

'use strict'

const plus = document.querySelector('.addButton');
const cancle = document.querySelector('.cancleNote-button');

const getElem = (selector) => document.querySelector(selector);

const note = getElem('.note');

const createNewNote = (e) => {
    e.preventDefault();
    const form = getElem('.addNote');

    const formValues = {
        title: e.target[0].value
    }

    form.style.display = 'none';
    note.style.display = 'block';

    const  copy = note.cloneNode(true);
    copy.style.display = 'block';
}

const changeChackedColor = (e) => {
    if (e.target.tagName !== 'DIV' || e.target.hasAttribute('data-cheked')) return;


    const checked = getElem('[data-checked]');

    checked.removeAttribute('data-checked');
    e.target.setAttribute('data-checked', true);
}

const toggleaddNoteCreator = (isOpen) => {
    const addNote = getElem('.addNote');
    const panel = getElem('.color-panel');

    panel.addEventListener('click', changeChackedColor);
    addNote.addEventListener('submit', (e) => createNewNote);

    isOpen 
    ? addNote.style.display = 'flex'
    : addNote.style.display = 'none';
}

plus.addEventListener ('click', () => toggleaddNoteCreator(true));
cancle.addEventListener ('click', (e) => toggleaddNoteCreator(false));


