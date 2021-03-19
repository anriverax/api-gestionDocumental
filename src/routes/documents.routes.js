import express from "express";
import DocumentsController from "../app/controllers/documents.controller";

const router = express.Router();

router.post("/read", DocumentsController.read);

export default router;
