import axios from "axios";

const fishApi = axios.create({
	baseURL: `${process.env.REACT_APP_API_URL}/fish`,
});

export async function getFishes() {
	try {
		const dives = await fishApi.get("/list");

		return dives.data ?? [];
	} catch (e) {
		throw e.response;
	}
}
