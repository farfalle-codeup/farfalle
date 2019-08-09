package Alicia;

public class Program {
    public static int missingNum(int[] nums) {
        int total = 55;
        for (int i = 0; i < nums.length; i++)
            total -= nums[i];
        return total;
    }
}
