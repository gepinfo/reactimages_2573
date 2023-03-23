import { Request, Response, NextFunction } from "express";
import { addentityController } from '../controller/addentityController';


export class Routes {
    private addentity: addentityController = new addentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/addentity').post(this.addentity.GpCreate);
app.route('/addentity/userid/created_by').get(this.addentity.GpGetNounCreatedBy);
     }

}