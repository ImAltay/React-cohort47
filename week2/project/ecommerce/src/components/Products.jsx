import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Products = ({ productsList, loading }) => {
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`${id}`);
  };

  if (loading) {
    return <div className='products-list'>Loading...</div>;
  }

  return (
    <div className='products-list'>
      {productsList.map((product, index) => (
        <div
          key={index}
          className='product'
          onClick={() => {
            handleProductClick(product.id);
          }}>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

Products.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Products;
