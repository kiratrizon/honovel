import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create("admin_hobbies", (table: Blueprint) => {
      table.id();
      table.integer("admin_detail_id").unsigned(); // foreign key
      table.string("hobby_name");
      table.timestamps();
    });
  }

  public async down() {
    await Schema.dropIfExists("admin_hobbies");
  }
})();
