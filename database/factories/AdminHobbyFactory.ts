import { Factory } from "Illuminate/Database/Eloquent/Factories/index.ts";
import AdminHobby from "App/Models/AdminHobby.ts";

export default class AdminHobbyFactory extends Factory {
  protected override _model = AdminHobby;

  public definition() {
    return {
      admin_detail_id: this.faker.numberBetween(1, 10), // Assuming you have 10 admin details
      hobby_name: this.faker.city(), // You can use any faker method to generate a hobby name
    };
  }
}
