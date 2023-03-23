import { Request, Response } from 'express';
import {addentityDao} from '../dao/addentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let addentity = new addentityDao();

export class addentityService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addentityService.ts: GpCreate')
     let  addentityData = req.body;
     addentity.GpCreate(addentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addentityService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addentityService.ts: GpGetNounCreatedBy')
     let  addentityData = { created_by: req.query.createdby };
     addentity.GpGetNounCreatedBy(addentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addentityService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}