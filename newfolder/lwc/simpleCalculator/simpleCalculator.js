import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    firstNumber;
    secondNumber;
    @track result = 0;

    handleFirstChange(event) {
        this.firstNumber = parseFloat(event.target.value);
    }

    handleSecondChange(event) {
        this.secondNumber = parseFloat(event.target.value);
    }

    handleAdd() {
        if (isNaN(this.firstNumber) || isNaN(this.secondNumber)) {
            this.result = 'Please enter valid numbers.';
        } else {
            this.result = this.firstNumber + this.secondNumber;
        }
    }
}
