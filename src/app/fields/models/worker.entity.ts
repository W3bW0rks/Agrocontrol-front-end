export class Worker {
  id: number;
  fieldId: number;
  fullName: string;
  phone: string;
  documentNumber: string;

  constructor(worker: {id?: number, fieldId?: number, fullName?: string, phone?: string, documentNumber?: string}) {
    this.id = worker.id || 0;
    this.fieldId = worker.fieldId || 0;
    this.fullName = worker.fullName || '';
    this.phone = worker.phone || '';
    this.documentNumber = worker.documentNumber || '';
  }

}
