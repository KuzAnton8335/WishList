export const creatElement = (tagName, attribute) => {
	const elem = document.createElement(tagName);

	Object.assign(elem, attribute);
	return elem;
}