import { Injectable } from "@angular/core";
import { TokenModel } from '../models/tokenmodel';
import { UserAccountModel } from '../models/userAccountModel';
import { Order } from "../models/orderModel";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
export class SessionService {

    private _token: TokenModel = { token: "" };
    private _userAccount: UserAccountModel = {
        userId: "", userName: "",
        firstName: "", lastName: "",
        address: "", city: "", state: "", stateId: 0, zipCode: "",
        cellPhone: "", homePhone: "",
        email: "", created: "",
        creditCardType: "", creditCardNumber: "", creditCardExpiration: ""
    };
    private _order: Order;
    private _isAdmin: boolean = false;

    private _visited: number[] = [];

    isAuthenticated(): boolean {
        // // We get the JWT from localStorage
        // let token = localStorage.getItem('jwt');
        // this._token = { token: token }
        // // We also store the decoded JSON from this JWT
        // //this.decodedJwt = this.jwt && (<any>window).jwt_decode(this.jwt);

        if (this._token && this._token.token) {
            return true
        }
        return false;
    }

    get UserToken(): TokenModel {
        // // We get the JWT from localStorage
        // let token = localStorage.getItem('jwt');
        // this._token = { token: token }

        return this._token;
    }

    set UserToken(token: TokenModel) {
        // // We set the JWT into localStorage
        // localStorage.setItem('jwt', token.token);

        this._token = token;
    }

    get Order(): Order {
        return this._order;
    }
    set Order(order: Order) {
        this._order = order;
    }

    clearSession() {
        // // We simply remove JWT from localStorage
        // localStorage.removeItem('jwt');

        this._token = null;
        this._userAccount = {
            userId: "", userName: "",
            firstName: "", lastName: "",
            address: "", city: "", state: "", stateId: 0, zipCode: "",
            cellPhone: "", homePhone: "",
            email: "", created: "",
            creditCardType: "", creditCardNumber: "", creditCardExpiration: ""
        };
    
        this._order = null;
    }

    get UserAccount(): UserAccountModel {
        return this._userAccount;
    }

    set UserAccount(userAccount: UserAccountModel) {
        this._userAccount = userAccount;
    }

    get IsAdmin(): boolean {
        return this._isAdmin;
    }
    
    set IsAdmin(isAdmin: boolean) {
        this._isAdmin = isAdmin;
    }

    get VisitedProducts(): number[] {
        return _.uniq(this._visited);
    }

    addVisitedProduct(productId: number) {
        this._visited.push(productId);
    }
    clearVisitedProducts(): void {
        this._visited = [];
    }
}
