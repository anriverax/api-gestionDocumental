import sql from "mssql";
class CrudSql {
	constructor(config) {
		this.config = config;
		this._response = "";
	}

	get response() {
		return this._response;
	}
	async read(query) {
		console.log(query);
		try {
			await sql.connect(this.config);
			this._response = await sql.query(query.toString());
		} catch (error) {
			this._response = error;
		}
	}
}
export default CrudSql;
