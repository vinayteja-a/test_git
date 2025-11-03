public class AccountCreator {
    public static void createAccount(String accName) {
        Account acc = new Account();
        acc.Name = accName;
        insert acc;
        System.debug('Account created with Name: ' + acc.Name);
    }
}
