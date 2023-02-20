import "reflect-metadata"
import { DataSource } from "typeorm"
import {User, ProfileEntity } from "./entity/app"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ELYDEV",
    database: "typeorm_db",
    synchronize: true,
    logging: true,
    entities: [User, ProfileEntity],
    migrations: [],
    subscribers: [],
})
