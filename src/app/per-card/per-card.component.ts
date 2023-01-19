import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnterNameComponent } from '../Components/enter-name/enter-name.component';
import { Name } from '../Interfaces/EnterName';

@Component({
  selector: 'app-per-card',
  templateUrl: './per-card.component.html',
  styleUrls: ['./per-card.component.scss'],
})
export class PerCardComponent implements OnInit {
  userNames: Name[] = [];
  allData: PerCards[] = [];
  test: boolean = false;
  TableOrList: boolean = true;
  summarys: number[] = [0, 0, 0, 0];
  CostList: Cost[] = [
    {
      id: 1,
      value: 10,
      display: '每張',
    },
  ];
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.sizeCheck();
    if (localStorage.getItem('PercardData') != null) {
      this.allData = JSON.parse(localStorage.getItem('PercardData') || '');
      this.userNames = JSON.parse(localStorage.getItem('PercardUserName') || '');
      this.summarys = JSON.parse(localStorage.getItem('PercardSummary') || '');
    } else {
      if (this.test) {
        this.userNames = [
          {
            Name: '1',
          },
          {
            Name: '2',
          },
          {
            Name: '3',
          },
          {
            Name: '4',
          },
        ];
      } else {
        this.OpenEnterName();
      }
    }
  }

  OpenEnterName() {
    const dialogRef = this.dialog.open(EnterNameComponent, {
      height: '400px',
      width: '600px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.userNames = result;
      console.log(result);
    });
  }

  addData() {
    let PerCard: PerCards = {
      Data: [
        {
          cards: 1,
          oldtwo: 0,
          trumps: false,
        },
        {
          cards: 1,
          oldtwo: 0,
          trumps: false,
        },
        {
          cards: 1,
          oldtwo: 0,
          trumps: false,
        },
        {
          cards: 1,
          oldtwo: 0,
          trumps: false,
        },
      ],
    };
    this.allData.push(PerCard);
  }

  deleteData(index: number) {
    this.allData.splice(index, 1);
  }

  Count() {
    let index = 0;
    let i = 0;
    this.summarys = [0, 0, 0, 0];
    this.allData.forEach((data) => {
      data.Data.forEach((Percard) => {
        if (Percard.cards != 0) {
          let Money = Percard.cards;
          Money = Percard.oldtwo != 0 ? Money * Percard.oldtwo : Money;
          Money = Percard.cards >= 10 ? Money * 2 : Money;
          this.summarys[index] -= Money * this.CostList[0].value;
        }
        if (Percard.trumps) {
          let Count = 0;
          let Current = 0;
          for (let Num = 0; Num < 4; Num++) {
            if (Num != index) {
              let Money = this.allData[i].Data[Num].cards;
              Money =
                this.allData[i].Data[Num].oldtwo != 0
                  ? Money * this.allData[i].Data[Num].oldtwo
                  : Money;
              Money = this.allData[i].Data[Num].cards >= 10 ? Money * 2 : Money;
              Count += Money;
            } else {
              Current = this.allData[i].Data[Num].cards;
              Current =
                this.allData[i].Data[Num].oldtwo != 0
                  ? Current * this.allData[i].Data[Num].oldtwo
                  : Current;
              Current =
                this.allData[i].Data[Num].cards >= 10 ? Current * 2 : Current;
            }
          }
          Percard.cards = 0;
          this.summarys[index] += Current * this.CostList[0].value;
          this.summarys[index] += Count * this.CostList[0].value;
        }
        index++;
      });
      index = 0;
      i++;
    });
    localStorage.setItem('PercardUserName', JSON.stringify(this.userNames));
    localStorage.setItem('PercardData', JSON.stringify(this.allData));
    localStorage.setItem('PercardSummary', JSON.stringify(this.summarys));
  }

  sizeCheck(): void {
    if (innerWidth <= 590) {
      this.TableOrList = false;
    } else {
      this.TableOrList = true;
    }
  }

  RemoveData() {
    localStorage.removeItem('PercardUserName');
    localStorage.removeItem('PercardData');
    localStorage.removeItem('PercardSummary');
    this.router.navigateByUrl('dashboard');
  }
}
interface PerCards {
  Data: PerCard[];
}
interface PerCard {
  cards: number;
  oldtwo: number;
  trumps: boolean;
}
interface PercardSelect {
  value: number;
  display: string;
}
interface Cost {
  id: number;
  value: number;
  display: string;
}
