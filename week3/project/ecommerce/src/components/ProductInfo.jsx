import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { PRODUCTS_URL } from '../constants.js';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch(`${PRODUCTS_URL}/${id}`);
      const data = await res.json();
      setProduct({
        productTitle: data.title,
        productDescription: data.description,
        productImgUrl: data.image,
      });
    } catch (err) {
      setProduct({
        error: true,
        message: err.message,
      });
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  if (product.error) {
    return <p>There was an error fetching the product: {product.message}</p>;
  }

  return (
    <div className='product-info'>
      <h2>{product.productTitle}</h2>
      <img src={product.productImgUrl} alt={`${product.productDescription}`} />
      <p>{product.productDescription}</p>
    </div>
  );
};
export default Product;
