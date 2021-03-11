import sql from "mssql";
class CrudSql {
	constructor(config) {
		this.config = config;
	}

	async read(query) {
		let result;
		try {
			await sql.connect(this.config);
			result = await sql.query(query);
			console.log("----- success -----");
			console.log(result);
		} catch (error) {
			console.log("----- error -----");
			console.log(error);
			result = error;
		}
		return result;
	}

	create() {
		console.log("HOLA");
	}
}
export default CrudSql;
