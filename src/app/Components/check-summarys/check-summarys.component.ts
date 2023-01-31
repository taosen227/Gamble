import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Name } from 'src/app/Interfaces/EnterName';
@Component({
  selector: 'app-check-summarys',
  templateUrl: './check-summarys.component.html',
  styleUrls: ['./check-summarys.component.scss']
})
export class CheckSummarysComponent implements OnInit {

  Gamblers:Name[] = [];
  Summarys:number[] = [];
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url == "/Level")
    {
      this.Gamblers = JSON.parse(localStorage.getItem('LevelUserName')||"");
      this.Summarys = JSON.parse(localStorage.getItem('LevelSummary')||"");
    }
    if(this.router.url == "/PerCard")
    {
      this.Gamblers = JSON.parse(localStorage.getItem('PercardUserName') || '');
      this.Summarys = JSON.parse(localStorage.getItem('PercardSummary') || '');
    }
  }

}
