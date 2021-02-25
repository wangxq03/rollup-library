export default class Parent {
  constructor(type) {
    this.type = type;
  }
  say() {
    console.log(`这是一个${this.type}文件`);
    alert(`这是一个${this.type}文件`);
  }
}
