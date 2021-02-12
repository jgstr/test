package aaron;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.*;


/**
 * FizzBuzz:
 * With 1 to N:
 * - Multiple of 3 = Fizz
 * - Multiple of 5 = Buzz
 * - Both? = FizzBuzz
 * - Otherwise, print number.
 * Note: Had to write this for Java 8. Would've preferred some features from 11.
 */
public class FizzBuzzApp {
    
    private List<String> fizzBuzz(int n){ 
        
        List<String> fizzesAndBuzzes = new ArrayList<String>();

        for(int i = 1; i <= n; i++) {

            boolean isFactorOf3 = i % 3 == 0;
            boolean isFactorOf5 = i % 5 == 0;
            boolean isFactorOfBoth = (i % 3 == 0) && (i % 5 == 0);

            String stringToAdd = String.valueOf(i);

            // Not ideal because it reassigns stringToAdd. But .concat won't work on "".
            if(isFactorOf3)
                stringToAdd = "Fizz";

            if(isFactorOf5) 
                stringToAdd = "Buzz";

            if(isFactorOfBoth)
                stringToAdd = "FizzBuzz";
            
            fizzesAndBuzzes.add(stringToAdd);
        }

        return fizzesAndBuzzes;
    }

    List<String> makeArray(String... numsAndFizzBuzz){
        List<String> fizzBuzzes = new ArrayList<String>(List.of(numsAndFizzBuzz));
        return fizzBuzzes;
    }

    @Test
    public void nOfZeroReturnsEmptyArray(){
        List<String> fizzAndBuzzes = fizzBuzz(0);
        assertEquals(0, fizzAndBuzzes.size());
    }

    @Test
    public void nOfNReturnsArrayOfN(){
        assertEquals(makeArray("1"), fizzBuzz(1));
        assertEquals(makeArray("1", "2"), fizzBuzz(2));
    }
    
    @Test
    public void nOf3IncludesFizz(){
        assertEquals(makeArray("1", "2", "Fizz"), fizzBuzz(3));
    }

    @Test
    public void nOf5IncludesBuzz(){
        assertEquals(makeArray("1", "2", "Fizz", "4", "Buzz"), fizzBuzz(5));
    }

    @Test
    public void multipleOf3IncludesFizz(){
        assertEquals(makeArray("1", "2", "Fizz", "4", "Buzz", "Fizz"), fizzBuzz(6));
    }

    @Test
    public void multipleOf5IncludesBuzz(){
        assertEquals(makeArray("1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"), fizzBuzz(10));
    }

    @Test
    public void multipleOf3And5IncludesFizzBuzz(){
        List<String> result = fizzBuzz(15);
        assertTrue(result.contains("FizzBuzz"));
    }
}
