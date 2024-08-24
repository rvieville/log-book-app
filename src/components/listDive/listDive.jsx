import React from "react";

import { useQuery } from "@tanstack/react-query";

import Loader from "../../shared/components/loader/loader";
import Empty from "../../shared/components/empty/empty";
import Error from "../../shared/components/error/error";

import { getDives } from "../../services/dive";

import "./listDive.scss";

export default function ListDive() {
	const { isPending, error, data } = useQuery({
		queryKey: ["listDive"],
		queryFn: getDives,
		enable: false,
	});

	if (isPending) return <Loader />;

	if (error) return <Error error={error} />;

	const ListDive = () => {
		return (
			<>
				{data.map((dive) => {
					return <div key={dive.id}>{dive.name}</div>;
				})}
			</>
		);
	};

	return <div className="h-full">{data.length ? <ListDive /> : <Empty />}</div>;
}
