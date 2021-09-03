async function foo () {
	let string = await asyncBar();
	return console.log(string);
}

const asyncBar = () => 'Some String!'

foo()