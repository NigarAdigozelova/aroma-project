import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./trending.scss"

const Trending = () => {
  const [product,setProduct] = useState([]);
  const [state, setState] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
  });
  const [id, setId] = useState(undefined);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/products");
    setProduct(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

  };

  const addData = (e) => {
    e.preventDefault();

    if (!state.productName || !state.productDescription || !state.productPrice) return;

    axios.post("http://localhost:8080/products", state);
    getData();
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    console.log(id);
    getData();
  };

  const handleEditClick = (data) => {
    setState({ productName: data.productName, productDescription: data.productDescription, productPrice: data.productPrice });
    setId(data.id);
  };



  return (
    <>
      <div className="test">
        <form style={{ padding: "20px", display: "flex", justifyContent: "center", gap: 10 }} onSubmit={addData}>
          <input style={{ padding: 10 }}
            name="productName"
            type="text"
            value={product.productName}
            placeholder="productName"
            onChange={handleChange}
          />
          <input style={{ padding: 10 }}
            name="productDescription"
            type="text"

            placeholder="productDescription"
            onChange={handleChange}
          />
          <input style={{ padding: 10 }}
            name="productPrice"
            type="text"

            placeholder="productPrice"
            onChange={handleChange}
          />
          <button style={{ padding: "10px 20px", backgroundColor: "green", color: "white", border: "none", borderRadius: 10 }}>add</button>
        </form>


        {
          product?.sort((a, b) => a.id - b.id)
            ?.map((products) => (

              <div className="card-wrapper" style={{ display: "flex", justifyContent: "center", margin: 10 }} key={products.id}>
                <div style={{ display: "flex", flexDirection: "column", width: "30%", borderRadius: 10, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} >
                  <span style={{ margin: 20 }}>{products.productName}</span>
                  <span style={{ margin: 20 }}>{products.productDescription}</span>
                  <span style={{ margin: 20 }}>{products.productPrice}</span>
                  <button style={{ margin: 20 }} onClick={() => deleteData(products._id)}>delete</button>
                  <button onClick={() => handleEditClick(products.name)}>edit</button>
                </div>

              </div>
            ))}</div>

    </>
  );
};

export default Trending
