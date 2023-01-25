import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./bestSeller.scss"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const BestSeller = () => {
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

    return (
        <div>
            <div className="wrapp-trend">
                <div className="trend-article">
                    <p>Popular Item in the market</p>
                    <h1>Best Sellers</h1>
                </div>
                <div className="test">
                    <div className="card-wrapper">
                        {product?.sort((a, b) => a.id - b.id)
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
                                        </CardActions>
                                    </Card>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSeller
