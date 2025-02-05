const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
Console.print("값: " + userInput);


const userInput2 = await Console.readLineAsync("덧셈할 두 번째 문자열을 입력해 주세요.");
Console.print("값: " + userInput2);


class Animal {
    constructor(name) { //생성자
      this.name = name;
    }
  
    speak() { //메서드
      console.log(`${this.name} makes a sound`);
    }
}
  
//클래스의 상속
class Dog extends Animal {
    constructor(name, breed){
      super(name);  //super -> 부모 클래스의 생성자 호출출
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name}은 자식 클래스이다.`);
    }
}
  
const dog = new Dog('푸딩', '디저트')
dog.speak();

//Getter와 Setter
class Circle{
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value){
        this.radius = value / 2;
    }
}

const circle = new Circle(5);
console.log(circle.diameter);
circle.diameter = 40;
console.log(circle.diameter);
console.log(circle.radius);


// 문자열에 API 적용하기
// 1. String Methods 사용
// 2. 문자열을 배열로 변환 후 Array Methods 사용
