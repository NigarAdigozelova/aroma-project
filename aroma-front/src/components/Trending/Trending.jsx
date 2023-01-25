import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./trending.scss"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Trending = () => {
  const [product, setProduct] = useState([]);
  const [state, setState] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: ""
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

    if (!state.productName || !state.productDescription || !state.productPrice || !state.productImage) return;

    axios.post("http://localhost:8080/products", state);
    getData();
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    console.log(id);
    getData();
  };

  const handleEditClick = (data) => {
    setState({ productName: data.productName, productDescription: data.productDescription, productPrice: data.productPrice, productImage: data.productImage });
    setId(data.id);
  };



  return (
    <div className="wrapp-trend">
    <div className="trend-article">
      <p>Popular Item in the market</p>
      <h1>Trending Product</h1>
    </div>
      <div className="test">
        <form style={{ padding: "20px", display: "flex", justifyContent: "center", gap: 10 }} onSubmit={addData}>
          <input style={{ padding: 10 }}
            name="productName"
            type="text"
            placeholder="productName"
            onChange={handleChange}
          />
          <input style={{ padding: 10 }}
            name="productImage"
            type="url"
            placeholder="productimage"
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

        <div className="card-wrapper">
          {
            product?.sort((a, b) => a.id - b.id)
              ?.map((products) => (
                <div key={products._id} className="card-item">
                  <Card sx={{ maxWidth: 345 }} >

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <img src={products.productImage} alt="" />

                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span style={{ margin: 20 }}>{products.productName}</span>

                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span style={{ margin: 20 }}>{products.productDescription}</span>

                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <span style={{ margin: 20 }}>${products.productPrice}</span>

                      </Typography>
                    </CardContent>
                    <CardActions>
                      <button className="trend-btn" style={{ margin: 20 }} onClick={() => deleteData(products._id)}>delete</button>
                    </CardActions>
                  </Card>
                </div>




              ))}
        </div>
      </div>

    </div>
  );
};

export default Trending
