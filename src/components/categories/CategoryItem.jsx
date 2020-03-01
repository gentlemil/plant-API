import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.css';
class CategoryItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            className: 'category-item'
        }
    };
    render() {
        const category = this.props.category;
        let zmienna = 'category-item';


        const onClick = () => {
            let state = 'category-item ' + (this.state.className === 'category-item active' ? '' : 'active');
            this.setState({ className: state })
        };

        return (
            <div className={this.state.className} onClick={onClick}>
                {category}
            </div>
        )
    };
}
CategoryItem.propTypes = {
    category: PropTypes.string.isRequired,
};
export default CategoryItem;