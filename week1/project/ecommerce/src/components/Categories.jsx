import PropTypes from 'prop-types';

const Categories = ({categoriesList, handleClick}) =>{

  

    return (
        <div className='navbar' >        
            {categoriesList.map((category, index) => (
                <div key={index} className='navbar-btn' onClick={()=> handleClick(category)}>{category}</div>
            ))}            
        </div>
    )
}

Categories.propTypes = {
    categoriesList: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Categories;