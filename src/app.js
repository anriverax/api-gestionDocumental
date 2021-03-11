import express from "express";
import documentsRoutes from "./routes/documents.routes";

const app = express();

app.use(express.json({ extended: true }));
app.use("/api/v1/", documentsRoutes);
export default app;
