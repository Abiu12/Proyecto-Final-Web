import express, { Application } from "express";
import morgan from "morgan";
import path from "path"
import dotenv from "dotenv";
dotenv.config();

import expressSession from "./middlewares/express-session.middleware";

import empleadoRouter from "./routes/empleado.route";
import usuarioRouter from "./routes/usuario.route";
import clientesRouter from "./routes/clientes.route";
import electrodomesticosRouter from "./routes/electrodomesticos.route";
import pendientesRouter from "./routes/pendientes.route";
import ordenRouter from "./routes/orden.trabajo.route";
import seguimiento from "./routes/seguimiento.route";
import loggin from "./routes/loggin.route";
const app: Application = express();


//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, './views'));



//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(expressSession);

//routes

app.use("/empleados",empleadoRouter);
app.use("/usuarios",usuarioRouter);
app.use("/clientes",clientesRouter);
app.use("/electrodomesticos",electrodomesticosRouter);
app.use("/orden",ordenRouter);
app.use("/pendientes",pendientesRouter);
app.use("/seguimiento",seguimiento);
app.use("/loggin",loggin);


export default app;
