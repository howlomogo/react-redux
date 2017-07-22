import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProductList extends Component {

	createProductList() {
		return this.props.products.map((product) => {
			return (
				<li key={product.id}>
					{product.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul>
				{this.createProductList()}
			</ul>
		);
	}
}

function mapStateToProps (state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(ProductList);