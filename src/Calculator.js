import React, { useState, useEffect } from 'react';
import './calc.css';

function Calculator() {
    const [value, setCalc] = useState("");

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
            if ((key >= '0' && key <= '9') || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
                setCalc((prevValue) => prevValue + key);
            } else if (key === 'Enter') {
                handleEvaluate();
            } else if (key === 'Backspace') {
                setCalc((prevValue) => prevValue.slice(0, -1));
            } else if (key === 'delete') {
                setCalc("");
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [value]);

    const handleClick = (e) => {
        const newValue = e.target.value;
        setCalc((prevValue) => prevValue + newValue);
    };

    const handleEvaluate = () => {
        try {
            setCalc(String(eval(value)));
        } catch {
            setCalc("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="calculator-display">{value}</div>
            <button className="function" onClick={() => setCalc("")}>AC</button>
            <button className="function" onClick={() => setCalc(value.slice(0, -1))}>C</button>
            <button className="function" value="/" onClick={handleClick}>÷</button>
            <button className="function" value="*" onClick={handleClick}>×</button>
            <button value="7" onClick={handleClick}>7</button>
            <button value="8" onClick={handleClick}>8</button>
            <button value="9" onClick={handleClick}>9</button>
            <button className="function" value="-" onClick={handleClick}>−</button>
            <button value="4" onClick={handleClick}>4</button>
            <button value="5" onClick={handleClick}>5</button>
            <button value="6" onClick={handleClick}>6</button>
            <button className="function" value="+" onClick={handleClick}>+</button>
            <button value="1" onClick={handleClick}>1</button>
            <button value="2" onClick={handleClick}>2</button>
            <button value="3" onClick={handleClick}>3</button>
            <button className="equal" onClick={handleEvaluate}>=</button>
            <button value="0" style={{ gridColumn: 'span 2' }} onClick={handleClick}>0</button>
            <button value="." onClick={handleClick}>.</button>
        </div>
    );
}

export default Calculator;
