import React from "react";

import logo from "../../../assets/noData.svg";

export default function Empty() {
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<div className="w-28">
				<img className="object-contain, h-full" src={logo} />
			</div>
			<div className="text-sm opacity-45">No data</div>
		</div>
	);
}
