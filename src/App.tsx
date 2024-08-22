import React from "react";
import "./App.css";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DivePage from "./pages/dive/dive.page";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DivePage />,
	},
]);

const queryClient = new QueryClient();

function App() {
	return (
		<div id="App">
			<QueryClientProvider client={queryClient}>
				<Layout className="layout">
					<Header className="header">Header</Header>
					<Layout>
						<Sider theme="light" className="sider">
							<div>coucou</div>
						</Sider>
						<Content className="content">
							<RouterProvider router={router} />
						</Content>
					</Layout>
				</Layout>
			</QueryClientProvider>
		</div>
	);
}

export default App;
