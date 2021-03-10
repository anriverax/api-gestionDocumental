import app from "./app";
import read from "./core/config/sql/connect";
const port = process.env.PORT || 4000;

const x = await SQL.read("select TOP(5) from GestionDocumental.Documento.IndiceDocumento");
console.log(x);

app.listen(port, "0.0.0.0", () => {
	console.log("El servidor esta funcionando en el puerto: ${port}");
});
