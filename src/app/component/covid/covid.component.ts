import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-covid",
  templateUrl: "./covid.component.html",
  styleUrls: ["./covid.component.css"]
})
export class CovidComponent implements OnInit {
  public allcases: any;
  public countrycases: any;
  public countryName: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllCases();
    this.getAllCountryCases();
  }

  getAllCases() {
    const daily_updated_url = "https://corona.lmao.ninja/v2/all?yesterday";
    this.http.get(daily_updated_url).subscribe(res => {
      console.log(res);
      this.allcases = res;
    });
  }

  getAllCountryCases() {
    const country_cases_url =
      "https://corona.lmao.ninja/v2/countries?yesterday&sort";
    this.http.get(country_cases_url).subscribe(res => {
      this.countrycases = res;
    });
  }
}
