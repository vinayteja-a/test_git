import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track message = 'Click the button to get a greeting!';

    handleClick() {
        this.message = 'Hello, Salesforce Developer!';
    }
}
