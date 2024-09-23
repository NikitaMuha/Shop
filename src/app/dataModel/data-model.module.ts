import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataSourceService, DataSourceimpl } from '../../services/data-source.service';
import { RemoteDataSourceService } from '../../services/remote-data-source.service';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [DataSourceService, {
    provide: DataSourceimpl, useClass: RemoteDataSourceService
}],
})

export class DataModelModule { }
