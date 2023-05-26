import { creatElement } from './helper.js'

const nav = document.querySelector('.nav');
// const burger = creatBurgerMenu('.nav');

export const renderNavigation = () => {
	nav.textContent = '';

	const buttonSignUp = creatElement('button', {
		className: 'nav__btn btn',
		textContent: 'Зарегистрироватся'
	})

	buttonSignUp.addEventListener('click', () => {
		console.log('Зарегистрироватся');
	})

	const buttonLogin = creatElement('button', {
		className: 'nav__btn btn',
		textContent: 'Войти'
	})

	buttonLogin.addEventListener('click', () => {
		console.log('	Войти');
	})

	//<button class="nav__btn btn">Зарегистрироваться</button>
	// <button class="nav__btn btn">Войти</button>

	nav.append(buttonSignUp, buttonLogin)

}
