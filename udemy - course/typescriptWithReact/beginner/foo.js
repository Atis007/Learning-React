class Grault {
    constructor(quux, waldo) {
        this.garply = quux.quuz + " " + quux.corge + " " + waldo;
    }
    getGarply() {
        return this.garply;
    }
}
const baz = { quuz: "ABC", corge: 123 };
const fred = new Grault(baz, [1, 2, 3]);
console.log(fred.getGarply());
const root = document.getElementById("root");
root.innerHTML = fred.getGarply();
