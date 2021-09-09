import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  extends URLLoader implements OnInit {

  constructor() { 
    super()
  }

  private myScripts = [
    "../assets/vendors/jquery/dist/jquery.min.js",
    "../assets/vendors/popper.js/dist/umd/popper.min.js",
    "../assets/vendors/bootstrap/dist/js/bootstrap.min.js",
    "../assets/js/main.js",
    
    
    "../assets/vendors/datatables.net/js/jquery.dataTables.min.js",
    "../assets/vendors/datatables.net-bs4/js/dataTables.bootstrap4.min.js",
    "../assets/vendors/datatables.net-buttons/js/dataTables.buttons.min.js",
    "../assets/vendors/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js",
    "../assets/vendors/jszip/dist/jszip.min.js",
    "../assets/vendors/pdfmake/build/pdfmake.min.js",
    "../assets/vendors/pdfmake/build/vfs_fonts.js",
    "../assets/vendors/datatables.net-buttons/js/buttons.html5.min.js",
    "../assets/vendors/datatables.net-buttons/js/buttons.print.min.js",
    "../assets/vendors/datatables.net-buttons/js/buttons.colVis.min.js",
    "../assets/js/init-scripts/data-table/datatables-init.js"
];
 loadScripts() {
    let container=document.getElementsByTagName('app-root')[0];
    let promise = Promise.resolve();
    for (let url of this.myScripts) {
        promise = promise.then(_ => new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.innerHTML = '';
            script.src = url;
            script.async = false;
            script.defer = false;
            script.onload = () => { resolve(); }
            script.onerror = (e) => { reject(e); }
            container.appendChild(script);
        }));
    }
}
  

ngOnInit(): void {
   this.loadScripts()
  let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
  let data2 = [43000, 53000, 34000, 38000, 66000, 77000, 53000];
  let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var ctx1 = document.getElementsByClassName("revenue-chart");
  var ctx2 = document.getElementsByClassName("product-chart");
  this.renderChart(data, labels,ctx1,'rgba(204, 0, 0, 1)');
  this.renderChart(data2, labels, ctx2, 'rgba(24, 0, 204, 1)');
  //super.show('StockBay', 'Cette application est en cours de développement.', 'info')
}


 renderChart(data, labels,ctx,color) {
 
 
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: '',
              data: data,
              backgroundColor: color ,
              borderColor: color,
          }]
      },
  });
}

}
