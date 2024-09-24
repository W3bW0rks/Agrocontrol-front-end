export class Worker {
  id: number;
  userId: number;
  fullName: string;
  phone: string;
  documentNumber: string;

  constructor(worker: {
    id?: number;
    userId?: number;
    fullName?: string;
    phone?: string;
    documentNumber?: string;
  }) {
    this.id = worker.id || 0;
    this.userId = worker.userId || 0;
    this.fullName = worker.fullName || '';
    this.phone = worker.phone || '';
    this.documentNumber = worker.documentNumber || '';
  }
}
