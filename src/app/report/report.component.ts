import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import PrintJS from 'print-js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})

export class ReportComponent implements OnInit {

  title = 'app-print';
  NUM_INVOICE: string;
  DATE: string;
  invoice: any = [];
  qrInvoice = '123|3432|324kj|4rrr';

  ngOnInit() {
    this.invoice = {"serieCorrelative":null,"issueDate":"2018-12-06","referenceDate":"2018-12-06","typeDocument":"01",
    "currency":"PEN","subTotal":8310.02,"subTotalString":"8310.02","igv":1495.80,"igvString":"1495.80",
    "total":9805.82,"totalString":"9805.82",
    "supplier":{"numberDocument":"20603422806","typeDocument":0,"nameLegal":" ","nameCommercial":"INKAS DEV","email":null},
    "customer":{"numberDocument":"20603422806","typeDocument":6,
        "nameLegal":"COMPAÑIA PERUANA DE INVESTIGACION & DESARROLLO TECNOLOGICO S.A.C.","nameCommercial":"COMPAÑIA PERUANA DE INVESTIGACION & DESARROLLO TECNOLOGICO S.A.C.","email":null},
    "items":[
        {"numberLine":1,"quantity":1,"unitCode":"NIU","nameProduct":"BALDE JOY 13 LL","valueUnit":null,"valueUnitString":null,"priceUnit":7.02,"priceUnitString":"7.02","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":2,"quantity":10,"unitCode":"NIU","nameProduct":"TAPER G&G CUADRADO C/. REJILLA 1.6 LT","valueUnit":null,"valueUnitString":null,"priceUnit":10.68,"priceUnitString":"10.68","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"},
        {"numberLine":3,"quantity":100,"unitCode":"NIU","nameProduct":"CAJA ORGANIZADORA DE USO PESADO BUNKER 1","valueUnit":null,"valueUnitString":null,"priceUnit":96.92,"priceUnitString":"96.92","igvItem":null,"igvItemString":null,"taxName":"IGV","taxValue":null,"codigoTipoAfectacionIGV":"10"}],
        "serie":"F421","correlative":7,"originClient":"API","issueTime":"23:14",
        "invoiceName":"FACTURA DE  VENTA ELECTRÓNICA","address":"LIMA","cashier":"prueba","posName":"PV LIMA 01",
        "totalLetter":"NUEVE MIL OCHOCIENTOS CINCO 82/100 SOLES.","isProduction":false,"status":"06",
        "logoWidth": "20%", "logoTop": "-20", "logoLeft": "0"};
  }



  constructor(){

  }

  print(): void {

    
      setTimeout(() => { 
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
       // printContents = printContents.replace('|NUM_INVOICE|', 12345);
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <title>Print tab</title>
              <style>
                .invoice-box{
                  max-width:800px;
                  
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
    
     
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
        }, 200);
    
}
}


