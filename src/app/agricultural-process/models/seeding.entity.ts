export class Seeding {
  id: number;
  agriculturalProcessId: number;
  plantType: string;
  date: string;
  plantedQuantity: number;
  totalPlantCost: number;
  totalWorkersCost: number;
  workers: { workerId: number; cost: number }[];

  constructor(seeding: {
    id?: number;
    agriculturalProcessId?: number;
    plantType?: string;
    date?: string;
    plantedQuantity?: number;
    totalPlantCost?: number;
    totalWorkersCost?: number;
    workers?: { workerId: number; cost: number }[];
  }) {
    this.id = seeding.id || 0;
    this.agriculturalProcessId = seeding.agriculturalProcessId || 0;
    this.plantType = seeding.plantType || '';
    this.date = seeding.date || '';
    this.plantedQuantity = seeding.plantedQuantity || 0;
    this.totalPlantCost = seeding.totalPlantCost || 0;
    this.totalWorkersCost = seeding.totalWorkersCost || 0;
    this.workers = seeding.workers || [];
  }
}
