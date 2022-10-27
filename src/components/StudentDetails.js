import React, { useEffect, useContext, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

const StudentDetails = () => {

    const { data, setData } = useContext(userContext);

    const [show, setShow] = useState(false);

    const [search, setSearch] = useState(data);

    const handleClosedlt = () => setShow(false);
    const handleShowdlt = () => setShow(true);

    const handleCloseupdate = () => setShow(false);
    const handleShowupdate = () => setShow(true);

    const [inputValue,setInputValue] = useState({
        fname:"",
        date:"",
        age:"",
        gender:""
    });

    const [userdltId, setUserDltId] = useState("");
    const [userupdateId, setUserupdateId] = useState("");
    console.log(userupdateId)

    const GetInputValue = (e)=>{
        const {name,value} = e.target;
        setInputValue({...inputValue,[name]:value})
    }

    console.log(inputValue)

    const history = useNavigate();

    const registerPage = () => {
        history("/register")
    }

    const dltUser = () => {
        const dltuserdata = data.filter((el, index) => {
            return index !== userdltId
        });
        setData(dltuserdata)
    }

//    update user
const storeValue = (e)=>{
    // e.preventDefault();
    const userupdate = data.map((el,index)=>{
        return index === userupdateId ? inputValue : el
    });
    console.log(userupdate)
    setData(userupdate)
}

// search user

    const searchuser = (e)=>{
        let letter = e.toLowerCase();
        console.log(letter)
        console.log(search)

        if(letter === ""){
            setSearch(data)
        }else{
            
            const filtersearch = search.filter((el,index)=>{
                return el.fname.toLowerCase().includes(letter)
            });
            setSearch(filtersearch)
        }

    }

    return (
        <>
            <div className="container">
                <h1 className='text-center mt-2'>Student Details</h1>
                <div className='text-start'>
                    <input type="text" name="" onChange={(e)=>searchuser(e.target.value)} placeholder='search here' id="" />
                </div>
                <div className='mt-4 text-end'>
                    <Button variant="primary" onClick={registerPage}>Add</Button>
                </div>
                <div className="student_table mt-2">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>First Name</th>
                                <th>date of Birth</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                search.map((el, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{el.fname}</td>
                                                <td>{el.date}</td>
                                                <td>{el.gender}</td>
                                                <td style={{ color: el.age <= 10 ? "red" : "black" }}>{el.age}</td>
                                                <td className='d-flex justify-content-around'>
                                                    <Button variant="primary" onClick={() => {
                                                        handleShowupdate()
                                                        setInputValue(el)
                                                        setUserupdateId(index)
                                                    }}>Edit</Button>
                                                    <Button variant="danger" onClick={() => {

                                                        handleShowdlt()
                                                        setUserDltId(index)
                                                    }}>Delete</Button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>

                    {/* delete user modal */}
                    <Modal show={show} onHide={handleClosedlt}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure you want to delete user</Modal.Title>
                        </Modal.Header>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosedlt}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => {
                                handleClosedlt()
                                dltUser()
                            }}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    {/* edit modal */}

                    <Modal show={show} onHide={handleCloseupdate}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure you want to delete user</Modal.Title>
                        </Modal.Header>
                        <div className="container">
                        
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"  value={inputValue.fname}  onChange={GetInputValue} name='fname' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>date Of Birth</Form.Label>
                                <Form.Control type="date" name="date" value={inputValue.date} onChange={GetInputValue} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasictext">
                                <Form.Label>gender</Form.Label>
                                <Form.Control type="text"  name="gender" value={inputValue.gender} onChange={GetInputValue} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text"  name="age" value={inputValue.age}  onChange={GetInputValue}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </div>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseupdate}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => {
                                handleCloseupdate()
                                storeValue()
                            }}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>



                </div>
            </div>
        </>
    )
}

export default StudentDetails