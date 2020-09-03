import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes:Routes=[{path:'',component:PrincipalComponent},
                      {path:'prueba',component:FooterComponent}]

@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
