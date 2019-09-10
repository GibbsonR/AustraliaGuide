import { NgModule , CUSTOM_ELEMENTS_SCHEMA,Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,


} from '@angular/material';


import { SharedModule } from '../../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RestaurantComponent } from './restaurant.component';
import { AppHeaderComponent } from './header/app.header.component';
import { RestaurantListService } from '../../service/search/restaurant.list.service';
import { MessageService } from '../../service/search/message.service';
import { SelectorComponent } from './selector/selector.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { RestaurantViewItemService } from 'src/app/service/search/view.item.service';
import { SearchListComponent } from './search-list/search-list.component';
import { AgmCoreModule } from '@agm/core';

export const routes = [
  { path: '', component: RestaurantComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [

    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAYi6itRZ0rPgI76O3I83BhhzZHIgMwPg'
    }), 
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,      
    NgxChartsModule,
    PerfectScrollbarModule
  ],
  declarations: [
    RestaurantComponent,
    AppHeaderComponent,
    SearchListComponent,
    SelectorComponent,
    PaginationComponent,
    SearchItemComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    MessageService,
    RestaurantListService,
    RestaurantViewItemService
  ]
})
export class RestaurantModule { }

