/*
  자바스크립트에서 객체를 생성하는 방법 2가지
  1. 객체리터럴식으로 생성
  2. 생성자를 통한 인스턴트 생성 -> 많은 객체를 한꺼번에 수정하거나 추가하기 어렵기때문에 비슷한 성질의 복사본을 만드는 것

  E6에서의 객체지향
  - 동일한 형식의 객체를 대량으로 뽑아내야 될 때 객체생성을 자동화 처리하는 법
  - 생성자: 객체를 생성해주는 함수 = 붕어빵 틀
  - 인스턴스: 생성자를 통해서 복사가 된 객체 = 붕어빵 틀을 통해 만들어진 붕어빵들
  - 프로토타입: 생성자 안에 자동으로 추가되는 공통의 저장공간 (각 인스턴스에서 활용될 함수를 등록: 메서드)
    -같은 생성자를 통해서 복사된 인스턴스들은 prototype에 등록된 메서드를 공유
  - 생성자 안쪽의 this: 해당 생성자를 통해서 앞으로 복사가 될 인스턴스 객체를 지칭한다
*/

class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.school = 'DECODELAB';
	}

	//프로토타입에 각 인스턴스들이 공통으로 활용할 함수 등록 (메서드)

	plusAge() {
		this.age = this.age + 1;
	}
}

// 생성자를 통해서 2개의 인스턴스 객체 복사
const s1 = new Student('david', 20);
const s2 = new Student('Emily', 21);
console.log(s1, s2);

//인스턴스가 생성된 이후 prototype의 메서드를 호출해서 일괄적으로 인스턴스의 구조를 변경 가능
[s1, s2].forEach((el) => el.plusAge());
console.log(s1, s2);
/*
1. 객체리터럴식 생성방식

const s1 = {
	name: 'david',
	age: 20,
	school: 'decodelab',
};

const s2 = {
	name: 'amily',
	age: 21,
	school: 'decodelab',
};

const s3 = {
	name: 'michael',
	age: 19,
	school: 'decodelab',
};

*/
