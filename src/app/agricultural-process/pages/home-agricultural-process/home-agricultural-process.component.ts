import { Component, ElementRef, inject, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavAgriculturalProducerComponent } from "../../../shared/components/sidenav-agricultural-producer/sidenav-agricultural-producer.component";
import { NavbarAgriculturalProducerComponent } from "../../../shared/components/navbar-agricultural-producer/navbar-agricultural-producer.component";
import { CardPlantationComponent } from "../../components/card-plantation/card-plantation.component";
import { CardIrrigationDetailsComponent } from "../../components/card-irrigation-details/card-irrigation-details.component";
import { CardTreatmentDetailsComponent } from "../../components/card-treatment-details/card-treatment-details.component";
import { AgriculturalProcessService } from "../../services/agricultural-process.service";
import { CropTreatmentService } from "../../services/crop-treatment.service";
import { IrrigationService } from "../../services/irrigation.service";
import { AgriculturalProcess } from "../../models/agricultural-process.entity";
import { CropTreatment } from "../../models/crop-treatment.entity";
import { Irrigation } from "../../models/irrigation.entity";
import {SeedingService} from "../../services/seeding.service";
import {WorkerService} from "../../../fields/services/worker.service";

@Component({
  selector: 'app-home-agricultural-process',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidenavAgriculturalProducerComponent,
    NavbarAgriculturalProducerComponent,
    CardPlantationComponent,
    CardIrrigationDetailsComponent,
    CardTreatmentDetailsComponent
  ],
  templateUrl: './home-agricultural-process.component.html',
  styleUrls: ['./home-agricultural-process.component.css']
})
export class HomeAgriculturalProcessComponent implements OnInit, AfterViewInit {
  agriculturalProcess: AgriculturalProcess = {
    id: 0,
    userId: 0,
    plantType: '',
    startDate: null,
    endDate: null,
    isFinished: false,
    details: ''
  };

  private plantationService: AgriculturalProcessService = inject(AgriculturalProcessService);
  private irrigationService: IrrigationService = inject(IrrigationService);
  private treatmentService: CropTreatmentService = inject(CropTreatmentService);
  private seedingService:SeedingService = inject(SeedingService);
  private workerService:WorkerService = inject(WorkerService);
  private elementRef: ElementRef = inject(ElementRef); // Para lazy loading con IntersectionObserver

  treatments: CropTreatment[] = [];
  fumigations: CropTreatment[] = [];
  fertilizations: CropTreatment[] = [];
  upcomingFumigation: CropTreatment | null = null;
  upcomingFertilization: CropTreatment | null = null;

  irrigations: Irrigation[] = [];
  upcomingIrrigation: Irrigation | null = null;

  agriculturalProcessId: number = 0;
  isSidenavOpened = true;

  ngOnInit(): void {
    this.loadAgriculturalProcessId();  // Cargar el ID desde localStorage
  }

  ngAfterViewInit(): void {
    this.observeComponentVisibility();  // Lazy loading para cargar datos cuando el componente sea visible
  }

  // Cargar el agriculturalProcessId desde localStorage
  private loadAgriculturalProcessId() {
    this.agriculturalProcessId = Number(localStorage.getItem("agriculturalProcessId")) || 0;
  }

  // Escuchar cambios en el valor de localStorage
  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (event.key === 'agriculturalProcessId') {
      this.loadAgriculturalProcessId();
      this.refreshData();
    }
  }

  // Método que observa la visibilidad del componente
  private observeComponentVisibility() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Cargar los datos cuando el componente es visible
          this.refreshData();
          observer.disconnect(); // Desconectar el observer después de cargar los datos
        }
      });
    });

    // Observar el componente en la pantalla
    observer.observe(this.elementRef.nativeElement);
  }

  // Refrescar los datos (plantaciones, tratamientos e irrigaciones)
  private refreshData() {
    this.getPlantationById();
    this.getTreatments();
    this.getIrrigations();
  }

  // Obtener los datos de la plantación por ID
  private getPlantationById() {
    this.plantationService.getById(this.agriculturalProcessId).subscribe((response: AgriculturalProcess) => {
      this.agriculturalProcess = response;
    });
  }

  // Obtener los tratamientos
  private getTreatments() {
    this.treatmentService.getAll().subscribe({
      next: (response: CropTreatment[]) => {
        // Filtrar tratamientos por agriculturalProcessId
        this.treatments = response.filter(treatment => treatment.agriculturalProcessId === this.agriculturalProcessId);

        // Filtrar fumigaciones y fertilizaciones
        this.fumigations = this.treatments.filter(treatment => treatment.treatmentType === 'Fumigation');
        this.fertilizations = this.treatments.filter(treatment => treatment.treatmentType === 'Fertilization');

        // Obtener próximos tratamientos
        this.upcomingFumigation = this.getUpcomingTreatment(this.fumigations);
        this.upcomingFertilization = this.getUpcomingTreatment(this.fertilizations);
      },
      error: (error: any) => {
        console.error('Error al obtener tratamientos:', error);
      }
    });
  }

  // Obtener la próxima fumigación o fertilización
  private getUpcomingTreatment(treatments: CropTreatment[]): CropTreatment | null {
    const today = new Date();
    const upcomingTreatments = treatments
      .filter(treatment => new Date(treatment.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return upcomingTreatments.length > 0 ? upcomingTreatments[0] : null;
  }

  // Obtener las irrigaciones
  private getIrrigations() {
    this.irrigationService.getAll().subscribe({
      next: (response: Irrigation[]) => {
        this.irrigations = response.filter(irrigation => irrigation.agriculturalProcessId === this.agriculturalProcessId);
        this.upcomingIrrigation = this.getUpcomingIrrigation(this.irrigations);
      },
      error: (error: any) => {
        console.error('Error al obtener irrigaciones:', error);
      }
    });
  }

  // Obtener la próxima irrigación
  private getUpcomingIrrigation(irrigations: Irrigation[]): Irrigation | null {
    const today = new Date();
    const upcomingIrrigations = irrigations
      .filter(irrigation => new Date(irrigation.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return upcomingIrrigations.length > 0 ? upcomingIrrigations[0] : null;
  }

  // Método para alternar el sidenav
  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
