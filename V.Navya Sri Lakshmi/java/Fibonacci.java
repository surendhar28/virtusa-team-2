import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the number of terms: ");
        int size = scanner.nextInt();
        
        

        // Variables to track the sequence
        int index = 0;
        int firstNumber = 0;   // First Fibonacci number
        int secondNumber = 1;  // Second Fibonacci number
        int nextNumber;        // Holds the sum of the previous two numbers

        System.out.print("Fibonacci Series: ");
        
        // Loop to generate the specified number of terms
        while (index < size) {
            // Print the current Fibonacci number
            System.out.print(firstNumber + " ");
            
            // Calculate the next number in the sequence
            nextNumber = firstNumber + secondNumber;
            
            // Shift values forward for the next iteration
            firstNumber = secondNumber;
            secondNumber = nextNumber;
            
            // Increment the counter tracker
            index++;
        }
    }
}