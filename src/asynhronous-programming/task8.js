const getUsers = url => fetch(url);

async function foo (url) {
	try {
		const response = await getUsers(url)
		const json = await response.json()
		const [user] = await json;
		return console.log(user)
	} catch (e) {
		console.log('Error!', e)
	}
}

foo('https://jsonplaceholder.typicode.com/users');
foo('ht://jsonplaceholder.typicode.com/users');
