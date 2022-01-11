import { Card, Button } from "react-bootstrap";
import LikeButton from "./LikeButton/LikeButton";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = (props) => {
	console.log(props.id);
	return (
		<div className="col-12 col-md-6 col-lg-4">
			<Card style={{ margin: "12px 0px 0px 0px", padding: "0px" }}>
				<Card.Img
					style={{ objectFit: "contain" }}
					variant="top"
					src={props.imgUrl}
					width="360px"
					height="200px"
				/>
				<Card.Body>
					<LikeButton key={props.id} isActive={props.likeBtn} />
					<Card.Title>{props.price}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{props.title}
					</Card.Subtitle>
					<Button variant="primary">Interested</Button>
				</Card.Body>
				<Card.Body>
					<Card.Link href="#">Report</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">1 Month Ago</small>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default ProductCard;
