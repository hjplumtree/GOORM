
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = []
rl.on("line", function(line) {
	if(!line) {
		rl.close()
	}
	else {
		input.push(line)
	}
}).on("close", function() {
	bi(input)
	process.exit();
});

function bi(base) {
	let [size, num, tar] = base
	num = num.split(' ').map(Number)
	let arr = [...num]
	let min = arr[0]
	let max = arr[+size - 1]
	let mid = arr[Math.floor(size / 2)]
	let answer = 'X'
	
	while(arr.length > 2) {
		if(mid === +tar) {
			answer = num.indexOf(mid) +1
			break;
		}
		else if(mid < +tar){
			arr = arr.slice(Math.floor(arr.length) / 2)
			min = arr[0]
			mid = arr[Math.floor(arr.length / 2)]
		}
		else {
			arr = arr.slice(0, Math.floor(arr.length) / 2)
			max = arr[mid]
			mid = arr[Math.floor(arr.length / 2)]
		}
	}
	console.log(answer)
}
