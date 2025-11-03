public class HelloWorld {
    // Method to greet a user with a custom name
    public static String sayHello(String name) {
        if (String.isBlank(name)) {
            System.debug('Hello, Salesforce!');
            return 'Hello, Salesforce!';
        } else {
            String message = 'Hello, ' + name + '! Welcome to Salesforce.';
            System.debug(message);
            return message;
        }
    }
}
