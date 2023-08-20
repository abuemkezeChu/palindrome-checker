'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('check-btn')
  const display = document.getElementById('display')

  // Function to check if the string is a palindrome

  const palindromeChecker = (string) => {

    /**
     * filters out non-alphanumeric characters and converts the input string to lowercase before checking for palindromes
     */

    const filteredString = string.toLowerCase().split('').filter(char => {
      return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')
    })

    const reversedString = filteredString.slice().reverse()

    return filteredString.join('') === reversedString.join('')
  };

})
