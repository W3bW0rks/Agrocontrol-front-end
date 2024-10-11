import { Component, inject, OnInit } from '@angular/core';
import { Finance } from "../../models/finance.entity";
import { RouterLink} from "@angular/router";
import {FinanceService} from "../../services/finance.service";


@Component({
  selector: 'app-finance-view',
  standalone: true,
  imports: [
    RouterLink,

  ],
  templateUrl: './finance-view.component.html',
  styleUrl: './finance-view.component.css'
})
export class FinanceViewComponent implements OnInit {
  private financeService : FinanceService = inject(FinanceService);
  protected dataSource!: Array<Finance>;

  ngOnInit() {
    this.getFinances();
  }

  getFinances(): void {
    this.financeService.getAll().subscribe((response: Array<Finance>) => this.dataSource = response);
  }

}
