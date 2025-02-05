import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const sumResult = (input) => {
      Console.print("입력값 (JSON): " + JSON.stringify(input));

      input = input.replace(/\\n/g, "\n"); // 문자열 "\n"을 개행 문자로 변환
      Console.print("변환된 입력값: " + JSON.stringify(input));

      let delimiter = /[,:]/;

      const escapeRegExp = (str) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

      if (input.startsWith("//")) {
        const delimiterEndIndex = input.search(/\n/); // 개행 문자 찾기
        Console.print("개행 문자 인덱스: " + delimiterEndIndex);
        if (delimiterEndIndex === -1) {
          throw new Error("올바른 형식이 아닙니다."); // 개행이 없으면 에러 처리
        }

        let customDelimiter = input.slice(2, delimiterEndIndex);
        Console.print("커스텀 구분자 확인: " + customDelimiter);

        input = input.slice(delimiterEndIndex + 1);
        Console.print("문자열 확인: " + input);

        delimiter = new RegExp(`[,:${escapeRegExp(customDelimiter)}]`);
      }

      const inputArr = input.split(delimiter);
      Console.print(inputArr);

      const sum = inputArr.reduce((acc, cur) => {
        const num = Number(cur);
        return !isNaN(num) ? acc + num : acc;
      }, 0);

      Console.print(sum);
      Console.print(delimiter);
      return sum;
    };

    const userInput = await Console.readLineAsync(`덧셈할 문자열을 입력해주세요.\n`);
    const output = sumResult(userInput);
    Console.print("값: " + output);
  }
}

export default App;
