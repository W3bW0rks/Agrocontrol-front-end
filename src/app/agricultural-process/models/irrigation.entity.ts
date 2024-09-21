export class Irrigation {
  id: number;
  agriculturalProcessId: number;
  date: string;
  hoursIrrigated: number;
  totalWorkersCost: number;
  workers: { workerId: number; cost: number }[];

  constructor(irrigation: {
    id?: number;
    agriculturalProcessId: number;
    date: string;
    hoursIrrigated?: number;
    totalWorkersCost?: number;
    workers?: { workerId: number; cost: number }[];
  }) {
    this.id = irrigation.id || 0;
    this.agriculturalProcessId = irrigation.agriculturalProcessId;
    this.date = irrigation.date;
    this.hoursIrrigated = irrigation.hoursIrrigated || 0;
    this.totalWorkersCost = irrigation.totalWorkersCost || 0;
    this.workers = irrigation.workers || [];
  }
}
