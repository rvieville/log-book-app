import React, { useState } from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
// import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";

export default function Error({ error }) {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(!open);
	};
	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			TransitionComponent={Slide}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
		>
			<Alert severity="error" variant="filled" sx={{ width: "100%" }}>
				<AlertTitle>An error occured</AlertTitle>
				{error.request.responseURL}: {error.status} {error.statusText}
			</Alert>
		</Snackbar>
	);
}
