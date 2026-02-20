import Controller from "App/Http/Controllers/Controller.ts";

class AdminDetailController extends Controller {
    // GET /resource
    public index: HttpDispatch = async ({ request }) => {
        // List all resources
        return response().json({
            message:"index"
        })
    };

    // GET /resource/{AdminDetail}
    public show: HttpDispatch = async ({ request }, {AdminDetail}) => {
        // Show a single resource by ID
        return response().json({
            message:`show ${AdminDetail}`
        })
    };

    // GET /resource/create
    public create: HttpDispatch = async ({ request }) => {
        // Return form or data for creating resource
        return response().json({
            message:`create`
        })
    };

    // POST /resource
    public store: HttpDispatch = async ({ request }) => {
        // Create a new resource
        return response().json({
            message:`store`
        })
    };

    // GET /resource/{AdminDetail}/edit
    public edit: HttpDispatch = async ({ request }, {AdminDetail}) => {
        // Return form or data for editing resource
        return response().json({
            message:`edit ${AdminDetail}`
        })
    };

    // PUT or PATCH /resource/{AdminDetail}
    public update: HttpDispatch = async ({ request }, {AdminDetail}) => {
        // Update a resource by ID
        return response().json({
            message:`update ${AdminDetail}`
        })
    };

    // DELETE /resource/{AdminDetail}
    public destroy: HttpDispatch = async ({ request }, {AdminDetail}) => {
        // Delete a resource by ID
        return response().json({
            message:`delete ${AdminDetail}`
        })
    };
}

export default AdminDetailController;
