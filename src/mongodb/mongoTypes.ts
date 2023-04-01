import {ObjectId} from "mongodb"

export type User = {
    _id?: ObjectId;
    name?: string | undefined;
    lastname?: string | undefined;
    profileImg?: string | undefined;
    authToken?: string | undefined;
    username: string;
    email: string;
    password: string;
    cubes: ObjectId[];
    verified: boolean;
}

export type Token = {
    _id?: ObjectId,
    userId: ObjectId,
    token: string
}
