import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "../server";
import { updateUserAdress, updateUserInfo } from "../redux/actions/user";
import { toast } from "react-toastify";
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';
// import { Country, State } from "country-state-city";


function ProfileContent({ active }) {
  const { user,error ,successMessage} = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    else{
      toast.success("Updated Succesfully")
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: "clearMessages" });
    }
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(name, email, phoneNumber, password));
    toast.success("Updated Succesfully")
  };
  return (
    <div>
      {active === "Profile" && (
         <div>
         <div className="container rounded bg-white mt-5 mb-5">
   <div className="row">
       <div className="col-md-5 border-right bg-secondary">
           <div className="d-flex flex-column align-items-center text-center p-3 py-5"> <img
                  src={`${backend_url}${user.avatar}`}
                  alt="loading....."
                  width="150px"
                  // height="40"
                  className="rounded-circle"
                ></img><span className="font-weight-bold">{user.name}</span><span className="text-black-50">{user.email}</span><span> </span></div>
       </div>
       
       <div className="col-md-6 border-right" >
           <div className="p-3 py-5">
               <div className="d-flex justify-content-between align-items-center mb-3">
                   <h4 className="text-right">Profile Settings</h4>
               </div>
               {/* <div className="row "> */}
                   <div className="col-md-8"><label className="labels">Full Name</label><input type="text" className="form-control" placeholder="first name" value={name} onChange={(e) => setName(e.target.value)}/></div>
                   {/* <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname"/></div> */}
               {/* </div> */}
               <div className="row mt-3">
                   <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number"     value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></div>
                   {/* <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" /></div> */}
                   {/* <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" /></div> */}
                   {/* <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2"/></div> */}
                   {/* <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" /></div> */}
                   {/* <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" /></div> */}
                   <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
                   <div className="col-md-12"><label className="labels">Password</label><input type="password" className="form-control" placeholder="Enter your Existing Password"   value={password}
                    onChange={(e) => setPassword(e.target.value)} /></div>
               </div>
             
               <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleSubmit}>Update Profile</button></div>
           </div>
       </div>
      
   </div>
</div>
        </div>
 )}
 {active ==='Orders' &&(
  <div>
    <AllOrders></AllOrders>
  </div>
 )}
 {
  active === 'Refunds' &&(
    <div>
      <Refunds/>
    </div>
  )
 }
 {active === 'Address' &&(
  <div>
    <Address></Address>
  </div>
 )}
    </div>
  );
}

// orders
const AllOrders=()=>{
  const orders=[
    {
      _id:"123437hfsl8327298",
      orderItems:[{
        name:"Ultra Tech Cement"
      }],
      totalPrice:129,
      orderSatus:"Processing"
    }
  ]
  return(

    <div className="table-responsive" style={{display:'block'}}>
    <table className="table" >
      <thead>
        <tr>
          <th scope="col">Order Id</th>
          <th scope="col">Satus</th>
          <th scope="col">Items QTY</th>
          <th scope="col">Total</th>
          {/* <th scope="col">Header</th> */}
        </tr>
      </thead>
     {orders.map((item,index)=> <tbody key={index}>
        <tr >
          <td>83298qlkhlaskhkj</td>
          <td>Processing</td>
          <td>1</td>
          <td>lfajahkjsh</td>
          {/* <td>text</td> */}
        </tr>
      </tbody>)}
    </table>
  </div>
  )
}
//Refunds

const Refunds=()=>{
  const orders=[
    {
      _id:"123437hfsl8327298",
      orderItems:[{
        name:"Ultra Tech Cement"
      }],
      totalPrice:129,
      orderSatus:"Processing"
    }
  ]
  return(

    <div className="table-responsive" style={{display:'block'}}>
    <table className="table" >
      <thead>
        <tr>
          <th scope="col">Order Id</th>
          <th scope="col">Satus</th>
          <th scope="col">Items QTY</th>
          <th scope="col">Total</th>
          {/* <th scope="col">Header</th> */}
        </tr>
      </thead>
     {orders.map((item,index)=> <tbody key={index}>
        <tr >
          <td>83298qlkhlaskhkj</td>
          <td>Processing</td>
          <td>1</td>
          <td>lfajahkjsh</td>
          {/* <td>text</td> */}
        </tr>
      </tbody>)}
    </table>
  </div>
  )
}

// Address

const Address = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [addressType, setAddressType] = useState('');
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  

  const addressTypeData = [
    {
      name: 'Default',
    },
    {
      name: 'Home',
    },
    {
      name: 'Office',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (addressType === '' || country === '' || city === '') {
      toast.error('Please fill all the fields!');
    } else {
      dispatch(updateUserAdress(country, city, address1, address2, zipCode, addressType));
      setOpen(false);
      setCountry('');
      setCity('');
      setAddress1('');
      setAddress2('');
      setZipCode('');
      setAddressType('');
    }
  };

  // const handleDelete = (item) => {
  //   const id = item._id;
  //   dispatch(deleteUserAddress(id));
  // };

  return (
    <Container className="w-full px-5">
      <Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form /*onSubmit={handleSubmit}*/>
            <Form.Group className="mb-3">


            <form className="row g-3">
  {/* <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div> */}
  {/* <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div> */}
    <div className="col-md-4">
    <label htmlFor="inputState" className="form-label"  >Country</label>
    <select id="inputState" className="form-select">
      {/* <option selected>Country</option> */}
      <option>India</option>
    </select>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">City</label>
    <select id="inputState" className="form-select">
      {/* <option selected>Country</option> */}
      <option>Lucknow</option>
    </select>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address 1</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Adress Type</label>
    <select id="inputState" className="form-select">
      {
        addressTypeData && addressTypeData.map((item)=>(
          <option key={item.name} value={item.name}>{item.name}</option>

        ))
      }
     
    </select>
  </div>
    

  </div>
 
  
</form>
            </Form.Group >
            
            <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
              Submit
            </Button>
          </Form>

        </Modal.Body>
      </Modal>

      <Row className="my-4">
        <Col>
          <h1>My Addresses</h1>
        </Col>
        <Col className="text-right">
          <Button onClick={() => setOpen(true)}>Add New</Button>
        </Col>
      </Row>

      {/* Display user addresses here */}
      
    </Container>
  );
};


export default ProfileContent;
