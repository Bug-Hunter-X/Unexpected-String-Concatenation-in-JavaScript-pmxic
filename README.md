# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug caused by the language's loose typing system.  Specifically, it highlights the unexpected behavior of the + operator when used with a mix of numbers and strings.

## The Bug

The `foo` function is intended to add two numbers. However, when called with a number and a string ('1'), it concatenates the values instead of performing arithmetic addition. This behavior is a consequence of JavaScript's type coercion.  The number is implicitly converted to a string before concatenation. 

## The Solution

The solution is to explicitly convert the inputs to numbers before performing the addition using `parseInt()` or `Number()`. This ensures that arithmetic addition is always performed.  Using TypeScript with type checking prevents these kinds of problems at compile time.