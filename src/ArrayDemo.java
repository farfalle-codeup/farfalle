package com.tutorialspoint;

import java.util.Arrays;

public class ArrayDemo {
    public static void main(String[] args) {

        // initializing int array
        int[] i1 = new int[] { 33, 12, 98 };

        // let us print all the elements available in list
        System.out.println("The array is:");
        for (int number : i1) {
            System.out.println("Number = " + number);
        }

        System.out.println("The string representation of array is:");
        System.out.println(Arrays.toString(i1));
    }
}