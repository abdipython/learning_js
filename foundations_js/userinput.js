//easy user input 
"use strict";

const ps = require("prompt-sync")({sigint:true});
const prompt = ps();
userName = prompt;

console.log(`you said your name is ${userName}`);