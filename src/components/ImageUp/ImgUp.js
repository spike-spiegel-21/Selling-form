import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const App = (props) => {
	const [pictures, setPictures] = useState([]);
	console.log(pictures);
	const onDrop = (picture) => {
		setPictures([...pictures, picture]);
	};

	return (
		<ImageUploader
			{...props}
			withIcon={false}
			onChange={onDrop}
			imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
			maxFileSize={5242880}
			withPreview={true}
			label=""
			singleImage={true}
			fileContainerStyle={{ uploadIcon: { display: "none" } }}
		/>
	);
};

export default App;
