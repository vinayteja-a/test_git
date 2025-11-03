import { LightningElement, track } from 'lwc';

export default class InputGreeting extends LightningElement {
    @track greetingMessage = 'Please enter your name above.';

    handleChange(event) {
        const name = event.target.value;
        this.greetingMessage = name
            ? `Hello, ${name}! Welcome to Salesforce.`
            : 'Please enter your name above.';
    }
}
