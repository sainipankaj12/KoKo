import Card from 'react-bootstrap/Card';
import Product from './Product';

function Home() {
  return (
    <div >
    <div className='cotainer-fluid bg-light pb-5 '>
        <Card className=" text-white border-0 " >
      <Card.Img  src="./img/shoppy.JPG " alt="" />
      <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
        <Card.Title className='display-3 fw-bolder '>NEW SEASON ARRIVALS</Card.Title>
        <Card.Text className='display-6 fs-2'>
        CHECK OUT ALL THE TRENDS
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
    </div>
    <div>
      <Product />
    </div>
    </div>
  )
}

export default Home
