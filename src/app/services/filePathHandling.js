import fs from "fs";

class FilePathHandling {
	constructor() {
		this._response;
	}

	get response() {
		return this._response;
	}

	foldersName(path) {
		/**
		 * Obtener nombres de folders
		 */
		this._response = fs.readdirSync(path);
	}
	routesName(path) {
		const arr = this.response;

		this._response = [];
		arr.forEach((element) => {
			this._response.push(`${path}\\${element}`);
		});
	}

	filesName() {
		const arr = this.response;

		let filesName = "";

		this._response = [];
		arr.forEach((element) => {
			filesName = fs.readdirSync(element);
			this._response.push(...filesName);
		});
	}
}

export default new FilePathHandling();
