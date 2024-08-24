import React from "react";

import "./layout.scss";

export default function Layout({ children, layout = "column" }) {
	return (
		<>
			<section
				className="layout"
				style={{
					display: "flex",
					flexDirection: layout,
					height: "100%",
					overflow: "hidden",
				}}
			>
				{children}
			</section>
		</>
	);
}

export function Header({ children }) {
	return (
		<>
			<header className="header">{children}</header>
		</>
	);
}

export function Sider({ children }) {
	return (
		<>
			<aside className="sider">{children}</aside>
		</>
	);
}

export function Content({ children }) {
	return (
		<>
			<main className="content">{children}</main>
		</>
	);
}
