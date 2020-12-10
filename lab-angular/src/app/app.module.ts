import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContadorComponent } from './contador/contador.component';
import { CardComponent } from './card/card.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormacontatoComponent } from './formacontato/formacontato.component';
import { FormcontatoComponent } from './formcontato/formcontato.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    CardComponent,
    FormReativoComponent,
    FormsModule,
    ReactiveFormsModule,
    FormacontatoComponent,
    FormcontatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
