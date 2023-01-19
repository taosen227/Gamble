import { JsonPipe } from '@angular/common';
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
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  userNames: Name[] = [];
  allData: Level[] = [];
  test: boolean = false;
  TableOrList:boolean = true;
  summarys: number[] = [0, 0, 0, 0];
  levelSelect: LevelSelect[] = [
    {
      value: 0,
      display: '全拿',
    },
    {
      value: 1,
      display: '大頭',
    },
    {
      value: 2,
      display: '小頭',
    },
    {
      value: 3,
      display: '不來',
    },
  ];
  CostList: Cost[] = [
    {
      id: 1,
      value: 100,
      display: '大頭',
    },
    {
      id: 2,
      value: 50,
      display: '小頭',
    },
  ];
  constructor(private dialog: MatDialog,
    private router:Router) {}

  ngOnInit(): void {
    this.sizeCheck();
    if(localStorage.getItem('LevelData') != null){
      this.allData = JSON.parse(localStorage.getItem('LevelData')||"");
      this.userNames = JSON.parse(localStorage.getItem('LevelUserName')||"");
      this.summarys = JSON.parse(localStorage.getItem('LevelSummary')||"");
    }
    else{
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

  sizeCheck(): void {
    if (innerWidth <= 590) {
      this.TableOrList = false;
    }
    else {
      this.TableOrList = true;
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
    });
  }

  addData() {
    let levelDatas: Level = {
      levelData: [
        {
          level: 0,
        },
        {
          level: 1,
        },
        {
          level: 2,
        },
        {
          level: 3,
        },
      ],
    };
    this.allData.push(levelDatas);
  }

  deleteData(index: number) {
    this.allData.splice(index, 1);
  }

  Count() {
    let index = 0;
    let Getall:number = 0;
    this.CostList.forEach(cost => {
      Getall += cost.value;
    });
    this.summarys = [0, 0, 0, 0];
    this.allData.forEach((data) => {
      data.levelData.forEach((Level) => {
        this.CostList.forEach((cost) => {
          if (cost.id == Level.level) {
            this.summarys[index] -= cost.value;
          }
        });
        if(Level.level == 0)
        {
          this.summarys[index] += Getall;
        }
        index++;
      });
      index = 0;
    });
    localStorage.setItem('LevelUserName',JSON.stringify(this.userNames))
    localStorage.setItem('LevelData',JSON.stringify(this.allData))
    localStorage.setItem('LevelSummary',JSON.stringify(this.summarys))
  }

  RemoveData(){
    localStorage.removeItem('LevelUserName');
    localStorage.removeItem('LevelData');
    localStorage.removeItem('LevelSummary');
    this.router.navigateByUrl("dashboard");
  }
}
interface Level {
  levelData: LevelData[];
}
interface LevelData {
  level: number;
}
interface LevelSelect {
  value: number;
  display: string;
}
interface Cost {
  id: number;
  value: number;
  display: string;
}
