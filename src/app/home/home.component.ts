import { Component, OnInit } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/common";

import * as dialogs from 'tns-core-modules/ui/dialogs';
// import { HttpClientService } from './services/http-client.service';
// import { HttpClient } from '@angular/common/http';
import { TestService } from './../services/test.service';
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import { OrderItem } from "../models/order-item.model";
import { Product } from "../models/product.model";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    providers: [TestService]
})
export class HomeComponent implements OnInit {

    
    products: Product[] = [
        {Id: 10000000,
        OrganisationId: 1000002,
        ProductTypeId: 1,
        Name: 'Lagunitas',
        Size: 'Pint',
        IsActive: true,
        IsArchived: false},
        {Id: 10000001,
        OrganisationId: 1000002,
        ProductTypeId: 1,
        Name: 'Fosters',
        Size: 'Pint',
        IsActive: true,
        IsArchived: false},
    ]; 

    constructor( private test: TestService ) {}

    ngOnInit(): void {
        // dialogs.alert(this.test.testService()).then(() => {
        //     console.log("started");
        // })
    }

    onItemTap = (args: ItemEventData) => {
        // dialogs.alert(e).then(() => {
        //     console.log("test");
        // });
        // let t = this.test.getUrl();
        // dialogs.alert(t).then(() => {
        //     console.log("test");
        // });
        console.log(this.products[args.index]);
        
        // this.test
        //     .postOrder(this.products[args.index])
            // .subscribe(res => {
            //    console.log(res);   
            // })
        
        this.test.testSendOrder(this.products[args.index])
            .subscribe(res => {
                console.log(res);
            })
        
        dialogs.alert("It should have been sent").then(() => {
            console.log("test");
        });
        // this.http.postOrder(e);
    }
}
