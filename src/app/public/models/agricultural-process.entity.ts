export class AgriculturalProcess {
  id: number;
  fieldId: number;
  startDate: Date;
  endDate: Date;
  isFinished: boolean;

  constructor(agriculturalProcess: {id?: number, fieldId?: number, startDate?: Date, endDate?: Date, isFinished?: boolean}) {
    this.id = agriculturalProcess.id || 0;
    this.fieldId = agriculturalProcess.fieldId || 0;
    this.startDate = agriculturalProcess.startDate || new Date();
    this.endDate = agriculturalProcess.endDate || new Date();
    this.isFinished = agriculturalProcess.isFinished || false;
  }
}
