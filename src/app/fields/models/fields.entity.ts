export class Fields {
  id:number;
  userId:number;
  fieldName:string;
  fieldSize:number;
  fieldLocation:string;

  constructor(fields:{
    id?:number;
    userId?:number;
    fieldName?:string;
    fieldSize?:number;
    fieldLocation?:string;
  }) {
    this.id=fields.id || 0;
    this.userId = fields.userId || 0;
    this.fieldName= fields.fieldName || '';
    this.fieldSize=fields.fieldSize || 0;
    this.fieldLocation=fields.fieldLocation || '';

  }
}
