function Accumulator(stVal) {
  this.v = stVal;
  this.read = function() {
    this.a = +prompt("a = ");
    this.v += this.a;
  }
}


let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert(`Результаты: ${accumulator.v} - сумма`);