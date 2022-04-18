import mongoose from "mongoose";
import productos from "./productos";

mongoose.connect("mongodb+srv://mongouser:<code64>@cluster0.fmm23.mongodb.net/bootcampdb?retryWrites=true&w=majority", () => {
  console.log("Conectado a mongodb");
});

export { productos };