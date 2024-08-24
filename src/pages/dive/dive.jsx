import React from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import ListDive from "../../components/listDive/listDive";

import "./dive.scss";

export default function DivePage() {
	return (
		<div className="flex flex-col h-full">
			<div className="flex justify-between mb-4">
				<div className="text-lg font-semibold">My Dives</div>
				<Button size="small" variant="contained" startIcon={<AddIcon />}>
					Add dive
				</Button>
			</div>
			<ListDive />
		</div>
	);
}
