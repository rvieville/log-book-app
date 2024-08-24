import axios from "axios";

const diveApi = axios.create({
	baseURL: `${process.env.REACT_APP_API_URL}/dive`,
});

export async function getDives() {
	try {
		const dives = await diveApi.get("/list");

		return dives.data ?? [];
	} catch (e) {
		throw e.response;
	}
}
