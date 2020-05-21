import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "country"
})
export class CountryPipe implements PipeTransform {
  transform(countrycases: any, countryName: any): any {
    if (!countrycases || !countryName) {
      return countrycases;
    }

    return countrycases.filter(el => {
      return el.country.toLowerCase().indexOf(countryName.toLowerCase()) !== -1;
    });
  }
}
