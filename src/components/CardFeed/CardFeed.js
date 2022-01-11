import ProductCard from "../ProductCard/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardFeed.css";

const CardFeed = (props) => {
	// if (props.products.length === 0) {
	// 	return <h2>No Ads Found.</h2>;
	// }
	return (
		<div className="container">
			<div className="row">
				{props.products.map((product) => (
					<ProductCard
						id={product.id}
						key={product.id}
						title={product.title}
						price={product.price}
						imgUrl={product.imgUri}
						likeBtn={product.isLiked}
					/>
				))}
			</div>
		</div>
	);
};

export default CardFeed;
