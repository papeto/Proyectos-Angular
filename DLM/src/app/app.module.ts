import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { AboutComponent } from './about/about.component';
import { PatientsComponent } from './patients/patients.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProceduresComponent,
    AboutComponent,
    BookingComponent,
    FooterComponent,
    GalleryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    PatientsComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
