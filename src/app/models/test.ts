export interface Productos{
    name: string,
    description: string, 
    price: number,
    img: string, 
}
export type Roles={
    rol: "Admin"| "Vendedor" | "Cliente"
}
export interface Usuario{
    id: number,
    img: string,
    price: string,
    name: string,
    description: string,
    rol: Roles
}