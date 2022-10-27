import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const {data,setData} = useContext(userContext);
    console.log(data)

    const history = useNavigate();

    const [inputValue,setInputValue] = useState({
        fname:"",
        date:"",
        age:"",
        gender:""
    });

    // const [data,setData] = useState([])

    const GetInputValue = (e)=>{
        const {name,value} = e.target;
        setInputValue({...inputValue,[name]:value})
    }

    const storeValue = (e)=>{
        e.preventDefault();

        setData([...data,inputValue]);
        history("/")
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
                        <Form.Control type="text" onChange={GetInputValue} name = "gender" value={inputValue.gender} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" onChange={GetInputValue} name = "age" value={inputValue.age} />
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