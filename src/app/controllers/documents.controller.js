import { arrayTextToString, removeExtension } from "../services";
import filePathHandling from "../services/filePathHandling";

class DocumentsController {
	#miSecreto = "Me gusta Internet Explorer";
	#age = 19;

	#increaseAge() {
		this.#age++;
	}

	async #readAndDelete() {
		/*
		let ids = [];

		for (let element of data) {
			await sqlService.read(
				`SELECT i.valor, d.IdDocumento, d.NombreDocumento, d.FechaDocumento FROM GestionDocumental.Documento.Documento AS d INNER JOiN GestionDocumental.Documento.IndiceDocumento AS i ON d.IdDocumento = i.IdDocumento WHERE d.ActivoDocumento = 1 and i.valor IN (${names.folders}) and NombreDocumento LIKE '%${element}%' order by i.Valor`
			);
			console.log(sqlService.response.recordset);
		}*/

		return this.#miSecreto;
	}
	async read(req, res) {
		const RUTA_FOLDER =
			"C:\\Users\\Anibal\\Desktop\\SUBIR\\REVISADOS LUIS LEMUS\\One";

		let names = { folders: [], files: [] };

		/**
		 * Obtener nombres de folders
		 */
		filePathHandling.foldersName(RUTA_FOLDER);

		/**
		 * Pasar texto del array  a string
		 */
		names.folders = arrayTextToString(filePathHandling.response);

		/**
		 * Obtener los nombres de las rutas
		 */
		filePathHandling.routesName(RUTA_FOLDER);

		/**
		 * Obtener nombres de archivos
		 */
		filePathHandling.filesName();

		/**
		 * Remover las extensiones de los archivos
		 */
		names.files = removeExtension(filePathHandling.response);
		try {
			this.#increaseAge();
			this.#readAndDelete();
		} catch (error) {
			console.log(error);
		}

		res.status(200).json(names);
	}
}

export default new DocumentsController();
