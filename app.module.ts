import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FotografiaModule } from './fotografia/fotografia.module';

@NgModule({
  declarations: [
    AppComponent,      
    
  ],
  imports: [    
    AppRoutingModule,
    CoreModule,
    FotografiaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
