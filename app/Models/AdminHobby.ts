import { Model } from "Illuminate/Database/Eloquent/index.ts";
import { HasFactory } from "Illuminate/Database/Eloquent/Factories/index.ts";

export type AdminHobbySchema = {
  id?: number;
  admin_detail_id: number;
  hobby_name: string;
};

class AdminHobby extends Model<AdminHobbySchema> {
  protected static override _fillable = ["admin_detail_id", "hobby_name"];

  protected static override use = {
    HasFactory,
  };
}

export default AdminHobby;
