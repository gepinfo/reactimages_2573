import * as mongoose from 'mongoose';
import addentityModel from '../models/daomodels/addentity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class addentityDao {
    private addentity = addentityModel;
    constructor() { }
    
    public async GpCreate(addentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addentityDao.ts: GpCreate');

    let temp = new addentityModel(addentityData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from addentityDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(addentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.addentity.aggregate(([
                        { $match: { $and: [{ created_by: addentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from addentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}