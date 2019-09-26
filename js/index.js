'use strict'

const plus = document.querySelector('.addButton');

const getElem = (selector) => document.querySelector(selector);

const createNewNote = (e) => {
    e.preventDefault();
    const note = getElem('.note');
    note.style.display = 'flex';
};

const toggleAddNote = (isOpen) => {
    const addNote = getElem('.addNote');
    const cancle = document.querySelector('.cancleNote-button');
    const colorPanel = document.querySelector('.color-panel');
    const addNoteButton = document.querySelector('.addNote-button');

    isOpen
    ? addNote.style.display = 'flex'
    : addNote.style.display = 'none';

    cancle.addEventListener('click', (e) => {
        e.preventDefault();
        return toggleAddNote (false);
    });

    colorPanel.addEventListener('click', changeChackedColor);
    addNoteButton.addEventListener('click', createNewNote);
};

const changeChackedColor = (e) => {
    if (e.target.matches('.color')) {
        const checked = getElem('[data-checked]');

        checked.removeAttribute('data-checked');
        e.target.setAttribute('data-checked', true);
    }
    return;
};

plus.addEventListener('click', () => toggleAddNote (true));
