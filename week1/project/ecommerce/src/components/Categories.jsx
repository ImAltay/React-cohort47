import PropTypes from 'prop-types';

const Categories = ({categoriesList}) =>{
    
    return (
        <div className='navbar' >        
            {categoriesList.map((category, index) => (
                <div key={index} className='navbar-btn' >{category}</div>
            ))}            
        </div>
    )
}

Categories.propTypes = {
    categoriesList: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Categories;