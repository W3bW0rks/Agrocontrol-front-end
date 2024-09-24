export class Harvest {
  id: number;
  agriculturalProcessId: number;
  date: string;
  harvestedQuantityInKg: number;
  pricePerKg: number;
  totalIncome: number;
  totalWorkersCost: number;
  workers: { workerId: number; cost: number }[];

  constructor(harvest: {
    id?: number;
    agriculturalProcessId?: number;
    date?: string;
    harvestedQuantityInKg?: number;
    pricePerKg?: number;
    totalIncome?: number;
    totalWorkersCost?: number;
    workers?: { workerId: number; cost: number }[];
  }) {
    this.id = harvest.id || 0;
    this.agriculturalProcessId = harvest.agriculturalProcessId || 0;
    this.date = harvest.date || '';
    this.harvestedQuantityInKg = harvest.harvestedQuantityInKg || 0;
    this.pricePerKg = harvest.pricePerKg || 0;
    this.totalIncome = harvest.totalIncome || 0;
    this.totalWorkersCost = harvest.totalWorkersCost || 0;
    this.workers = harvest.workers || [];
  }

}
