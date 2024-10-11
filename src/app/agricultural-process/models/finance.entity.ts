export class Finance {
  id?: number;
  agriculturalProcessId?: number;
  date?: string;
  totalCost?: number;
  totalRevenue?: number;
  totalProfit?: number;

  constructor(finance: {
    id?: number;
    agriculturalProcessId?: number;
    date?: string;
    totalCost?: number;
    totalRevenue?: number;
  } = {}) {
    this.id = finance.id;
    this.date = finance.date;
    this.agriculturalProcessId = finance.agriculturalProcessId;
    this.totalCost = finance.totalCost;
    this.totalRevenue = finance.totalRevenue;
    this.totalProfit = this.totalRevenue && this.totalCost ? this.totalRevenue - this.totalCost : undefined;
  }
}
