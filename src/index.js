import app from "./app";
const port = process.env.PORT || 4010;
app.listen(port, "0.0.0.0", () => {
	console.log(`El servidor esta funcionando en el puerto: ${port}`);
});

