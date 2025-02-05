import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    // 입력 값을 더해서 결과를 구함함
    const sumResult = (input) => {

      // 기본 구분자를 기준으로 배열을 만듦
      const inputArr = input.split(/[,:]/);
      Console.print(inputArr);

      const sum = inputArr.reduce((acc, cur) => {
        //현재 요소를 숫자로 변환하고, NaN이 아닌 경우에만 더함
        const num = Number(cur);
        if (!isNaN(num)){
          return acc + num;
        }
        return acc; //숫자가 아니면 누적 값 유지
      }, 0);
      
      Console.print(sum);
      return sum;
    }

    // 사용자로부터 문자열을 입력 받음
    const userInput = await Console.readLineAsync(`덧셈할 문자열을 입력해주세요.\n`);
    const result = sumResult(userInput)
    Console.print("값: " + result);
  }
}

export default App;