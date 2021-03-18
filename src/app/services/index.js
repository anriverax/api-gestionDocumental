const arrayTextToString = (arg) => {
	let arr = [];
	arg.forEach((element) => arr.push(`'${element}'`));

	return arr;
};

const removeExtension = (arg) => {
	let elemetPart = "";
	let arr = [];
	arg.forEach((element) => {
		elemetPart = element.split(".");
		arr.push(elemetPart[0]);
	});

	return arr;
};

export { arrayTextToString, removeExtension };
