import java.util.*;

public class WordFrequency {

    // This method takes a sentence, counts how many times each word appears,
    // and stores the results in a map (Word -> Count).
    static Map<String, Integer> countWords(String sentence) {
        
        // Create an empty container (HashMap) to keep track of our words and their frequencies.
        Map<String, Integer> wordCount = new HashMap<>();
        
        // 1. sentence.toLowerCase() makes everything lowercase so "Cat" and "cat" are treated as the same word.
        // 2. .split("\\s+") chops the sentence into individual words wherever there are spaces.
        for (String word : sentence.toLowerCase().split("\\s+")) {
            
            // Check if the word is already in our map.
            // If it is, get its current count and add 1.
            // If it's not, start its count at 0, then add 1.
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        // Return the finished map containing all words and their counts back to where it was called.
        return wordCount;
    }

    // The program starts executing right here!
    public static void main(String[] args) {
        
        // Open up a scanner so we can listen to what the user types into the console.
        Scanner sc = new Scanner(System.in);
        
        // Ask the user to type a sentence.
        System.out.print("Enter a sentence: ");
        
        // Grab whatever sentence the user typed and store it in a variable.
        String sentence = sc.nextLine();
        
        // Call our counting method, print out the final map of word frequencies, and pass the sentence we just got.
        System.out.println(countWords(sentence));
        
        // Close the scanner to clean up system resources.
        sc.close();
    }
}