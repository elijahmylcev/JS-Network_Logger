import '@babel/polyfill';
import './style.scss';
import { stack } from './stackLogger';
// import { integrateElement } from './integrateElement';
// import { getElement } from './getElement';
import { addElement } from './addElement';

document.addEventListener('DOMContentLoaded', () => addElement('.wrapper'));

const btnGetPhotoFox = document.querySelector('.btn');
btnGetPhotoFox.addEventListener('click', () => addElement('.wrapper'));
