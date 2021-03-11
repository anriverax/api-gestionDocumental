import sqlService from "../services/sql.service";
class DocumentsController {
	async read(req, res) {
		const result = await sqlService.read("select TOP(5) * from GestionDocumental.Documento.IndiceDocumento");
		res.status(200).json(result);
	}
}

export default new DocumentsController();
