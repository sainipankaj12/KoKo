import Form from 'react-bootstrap/Form';
import { ImLocation2 } from "react-icons/im";
import {MdEmail } from "react-icons/md"
import {RiContactsFill } from "react-icons/ri"
import {FaInternetExplorer } from "react-icons/fa"


function Contact() {
  return (
    <div className="container    mt-2  ">
    <div className="row align-item-center   p-4">
    <div className='col-md-7 bg-white p-4 shadow-lg'>
    <div className='fw-bolder display-6  pb-2'>
    Get in touch
   </div>
   <div>
    <hr/>
   </div>
   <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ph.Number</Form.Label>
        <Form.Control type="text" placeholder="Ph.Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
       
      <button className='btn btn-primary'>Send</button>
      </Form.Group>
    </Form>
    </div>
   <div className='col-md-5 bg-primary p-4 shadow-lg'>
   <div className=' display-6 pb-2'>
    Contact Us
   </div>
   <div><hr/> </div>
   <div className='d-flex p-2'>
   <div> <ImLocation2 /></div> 
   <p className='text-white px-2 '>Add: 198 west 21th street, suite 721 New Yrk 10025 </p>
   </div>

   <div><hr/> </div>
   <div className=' d-flex '>
   <div><MdEmail /></div>
     <p className='text-white  px-2'>  Email : Koko-collection@gmail.com</p>
   </div>
   
   <div><hr/> </div> 
   <div className='d-flex  '>
   <div><RiContactsFill /></div> 
   <p  className=' text-white  px-2'>Contact : 82458465265</p>
    </div>
   
   <div><hr/> </div>
   <div className=' d-flex'>
   <div><FaInternetExplorer />  </div> 
    <p  className=' text-white  px-2'>  Website : www.koko-collection.com</p>
   
   </div>
   </div>

    </div>
     </div>
     
  )
}

export default Contact
