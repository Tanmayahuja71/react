import React, { useState, useEffect } from "react";

function Check() {
    const [value, setVal] = useState("");
    function handleKeyDown(event) {
        const { key } = event;
        if ((key >= '0' && key <= '9') || key === "+" || key === "/" || key === "*" || key === "-" || key === ".") {
            setVal((prevValue) => prevValue + key);
        } else if (key === "Backspace") {
            setVal((prevValue) => prevValue.slice(0, -1));
        } else if (key === "Delete") {
            setVal("");
        } else if (key === "Enter") {
            handleEvent();
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [value]);
    function handleEvent() {
        try {

            setVal(String(eval(value)));
        } catch {
            setVal("Error");
        }
    }

    function handleClick(e) {
        setVal((prevValue) => prevValue + e.target.value);
    }

    return (
        <div>
            <p>{value}</p>
            <table>
                <tbody>
                    <tr>
                        <td colSpan="4">
                            <button style={{ width: '100%' }} onClick={() => setVal("")}>AC</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleClick} value="7">7</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="8">8</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="9">9</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="/">/</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleClick} value="4">4</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="5">5</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="6">6</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="*">*</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleClick} value="1">1</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="2">2</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="3">3</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="-">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button style={{ width: '100%' }} onClick={handleClick} value="0">0</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value=".">.</button>
                        </td>
                        <td>
                            <button onClick={handleClick} value="+">+</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <button style={{ width: '100%' }} onClick={handleEvent}>=</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Check;
