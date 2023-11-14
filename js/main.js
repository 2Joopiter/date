//특정 시간 구간에 맞게 호출하는 메서드
//setTimeout(실행할 함수, 지연시간): 일정 시간 이후에 한 번만 호출
//setInterval(실행할 함수, 반복주기): 일정시간마다 계속해서 반복 호출

/*
setTimeout(() => {
	console.log('5초 지난뒤 실행');
}, 5000);
*/

const [btnStart, btnStop] = document.querySelectorAll('button');
//전역변수를 써야하는 경우
//특정 변수값이 서로 다른 함수에서 공유되어야 할 때
//전역변수 쓰는 방법 = 코드블록 바깥에서 변수 선언 후 null이나 기본 자료값으로 초기화
//각각의 함수 안쪽에서 새로 지역변수를 만드는 것이 아닌 기존의 전역변수를 가져와서 새로운 값만 재할당

let timer = null;

timer = setInterval(() => {
	console.log('1초마다 반복실행');
}, 1000);

btnStop.addEventListener('click', () => {
	clearInterval(timer);
});

btnStart.addEventListener('click', () => {
	timer = setInterval(() => {
		console.log('1초마다 반복실행');
	}, 1000);
});
