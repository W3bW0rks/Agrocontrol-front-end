export class Finance {
  id: number;
  date: string;
  totalCost: number;
  totalRevenue: number;
  totalProfit: number;

  constructor(finance:{
    id? : number;
    date? : string;
    totalCost? : number;
    totalRevenue? : number;
    totalProfit? : number;
  }) {
    this.id = finance.id || 0;
    this.date = finance.date || '';
    this.totalCost = finance.totalCost || 0;
    this.totalRevenue = finance.totalRevenue || 0;
    this.totalProfit = finance.totalProfit || 0;
  }

}
