export default class Developer {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    };
    aboutDeveloper() {
        console.log(`name: ${this.name}, position: ${this.position}, salary: ${this.salary}`);
    }
}

