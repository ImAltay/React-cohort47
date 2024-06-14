import PropTypes from 'prop-types';

const Products = ({productsList, loading}) => {

    if (loading) {
        return <div className='products-list'>Loading...</div>;
      }

    return (
        <div className='products-list'>
           { productsList.map((product, index) => (
                <div key={index} className='product'>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>  
                </div>
            ))}
        </div>
    )
}

Products.propTypes = {
    productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired
}

export default Products;