import React from 'react'
import "./algorithms.css"

function IntroAlgorithms (){
    return(
<div>
            <h1>Intro to Algorithms</h1>
            
            <div className = "arithmetic">
                <h3>Arithmetic functions</h3>
                
                <p>Adding two numbers together, using variables num1 and num2</p>
                <p>var add = function(num1, num2) [ opening curly bracket] return num1 + num2; [closing curly bracket];</p>

                <p>Subtracting two numbers together, using variabes num1 and num2</p>
                <p>var subtract = function(num1, num2) [opening curly bracket] return num1 - num2; [closing curly bracket];</p>
                
                
                <p>Multiplying two numbers together, using variables num1 and num2</p>
                <p>var multiply = function(num1, num2) [opening curly bracket] return num1 * num2; [closing curly bracket];</p>

                <p>Dividing two numbers together, using variables num1 and num 2</p>
                <p>var divide = function(num1, num2) [opening curly bracket] return num1 / num2;[closing curly bracket];</p>
            </div>

            <div className = "odd">
                <h3>Odd or even algorithm</h3>
                <p>Return the string "odd" if `num` is an odd number, Return "even" if `num` is even</p>
                <p>var oddOrEven = function(num) [opening curly bracket]</p>
                <p>if (num % 2 === 0) [opening curly bracket]</p>
                <p>return "even";</p>
                <p>[closing curly bracket] else [opening curly bracket]</p>
                <p>return "odd";</p>
                <p>[closing curly bracket] ; [closing curly bracket];</p>
            </div>
                    
        </div>
    )
}

export default IntroAlgorithms;