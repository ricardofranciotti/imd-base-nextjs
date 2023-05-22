class NumberArray {
    constructor() {
        this.numbers = [];
    }

    addNumber(newNumber) {
        if (!isNaN(newNumber)) {
            this.numbers.push(newNumber);
        }
    }

    removeNumber(numberToRemove) {
        const index = this.numbers.indexOf(numberToRemove);
        if (index !== -1) {
            this.numbers.splice(index, 1);
        }
    }

    searchNumber(numberToSearch) {
        return this.numbers.includes(numberToSearch);
    }
}

module.exports = NumberArray;