class Grault {
  private garply: string;

  constructor(quux: Quux, waldo: number[]) {
    this.garply = quux.quuz + " " + quux.corge + " " + waldo;
  }

  getGarply() {
    return this.garply;
  }
}

interface Quux {
  quuz: string;
  corge: number;
}

const baz = { quuz: "ABC", corge: 123 };

const fred = new Grault(baz, [1, 2, 3]);

console.log(fred.getGarply());

const root = document.getElementById("root") as HTMLDivElement;
root.innerHTML = fred.getGarply();