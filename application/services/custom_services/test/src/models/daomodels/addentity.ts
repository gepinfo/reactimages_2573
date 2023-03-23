
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const addentitySchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   name: String
})

const addentityModel = mongoose.model('addentity', addentitySchema, 'addentity');
export default addentityModel;
