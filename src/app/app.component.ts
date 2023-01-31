import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckSummarysComponent } from './Components/check-summarys/check-summarys.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dialog:MatDialog){}
  title = 'Gamble';
  play:boolean = false;
  click(){
    this.play = !this.play;
  }
  OpenCheckSummarys() {
    const dialogRef = this.dialog.open(CheckSummarysComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
