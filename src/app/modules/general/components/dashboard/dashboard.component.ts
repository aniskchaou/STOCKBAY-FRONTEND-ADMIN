import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { URLLoader } from './../../../configs/URLLoader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends URLLoader implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
    let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var ctx1 = document.getElementsByClassName("mychart1");
    var ctx2 = document.getElementsByClassName("mychart2");
    this.renderChart(data, labels,ctx1);
    this.renderChart(data, labels,ctx2);
  }


   renderChart(data, labels,ctx) {
   
   
    var myChart = new Chart(ctx, {
        type: 'line',
        
        data: {
            labels: labels,
            datasets: [{
                label: 'Démo',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
    });
}
}
