const alphabet: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

export class Question {
  /**問題数 */
  volume: number;
  /**問題文 */
  sentence: string;
  /**何問目か？ */
  index: number;

  /**
   * constructor
   * @param qnum 問題数
   */
  constructor(qnum: number) {
    this.volume = qnum;
  }

  public init(): string {
    this.sentence = "";
    this.index = 0;
    for (let i = 0; i < this.volume; i++) {
      this.sentence += alphabet[Math.round(Math.random() * 25)];
    }
    return this.sentence;
  }

  /**
   * メイン処理
   * @param inputKey 入力されたアルファベット
   */
  public main(inputKey: string): string | boolean {
    if (this.sentence.charAt(0) !== inputKey) {
      return false;
    }

    this.index++;
    if (this.index < this.volume) {
      this.sentence = this.sentence.slice(1, this.sentence.length);
      return this.sentence;
    }

    return "終了します\nリセットボタンを押してください";
  }
}
