import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingType } from '../models/listingTypes';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  data = [];

  constructor(private router: Router) { 

  }
  
  ngOnInit(): void {
      this.data.push({ height: "15", width: "20", text: "Featured Titles", src: "https://reydavid.blob.core.windows.net/assets/F.png" });
      this.data.push({ height: "15", width: "20", text: "New Items", src: "https://reydavid.blob.core.windows.net/assets/N.png" });
      this.data.push({ height: "15", width: "20", text: "Top Sellers", src: "https://reydavid.blob.core.windows.net/assets/T.png" });
      this.data.push({ height: "15", width: "20", text: "Bargain Bin", src: "https://reydavid.blob.core.windows.net/assets/B.png" });
      this.data.push({ height: "15", width: "20", text: "Close Out", src: "https://reydavid.blob.core.windows.net/assets/C.jpg" });
      this.data.push({ height: "15", width: "20", text: "Live Action", src: "https://reydavid.blob.core.windows.net/assets/L.png" });
      this.data.push({ height: "30", width: "40", text: "Recent News", src: "https://reydavid.blob.core.windows.net/assets/News.png" });
    }

    onItemTap(args) {
        console.log("You tapped: " + this.data[args.index].text);
        if (args.index == 6) {
          this.router.navigate(['/news']);
        }
        else {
          let listType: ListingType = ListingType.FeaturedTitles;
          switch (args.index + 1) {
            case ListingType.FeaturedTitles: {
              break;
            }
            case ListingType.NewItems: {
              listType = ListingType.NewItems;
              break;
            }
            case ListingType.TopSellers: {
              listType = ListingType.TopSellers;
              break;
            }
            case ListingType.BargainBin: {
              listType = ListingType.BargainBin;
              break;
            }
            case ListingType.CloseOut: {
              listType = ListingType.CloseOut;
              break;
            }
            case ListingType.LiveAction: {
              listType = ListingType.LiveAction;
              break;
            }
            default: {              
            }
          }
          this.router.navigate(['/list'], { queryParams: {  listTypeId: listType } });
        }
      }
}
