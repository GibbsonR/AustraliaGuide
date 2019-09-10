export class GET_CITIES_AROUND_Results
{
    /**
     *
     */

    constructor(cityid:number,name :string,lat :number,lon:number) {
        this.CityId = cityid;
        this.CityName = name;
        this.CityLatitude = lat;
        this.CityLongitude = lon;
        
    }


    public CityId : number;
    public CityLatitude: number;
    public CityLongitude: number;
    public CityName: string;
    
}