export const data = [
  {
    id: 1,
    question: "What is async/await?",
    answer:
      "Async/await is a sugar-coated way to handle Promises in JavaScript, allowing for asynchronous code to be written in a more synchronous and readable manner.",
  },
  {
    id: 2,
    question: "What is a closure?",
    answer:
      "A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables, even after the outer function has returned.",
  },
  {
    id: 3,
    question: "What is the difference between let, const, and var?",
    answer:
      "let and const are block-scoped, while var is function-scoped. const variables cannot be reassigned, while let and var can.",
  },
  {
    id: 4,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. This applies to variables declared with var and functions.",
  },
  {
    id: 5,
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous callbacks in the queue and pushing them onto the call stack when the stack is empty.",
  },
  {
    id: 6,
    question: "What is the difference between == and ===?",
    answer:
      "== checks for equality with type coercion, meaning it converts the types before comparing, whereas === checks for equality without type coercion, ensuring both the value and type are the same.",
  },
  {
    id: 7,
    question: "What is the purpose of the 'this' keyword?",
    answer:
      "'this' refers to the context in which a function is executed. Its value depends on how the function is called, and can refer to the global object, an object instance, or other contexts in strict mode.",
  },
  {
    id: 8,
    question: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable has been declared but has not yet been assigned a value. null is an assignment value that represents no value or no object.",
  },
  {
    id: 9,
    question: "What are arrow functions?",
    answer:
      "Arrow functions are a shorthand syntax for writing functions in JavaScript. They do not have their own 'this', 'arguments', or 'super', and are always anonymous.",
  },
  {
    id: 10,
    question: "What is the purpose of promises in JavaScript?",
    answer:
      "Promises represent a value that may be available now, later, or never. They provide a way to handle asynchronous operations, making code easier to manage compared to traditional callback functions.",
  },
];
