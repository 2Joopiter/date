const h1 = document.querySelector('h1');
const [btnStart, btnStop] = document.querySelectorAll('button');
//전역변수 : 우주에 떠있는 인공위성(중계기)

let num = 0;
let timer = null;

timer = setInterval(() => {
	//지역변수: A 지역에서 변경요청
	h1.innerText = num++;
}, 1000);

btnStop.addEventListener('click', () => {
	clearInterval(timer);
});

btnStart.addEventListener('click', () => {
	timer = setInterval(() => {
		//B 지역에서 변경요청
		h1.innerText = num++;
	}, 1000);
});
