import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create("admin_details", (table: Blueprint) => {
      table.id();
      table.string("admin_id").unique();
      table.string("name");
      table.timestamps();
    });
  }

  public async down() {
    await Schema.dropIfExists("admin_details");
  }
})();
