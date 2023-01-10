import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Name } from 'src/app/Interfaces/EnterName';
@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.scss'],
})
export class EnterNameComponent implements OnInit {
  Names: Name[] = [{ Name: '1' },{ Name: '2' },{ Name: '3' },{ Name: '4' }];

  Test: string = '';

  constructor(public dialogRef: MatDialogRef<EnterNameComponent>) {}

  ngOnInit(): void {}

  Save() {
    this.dialogRef.close(this.Names);
  }
}
