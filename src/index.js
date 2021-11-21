import '@babel/polyfill';
import './style.scss';
import { stack } from './stackLogger';
import { addElement } from './addElement';

document.addEventListener('DOMContentLoaded', () => addElement('.wrapper'));

const btnGetPhotoFox = document.querySelector('.btn');
btnGetPhotoFox.addEventListener('click', () => addElement('.wrapper'));
