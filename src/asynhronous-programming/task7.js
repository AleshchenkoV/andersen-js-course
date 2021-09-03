const getPromise1 = () => Promise.resolve (2);
const getPromise2 = () => Promise.resolve (3);
const getPromise3 = () => Promise.resolve (7);

async function foo () {

    let value1;
    let value2;
    let value3;
    
	value1 = await getPromise1(); 
	value2 = await getPromise2(); 
	value3 = await getPromise3();
	
    let result = value1 * (value2 + value3);
    return result;
	

}

foo()