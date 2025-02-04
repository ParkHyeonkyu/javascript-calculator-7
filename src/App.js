import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await Console.readLineAsync(`덧셈할 문자열을 입력해주세요.\n`);
    Console.print("값: " + userInput);
  }
}

export default App;