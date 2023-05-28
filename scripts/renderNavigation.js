import { API_URL, JWT_TOKEN_KEY } from './const.js';
import { creatBurgerMenu } from './creatBurgerMenu.js';
import { creatElement } from './helper.js'
import { auth, router } from './index.js';
import { renderModal } from './renderModal.js';

const nav = document.querySelector('.nav');
creatBurgerMenu(nav, 'nav_active', '.nav__btn');

export const renderNavigation = () => {
	nav.textContent = '';

	const buttonSignUp = creatElement('button', {
		className: 'nav__btn btn',
		textContent: 'Зарегистрироватся'
	})

	buttonSignUp.addEventListener('click', () => {
		renderModal({
			title: 'Регистрация',
			discription: 'Введите ваши данные для регистрации на сервисе WishList',
			btnSubmit: 'Зарегистрироваться',

			submintHandler: async (event) => {
				const formData = new FormData(event.target);
				const credentials = {
					login: formData.get('login'),
					password: formData.get('password'),
				};

				try {
					const response = await fetch(`${API_URL}/register`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(credentials)
					})

					if (response.ok) {
						const data = await response.json();
						localStorage.setItem(JWT_TOKEN_KEY, data.token)
						auth.login = data.login;
						router.setRoute(`/${data.login}`);

						return true;
					} else {
						const { message = `Неизвестная ошибка` } = await response.json()
						console.log(message);
						throw new Error(message);
					}
				} catch (error) {
					alert(error.message)
				}
			}
		})
	})

	const buttonLogin = creatElement('button', {
		className: 'nav__btn btn',
		textContent: 'Войти'
	})

	buttonLogin.addEventListener('click', () => {
		console.log('	Войти');
	})



	nav.append(buttonSignUp, buttonLogin)

}
