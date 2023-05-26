import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyListComponent } from './pages/survey-list/survey-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { ButtonComponent } from './partials/button/button.component';
import { ActivesurveyComponent } from './pages/activesurvey/activesurvey.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyStoreComponent } from './survey-store/survey-store.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { TemplateComponent } from './pages/template/template.component';
import { SurveyItemComponent } from './pages/survey-item/survey-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SurveyListComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    BasePageComponent,
    ButtonComponent,
    ActivesurveyComponent,
    SurveyStoreComponent,
    ConfirmComponent,
    TemplateComponent,
    SurveyItemComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
