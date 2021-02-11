import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { SessionService } from './services/session.service';
import { MessageService } from './services/message.service';
import { OrderService } from './services/orders.service';
import { ProgressSpinner } from './services/progress.service';
import { Subscription } from 'rxjs/Subscription';
import { Globals } from './globals';
import { Order } from './models/orderModel';
import { CartType } from './models/carttype';
import { ProductsService } from './services/products.service';
import { TextField } from 'tns-core-modules/ui/text-field';
import * as _ from 'lodash';
// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('inSearch', {static: false}) inSearch: ElementRef;

  public userFirstName: string;
  showFooter: boolean= true;
  loggingIn: boolean = false;
  footerSubscription: Subscription;
  spinnerSubscription: Subscription;
  orderSubscription: Subscription;
  itemsSubscription: Subscription;
  adminRoleSubscription: Subscription;
  order: Order;
  isAdmin: boolean = false;
  selectedTab: number = 0;

  constructor(private _router: Router, 
              private _loginService: LoginService, 
              private _sessionService: SessionService, 
              private _messageService: MessageService,
              private _orderService: OrderService,  
              private _productsService: ProductsService,
              private _progressSpinner: ProgressSpinner,
              private _globals: Globals ) {
        
        _loginService.userLoggedIn.subscribe(firstName => {
            this.userFirstName = firstName;
        });

        if (_sessionService.isAuthenticated()) {
            this.userFirstName = _sessionService.UserAccount.firstName;
        }

        this.spinnerSubscription = _messageService.getSpinner().subscribe( show => {
            if (show) {
                this._progressSpinner.showLoader();
            }
            else {
                this._progressSpinner.hideLoader();
            }
        })

        this.itemsSubscription = _messageService.getOrder().subscribe(order => {
            this.order = order;
        })

        this.adminRoleSubscription = _messageService.getRoles().subscribe(roles => {
            let hasAdmin = _.includes(roles, "Admin");
            this.isAdmin = hasAdmin;
            this._sessionService.IsAdmin = hasAdmin;
        })

        _productsService.getAnimeProducts().subscribe(products => {
            _productsService.setProductsCache(products);
        })
  }

  ngOnInit(): any {
      this.isAdmin = false;
      this._sessionService.IsAdmin = false;
    //   this.showFooter = true;
    if (this._sessionService.isAuthenticated()) {
        this.orderSubscription = this._orderService.getOrderTotals(
            this._sessionService.UserToken, CartType.shoppingCart)
            .subscribe(order => {
                this.order = order;
        })
    }
}

  ngOnDestroy() {
    // this.footerSubscription.unsubscribe();
    // this.spinnerSubscription.unsubscribe();
    // this.orderSubscription.unsubscribe();
    // this.itemsSubscription.unsubscribe();
    // this.adminRoleSubscription.unsubscribe();
  }

  onSearch(searchText: string) {
      this._router.navigate(['/search'], { queryParams: { searchText: searchText } });
  }

  logout() {
      this._sessionService.clearSession();
      this.userFirstName = '';
      this.order = null;
      this.isAdmin = false;
      this._sessionService.IsAdmin = false;
    // We will clear the Visits History and not retain them
    // this._messageService.setVisits();
    this._router.navigate(['/home'])
  }

  login() {
    // let returnUrl = window.location.pathname;
    // let search = window.location.search;
    let returnUrl = this._router.url;
    let inSearch = <TextField>this.inSearch.nativeElement;
    let search = inSearch.text;
    // returnUrl = search ? returnUrl.concat(search) : returnUrl;
    console.log("AYA ROUTE ", returnUrl);
    if (!returnUrl.includes("/login?")) {
        this._router.navigate(['/login'], { queryParams: {  returnUrl: returnUrl } });
    }
  }

  goCart() {
    console.log("AYA CART");
    this._router.navigate(['/cart'])
  }

  goHome() {
    console.log("AYA HOME");
    this.selectedTab = 0;
    this._router.navigate(['/home'])
  }

  goFeatures() {
    console.log("AYA FEATURES");
    this.selectedTab = 1;
    this._router.navigate(['/features'])
  }

  goGenres() {
    console.log("AYA GENRES");
    this.selectedTab = 2;
    this._router.navigate(['/genres'])
  }

  goInfo() {
    console.log("AYA INFO");
    this.selectedTab = 3;
    this._router.navigate(['/care-menu'])
  }
}
