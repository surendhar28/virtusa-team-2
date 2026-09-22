import java.util.Scanner;

public class BankAccount {

    // Private fields to keep the account data secure 
    private String accountHolder;
    private double balance;

    // Constructor: Used to set up a new bank account with a name and starting balance
    BankAccount(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

   

    // Getter for account holder's name 
    public String getAccountHolder() {
        return accountHolder;
    }

    // Setter for account holder's name 
    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    // Getter for balance 
    public double getBalance() {
        return balance;
    }

    // Setter for balance 
    public void setBalance(double balance) {
        this.balance = balance;
    }

   

    // Adds money to the account balance
    void deposit(double amount) {
        balance += amount; // Same as balance = balance + amount
    }

    // Safely takes money out of the account if there is enough cash available
    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount; // Subtracts the withdrawn amount
        } else {
            // Warns the user if they try to spend money they don't have
            System.out.println("Insufficient balance.");
        }
    }

    // Prints out the current account details to the console
    void displayBalance() {
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Current Balance: " + balance);
    }

    // The program starts executing right here!
    public static void main(String[] args) {
        // Open up a scanner to listen to user input from the console
        Scanner scanner = new Scanner(System.in);

        // Ask for and capture the account owner's name
        System.out.print("Enter account holder name: ");
        String name = scanner.nextLine();

        // Ask for and capture the starting balance
        System.out.print("Enter initial balance: ");
        double initialBalance = scanner.nextDouble();

        // Create the actual bank account object using the details provided
        BankAccount account = new BankAccount(name, initialBalance);

        // Ask for a deposit amount and update the account
        System.out.print("Enter deposit amount: ");
        double depositAmount = scanner.nextDouble();
        account.deposit(depositAmount);

        // Ask for a withdrawal amount and update the account
        System.out.print("Enter withdrawal amount: ");
        double withdrawalAmount = scanner.nextDouble();
        account.withdraw(withdrawalAmount);

        // Print out the final summary of the account
        account.displayBalance();

        // Clean up by closing the scanner
        scanner.close();
    }
}