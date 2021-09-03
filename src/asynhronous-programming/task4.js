function task4() {
  fetch('https://www.json-generator.com/api/json/get/cfQCylRjuG')
	.then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
}

'http://www.json-generator.com/api/json/get/cfQCylRjuG'

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => json.title)
	.then(title => title === true ? fetch('https://jsonplaceholder.typicode.com/posts/1') : null)
  .then(res=>fetch('https://jsonplaceholder.typicode.com/posts/1'))
	.then(response=>response.json())
  .then(res=>console.log(res))



	function getUserDate() {
		return fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
			.then(response => response.json())
			.then(data => data.getUsersData)
			.then(res =>
	{ if (res) {
			fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
				.then(response => response.json())
				.then(console.log)  
	}})
	
	}
	getUserDate()
