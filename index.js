/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

export default MarkdownEditor;

// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript
const reverseSentence = (sentence) => {
    return sentence.split(' ').reverse().map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};

const inputSentence = "Hello, world!";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);

// As an illustration, pull names out of the data array using flatMap
const data = [
    [{ name: "John", age: 25 }, { name: "Jane", age: 30 }],
    [{ name: "Bob", age: 35 }]
];
const names = data.flatMap(item => item.name);
console.log(names);


