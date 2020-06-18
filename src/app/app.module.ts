import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { SecurityComponent } from './pages/security/security.component';
import { LoginComponent } from './pages/security/login/login.component';
import { ProfileComponent } from './models/profile/profile.component';
import { UserComponent } from './models/user/user.component';
import { ImageComponent } from './models/image/image.component';
import { SharedComponent } from './shared/shared.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ContenidoComponent,
    SecurityComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent,
    ImageComponent,
    SharedComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
