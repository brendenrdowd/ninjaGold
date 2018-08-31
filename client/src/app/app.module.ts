import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginregComponent } from './components/loginreg/loginreg.component';
import { CaveComponent } from './components/cave/cave.component';
import { HouseComponent } from './components/house/house.component';
import { CasinoComponent } from './components/casino/casino.component';
import { FarmComponent } from './components/farm/farm.component';
import { HeaderComponent } from './components/header/header.component';
import { ActivitiesComponent } from './components/activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginregComponent,
    CaveComponent,
    HouseComponent,
    CasinoComponent,
    FarmComponent,
    HeaderComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
