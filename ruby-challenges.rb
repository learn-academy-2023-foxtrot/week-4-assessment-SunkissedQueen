# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# Developer Tori

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# method name: num_odd_even
# input: number
# output: string
# process: create a method to take in a number and return into a string (def...end), use a conditional statement (medulo) to determine if the number is even or odd, using string interpulation it will place argument in the correct string "#{} is even" or "#{} is odd", use p to print so it will actually appear in the terminal.
def num_odd_even number # method name holding the parameter of number
    if number % 2 == 0 # conditional statement that uses medulo operator to check if the number has a remainder
       p "#{number} is even" # if no remainder, this will print
    else
       p "#{number} is odd" # if remainder, this will print
    end
end
num_odd_even(reposts1) # calling the method and passing reposts 1,2,3
num_odd_even(reposts2)
num_odd_even(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# Developer Shaun
def delete_vowels string
    string.delete'aeiouAEIOU'
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p delete_vowels beatles_album1
p delete_vowels beatles_album2
p delete_vowels beatles_album3

=begin
Pseudo code:
name:delete_vowels
input: a string
output: a string
Process: Create a method using .delete and follow it up with all of the vowels in both cases. End. Print call the methods with the arguments
=end

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# Developer Xe
palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:

# INPUT: variables that have a value of a string
# FUNCTION_NAME: pali_n_drome with a passed in parameter the_word
# OUTPUT: a string that passes the value of the variable and identifies if it is palindrome or not
# EXPECTED_OUTPUT: Will be printed at the end of each p

# PROCESS:
# 1) create a method that will take the string from the variable and be reusable
# 2) give method a parameter the_word
# 3) create a conditional statement if/else because we need to check all variables
# 4) create an if statement with an end
# 5) create a conditional that takes in parameter, by using dot notation lowercase the entire string and check if it equals to the same parameter, also lower cased and reversed. 
# 6) return the string interpelation that takes in the parameter , within a hash and curly braces, and put it in the string with the words that the word that was checked is a palindrome.
# 7) create an else statement
# 8) return the string interpelation that takes in the number given, within a hash and curly braces, and put it in the string with the words that the word that was checked is not a palindrome.
# 9) p the name of the method (pali_n_drome) with the name of any variable in parentheses


def pali_n_drome the_word
    if the_word.downcase == the_word.downcase.reverse
        "#{the_word} is a palindrome"
    else
        "#{the_word} is not a palindrome"
    end
end

p pali_n_drome(palindrome_test_case1)
# Expected output: 'Racecar is a palindrome'
# MY OUTPUT:       "Racecar is a palindrome"
p pali_n_drome(palindrome_test_case2)
# Expected output: 'LEARN is not a palindrome'
# MY OUTPUT:       "LEARN is not a palindrome"
p pali_n_drome(palindrome_test_case3)
# Expected output: 'Rotator is a palindrome'
# MY OUTPUT:       "Rotator is a palindrome"