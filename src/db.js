



export const db = [
    {
        topicName: "JavaScript Basics",
        entries: [
            {
                id: 1,
                question: "What is the output of '2' + 2 in JavaScript?",
                options: ["4", "22", "NaN", "Error"],
                correctAnswer: ["22"],
                inputType: "selected option",
                deepExplanation:
                    "In JavaScript, the '+' operator performs string concatenation if one of the operands is a string. Here, '2' is a string, so 2 is coerced to a string, and the result is '22'.",
                references: [
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
                ],
            },
            {
                id: 2,
                question: "What does `===` mean in JavaScript?",
                options: [
                    "Equality check",
                    "Strict equality check",
                    "Assignment",
                    "None of the above",
                ],
                correctAnswer: ["Strict equality check"],
                inputType: "selected option",
                deepExplanation:
                    "`===` is the strict equality operator in JavaScript. It checks for both value and type equality, unlike `==`, which performs type coercion.",
                references: [
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality",
                ],
            },
        ],
    },
    {
        topicName: "JavaScript Advanced Concepts",
        entries: [
            {
                id: 3,
                question: "Is JavaScript dynamically typed?",
                options: ["True", "False"],
                correctAnswer: ["True"],
                inputType: "boolean",
                deepExplanation:
                    "Yes, JavaScript is dynamically typed, meaning variables can hold values of any type, and their types can change at runtime.",
                references: [
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
                ],
            },
            {
                id: 4,
                question: "What is `null` in JavaScript?",
                options: [
                    "An object",
                    "A primitive value",
                    "A reserved keyword",
                    "None of the above",
                ],
                correctAnswer: ["An object"],
                inputType: "selected option",
                deepExplanation:
                    "`null` in JavaScript is a special value that represents the intentional absence of any object value. Its type, however, is 'object', which is considered a historical bug in JavaScript.",
                references: [
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",
                ],
            },
        ],
    },
    {
        topicName: "JavaScript Functions",
        entries: [
            {
                id: 5,
                question: "Write a JavaScript function to check if a number is even.",
                options: [],
                correctAnswer: ["function isEven(num) { return num % 2 === 0; }"],
                inputType: "string",
                deepExplanation:
                    "This function takes a number as input and checks if the remainder when divided by 2 is 0. If true, the number is even.",
                references: [
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",
                ],
            },
        ],
    },
];

