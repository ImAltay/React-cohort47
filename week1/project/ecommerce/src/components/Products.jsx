import PropTypes from 'prop-types';

const Products = ({productsList}) => {
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
    productsList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Products;