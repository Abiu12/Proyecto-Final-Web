"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_session_middleware_1 = require("./middlewares/express-session.middleware");
const index_route_1 = __importDefault(require("./routes/index.route"));
const empleado_route_1 = __importDefault(require("./routes/empleado.route"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const clientes_route_1 = __importDefault(require("./routes/clientes.route"));
const electrodomesticos_route_1 = __importDefault(require("./routes/electrodomesticos.route"));
const pendientes_route_1 = __importDefault(require("./routes/pendientes.route"));
const orden_trabajo_route_1 = __importDefault(require("./routes/orden.trabajo.route"));
const seguimiento_route_1 = __importDefault(require("./routes/seguimiento.route"));
const loggin_route_1 = __importDefault(require("./routes/loggin.route"));
const app = (0, express_1.default)();
//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.set('views', path_1.default.join(__dirname, './views'));
//middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "./public")));
app.use(express_session_middleware_1.sessionConfig);
app.use(express_session_middleware_1.sessionMiddleware);
//routes
app.use("/api/v1/loggin", loggin_route_1.default);
app.use("/", index_route_1.default);
app.use("/empleados", empleado_route_1.default);
app.use("/usuarios", usuario_route_1.default);
app.use("/clientes", clientes_route_1.default);
app.use("/electrodomesticos", electrodomesticos_route_1.default);
app.use("/orden", orden_trabajo_route_1.default);
app.use("/pendientes", pendientes_route_1.default);
app.use("/seguimiento", seguimiento_route_1.default);
exports.default = app;
