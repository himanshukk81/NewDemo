import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Http ,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';



import { Observable } from 'rxjs/Observable';
import { HttpClient ,HttpHeaders,HttpParams} from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherData:any;
  user:any={};
  tdsAmount:number=0;
  tdsIncomeValue:number=0;

  weatherUrl: Observable<any>;
 




  constructor(public navCtrl: NavController,public httpClient:HttpClient) {

    var url="http://api.apixu.com/v1/current.json?key=3aded804caee4e8b83991410180208&q=new delhi"
    this.weatherUrl = this.httpClient.get(url);
    this.weatherUrl
    .subscribe(data => {
      console.log("data=="+data);

      this.weatherData=data['current'];
      this.weatherData['iconCustom']=url+this.weatherData.condition.icon;
      // this.weatherData=JSON.stringify(data);
      console.log('weather data: ', this.weatherData);
    },(err)=>{
      console.log("Error===="+err);
    })
  }


  findTDS()
  {
    if(this.user.age>65)
    {
      this.calculateTDS(2,this.user.annualIncome)
    }

    else if(this.user.gender=='M')
    {
      this.calculateTDS(1,this.user.annualIncome)
    }

    else if(this.user.gender=='F')
    {
      this.calculateTDS(2,this.user.annualIncome)
    }
  }

  calculateTDS(tax_slab,income)
  {
    this.tdsAmount=0;
    if(tax_slab==1)
    {
      if(income<=150000)
      {
         this.tdsAmount;
      }
      if(income>150000 && income<=250000)
      {
        this.tdsAmount=((income-150000)*10)/100;
      }

      else if(income>250000 && income<=500000)
      {
        this.tdsAmount=((250000-150001)*10/100+(income-250000)*15/100);
      }

      else if(income>500000)
      {
        this.tdsAmount=(250000-150001)*10/100+(500000-250001)*15/100+(income-500000)*20/100;
      }
      console.log("TDS Amount==="+this.tdsAmount);
       this.tdsAmount;
    }
    else 
    {
      if(income<=180000)
      {
         this.tdsAmount;
      }

      if(income>180000 && income<=250000)
      {
        this.tdsAmount=(income-180000)*10/100;
      }

      else if(income>250000 && income<=500000)
      {
        this.tdsAmount=(250000-180001)*10/100 +(income-250001)*15/100;
      }

      else if(income>500000)
      {
        this.tdsAmount=(250000-180001)*10/100 +(500000-250001)*15/100 +(income-500000)*20/100;
      }
       this.tdsAmount;
    }


    this.triggerNotification();
  }

  triggerNotification()
  {
    var message = { 
      app_id: "ee4c154e-c94f-41d6-a980-5824070a3008",
      contents: {"en": "English Message"},
      included_segments: ["All"]
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Basic MmYxM2RkMDgtZWIyNS00MDkxLWJmMTEtN2QxNWIzYmU1MWU2"
      })
    };
 
    var oneSignalUrl = this.httpClient.post("https://onesignal.com/api/v1/notifications",message,httpOptions);
    oneSignalUrl
    .subscribe(data => {
      console.log("data=="+data);
      // this.weatherData=JSON.stringify(data);
      console.log('weather data: ', this.weatherData);
    },(err)=>{
      console.log("Error===="+err);
    })
    
  }    

}
