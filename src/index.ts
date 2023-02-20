import { AppDataSource } from "./data-source"
import { User } from "./entity/User_Ent"
import { ProfileEntity } from './entity/Profile'

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25

    const profile = new ProfileEntity()
    profile.gender = "FEMALE"
    profile.photo = "my-photo.png"
    profile.User = user

    user.Profile = profile

    //const userRepository = connect.getRepository(User)
    const userRepo = AppDataSource.getRepository(User)
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)


}).catch(error => console.log(error))
