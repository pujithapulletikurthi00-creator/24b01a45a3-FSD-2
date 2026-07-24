class Box<T> {

    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Stored Value: " + this.value);
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Hello");
let booleanBox = new Box<boolean>(true);

numberBox.display();
stringBox.display();
booleanBox.display();
