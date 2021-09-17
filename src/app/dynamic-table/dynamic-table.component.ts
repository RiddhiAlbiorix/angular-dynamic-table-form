import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DynamicServiceService } from './dynamic-service.service';
import { PersonalData } from './personal-data';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';


@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html'
})

export class DynamicTableComponent implements OnInit {

  personalData: PersonalData[] = [];
  displayedColumns: any = [];

  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource = new MatTableDataSource<PersonalData>();

  constructor(
    private apiService: DynamicServiceService,
    public dialog: MatDialog) { 
    }

  ngOnInit() {
    this.getPersonalInformation();
  }

  getPersonalInformation() {
    this.apiService.getPersonalInformation()
      .subscribe((response) => {
        this.dataSource.data = response;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        for (var key in this.dataSource.data[0]) {
          this.displayedColumns.push(key);
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editInformation(element: PersonalData) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      element
    };

    const dialogRef = this.dialog.open(ModalPopupComponent,
      dialogConfig);

      dialogRef.afterClosed().subscribe(
        response => {
          this.dataSource.data = this.dataSource.data.filter((value, key) => {
            if(value.ID === response.ID) {
              this.dataSource.data = response;
            }
          })
        }
    );
  }
}

