import Seeder from "Illuminate/Database/Seeder.ts";
import User from "App/Models/User.ts";
import AdminDetail from "App/Models/AdminDetail.ts";
import AdminHobby from "App/Models/AdminHobby.ts";

export default class DatabaseSeeder extends Seeder {
  public async run() {
    const userFactory = await User.factory();
    userFactory.count(10);
    await userFactory.create();

    for (let i = 0; i < 10; i++) {
      await AdminDetail.create({
        admin_id: `admin_${i}`,
        name: `Admin ${i}`,
      });
    }

    const adminHobbyFactory = await AdminHobby.factory();
    adminHobbyFactory.count(1000);
    await adminHobbyFactory.create();
  }
}
