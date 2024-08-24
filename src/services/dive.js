import axios from "axios";

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

export async function getDives() {
	try {
		const dives = await api.get("/dive/list");

		return dives.data ?? [];
	} catch (e) {
		throw e.response;
	}
}
