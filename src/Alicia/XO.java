package Alicia;

/*Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

Rules
Return a boolean value (true or false).
The string can contain any character.
When no x and no o are in the string, return true. */
public class XO {
    public static boolean getXO (String str) {
        return str.replaceAll("[oO]", "").length() == str.replaceAll("[xX]", "").length();
    }
}