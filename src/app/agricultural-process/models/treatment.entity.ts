export class Treatment {
  id: number;
  agriculturalProcessId: number;
  treatmentType: string;
  date: string;
  productsUsed: { productId: number; quantity: number }[];
  totalWorkersCost: number;
  workers: { workerId: number; cost: number }[];

  constructor(treatment: {
    id?: number;
    agriculturalProcessId?: number;
    treatmentType?: string;
    date?: string;
    productsUsed?: { productId: number; quantity: number }[];
    totalWorkersCost?: number;
    workers?: { workerId: number; cost: number }[];
  }) {
    this.id = treatment.id || 0;
    this.agriculturalProcessId = treatment.agriculturalProcessId || 0;
    this.treatmentType = treatment.treatmentType || '';
    this.date = treatment.date || '';
    this.productsUsed = treatment.productsUsed || [];
    this.totalWorkersCost = treatment.totalWorkersCost || 0;
    this.workers = treatment.workers || [];
  }
}
