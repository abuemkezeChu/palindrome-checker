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

  //function to display thr results

  const displayResult = () => {
    const word = document.getElementById('word').value
    const result = palindromeChecker(word) ? 'is a palindrome' : 'is not a palindrome'
    display.textContent = `${word} ${result}`
    display.style.fontSize = '2rem'
  }

  btn.addEventListener('click', displayResult)

})
