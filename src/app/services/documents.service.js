import sqlService from "./sql.service";
class DocumentsServices {
	async getRecords(names) {
		let ids = [];
		let i = 0;
		for (let element of names.files) {
			await sqlService.read(
				`SELECT i.valor, d.IdDocumento, d.NombreDocumento, d.FechaDocumento FROM GestionDocumental.Documento.Documento AS d INNER JOiN GestionDocumental.Documento.IndiceDocumento AS i ON d.IdDocumento = i.IdDocumento WHERE d.ActivoDocumento = 1 and i.valor IN (${names.folders}) and NombreDocumento LIKE '%${element}%' order by i.Valor`
			);

			if (sqlService.response.recordset.length) {
				sqlService.response.recordset.forEach((element) => {
					ids.push(element.IdDocumento);
				});
			}
			i++;
			console.log("----- #0 -----");
			console.log(i);
		}
		console.log("----- #1 -----");
		console.log(ids);
		return ids;
	}

	async recordDelete(ids) {
		console.log("----- #2 -----");
		console.log(ids);
		await sqlService.read(
			`delete from GestionDocumental.Documento.IndiceDocumento where IdDocumento IN (${ids})`
		);
		console.log("----- #3 -----");
		console.log(ids);
		await sqlService.read(
			`delete from GestionDocumental.Documento.Documento where IdDocumento IN (${ids})`
		);
	}
}

export default DocumentsServices;
