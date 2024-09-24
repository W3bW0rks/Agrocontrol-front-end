import {AfterViewInit, Component, ElementRef, HostListener, inject, OnInit} from '@angular/core';
import {
    CardIrrigationDetailsComponent
} from "../../components/card-irrigation-details/card-irrigation-details.component";
import {CardPlantationComponent} from "../../components/card-plantation/card-plantation.component";
import {CardTreatmentDetailsComponent} from "../../components/card-treatment-details/card-treatment-details.component";
import {CardWorkerComponent} from "../../components/card-worker/card-worker.component";
import {AgriculturalProcess} from "../../models/agricultural-process.entity";
import {AgriculturalProcessService} from "../../services/agricultural-process.service";
import {IrrigationService} from "../../services/irrigation.service";
import {CropTreatmentService} from "../../services/crop-treatment.service";
import {SeedingService} from "../../services/seeding.service";
import {WorkerService} from "../../../fields/services/worker.service";
import {CropTreatment} from "../../models/crop-treatment.entity";
import {Irrigation} from "../../models/irrigation.entity";
import {Seeding} from "../../models/seeding.entity";
import {forkJoin, Observable} from "rxjs";
import {Worker} from "../../../fields/models/worker.entity";

@Component({
  selector: 'app-home-view',
  standalone: true,
    imports: [
        CardIrrigationDetailsComponent,
        CardPlantationComponent,
        CardTreatmentDetailsComponent,
        CardWorkerComponent
    ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent implements OnInit, AfterViewInit {
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

  seedings: Seeding[] = []
  nameWorkers: string[] = []
  agriculturalProcessId: number = 0;
  private totalWorkers: number = 0;    // Contador de trabajadores a procesar
  private processedWorkers: number = 0;
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
    this.getWorkersFromSeeding()
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
  private getWorkersFromSeeding() {
    const workerRequests: Observable<Worker>[] = [];
    this.seedingService.getAll().subscribe({
      next: (response: Seeding[]) => {
        this.seedings = response.filter(seeding => seeding.agriculturalProcessId === this.agriculturalProcessId);

        if (this.seedings.length > 0) {

          this.seedings.forEach(seeding => {
            if (seeding.workers && seeding.workers.length > 0) {
              // Agregar todas las solicitudes de trabajadores al array
              seeding.workers.forEach(worker => {
                workerRequests.push(this.workerService.getById(worker.workerId));
              });
            }
          });

          if (workerRequests.length > 0) {
            // Hacemos las solicitudes de los trabajadores en paralelo
            forkJoin(workerRequests).subscribe({
              next: (workerDetails: any[]) => {
                this.nameWorkers = workerDetails.map(worker => worker.fullName);
                console.log('Nombres de los trabajadores:', this.nameWorkers);
              },
              error: (error: any) => {
                console.error('Error al obtener los detalles de los trabajadores:', error);
              }
            });
          } else {
            // Si no hay trabajadores
            this.nameWorkers.push('Don\'t have workers');
            console.log('Nombres de los trabajadores:', this.nameWorkers);
          }
        } else {
          // Si no hay siembras
          this.nameWorkers.push('Don\'t have workers');
          console.log('Nombres de los trabajadores:', this.nameWorkers);
        }
      },
      error: (error: any) => {
        console.error('Error al obtener las siembras:', error);
      }
    });
  }
}
