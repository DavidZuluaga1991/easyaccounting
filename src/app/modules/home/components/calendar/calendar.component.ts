import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/app/core/models/calendar/calendar';
import { FilterFirebase } from 'src/app/core/models/filter-firebase/filter-firebase';
import { TaxCalendar } from 'src/app/core/models/tax-calendar/tax-calendar';
import { TaxCalendarService } from 'src/app/core/services/tax-service/tax-calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public dateInit = new Date();
  public dayNames = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sab'];
  public numDays: Calendar[] = [];
  public description: { order: number, text: string }[] = [];
  private mountName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public actionDescription = false;
  public historyTaxCalendary: TaxCalendar[] = [];

  constructor(private tax: TaxCalendarService) { }

  ngOnInit(): void {
    this.getDataTaxCalendary();
    const o: TaxCalendar = {
        date: {
          year: 2021,
          mounth: 1,
          day: 4
        },
        description: [
          { order: 1, text: 'Renta 2020 G. Contribuyentes 1° cuota - Nit terminado en 1' },
          { order: 2, text: 'Rete. Fuente Enero 2021 Declaración y pago - Nit terminado en 1' }
        ]
    }
    // this.tax.posts(o);
  }

  public viewCallendar(date: Date) {
    // const date = new Date();
    const finalDate = new Date(date.getFullYear(), date.getMonth() + 1 , 0);
    const initDate = new Date(date.getFullYear(), date.getMonth() , 1);
    let j = 0;
    for (let idSpaces = 0; idSpaces < initDate.getDay(); idSpaces++) {
      const day = {
        id: j,
        text: '',
        selectable: false,
        description: []
      };
      this.numDays.push(day);
      j++;
    }
    for (let numDay = 1; numDay < finalDate.getDate() + 1; numDay++) {
      const tempDescription = this.historyTaxCalendary.filter(x => x.date.mounth === finalDate.getMonth() && x.date.day === numDay);
      const day = {
        id: j,
        text: numDay + '',
        selectable: true,
        selected: false,
        description: tempDescription && tempDescription.length > 0 ? tempDescription[0].description : []
      };
      if (numDay === (this.dateInit.getDate())) {
        day.selected = true;
        this.description = day.description;
      }
      this.numDays.push(day);
      j++;
    }
  }

  public viewDescription(item: Calendar, id: number) {
    this.description = item.description
    for (let i = 0; i < this.numDays.length; i++) {
      if (i === id) {
        this.numDays[i].selected = true;
        this.dateInit.setDate(+this.numDays[i].text);
      } else {
        this.numDays[i].selected = false;
      }
    }
  }

  public changeMounth(num: number): void {
    this.numDays = [];
    let tempDate = new Date( this.dateInit.getFullYear(), this.dateInit.getMonth() + num, this.dateInit.getDate());
    if ((tempDate.getMonth()) > (this.dateInit.getMonth() + num)) {
      tempDate = new Date( this.dateInit.getFullYear(), this.dateInit.getMonth() + num + 1, 0);
    }
    this.dateInit = tempDate;
    this.viewCallendar( this.dateInit );
    
    //this.getDataTaxCalendary();
  }

  public textMount(): string {
    return this.mountName[this.dateInit.getMonth()];
  }


  public getDataTaxCalendary() {
    
    const filter: FilterFirebase = {
      searchdata: 'date/mounth',
      value: 1
    }
    let s = this.tax.get('tax/');
    s.subscribe( (data: TaxCalendar[]) => {
      this.historyTaxCalendary = data;
      this.viewCallendar(this.dateInit);
      // console.log(data);
      // // data.forEach((d: TaxCalendar) => {
      // //   this.numDays.forEach(day => {
      // //     console.log(day, this.dateInit.getMonth() === d.date.mounth, d.date.day, day.id === d.date.day, d.description);
      // //     if (this.dateInit.getMonth() === d.date.mounth && day.id === d.date.day) {
      // //       day.description = d.description;
      // //     }
      // //   });
      // // });
    });
  }

}
