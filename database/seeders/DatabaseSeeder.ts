import Seeder from "Illuminate/Database/Seeder.ts";
import User from "App/Models/User.ts";
import { DB } from "Illuminate/Support/Facades/index.ts";

export default class DatabaseSeeder extends Seeder {
  public async run() {
    // const userFactory = await User.factory();
    // userFactory.count(10);
    // await userFactory.create();

    await DB.transaction(async (db) => {
      await db.insert("users", {
        email: "test@gmail.com",
      });
    });
  }
}
