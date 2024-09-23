export class AgriculturalProcess {
  id: number;
  fieldId: number;
  startDate: string;
  endDate: string;
  isFinished: boolean;

  constructor( agriculturalProcess: {
    id?: number;
    fieldId?: number;
    startDate?: string;
    endDate?: string;
    isFinished?: boolean;
  }) {
    this.id = agriculturalProcess.id || 0;
    this.fieldId = agriculturalProcess.fieldId || 0;
    this.startDate = agriculturalProcess.startDate || '';
    this.endDate = agriculturalProcess.endDate || '';
    this.isFinished = agriculturalProcess.isFinished || false;
  }
}
