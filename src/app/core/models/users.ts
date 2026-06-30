export interface User {
    _id: string;
    name: string;
    nickname: string;
    email: string;
    password?: string; 
    role: string;
    status: boolean;
    avatar: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}

export interface ResponseUsers {
    msg: string;
    data: User[];
}
