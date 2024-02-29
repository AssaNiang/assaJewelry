export interface UserRegister{
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    phone:string;
}
export interface UserLogin{
    email:string;
    password:string; 
}