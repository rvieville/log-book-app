import React from "react";
import "./App.scss";
import Layout, { Sider, Header, Content } from "./components/layout/layout";
import DivePage from "./pages/dive/dive";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Layout>
					<Header>
						<div>Header</div>
					</Header>
					<Layout layout="row">
						<Sider>
							<div>sider</div>
						</Sider>
						<Layout>
							<Content>
								<DivePage />
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</QueryClientProvider>
		</div>
	);
}

export default App;
