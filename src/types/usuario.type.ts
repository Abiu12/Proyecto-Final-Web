export default interface UsuarioType {
    idUsuario?: number;
    idEmpleado?:number;
    correo?: string;
    contrasenia: string;
    estatus?: string;
    rol?: string;
    token_restauracion?: string;
}