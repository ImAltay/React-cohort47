import PropTypes from 'prop-types';

const Products = ({ productsList, activeCategory }) => {
  const selectedProductsList =
    activeCategory === ''
      ? productsList
      : productsList.filter((product) =>
          activeCategory.includes(product.category)
        );
  return (
    <div className='products-list'>
      {selectedProductsList.map((product, index) => (
        <div key={index} className='product'>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

Products.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCategory: PropTypes.string.isRequired,
};

export default Products;
