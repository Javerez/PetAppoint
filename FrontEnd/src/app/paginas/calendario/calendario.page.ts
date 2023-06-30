import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonRouterOutlet } from '@ionic/angular';
import { CalendarMode, CalendarComponent } from 'ionic7-calendar';
import { format, isDate, parseISO } from 'date-fns'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  showStart = false;
  showEnd = false;
  formattedStart = '';
  formattedEnd = '';


  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date()
  };
  viewTitle = '';
  eventSource: any[] = [];


  @ViewChild(CalendarComponent) myCal!: CalendarComponent;
  @ViewChild('modal') modal!: IonModal;
  presentingElement: any = null;

  nuevoEvento: any = {
    title: '',
    allDay: false,
    startTime: null,
    endTime: null,

  }

  constructor(
    private ionRouterOutlet: IonRouterOutlet,
    
    ) {
    this.presentingElement = ionRouterOutlet.nativeEl;
  }

  async ngOnInit() {
    //this.eventSource = await this.eventoService.getData();
  }
  setHoy() {
    this.myCal.currentDate = new Date();

    //this.myCal.calendarMode = 'day';
  }
  atras() {
    this.myCal.slidePrev();
  }
  adelante() {
    this.myCal.slideNext();
  }
  
  onTimeSelected(ev: {selectedTime: Date; events: any [] }) {
    this.formattedStart = format (ev.selectedTime, 'HH:mm, MMM d, yyyy');
    this.nuevoEvento.startTime = ev.selectedTime.toISOString();

    //format (ev.selectedTime, "yyyy-MM-dd 'T'HH:mm:ss");
    const later = ev.selectedTime.setHours(ev.selectedTime.getHours() + 1); 
    this.formattedEnd = format (later, 'HH:mm, MMM d, yyyy');
    this.nuevoEvento.endTime = format (later, "yyyy-MM-dd 'T'HH:mm:ss");
    console.log(this.nuevoEvento)
    if (this.calendar.mode ==='day' || this.calendar.mode === 'week') {
      this.modal.present();
    }
  }

  startChanged(value:any){
    console.log("3: "+value)
    this.nuevoEvento.startTime = value;
    this.formattedStart = format (parseISO(value), 'HH:mm, MMM d, yyyy');
  }
  endChanged(value:any){
    console.log(value)
    console.log("1: "+isDate(value))
    this.nuevoEvento.endTime = value;
    this.formattedEnd = format (parseISO(value), 'HH:mm, MMM d, yyyy');
    console.log("2: "+isDate(this.formattedEnd))
  }

  agregarEvento() {
    const eventoAgregar: any = {
      title: this.nuevoEvento.title,
      allDay: this.nuevoEvento.allDay,
      startTime: new Date(this.nuevoEvento.startTime),
      endTime: new Date(this.nuevoEvento.endTime),
    }
    this.eventSource.push(eventoAgregar);
    this.myCal.loadEvents();
    //Agregar Evento a la base de datos
    this.nuevoEvento = {
      title: '',
      allDay: false,
      startTime: null,
      endTime: null,
  
    }

    this.modal.dismiss();
  }
}
