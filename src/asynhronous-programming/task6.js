function getResolvedPromise (value) {
	return Promise.resolve(value).then(value => {
		if (value > 300) {
			throw new Error ('Ошибка');
		}
	}).catch((e)=>console.log(e.name)).finally(console.log('This is Finally!'))
}