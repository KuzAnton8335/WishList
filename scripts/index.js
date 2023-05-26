
import { renderNavigation } from './renderNavigation.js';
import { creatHero } from './creatHero.js';

const app = document.querySelector('.app');

const handleHomePage = () => {
	app.textContent = '';
	renderNavigation();
	const section = creatHero();
	app.append(section);
}

const init = () => {
	handleHomePage();
}

init()