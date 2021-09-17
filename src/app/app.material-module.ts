import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    exports: [
        MatTableModule,
        MatSortModule,
        // MatProgressSpinnerModule,
        MatInputModule,
        MatPaginatorModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        MatRadioModule,
        MatSelectModule
    ]
})
export class AppMaterialModule {}