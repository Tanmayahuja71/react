// import React,{useState,useEffect} from "react";
// function Practice(){
//     const [value, setCalc] = useState("");

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             const { key } = event;
//             if ((key >= '0' && key <= '9') || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
//                 setCalc((prevValue) => prevValue + key);
//             } else if (key === 'Enter') {
//                 handleEvaluate();
//             } else if (key === 'Backspace') {
//                 setCalc((prevValue) => prevValue.slice(0, -1));
//             } else if (key === 'Delete') {
//                 setCalc("");
//             }
//         };

//         window.addEventListener('keydown', handleKeyDown);
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [value]);

//     const handleClick = (e) => {
//         const newValue = e.target.value;
//         setCalc((prevValue) => prevValue + newValue);
//     };

//     const handleEvaluate = () => {
//         try {
//             setCalc(String(eval(value)));
//         } catch {
//             setCalc("Error");
//         }
//     };
// return (
//     <div>
//         <p>{value}</p>
//         <button onClick={()=>setCalc("")}>AC</button>
//         <button onClick={()=>setCalc(value.slice(0,-1))}>C</button>
//         <button onClick={handleEvaluate}>=</button>
//         <button value="1" onClick={handleClick}>1</button>
//         <button value="2" onClick={handleClick}>2</button>
//         <button value="3" onClick={handleClick}>3</button>
//         <button value="4" onClick={handleClick}>4</button>
//         <button value="5" onClick={handleClick}>5</button>
//         <button value="6" onClick={handleClick}>6</button>
//         <button value="7" onClick={handleClick}>7</button>
//         <button value="8" onClick={handleClick}>8</button>
//         <button value="9" onClick={handleClick}>9</button>
//         <button value="0" onClick={handleClick}>0</button>
//         <button value="." onClick={handleClick}>.</button>
//         <button value="+" onClick={handleClick}>+</button>
//         <button value="-" onClick={handleClick}>-</button>
//         <button value="/" onClick={handleClick}>/</button>
//         <button value="*" onClick={handleClick}>*</button>

//     </div>
// )
// }
// export default Practice;
import React, { useState } from "react";
function Practice() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: '',
        confirmpassword: ''
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!formData.username.trim()) {
            validationErrors.username = "Username is Required";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email is Required";
        }
        else if (!/\s+@\s+\.\s+/.test(formData.email)) {
            validationErrors.email = "enter a valid email";
        }
        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        }
        else if (formData.password.length < 6) {
            validationErrors.password = "Enter a password having length >6";
        }
        if (formData.confirmpassword != formData.password) {
            validationErrors.confirmpassword = "Password Does not Match";
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert("form successfully Submitted");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder='username'  
            autoComplete='off'  
            onChange={handleChange}   
          />
            {errors.username && <span>{errors.username}</span>}  
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder='example@gmail.com'
            autoComplete='off'
            onChange={handleChange} 
          />
            {errors.email && <span>{errors.email}</span>}  
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder='******'
            onChange={handleChange} 
          />
            {errors.password && <span>{errors.password}</span>}  
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder='******'
            onChange={handleChange} 
          />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}
export default Practice;