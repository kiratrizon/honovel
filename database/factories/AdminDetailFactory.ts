import { Factory } from "Illuminate/Database/Eloquent/Factories/index.ts";
import AdminDetail from "App/Models/AdminDetail.ts";

export default class AdminDetailFactory extends Factory {

  protected override _model = AdminDetail;

  public definition() {
    return {
      email: this.faker.email(),
      password: this.faker.password(12),
      name: this.faker.name()
    };
  }
}
