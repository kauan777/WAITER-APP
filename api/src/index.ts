import express from "express";
import path from "node:path";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
	.connect("mongodb://localhost:27017")
	.then(() => {
		const app = express();

		app.use(express.json());
		app.use(router);

		app.use(
			"/uploads",
			express.static(path.resolve(__dirname, "..", "uploads"))
		);

		app.listen(3001, () => {
			console.log("💫 ​Server is running on http://localhost:3001");
		});
	})
	.catch(() => console.log("Erro ao conectar ao mongodb"));