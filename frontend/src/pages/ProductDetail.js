import React from 'react'
import { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";


export default function ProductDetail({cartItems, setCartItems}) {
  const [product, setProduct] = useState(null);
  const[qty,setQty]=useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/product/' + id)
      .then(res => res.json())
      .then(res => setProduct(res.getProductId)); // ✅ FIX HERE
  }, [id]);

  function addToCart() {
  const itemExists = cartItems.find(
    (item) => item.product._id === product._id
  );

  if (itemExists) {
    toast.warning("Item already in cart");
    return;
  }

  const newItem = { product, qty };
  setCartItems([...cartItems, newItem]);

  toast.success("Item added to cart");
}

  function increaseQty(){
    if(product.stock<=qty) return;
    const qty1=qty+1;
    setQty(qty1);
  }

  function decreaseQty(){
    if(qty<=1) return;
    const qty1=qty-1;
    setQty(qty1);
  }

  return product && <div className="container container-fluid">
    <div className="row f-flex justify-content-around">
      <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <img src={product.images[0].image} alt={product?.name} height="500" width="500"/>
      </div>

      <div className="col-12 col-lg-5 mt-5">
        <h3>{product?.name}</h3>
        <p id="product_id">{product?._id}</p>

        <hr/>

       <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner"
                  style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                </div>
              </div>

        <hr/>

        <p id="product_price">{product?.price}</p>
        <div className="stockCounter d-inline">
          <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
          <input type="number" className="form-control count d-inline" value={qty} readOnly />
          <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
        </div>

        <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={product.stock == 0} onClick={addToCart}>Add to Cart</button>

        <hr/>

        <p>
  Status:
  <span
    id="stock_status"
    style={{ color: product.stock > 0 ? "green" : "red" }}
  >
    {product.stock > 0 ? "In Stock" : "Out of Stock"}
  </span>
</p>


        <hr/>
        <h4 className="mt-2">Description:</h4>
        <p>{product?.description}</p>

        <hr/>
        <p id="product_seller mb-3">Sold by: <strong>{product?.seller}</strong></p>

        <div className="rating w-50"></div>
      </div>
    </div>
  </div>
}
