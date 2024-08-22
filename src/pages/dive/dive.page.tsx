import React, { useState } from "react";

import { Button, Empty, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";

import ListDive from "../../components/dive/listDive.component";

import { getDives } from "../../services/dive.service";

import "./dive.page.scss";

export default function DivePage() {
	const { isPending, error, data } = useQuery({
		queryKey: ["getDive"],
		queryFn: getDives,
	});

	return (
		<div className="dive">
			<div className="dive_header">
				<div className="dive_title">My Dives</div>
				<Button size="middle" type="primary" icon={<PlusOutlined />}>
					Add dive
				</Button>
			</div>
			<ListDive />
		</div>
	);
}
