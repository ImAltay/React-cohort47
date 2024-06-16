import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {                
                setProduct({productTitle: data.title, productDescription: data.description, productImgUrl: data.image})
            });
    });

    return (
        <div className='product-info'>
            <h2>{product.productTitle}</h2>
            <img src={product.productImgUrl} alt={`${product.productDescription}`} />
           <p>{product.productDescription}</p>           
        </div>
    )
}
export default Product;