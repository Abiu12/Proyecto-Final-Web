import session from "express-session";

import UsuarioType from "../types/usuario.type";

declare module "express-session" {
	interface SessionData {
		user: UsuarioType;
	}
}

export default session({
	name: "session-cookie",
	secret: "secreto123",
	resave: false,
	saveUninitialized: false,
	cookie: { secure: false, httpOnly: true, signed: true, maxAge: 1 * (60 * 1000) },
});
