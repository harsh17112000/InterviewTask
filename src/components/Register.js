import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const { data, setData } = useContext(userContext);
    console.log(data)

    const history = useNavigate();

    const [inputValue, setInputValue] = useState({
        fname: "",
        date: "",
        age: "",
        gender: "",
        course: ""
    });
    console.log(inputValue)
    // const [data,setData] = useState([])

    const GetInputValue = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    const storeValue = (e) => {
        e.preventDefault();

        const { fname, date, age, gender, course } = inputValue;

        if (fname == "") {
            alert("fname is required")
        } else if (date == "") {
            alert("date is required")
        } else if (age == "") {
            alert("age is required")
        } else if (gender == "") {
            alert("gender is required")
        } else if (course == "") {
            alert("course is required")
        } else if (age < 8) {
            alert("age should be greter than 8")
        } else {
            setData([...data, inputValue]);
            history("/")
        }
    }


    return (
        <>
            <div className="container">
                <h1>Enter your Details</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={GetInputValue} value={inputValue.fname} name='fname' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>date Of Birth</Form.Label>
                        <Form.Control type="date" onChange={GetInputValue} name="date" value={inputValue.date} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Label>gender</Form.Label>
                        {/* <Form.Control type="radio" onChange={GetInputValue} name = "gender" value={inputValue.gender} />
                        <Form.Control type="radio" onChange={GetInputValue} name = "gender" value={inputValue.gender} /> */}
                        <Form.Check
                            inline
                            label="male"
                            name="gender"
                            type="radio"
                            value="male"
                            onChange={GetInputValue}
                            id />
                        <Form.Check
                            inline
                            label="female"
                            value="female"
                            name="gender"
                            type="radio"
                            onChange={GetInputValue}
                            id />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" onChange={GetInputValue} name="age" value={inputValue.age} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Course</Form.Label>
                        <Form.Select aria-label="Default select example" name="course" onChange={GetInputValue}>
                            <option>Open this select menu</option>
                            <option value="python">python</option>
                            <option value="c++">c++</option>
                            <option value="java">java</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" onClick={storeValue} type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </>
    )
}

export default Register