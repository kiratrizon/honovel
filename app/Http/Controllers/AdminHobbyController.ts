import Controller from "App/Http/Controllers/Controller.ts";

class AdminHobbyController extends Controller {
    // GET /resource
    public index: HttpDispatch = async ({ request }) => {
        // List all resources
        return response().json({
            message:"index"
        })
    };

    // GET /resource/{AdminHobby}
    public show: HttpDispatch = async ({ request }, {AdminHobby}) => {
        // Show a single resource by ID
        return response().json({
            message:`show ${AdminHobby}`
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

    // GET /resource/{AdminHobby}/edit
    public edit: HttpDispatch = async ({ request }, {AdminHobby}) => {
        // Return form or data for editing resource
        return response().json({
            message:`edit ${AdminHobby}`
        })
    };

    // PUT or PATCH /resource/{AdminHobby}
    public update: HttpDispatch = async ({ request }, {AdminHobby}) => {
        // Update a resource by ID
        return response().json({
            message:`update ${AdminHobby}`
        })
    };

    // DELETE /resource/{AdminHobby}
    public destroy: HttpDispatch = async ({ request }, {AdminHobby}) => {
        // Delete a resource by ID
        return response().json({
            message:`delete ${AdminHobby}`
        })
    };
}

export default AdminHobbyController;
