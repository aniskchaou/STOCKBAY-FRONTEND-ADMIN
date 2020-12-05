import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
private loadScripts() {
    let container=document.getElementsByTagName('body')[0];
    let promise = Promise.resolve();
    for (let url of this.myScripts) {
        promise = promise.then(_ => new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.innerHTML = '';
            script.src = url;
            script.async = true;
            script.defer = true;
            script.onload = () => { resolve(); }
            script.onerror = (e) => { reject(e); }
            container.appendChild(script);
        }));
    }
}
  title = 'my-app-angular';

  ngOnInit() {
   this.loadScripts();
  }
}
