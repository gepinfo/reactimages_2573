import { Request, Response } from 'express';
import { addentityService } from '../service/addentityService';
import { CustomLogger } from '../config/Logger'
let addentity = new addentityService();

export class addentityController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addentityController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addentity.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addentityController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addentityController.ts: GpGetNounCreatedBy');
    })}


}