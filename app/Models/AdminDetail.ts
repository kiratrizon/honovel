import { Model } from "Illuminate/Database/Eloquent/index.ts";

export type AdminDetailSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class AdminDetail extends Model<AdminDetailSchema> {
  protected static override _fillable = ["name", "admin_id"];
}

export default AdminDetail;
