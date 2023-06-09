import { Component, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({
        'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
      )]),
      transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '500px'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
      )])
    ])

  ]
})
export class MainhomeComponent {

  constructor(private elementRef: ElementRef) {}

  scrollToEvaluacionPsicologica() {
    const evaluacionPsicologicaElement = this.elementRef.nativeElement.querySelector('#evaluacion-psicologica');
    if (evaluacionPsicologicaElement) {
      evaluacionPsicologicaElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToNosotros() {
    const nosotrosElement = this.elementRef.nativeElement.querySelector('#nosotros');
    if (nosotrosElement) {
      nosotrosElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToInicio() {
    const inicioElement = this.elementRef.nativeElement.querySelector('#inicio');
    if (inicioElement) {
      inicioElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToHistory() {
    const historyElement = this.elementRef.nativeElement.querySelector('#history');
    if (historyElement) {
      historyElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  mostrarTextoCompleto = false;
  textoResumido = 'Los Consultorios de Psicología se establecen como un espacio del Programa de Psicología de la Universidad de Ibagué; ahora parte del Centro de Servicios en Psicología de la Universidad, se renombró como Unidad de Atención Clínica y Psicosocial; orientado al desarrollo social, a través del servicio de atención psicológica a la población Tolimense, creando estrategias de abordaje en los diferentes contextos, a partir de las diversas formas de intervención (asesoría, evaluación, diagnóstico, psicoterapia, consultoría, investigación, prevención y promoción) posibilitando así, cambios y transformaciones que contribuyan al mejoramiento de la calidad de vida y la salud mental de la región. A su vez permite la exploración y la consolidación teórico-práctica del proceso formativo profesional de los estudiantes de pregrado y postgrado de nuestra Universidad.';
  textoCompleto = 'La Universidad de Ibagué se encuentra acreditada como una Universidad de alta calidad, factor que implica la implementación de planes de mejoramiento continuo en las diferentes dependencias. Desde la Unidad de Atención Clínica y Psicosocial se trabaja en la consecución de la acreditación, a través del seguimiento del plan de mejoramiento de la I.P.S (evaluación de los procesos), la incorporación de un plan estratégico, contribuyendo a los programas de responsabilidad social.';

  toggleTextoCompleto() {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }

  mostrarTextoHistoriaCompleto = false;
  textoHistoriaResumido = 'Los consultorios de Psicología de la Universidad de Ibagué surgen en el año 2007, año en que el programa de psicología y la Universidad en sus procesos de evaluación, ven la necesidad de fortalecer el desarrollo académico y los proyectos de proyección social. Es a partir de este año en que se adquieren las instalaciones de la antigua casa editorial EL POIRA y se adecuan los laboratorios y los consultorios de Psicología.';
  textoHistoriaCompleto = 'Teniendo como marco lo anterior, se inician las primeras prácticas en los consultorios, los cuales fueron orientados a la consolidación de aspectos fundamentales para dar inicio a un proceso de habilitación de los mismos, por parte del sector salud. Se realizó entonces una práctica con los estudiantes, orientada a la estructuración de formatos, organización de guías y protocolos de atención, a especificar los procesos a desarrollar, a revisar la reglamentación que permitiera el proceso de habilitación; todo esto durante el año 2007; en el año 2008 se seguían realizando ajustes tanto a nivel locativo, como a nivel administrativo para poner en funcionamiento lo que en la actualidad son los consultorios.<br><br>A partir de septiembre de 2008, la Secretaría de Salud del Departamento del Tolima entrega los distintivos que habilitan los consultorios como IPS para prestar servicios de Atención Psicológica y de Promoción y Prevención en salud.';

  toggleTextoHistoriaCompleto() {
    this.mostrarTextoHistoriaCompleto = !this.mostrarTextoHistoriaCompleto;
  }
}
