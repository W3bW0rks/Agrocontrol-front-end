export class Process {
  "id": number;
  "type": string;
  "scheduledDate": string;
  "fieldId": number;
  "totalWorkerCost": number;
  "hours": number;
  "workers": [];
  "productsUsed": [];
  "harvestedQuantityKg": number;
  "pricePerKg": number;
  "plantedQuantityKg": number;
  "totalPlantCost": number;
  "details": string;

  constructor(process: {
    id?: number;
    type: string;
    scheduledDate: string;
    fieldId: number;
    totalWorkerCost?: number;
    hours?: number;
    workers?: [];
    productsUsed?: [];
    harvestedQuantityKg?: number;
    pricePerKg?: number;
    plantedQuantityKg?: number;
    totalPlantCost?: number;
    details: string;
  }) {
    this.id = process.id || 0;
    this.type = process.type;
    this.scheduledDate = process.scheduledDate;
    this.fieldId = process.fieldId;
    this.totalWorkerCost = process.totalWorkerCost || 0;
    this.hours = process.hours || 0;
    this.workers = process.workers || [];
    this.productsUsed = process.productsUsed || [];
    this.harvestedQuantityKg = process.harvestedQuantityKg || 0;
    this.pricePerKg = process.pricePerKg || 0;
    this.plantedQuantityKg = process.plantedQuantityKg || 0;
    this.totalPlantCost = process.totalPlantCost || 0;
    this.details = process.details;
  }
}
