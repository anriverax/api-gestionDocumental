import Configuration from "./config";
const read = async (query) => {
	try {
		let result;
		await sql.connect(this.config);
		result = await sql.request().query(query);
		console.log(result);
	} catch (error) {
		console.log(error);
	}
	return "hola";
};

const create = () => {
	console.log(159);
};

const SQL = {
	config: Configuration,
	read: async (query) => {
		try {
			let result;
			await sql.connect(this.config);
			result = await sql.request().query(query);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
		return "hola";
	},
	create,
};

export default SQL;
