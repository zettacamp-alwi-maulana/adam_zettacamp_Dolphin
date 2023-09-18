import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-fitness-component',
  templateUrl: './fitness-component.component.html',
  styleUrls: ['./fitness-component.component.css']
})
export class FitnessComponent implements OnInit {
  fitnessData: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.fitnessData$.subscribe(data => {
      console.log('Received fitness data in FitnessComponent:', data); // Add this line
      this.fitnessData = data;
    });
  }
  

  }
