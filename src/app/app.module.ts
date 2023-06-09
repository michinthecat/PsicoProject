import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SingupComponent } from './views/auth/signup/singup.component';
import { MenuComponent } from './menus/menu-user/menu.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentformComponent } from './appointmentform/appointmentform.component';
import { ShowAppointmentComponent } from './views/appointments/showappointment/showappointment.component';
import { SearchappointmentComponent } from './views/appointments/searchappointment/searchappointment.component';
import { NotFoundComponent } from './views/auth/notfound/notfound.component';
import { SearchpatientComponent } from './views/patients/searchpatient/searchpatient.component';
import { UpdatepatientComponent } from './views/patients/updatepatient/updatepatient.component';
import { ShowschedulesComponent } from './views/schedules/showschedules/showschedules.component';
import { SpecialtyComponent } from './views/specialty/specialty.component';
import { ServicespsychoComponent } from './views/servicespsycho/servicespsycho/servicespsycho.component';
import { ForgotpasswordComponent } from './views/auth/forgotpassword/forgotpassword.component';
import { MenuAdminComponent } from './menus/menu-admin/menu-admin.component';
import { PsychologistComponent } from './views/psychologist/psychologist.component';
import { MainhomeComponent } from './views/mainhome/mainhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    MenuComponent,
    AppointmentformComponent,
    ShowAppointmentComponent,
    SearchappointmentComponent,
    NotFoundComponent,
    SearchpatientComponent,
    UpdatepatientComponent,
    ShowschedulesComponent,
    SpecialtyComponent,
    ServicespsychoComponent,
    ForgotpasswordComponent,
    MenuAdminComponent,
    PsychologistComponent,
    MainhomeComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
