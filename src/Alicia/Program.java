package Alicia;
import java.util.Arrays;

//Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
public class Program {
    public static String[] filterArray(String[] str) {
        return Arrays.stream(str)
                .distinct()
                .filter(i->i.matches("-?\\d+"))
                .toArray(String[]::new);
    }
}
