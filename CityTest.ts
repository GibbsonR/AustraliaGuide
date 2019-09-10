import { GET_CITIES_AROUND_Results } from "src/app/shared/models/GET_CITIES_AROUND_Results";
import { RestaurantSearchModel } from "src/app/shared/models/restaurant.search.modal";

export class CityTest{
    list :GET_CITIES_AROUND_Results[]=[];

all(searchLoad:RestaurantSearchModel){
    this.list = [ 
        new GET_CITIES_AROUND_Results(	233	,"	Adelaide River	",	-13.2495	,	131.1	),
    new GET_CITIES_AROUND_Results(	2238	,"	Batchelor	",	-13.0465045	,	131.027945	),
    new GET_CITIES_AROUND_Results(	2410	,"	Berry Springs	",	-12.709799	,	131.01539	),
    new GET_CITIES_AROUND_Results(	1027	,"	Charlotte	",	-12.795692	,	130.8572	),
    new GET_CITIES_AROUND_Results(	317	,"	Darwin	",	-12.4254	,	130.85	),
    new GET_CITIES_AROUND_Results(	707	,"	Darwin River	",	-12.781112	,	130.96272	),
    new GET_CITIES_AROUND_Results(	834	,"	Holtze	",	-12.4575	,	130.97055	),
    new GET_CITIES_AROUND_Results(	1809	,"	Howard Springs	",	-12.496762	,	131.04457	),
    new GET_CITIES_AROUND_Results(	1799	,"	Humpty Doo	",	-12.5353545	,	131.072065	),
    new GET_CITIES_AROUND_Results(	2831	,"	Lee Point	",	-12.34095	,	130.89316	),
    new GET_CITIES_AROUND_Results(	1139	,"	Litchfield National Park	",	-13.16333	,	130.67802	),
    new GET_CITIES_AROUND_Results(	2513	,"	Marrakai	",	-12.7126235	,	131.40184	),
    new GET_CITIES_AROUND_Results(	3360	,"	Nightcliff	",	-12.39019	,	130.85117	),
    new GET_CITIES_AROUND_Results(	2481	,"	Noonamah	",	-12.63335	,	131.07458	),
    new GET_CITIES_AROUND_Results(	3304	,"	Palmerston	",	-12.48229256	,	130.9840453	),
    new GET_CITIES_AROUND_Results(	922	,"	Rum Jungle	",	-13.02857	,	130.98312	),                
        ];

        let LNGDIGREES = 0.00091 * (searchLoad.maxDistance) * 10
        let LATDEGREES = 0.00091 * (searchLoad.maxDistance) * 10
        let X1LON = searchLoad.Longitude - LNGDIGREES
        let X1LAT = searchLoad.Latitude - LATDEGREES
        let X2LON = searchLoad.Longitude + LNGDIGREES
        let X2LAT = searchLoad.Latitude + LATDEGREES
        let LNGDIGREESLESS = 0.00091 * (searchLoad.minDistance) * 10
        let LATDEGREESLESS = 0.00091 * (searchLoad.minDistance) * 10
        let X1LONLESS = searchLoad.Longitude - LNGDIGREESLESS
        let X1LATLESS = searchLoad.Latitude - LATDEGREESLESS
        let X2LONLESS = searchLoad.Longitude + LNGDIGREESLESS
        let X2LATLESS = searchLoad.Latitude + LATDEGREESLESS

    return this.list.filter(r => 
        (r.CityLatitude >= X1LAT && r.CityLatitude <= X2LAT && r.CityLongitude >= X1LON && r.CityLongitude <= X2LON ) &&
        !(r.CityLatitude >= X1LATLESS && r.CityLatitude <= X2LATLESS && r.CityLongitude >= X1LONLESS && r.CityLongitude <= X2LONLESS )

        
        )    
        .sort().slice();
  
}


}