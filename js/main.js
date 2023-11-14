// 시간 관련 객체

const now = new Date(); // 현재 시간 인스턴트 객체 반환
const year = now.getFullYear(); // 시간 인스턴스에서 메서드로 연도 반환
const month = now.getMonth(); // 월의 값이 아닌 순서가 표기됨
const monthName = [
	'January',
	'Februrary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'Octobor',
	'November',
	'December',
];
const date = now.getDate(); // 일 반환
const day = now.getDay(); // 월과 마찬가지로 순서 반환, 일요일이 0임
const hour = now.getHours(); // 시간 반환
const min = now.getMinutes(); // 분 반환
const sec = now.getSeconds(); // 초 반환
const time = now.getTime(); // 표준시가 정의된 시점으로부터의 밀리세컨드값이 반환
console.log(time);

// 특정 나라 표준시 구하는 방법
// 우리나라 시간대를 밀리세컨드로 반환 후 - 밀리세컨드로 시차값 시차
const timeGerman = time - 1000 * 60 * 60 * 8;

// 해당 밀리세컨드 값을 new Date()의 인수로 전달하면 해당 시간값으로 시간 인스턴스값이 수정되어 반환됨
const nowGerman = new Date(timeGerman);

console.log('한국시', now);
console.log('독일시', nowGerman);
