import { Router } from "express";
import UsersController from "./controllers/usersController";
import ClientsController from "./controllers/clientController";
import SpacesController from "./controllers/spacesController";
import LeasesController from "./controllers/leasesController";

const routes = new Router();

routes.get("/", (req, res) => res.status(201).json({ message: "Running well" }));

routes.get("/users", UsersController.index);
routes.post("/users", UsersController.create);
routes.get("/users/:id/", UsersController.read);
routes.put("/users/:id/", UsersController.update);
routes.delete("/users/:id/", UsersController.delete);

routes.get("/clients", ClientsController.index);
routes.post("/clients", ClientsController.create);
routes.get("/clients/:id/", ClientsController.read);
routes.put("/clients/:id/", ClientsController.update);
routes.delete("/clients/:id/", ClientsController.delete);

routes.get("/spaces", SpacesController.index);
routes.post("/spaces", SpacesController.create);
routes.get("/spaces/:id/", SpacesController.read);
routes.put("/spaces/:id/", SpacesController.update);
routes.delete("/spaces/:id/", SpacesController.delete);

routes.get("/leases", LeasesController.index);
routes.post("/leases", LeasesController.create);
routes.get("/leases/:id/", LeasesController.read);
routes.put("/leases/:id/", LeasesController.update);
routes.delete("/leases/:id/", LeasesController.delete);

export default routes;