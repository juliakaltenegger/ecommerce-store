import { useRouter } from "next/router";
import getAllProducts from "../../product-details";
import Link from "next/link";
import { find } from "lodash";
import cookie from "js-cookie";
import nextCookie from "next-cookies";
import React, { useState } from "react";
import Nav from "../../components/nav";
import styled from "styled-components";

function turnObjectIntoString(obj) {
  return JSON.stringify(obj);
}

const allProducts = getAllProducts();

const Product = props => {
  const router = useRouter();
  const { id } = router.query;
  const individualProductDetails = find(allProducts, function(
    productProperties,
  ) {
    return productProperties.id === id;
  });

  const arr = JSON.parse(props.cookies.productsInCart || "[]");

  const combineCookies = arr.push();

  const [quantity, setQuantity] = useState(1);
  const handleSubmit = event => {
    event.preventDefault();
    setQuantity(quantity);
  };
  const handleChange = event => {
    setQuantity(event.target.value);
  };

  const SingleProduct = styled.div`
    margin-top: 200px;
  `;

  return (
    <>
      <Nav />
      <SingleProduct>
        <div>
          <div id={id}>
            Product: {individualProductDetails.name}{" "}
            {individualProductDetails.price}{" "}
            {individualProductDetails.spicyLevel}
            <img src={individualProductDetails.photo} width="250px" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleChange}
            ></input>
            <button
              onClick={() => {
                cookie.set(
                  "productsInCart",
                  turnObjectIntoString([
                    {
                      count: quantity,
                      name: individualProductDetails.name,
                      price: individualProductDetails.price,
                    },
                  ]),
                  combineCookies,
                );
                location.reload();
              }}
            >
              Add to Cart
            </button>
          </form>
          <br />
          myCookie: {props.cookies.productsInCart}
          Cookie get Funktion: {combineCookies}
        </div>
        <Link href="/#products">
          <a>
            <button>Back to Products</button>
          </a>
        </Link>
        {console.log(arr)}
      </SingleProduct>
    </>
  );
};

// const jsonObject = JSON.parse(props);
// console.log(jsonObject.count);

// let json = { cookie };
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true

Product.getInitialProps = async ctx => {
  const cookies = nextCookie(ctx);
  console.log("cookie obj", cookies);

  return {
    cookies: cookies,
  };
};

export default Product;

// const Product = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <>
//       <p>Product: {id}</p>;{" "}
//       {productDetails.map(product => (
//         <Link href="/products/[id]" as={`/products/${product.id}`}>
//           <a>
//             {" "}
//             <img src={product.photo} />
//           </a>
//         </Link>
//         // {product.name} {product.price} {product.spicyLevel}
//       ))}
//     </>
//   );
// };
