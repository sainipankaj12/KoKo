import { RiDeleteBin5Fill } from "react-icons/ri";

import "./CartStyle.css";
import { useSelector, useDispatch } from "react-redux";
import {
  Decrement,
  emptycartItem,
  Increment,
  Remove,
} from "../Store/CartSlice";
import { useEffect, useState } from "react";

// import {Increment} from "../Store/CartSlice";

function Cart() {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  // empty cart

  const emptycart = () => {
    dispatch(emptycartItem());
  };

  const remove = (id) => {
    dispatch(Remove(id));
  };

  const increment = (id) => {
    dispatch(Increment(id));
  };
  const decrement = (id) => {
    dispatch(Decrement(id));
  };

  const total = () => {
    let totalprice = 0;
    cart.map((index) => {
      totalprice = index.price * index.quantity + totalprice;
      console.log(totalprice);
    });
    setTotalPrice(totalprice);
  };

  const totalqty = () => {
    let totalQty = 0;
    cart.map((index) => {
      totalQty = index.quantity + totalQty;
      console.log(totalQty);
    });
    setTotalQty(totalQty);
  };

  useEffect(() => {
    total(), totalqty();
  }, [total, totalqty]);

  return (
    <>
      <div className="body">
        <div className="row justify-content-center m-0 ">
          <div className="col-md-8 mt-5 mb-5 cardsdetails">
            <div className="card">
              <div className="card-header bg-dark p-3">
                <div className=" card-header d-flex justify-content-between">
                  <h5 className="text-white  ">
                    My Cart {cart.length > 0 ? `(${cart.length})` : ""}
                  </h5>

                  {cart.length > 0 ? (
                    <button
                      className="btn btn-danger mt-0 btn-sm"
                      onClick={emptycart}
                    >
                      <span>emptycart</span>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <div className=" card-body p-0">
                  {cart.length === 0 ? (
                    <table className="table cart-table mb-0">
                      <tbody>
                        <tr>
                          <td colSpan={6}>
                            <div className="cart-empty">
                              <p>Your cart is empty...</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <table className="table cart-table mb-0 table-responsive-sm  ">
                      <thead>
                        <tr>
                          <th>Action</th>
                          <th>Product</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th className="text-right">
                            <span id="amount" className="amount ">
                              Amount
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(function (data) {
                          return (
                            <tr key={data.id}>
                              <td>
                                <button
                                  className="prdct-delete"
                                  onClick={() => remove(data.id)}
                                >
                                  <i className="fa fa-trash-alt">
                                    <RiDeleteBin5Fill />
                                  </i>
                                </button>
                              </td>
                              <td>
                                <div className="product-img">
                                  <img src={data.image} alt=" image" />
                                </div>
                              </td>
                              <td>
                                <div className="product-name">
                                  <p>
                                    {data.title.toString().substring(0, 5)}
                                  </p>
                                </div>
                              </td>
                              <td>{data.price}</td>

                              <td>
                                <div className="prdct-qty-container   ">
                                <div className="row ">
                                  <div className="col">
                                    <button
                                      className="prdct-qty-btn  btn-sm"
                                      type="button"
                                      onClick={() => increment(data)}
                                    >
                                      <i className="fa fa-minus">+</i>
                                    </button>
                                  </div>
                                  <div className="col">
                                    <input
                                      type="text"
                                      className="qty-input-box "
                                      value={data.quantity}
                                      disabled
                                    />
                                  </div>
                                  <div className="col">
                                    <button
                                      className="prdct-qty-btn btn-sm"
                                      type="button"
                                      onClick={() => decrement(data)}
                                    >
                                      <i className="fa fa-plus">-</i>
                                    </button>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-right border">
                                 {data.quantity * data.price}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>&nbsp;</th>
                          <th colSpan={3}>&nbsp;</th>
                          <th>
                            Items <span className="ml-2 mr-2">:</span>
                            <span className="text-danger">{totalQty}</span>
                          </th>
                          <th className="text-right">
                            Total<span className="ml-2 mr-2">:</span>
                            <span className="text-danger">
                              $ {totalPrice.toString().substring(0, 6)}
                            </span>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
