import { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LikeButton.css";

const LikeButton = (props) => {
	const [checked, setChecked] = useState(props.isActive);

	const likeEventHandler = () => {
		setChecked(!checked);
	};
	return (
		<ToggleButton
			className="mb-2 btn-sm like-button"
			id="toggle-check"
			// type="checkbox"
			variant="outline-primary"
			active={checked}
			onClick={likeEventHandler}
		>
			Like 🤍
		</ToggleButton>
	);
};

export default LikeButton;
