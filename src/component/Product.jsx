import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(data);
  let componentMounted = true;

  const getData = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    }
    return () => {
      componentMounted = false;
    };
  };
  useEffect(() => {
    getData();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className=" buttons d-flex  justify-content-center mb-5 pb-5 ">
          <Button
          className="btn-sm"
            variant="outline-warning me-2  "
            onClick={() => setFilter(data)}
          >
            All
          </Button>
          <Button
           className="btn-sm "
            variant="outline-warning me-1 me-md-2 "
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </Button>
          <Button className="btn-sm "
            variant="outline-warning me-1 me-md-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </Button>
          <Button
          className="btn-sm"
            variant="outline-warning me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </Button>
          <Button
           className="btn-sm "
            variant="outline-warning me-2 "
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </Button>
        </div>
        <div className="container  ">
          <div className="row  ">
            {filter.map((products,index) => {
              return (
             
                
                  <div className="  col-md-3 mb-4 " key={index}>
                    <Card
            
                      as={Link}
                      to={`/Product/${products.id}`}
                      className=" outline-none h-100 text-center p-4 "
                    >
                      <Card.Img
                        variant="top"
                        src={products.image}
                        className="card-img-top  "
                        height="250PX"
                      />
                      <Card.Body>
                        <Card.Title className="mb-0 text-primary">
                          {products.title.substring(0, 12)} ...
                        </Card.Title>
                        <Card.Text className="text-danger lead fw-bold">
                          ${products.price}
                        </Card.Text>
                        <Button variant="outline-success me-2">Buy</Button>
                      </Card.Body>
                    </Card>
                  </div>
                 
              
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className=" container-fluid bg-light ">
        <div className="row ">
          <div className=" col-12 ">
            <h1 className="display-6 fw-bolder mb-1  text-danger text-center">LATEST PRODUCTS</h1>
            <hr />
          </div>
        </div>
        <div className="row, justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Product;
