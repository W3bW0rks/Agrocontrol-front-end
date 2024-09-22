export class CropTreatment {
  id: number;
  agriculturalProcessId: number;
  date: string;
  productsUsed: { productId: number; quantity: number }[];
  totalWorkersCost: number;
  workers: { workerId: number; cost: number }[];

  constructor(cropTreatment: {
    id?: number;
    agriculturalProcessId?: number;
    date?: string;
    productsUsed?: { productId: number; quantity: number }[];
    totalWorkersCost?: number;
    workers?: { workerId: number; cost: number }[];
  }) {
    this.id = cropTreatment.id || 0;
    this.agriculturalProcessId = cropTreatment.agriculturalProcessId || 0;
    this.date = cropTreatment.date || '';
    this.productsUsed = cropTreatment.productsUsed || [];
    this.totalWorkersCost = cropTreatment.totalWorkersCost || 0;
    this.workers = cropTreatment.workers || [];
  }
}
