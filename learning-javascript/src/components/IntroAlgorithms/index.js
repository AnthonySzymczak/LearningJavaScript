import React from 'react'
import "./algorithms.css"

function IntroAlgorithms (){
    return(
<div>
            <h1>Intro to Algorithms</h1>
            
            <div className = "arithmetic">
                <h3>Arithmetic functions</h3>
                <br/>
                <p>Adding two numbers together, using variables num1 and num2</p>
                <p>var add = function(num1, num2) {"{"} return num1 + num2; {"}"};</p>
                <br/>
                <p>Subtracting two numbers together, using variabes num1 and num2</p>
                <p>var subtract = function(num1, num2) {"{"} return num1 - num2; {"}"};</p>
                <br/>
                
                <p>Multiplying two numbers together, using variables num1 and num2</p>
                <p>var multiply = function(num1, num2) {"{"} return num1 * num2; {"}"};</p>
                <br/>
                <p>Dividing two numbers together, using variables num1 and num 2</p>
                <p>var divide = function(num1, num2) {"{"} return num1 / num2;{"}"};</p>
            <br/>
                <h3>Odd or even algorithm</h3>
                <br/>
                <p>Return the string "odd" if `num` is an odd number, Return "even" if `num` is even</p>
                <p>var oddOrEven = function(num) {"{"}</p>
                <p>if (num % 2 === 0) {"{"}</p>
                <p>return "even";</p>
                <p>{"}"} else {"{"}</p>
                <p>return "odd";</p>
                <p>{"}"} ; {"}"};</p>
            
            </div>

                    
        </div>
    )
}

export default IntroAlgorithms;