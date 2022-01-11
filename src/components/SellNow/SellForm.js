import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "../FormUI/Textfield";
import Select from "../FormUI/Select";
import countries from "../../data/countries.json";
import "./SellForm.css";
import ImagesUpload from "../ImageUp/ImgUp";
import Button from "../FormUI/Button";
import "react-toastify/dist/ReactToastify.css";

// let useClickOutside = (handler) => {
// 	let domNode = useRef();

// 	useEffect(() => {
// 		let maybeHandler = (event) => {
// 			if (!domNode.current.contains(event.target)) {
// 				handler();
// 			}
// 		};

// 		document.addEventListener("mousedown", maybeHandler);

// 		return () => {
// 			document.removeEventListener("mousedown", maybeHandler);
// 		};
// 	});

// 	return domNode;
// };

const useStyles = makeStyles((theme) => ({
	formWrapper: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(8),
	},
}));

const INITIAL_FORM_STATE = {};
const FORM_VALIDATION = Yup.object().shape({
	adTitle: Yup.string().required("Required"),
	description: Yup.string().required("Required"),
	categories: Yup.string().required("Required"),
});

const SellForm = (props) => {
	const classes = useStyles();

	// let domNode = useClickOutside(() => {
	// 	props.setTrigger(true);
	// });

	return props.trigger ? (
		<div className="sell-form">
			<div className="sell-form-inner" /*ref={domNode}*/>
				<button
					className="close-btn"
					onClick={() => props.setTrigger(false)}
				>
					close
				</button>
				<Grid container>
					<Grid item xs={12}>
						<Container maxWidth="md">
							<Typography
								variant="h4"
								gutterBottom
								component="div"
							>
								Sell Now
							</Typography>
							<div className={classes.formWrapper}>
								<Formik
									initialValues={{
										...INITIAL_FORM_STATE,
									}}
									validationSchema={FORM_VALIDATION}
									onSubmit={(values) => {
										console.log(values);
										props.alertSent();
										props.setTrigger(false);
									}}
								>
									<Form>
										<Grid container>
											<Grid item xs={12}>
												<Typography>Title</Typography>
											</Grid>

											<Grid item xs={12}>
												<Textfield
													name="adTitle"
													size="small"
													helperText="Mention the key features of your item (e.g. brand, model, age, type)"
												/>
											</Grid>

											<Grid item xs={12}>
												<Typography>
													Description
												</Typography>
											</Grid>

											<Grid item xs={12}>
												<Textfield
													name="description"
													helperText="Include condition, features and reason for selling"
													multiline={true}
													rows={4}
												/>
											</Grid>

											<Grid item xs={12}>
												<Typography>
													Select a category
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<Select
													name="categories"
													options={countries}
													size="small"
												/>
											</Grid>

											<Grid item xs={12}>
												<Typography>
													Upload Image (less than 5mb,
													accepted: .jpg, .png)
												</Typography>
											</Grid>

											<Grid container>
												<Grid>
													<ImagesUpload />
												</Grid>
												<Grid>
													<ImagesUpload />
												</Grid>
												<Grid>
													<ImagesUpload />
												</Grid>
												<Grid>
													<ImagesUpload />
												</Grid>
											</Grid>

											<Grid item xs={12}>
												<Button>Submit Form</Button>
											</Grid>
										</Grid>
									</Form>
								</Formik>
							</div>
						</Container>
					</Grid>
				</Grid>
			</div>
		</div>
	) : (
		""
	);
};

export default SellForm;
