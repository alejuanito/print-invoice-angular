import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import PrintJS from 'print-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app-print';
  NUM_INVOICE: string;
  DATE: string;

  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';

  ngOnInit() {
  }



  constructor(){

  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    printContents = printContents.replace('|NUM_INVOICE|', 12345);
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
            .invoice-box{
              max-width:800px;
              margin:auto;
              padding:30px;
              border:1px solid #eee;
              box-shadow:0 0 10px rgba(0, 0, 0, .15);
              font-size:16px;
              line-height:24px;
              font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
              color:#555;
          }
          
          .invoice-box table{
              width:100%;
              line-height:inherit;
              text-align:left;
          }
          
          .invoice-box table td{
              padding:5px;
              vertical-align:top;
          }
          
          .invoice-box table tr td:nth-child(2){
              text-align:right;
          }
         
          
          .invoice-box table tr.top table td.title{
              font-size:45px;
              line-height:45px;
              color:#333;
          }
          
          .invoice-box table tr.information table td{
              padding-bottom:40px;
          }
          
          .invoice-box table tr.heading td{
              background:#eee;
              border-bottom:1px solid #ddd;
              font-weight:bold;
          }
          
         
          
          .invoice-box table tr.item td{
              border-bottom:1px solid #eee;
          }
          
          .invoice-box table tr.item.last td{
              border-bottom:none;
          }
          
          .invoice-box table tr.total td:nth-child(2){
              border-top:2px solid #eee;
              font-weight:bold;
          }
          .invoice-box table tr.name-invoice{
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            
          }
              
          
          @media only screen and (max-width: 600px) {
              .invoice-box table tr.top table td{
                  width:100%;
                  display:block;
                  text-align:center;
              }
              
              .invoice-box table tr.information table td{
                  width:100%;
                  display:block;
                  text-align:center;
              }

              
          }

          #border-document {
              border: 2px solid #F0F0F0;
              padding: 10px;
              border-radius: 25px;
          }
          #border-total {
              border: 2px solid #F0F0F0;
              padding: 10px;
              border-radius: 25px;
          }

          .client-data{
              width: 65% ;
          }
          .company-data{
              width: 62% ;
          }
          .invoice-box table tr.heading td.head-description{
              width: 60% ;
              text-align:center;
          }
          .invoice-box table tr.heading td.head-quantity{
              width: 5% ;
              text-align:center;
          }
          .invoice-box table tr.heading td.head-price{
              width: 15% ;
              text-align:center;
          }
          .invoice-box table tr.heading td.head-total{
              width: 20% ;
              text-align:center;
          }
          .invoice-box table tr.item td.description{
              width: 60% ;
          }
          .invoice-box table tr.item td.quantity{
              width: 5% ;
              text-align:center;
          }
          .invoice-box table tr.item td.price{
              width: 15% ;
              text-align:right;
          }
          .invoice-box table tr.item td.total{
              width: 20% ;
              text-align:right;
          }
          .invoice-box table tr.total td {              
              text-align:right;
              border-top: 0px !important;
          }
          .invoice-box table tr.qr td {              
              text-align:center;              
          }

          .logo-company {
            width: 10%;
            max-width: 300px;
            position: static;
            top: 0;
            right: 950px;
            max-width:300px;
          }
 
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
}


