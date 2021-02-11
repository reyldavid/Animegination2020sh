import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingType } from '../models/listingTypes';

@Component({
  selector: 'app-care-menu',
  templateUrl: './care-menu.component.html',
  styleUrls: ['./care-menu.component.css']
})
export class CareMenuComponent implements OnInit {

  data = [];

  constructor(private router: Router) { 
  }
  
  ngOnInit(): void {
      this.data.push({ height: "15", width: "20", text: "About Us", src: "https://reydavid.blob.core.windows.net/assets/A.png" });
      this.data.push({ height: "15", width: "20", text: "Contact Us", src: "https://reydavid.blob.core.windows.net/assets/C.jpg" });
      this.data.push({ height: "15", width: "20", text: "Customer Feedback", src: "https://reydavid.blob.core.windows.net/assets/F.png" });
      this.data.push({ height: "15", width: "20", text: "Privacy Policy", src: "https://reydavid.blob.core.windows.net/assets/P.png" });
      this.data.push({ height: "15", width: "20", text: "Terms of Use", src: "https://reydavid.blob.core.windows.net/assets/T.png" });
      this.data.push({ height: "15", width: "20", text: "Shipping Info", src: "https://reydavid.blob.core.windows.net/assets/S.png" });
      this.data.push({ height: "15", width: "20", text: "Returns Policy and Requests", src: "https://reydavid.blob.core.windows.net/assets/R.png" });
      this.data.push({ height: "30", width: "40", text: "Recent News", src: "https://reydavid.blob.core.windows.net/assets/News.png" });
    }

    onItemTap(args) {
        console.log("You tapped: " + this.data[args.index].text);
        switch (args.index) {
          case 0: {
            this.router.navigate(['/about']);
            break;
          }
          case 1: {
            this.router.navigate(['/contact']);
            break;
          }
          case 2: {
            this.router.navigate(['/user-note']);
            break;
          }
          case 3: {
            this.router.navigate(['/privacy']);
            break;
          }
          case 4: {
            this.router.navigate(['/terms-of-use']);
            break;
          }
          case 5: {
            this.router.navigate(['/shipping-info']);
            break;
          }
          case 6: {
            this.router.navigate(['/returns']);
            break;
          }
          case 7: {
            this.router.navigate(['/news']);
            break;
          }
          default: {              
          }
        }
      }
}
