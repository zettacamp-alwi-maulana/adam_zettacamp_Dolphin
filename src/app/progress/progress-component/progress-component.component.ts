import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
@Component({
  selector: 'app-progress-component',
  templateUrl: './progress-component.component.html',
  styleUrls: ['./progress-component.component.css']
})
export class ProgressComponent implements OnInit {
  progressData: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.fitnessData$.subscribe(data => {
      console.log('Received fitness data in ProgressComponent:', data); 
      this.progressData = data;
    });
  }
  
}
