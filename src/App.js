import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const sumResult = async (input) => {
      input = input.replace(/\\n/g, "\n");

      let delimiter = /[,:]/;
      const escapeRegExp = (str) =>
        str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

      if (input.startsWith("//")) {
        const delimiterEndIndex = input.search(/\n/);

        if (delimiterEndIndex === -1) {
          throw new Error("\\n이 필요합니다.");
        }

        let customDelimiter = input.slice(2, delimiterEndIndex);
        if (/(.)\1+/.test(customDelimiter)) {
          throw new Error("중복된 구분자를 사용할 수 없습니다.");
        }
        // if (customDelimiter === ".") {
        //   throw new Error(".은 구분자로 사용할 수 없습니다.");
        // }
        input = input.slice(delimiterEndIndex + 1);

        delimiter = new RegExp(`[,:${escapeRegExp(customDelimiter)}]`);
      } else if (!(input.startsWith("//") || !isNaN(Number(input[0])))) {
        throw new Error("양수 또는 //로 시작해야 합니다.");
      }

      const inputArr = input.split(delimiter);

      const sum = inputArr.reduce((acc, cur) => {
        const num = Number(cur);
        if (!isNaN(num)) {
          if (num < 0) {
            throw new Error("음수를 입력할 수 없습니다.");
          }
          else if (!Number.isInteger(num)){
            throw new Error("정수만 입력 가능합니다.")
          }
          return acc + num;
        } else {
          throw new Error("유효하지 않은 문자가 포함되어있습니다.");
        }
      }, 0);

      return sum.toFixed(1);
    };

    try {
      const userInput = await Console.readLineAsync(
        `덧셈할 문자열을 입력해주세요.\n`
      );
      const output = await sumResult(userInput);
      Console.print("결과 : " + output);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
