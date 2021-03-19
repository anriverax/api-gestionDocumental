import { arrayTextToString, removeExtension } from "../services";
import DocumentsServices from "../services/documents.service";
import filePathHandling from "../services/filePathHandling";
class DocumentsController {
	async read(req, res) {
		const RUTA_FOLDER = req.body.dir;
		//	"C:\\Users\\Anibal\\Desktop\\SUBIR\\REVISADOS LUIS LEMUS\\One";
		const documentsServices = new DocumentsServices();

		let names = { folders: [], files: [] };
		let response;
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

		response = await documentsServices.getRecords(names);

		response.length && (await documentsServices.recordDelete(response));

		res.status(200).json(response);
	}
}

export default new DocumentsController();
