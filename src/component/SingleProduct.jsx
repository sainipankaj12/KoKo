import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";
import Skeleton from 'react-loading-skeleton'
import { AiOutlineStar } from 'react-icons/ai';
import {useDispatch} from 'react-redux'
import { add } from "../Store/CartSlice";

function SingleProduct() {
  const {id} = useParams();

const dispatch = useDispatch();

// const[obj,setObj]=useState({})

  const [item, setItem] = useState([]);

  const [loading, setLoading] = useState(false);

  const Loading = () => {
    return (
      <>
     <div className="col-md-6 " style={{lineHeight:2}}>
    <Skeleton height={400}/>
     </div>
     <Skeleton height={50} width={300}/>
     <Skeleton height={75}/>
     <Skeleton height={25} width={150}/>
     <Skeleton height={50}/>
     <Skeleton height={150}/>
     <Skeleton height={50} width={100}/>
     <Skeleton height={50} width={100}  />
     <div className="col-md-6">

</div>
</>
    )
  };

  useEffect(() => {
  
    const getItem = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setItem(await response.json());
      setLoading(false);
    };
    getItem();
  }, [id]);

  
  const addToCart = (item)=>{
   
    let myObj={
      id:item.id,
      title:item.title,
      price:item.price,
      description:item.description,
      rating:item.rating.rate,
      image:item.image,
      quantity:1


    }


  

   dispatch(add(myObj))
  }
  const ShowItem = () => {


    return (
      <>
        <div>
          <div className=" container d-md-flex justify-content-center align-item-center   p-3">
           
              <div className="col-md-6 pt-5 pb-5 " >
                <Image
                  src={item.image}
                  alt={item.title}
                  rounded
                  className=" "
                  height="300px" 
                  key={item.id}
                  width="300px"
                 
                />
              </div>
              <div className="col-md-6  align-item-center " >
               <div className="   "  >
               <Card.Title className="text-uppercase text-black-50" >
                          {item.category}
                        </Card.Title>
                        <Card.Title className="display-6 text-black">
                          {item.title}
                        </Card.Title>
                        <hr/>
                        <Card.Text className=" text-danger  lead display-5 fw-bolder">
                         Price  ${item.price}
                        </Card.Text>
                        <Card.Text className=" text-warning fw-bold ">
                          Ratinng {item.rating && item.rating.rate}
                          < AiOutlineStar />
                        </Card.Text>
                        <Card.Text className="   ">
                          {item.description}
                        </Card.Text>

                        <Button onClick = {()=>addToCart(item)} variant="outline-dark bg-success me-3 mt-3">
                          Add to Cart
                        </Button>
                       
                        <Button as={Link} to="/cart" variant="outline-dark bg-success me-3 mt-3">
                          Go to Cart
                        </Button>
                      </div>
                      </div>
            </div>
          </div>
      
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : <ShowItem />}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
