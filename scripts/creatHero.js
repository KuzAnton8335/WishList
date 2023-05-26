import { creatElement } from "./helper.js"

export const creatHero = () => {
	const section = creatElement('section', {
		className: 'hero'
	})

	const container = creatElement('div', {
		className: 'container hero__container'
	})

	section.append(container)

	const title = creatElement('h1', {
		className: 'hero__title',
		textContent: 'WishList'
	});

	const description = creatElement('p', {
		className: 'hero__descr',
		innerHTML: 'Никогда не&nbsp;поздно поставить новую цель или обрести новую мечту...'

	});




	const listSteps = creatElement('ol', {
		className: 'hero__steps steps',
	});

	['создайте список желаний',
		'Поделитесь ссылкой с&nbsp; друзьями',
		'Получите желанный подарок'].forEach((text) => {
			const step = creatElement('li', {
				className: 'hero__steps-item',
				innerHTML: 'создайте список желаний',
			});

			listSteps.append(step);

		});



	container.append(title, description, listSteps);

	return section;
}


