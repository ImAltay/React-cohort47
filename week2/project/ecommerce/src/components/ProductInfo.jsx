import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Product = () => {
    const { id } = useParams();
    // 
    const [productTitle, setProductTitle ] = useState('');
    const [productDescription, setProductDescription ] = useState('');
    const [productImgUrl, setProductImgUrl ] = useState('');



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProductTitle(data.title);
                setProductDescription(data.description);
                setProductImgUrl(data.image);
            });
    });

    return (
        <div className='product-info'>
            <h2>{productTitle}</h2>
            <img src={productImgUrl} alt="" />
           <p>{productDescription}</p>           
        </div>
    )
}
export default Product;