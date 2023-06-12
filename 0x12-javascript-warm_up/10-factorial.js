#!/usr/bin/node

function factorail (x) {
	if (isNaN(x) | x === 1) {
		return (1);
	} else {
		return (x * factorail(x - 1));
	}
}
console.log(factorail(process.argv[2]));
