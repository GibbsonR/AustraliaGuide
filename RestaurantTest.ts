import { GET_RESTAURANTS_AROUND_Results } from "src/app/shared/models/GET_RESTAURANTS_AROUND_Results";
import { GET_IMAGES } from "src/app/shared/models/GET_IMAGES";
import { GET_IMAGE1 } from "src/app/shared/models/GET_IMAGE1";
import { ImagesTest } from "src/app/service/Test/ImageTest";
import { Address } from "src/app/shared/models/restaurant.address.model";
import { RestaurantSearchModel } from "src/app/shared/models/restaurant.search.modal";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { iif } from "rxjs";

export class RestaurantTest{
    start1 : Number;
    end1:Number;
    list :GET_RESTAURANTS_AROUND_Results[]=[];
    /**
     *
     */
    constructor() {
        this.list = [
            new GET_RESTAURANTS_AROUND_Results(	1	,	29662	,"	Airport Tavern	","	227 McMillans Rd, Darwin, NT, 810	","	Bar, Pub, Australian	",	-12.394392	,	130.8773	,	34	),
new GET_RESTAURANTS_AROUND_Results(	2	,	37919	,"	Alawa Fish and Chips	","	51 Alawa Cres, Darwin, NT, 810	","	Seafood	",	-12.37859	,	130.87431	,	34	),
new GET_RESTAURANTS_AROUND_Results(	3	,	52778	,"	Alfonsino's Italian Porchetta Bar and Pizzeria	","	20/69 Mitchell St, Darwin, NT, 800	","	Italian, Pizza, Cafe, Vegetarian Friendly	",	-12.463088	,	130.83913	,	34	),
new GET_RESTAURANTS_AROUND_Results(	4	,	37912	,"	Alley Cats Patisserie	","	U 14 69 Mitchell St, Darwin, NT, 800	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462931	,	130.83934	,	34	),
new GET_RESTAURANTS_AROUND_Results(	5	,	52910	,"	Amazing Thailand	","	58 Mitchell St, Darwin, NT, 800	","	Asian, Thai, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462588	,	130.83893	,	34	),
new GET_RESTAURANTS_AROUND_Results(	6	,	8669	,"	Amma's Cafe	","	Vic Arcade, 27 The Mall, Darwin, NT, 800	","	Cafe, Sri Lankan, Gluten Free Options	",	-12.46415	,	130.8428	,	34	),
new GET_RESTAURANTS_AROUND_Results(	7	,	8999	,"	Aqua	","	116 Esplanade, Darwin, NT, 800	","	Australian, Mediterranean	",	-12.46099	,	130.83624	,	34	),
new GET_RESTAURANTS_AROUND_Results(	8	,	21655	,"	Aroma Lounge	","	62 Marina Bvd, Darwin, NT, 820	","	International, Australian, Bar, Pub, Vegetarian Friendly	",	-12.425919	,	130.9333	,	34	),
new GET_RESTAURANTS_AROUND_Results(	9	,	24887	,"	Asian Gateway Restaurant	","	58 Aralia St, Darwin, NT, 810	","	Asian, Thai, Vegetarian Friendly	",	-12.3794	,	130.84885	,	34	),
new GET_RESTAURANTS_AROUND_Results(	10	,	9092	,"	Asian Pot	","	21 Knuckey St, Darwin, NT, 800	","	Asian, Korean	",	-12.46328	,	130.84134	,	34	),
new GET_RESTAURANTS_AROUND_Results(	11	,	8863	,"	Ayuriz Cafe Restaurant	","	21 Knuckey St, Darwin, NT, 800	","	Cafe, Asian, Indonesian, Halal	",	-12.46328	,	130.84134	,	34	),
new GET_RESTAURANTS_AROUND_Results(	12	,	25552	,"	Bahn Thai Restaurant	","	Cnr Rolyat and Maluka Dr, Palmerston, Darwin, NT, 830	","	Thai	",	-12.4818	,	130.98795	,	34	),
new GET_RESTAURANTS_AROUND_Results(	13	,	12331	,"	Bahn Thai Restaurant	","	Alatai Apartments 7 Finniss St, Darwin, NT, 800	","	Asian, Thai	",	-12.45368	,	130.83855	,	34	),
new GET_RESTAURANTS_AROUND_Results(	14	,	21383	,"	Bakers Delight	","	Mitchell Centre U 17 55-59 Mitchell St, Darwin, NT, 800	","	Cafe, Fast Food, Australian	",	-12.463987	,	130.8403	,	34	),
new GET_RESTAURANTS_AROUND_Results(	15	,	41321	,"	Bakers Delight Casuarina Square	","	Casuarina Square 247 Trower Rd, Casuarina, NT, 810	","	Restaurant	",	-12.376277	,	130.88135	,	34	),
new GET_RESTAURANTS_AROUND_Results(	16	,	45514	,"	Bali Bar	","	20 Conacher St, Darwin, NT, 820	","	Bar, Australian	",	-12.43557	,	130.83405	,	34	),
new GET_RESTAURANTS_AROUND_Results(	17	,	31388	,"	Ballantynes Fish Chips	","	Shop 5 35 Granites Dr, Palmerston, NT, 832	","	Fast Food, Australian, Seafood	",	-12.50291	,	130.9931	,	34	),
new GET_RESTAURANTS_AROUND_Results(	18	,	45654	,"	Bamboo Lounge	","	U 17 90 Frances Bay Dr, Darwin, NT, 820	","	Chinese, Asian, Thai, Nepali, Vegan Options	",	-12.448313	,	130.84967	,	34	),
new GET_RESTAURANTS_AROUND_Results(	19	,	8802	,"	Bangkok Hut Restaurant	","	11 Knuckey St, Darwin, NT, 800	","	Thai, Vietnamese, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.463753	,	130.84084	,	34	),
new GET_RESTAURANTS_AROUND_Results(	20	,	21717	,"	Banh Appetit	","	69 Mitchell St, Darwin, NT, 800	","	Asian, Thai, Vietnamese, Street Food, Taiwanese	",	-12.46294	,	130.83925	,	34	),
new GET_RESTAURANTS_AROUND_Results(	21	,	49238	,"	Bar Zushi	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	Japanese, Sushi, Asian, Vegetarian Friendly	",	-12.37481	,	130.88277	,	34	),
new GET_RESTAURANTS_AROUND_Results(	22	,	16970	,"	Bar.B.Q Tonight	","	7 Kitchener Drive, Darwin, NT, 800	","	Barbecue, Middle Eastern, Pakistani, Indian, Grill	",	-12.46695	,	130.84637	,	34	),
new GET_RESTAURANTS_AROUND_Results(	23	,	21582	,"	Barra Bar	","	44 Mitchell St, Darwin, NT, 800	","	Fast Food, Australian	",	-12.46368	,	130.84059	,	34	),
new GET_RESTAURANTS_AROUND_Results(	24	,	37858	,"	Baskin Robbin	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	American, International, Australian	",	-12.375874	,	130.88213	,	34	),
new GET_RESTAURANTS_AROUND_Results(	25	,	36928	,"	Batchelor General Store and Take Away	","	Batchelor Lpo 22 Tarkarri Rd, Batchelor, NT, 845	","	Australian, Argentinean, South American	",	-13.04639	,	131.0274	,	34	),
new GET_RESTAURANTS_AROUND_Results(	26	,	29467	,"	Beachfront Hotel	","	342 Casuarina Dr, Darwin, NT, 810	","	Bar, Pub, Australian, Vegetarian Friendly, Vegan Options	",	-12.376648	,	130.8587	,	34	),
new GET_RESTAURANTS_AROUND_Results(	27	,	12265	,"	Bellakay	","	Centerpoint Arcade 48 Smith St, Darwin, NT, 800	","	Asian, Indonesian	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	28	,	20528	,"	Bellygood Noodle & Sushi Bar	","	12 Vereker St, Humpty Doo, NT, 836	","	Restaurant	",	-12.573942	,	131.1006	,	34	),
new GET_RESTAURANTS_AROUND_Results(	29	,	30361	,"	Ben & Sams Cafe & Bakehouse	","	U 2 14 Palmerston Cct, Palmerston, NT, 830	","	Cafe, Australian, Vegetarian Friendly	",	-12.48051	,	130.98407	,	34	),
new GET_RESTAURANTS_AROUND_Results(	30	,	8541	,"	Ben's Bakehouse	","	26 Knuckey St, Darwin, NT, 800	","	Cafe, Australian, Fast Food	",	-12.46138	,	130.84361	,	34	),
new GET_RESTAURANTS_AROUND_Results(	31	,	55260	,"	Berry Springs Tavern	","	795 Cox Peninsula Rd, Berry Springs, NT, 838	","	Bar, Pub, Australian, Contemporary, Fusion, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.700618	,	131.01624	,	34	),
new GET_RESTAURANTS_AROUND_Results(	32	,	33654	,"	Besser Kitchen & Brew Bar	","	116 Coonawarra Rd, Darwin, NT, 820	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.430718	,	130.88518	,	34	),
new GET_RESTAURANTS_AROUND_Results(	33	,	3419	,"	Blue Water Bistro	","	8 Atkins Drive, Darwin, NT, 820	","	Seafood	",	-12.43951	,	130.8344	,	34	),
new GET_RESTAURANTS_AROUND_Results(	34	,	17128	,"	Bobar	","	21 Knuckey St, Darwin, NT, 800	","	Chinese, Taiwanese	",	-12.46308	,	130.84114	,	34	),
new GET_RESTAURANTS_AROUND_Results(	35	,	45488	,"	Bogarts Bar & Grill	","	52 Gregory St, Darwin, NT, 820	","	Steakhouse, Bar, Australian	",	-12.43245	,	130.84483	,	34	),
new GET_RESTAURANTS_AROUND_Results(	36	,	45712	,"	Brumby's Bakery - Parap	","	Parap Road, Darwin, NT, 804	","	Australian, Cafe	",	-12.42864	,	130.84386	,	34	),
new GET_RESTAURANTS_AROUND_Results(	37	,	56716	,"	Buffs Club	","	Stuart Highway, Darwin, NT, 820	","	Bar, Pub, Australian	",	-12.42523	,	130.88567	,	34	),
new GET_RESTAURANTS_AROUND_Results(	38	,	57055	,"	Bumble Bean Cafe	","	5 Westralia St, Darwin, NT, 820	","	Cafe, Australian	",	-12.44469	,	130.84189	,	34	),
new GET_RESTAURANTS_AROUND_Results(	39	,	45375	,"	Cafe 21	","	28 Smith St, Darwin, NT, 800	","	Cafe, Australian, International, Deli, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.464413	,	130.84311	,	34	),
new GET_RESTAURANTS_AROUND_Results(	40	,	8777	,"	Cafe 21 Smith	","	109 Smith St, Darwin, NT, 800	","	Thai, Australian, Cafe, Vegetarian Friendly	",	-12.457222	,	130.83556	,	34	),
new GET_RESTAURANTS_AROUND_Results(	41	,	52992	,"	Cafe 24	","	Winnelie U 1 59 Reichardt Rd, Darwin, NT, 820	","	Restaurant	",	-12.42839	,	130.86224	,	34	),
new GET_RESTAURANTS_AROUND_Results(	42	,	31432	,"	Cafe 300	","	7 Coffey S, Palmerston, NT, 830	","	Cafe, Australian	",	-12.47448	,	130.95787	,	34	),
new GET_RESTAURANTS_AROUND_Results(	43	,	49406	,"	Cafe Ah Toy	","	10 Atkins Drive, Darwin, NT, 820	","	Restaurant	",	-12.43951	,	130.8344	,	34	),
new GET_RESTAURANTS_AROUND_Results(	44	,	29289	,"	Cafe Bellissimo	","	356 Bagot Rd, Darwin, NT, 810	","	Cafe, Australian, Mediterranean, Vegetarian Friendly	",	-12.391457	,	130.85747	,	34	),
new GET_RESTAURANTS_AROUND_Results(	45	,	24657	,"	Cafe Central	","	U 1 29 Rossiter St, Darwin, NT, 810	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.380176	,	130.85956	,	34	),
new GET_RESTAURANTS_AROUND_Results(	46	,	3471	,"	Cafe Del' Art	","	Tio Building 24 Mitchell St, Darwin, NT, 800	","	Cafe, Australian	",	-12.46502	,	130.84225	,	34	),
new GET_RESTAURANTS_AROUND_Results(	47	,	8647	,"	Cafe Eco	","	1 Edmunds St, Darwin, NT, 800	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462269	,	130.84091	,	34	),
new GET_RESTAURANTS_AROUND_Results(	48	,	3393	,"	Cannons Kitchen	","	631 Stuart Highway Berrimah, Darwin, NT, 820	","	Cafe, Australian, Vegetarian Friendly, Vegan Options	",	-12.43399	,	130.90851	,	34	),
new GET_RESTAURANTS_AROUND_Results(	49	,	12476	,"	Cape Adieu Harbour Cruises & Charters	","	Stokes Hill Wharf, Darwin, NT, 800	","	Seafood, Australian	",	-12.470759	,	130.84805	,	34	),
new GET_RESTAURANTS_AROUND_Results(	50	,	52673	,"	Captain's Kitchen	","	11 Fannie Bay Pl, Darwin, NT, 820	","	Seafood, Australian	",	-12.423493	,	130.83665	,	34	),
new GET_RESTAURANTS_AROUND_Results(	51	,	37976	,"	Casuarina All Sports Club	","	269 Trower Road, Darwin, NT, 810	","	Bar	",	-12.372628	,	130.8831	,	34	),
new GET_RESTAURANTS_AROUND_Results(	52	,	13301	,"	Catalyst Cafe & Grill	","	Finnis Street, Darwin, NT, 800	","	Restaurant	",	-12.45341	,	130.83865	,	34	),
new GET_RESTAURANTS_AROUND_Results(	53	,	30600	,"	Cazalys Palmerston Club	","	10 Temple Terrace, Palmerston, NT, 830	","	Asian, Bar, Pub, Australian, Vegetarian Friendly	",	-12.479978	,	130.98703	,	34	),
new GET_RESTAURANTS_AROUND_Results(	54	,	17337	,"	Chapel Lane Cafe	","	U 3 28 Mitchell St, Darwin, NT, 800	","	Cafe, Australian	",	-12.46464	,	130.84193	,	34	),
new GET_RESTAURANTS_AROUND_Results(	55	,	52856	,"	Char Restaurant	","	The Esplanade, Darwin, NT, 800	","	Steakhouse, Vegetarian Friendly, Gluten Free Options	",	-12.465116	,	130.8399	,	34	),
new GET_RESTAURANTS_AROUND_Results(	56	,	21406	,"	Chatime	","	55 Mitchell St, Darwin, NT, 800	","	Restaurant	",	-12.46399	,	130.84013	,	34	),
new GET_RESTAURANTS_AROUND_Results(	57	,	41425	,"	Chow! A Taste of South East Asia	","	19 Kitchener Dr, Darwin, NT, 800	","	Chinese, Asian, Vietnamese, Malaysian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.467166	,	130.84589	,	34	),
new GET_RESTAURANTS_AROUND_Results(	58	,	57685	,"	City Pizza	","	Cnr Cavenagh and Knuckey Streets, Darwin, NT, 801	","	Pizza, Fast Food, Australian, Vegetarian Friendly	",	-12.462071	,	130.84259	,	34	),
new GET_RESTAURANTS_AROUND_Results(	59	,	12323	,"	Cold Rock Ice Creamery Darwin	","	Mitchell Centre, Darwin, NT, 800	","	Restaurant	",	-12.46229	,	130.839	,	34	),
new GET_RESTAURANTS_AROUND_Results(	60	,	49471	,"	Colquhoun's Coffee	","	U 8 63 Winnellie Rd, Darwin, NT, 820	","	Cafe, Asian, Healthy, Australian	",	-12.42777	,	130.87994	,	34	),
new GET_RESTAURANTS_AROUND_Results(	61	,	33961	,"	Cornucopia Museum Cafe	","	19 Conacher Street, Darwin, NT, 820	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.437126	,	130.83308	,	34	),
new GET_RESTAURANTS_AROUND_Results(	62	,	5143	,"	Corroboree Park Tavern	","	Lot 3095 Arnhem Hwy, Marrakai, NT, 822	","	Australian, Bar	",	-12.66018	,	131.33629	,	34	),
new GET_RESTAURANTS_AROUND_Results(	63	,	30357	,"	Covai Cafe	","	U 8 14 Palmerston Cct, Palmerston, NT, 830	","	Indian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.480651	,	130.98418	,	34	),
new GET_RESTAURANTS_AROUND_Results(	64	,	45681	,"	Cove	","	Gilruth Avenue, Darwin, NT, 820	","	Steakhouse, Australian, Gluten Free Options	",	-12.4472	,	130.83102	,	34	),
new GET_RESTAURANTS_AROUND_Results(	65	,	21774	,"	Crepe-Escape	","	E 7 19 Kitchener Dr, Darwin, NT, 800	","	Cafe, Australian	",	-12.468506	,	130.84659	,	34	),
new GET_RESTAURANTS_AROUND_Results(	66	,	38232	,"	Crust	","	36 Parap Rd, Darwin, NT, 820	","	Pizza, Fast Food, Vegetarian Friendly, Vegan Options	",	-12.43156	,	130.84377	,	34	),
new GET_RESTAURANTS_AROUND_Results(	67	,	3265	,"	Crustaceans	","	Stokes Hill Wharf, Darwin, NT, 800	","	Seafood, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.471055	,	130.84814	,	34	),
new GET_RESTAURANTS_AROUND_Results(	68	,	56919	,"	Cullen Bay Marina	","	3/68 Marina Boulevard, Darwin, NT, 801	","	Restaurant	",	-12.451589	,	130.82076	,	34	),
new GET_RESTAURANTS_AROUND_Results(	69	,	49439	,"	Curry on Naan	","	109/12 Salonika Street, Darwin, NT, 820	","	Indian	",	-12.44031	,	130.83923	,	34	),
new GET_RESTAURANTS_AROUND_Results(	70	,	13228	,"	Curve Restaurant	","	7 Kitchener Dr, Darwin, NT, 800	","	Australian, Vegetarian Friendly, Gluten Free Options	",	-12.46695	,	130.84637	,	34	),
new GET_RESTAURANTS_AROUND_Results(	71	,	3525	,"	Damasquino Restaurant	","	Marina BLVD, Darwin, NT, 820	","	Mediterranean, Lebanese	",	-12.45052	,	130.82327	,	34	),
new GET_RESTAURANTS_AROUND_Results(	72	,	46481	,"	Darwin 24/7 Store	","	12/14 Knuckey Street, Darwin, NT, 800	","	Lebanese, Mediterranean, Australian	",	-12.46103	,	130.84299	,	34	),
new GET_RESTAURANTS_AROUND_Results(	73	,	12197	,"	Darwin Fisherman's Wharf Eatery	","	Frances Bay Drive, Darwin, NT, 800	","	Seafood, Australian, Fast Food	",	-12.45904	,	130.84752	,	34	),
new GET_RESTAURANTS_AROUND_Results(	74	,	21513	,"	Darwin Kebab & Pizza	","	5/798 Vanderlin Drive, Darwin, NT, 800	","	Pizza, Fast Food, Turkish, Halal	",	-12.43214	,	130.9229	,	34	),
new GET_RESTAURANTS_AROUND_Results(	75	,	45203	,"	Darwin Laksa	","	1 Maria Liveris Drv Mindil Beach, Darwin, NT, 810	","	Asian, Malaysian, Vegetarian Friendly, Vegan Options	",	-12.445133	,	130.83157	,	34	),
new GET_RESTAURANTS_AROUND_Results(	76	,	21608	,"	Darwin Plaza Asian Cuisine	","	U 4 41 Smith St, Darwin, NT, 800	","	Asian	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	77	,	55243	,"	Darwin River Tavern	","	195 Darwin River Rd, Darwin River, NT, 841	","	Bar, Pub, Australian, Vegan Options, Vegetarian Friendly	",	-12.781112	,	130.96272	,	34	),
new GET_RESTAURANTS_AROUND_Results(	78	,	52504	,"	Darwin RSL	","	27 Cavenagh St, Darwin, NT, 800	","	Bar, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462447	,	130.84274	,	34	),
new GET_RESTAURANTS_AROUND_Results(	79	,	29384	,"	Darwin Sailing Club Waterfront Bistro	","	Atkins Drive, Darwin, NT, 820	","	Asian, Australian, Seafood, Vegetarian Friendly, Gluten Free Options	",	-12.429356	,	130.8356	,	34	),
new GET_RESTAURANTS_AROUND_Results(	80	,	29438	,"	Darwin Trailer Boat Club Blue Water Bistro	","	8 Atkins Drive, Darwin, NT, 820	","	Asian, Contemporary, Pub, Bar, Australian, Vegetarian Friendly, Gluten Free Options, Vegan Options	",	-12.427797	,	130.83562	,	34	),
new GET_RESTAURANTS_AROUND_Results(	81	,	12448	,"	DBar & Restaurant	","	81 Smith St, Darwin, NT, 800	","	Australian	",	-12.46063	,	130.83862	,	34	),
new GET_RESTAURANTS_AROUND_Results(	82	,	29224	,"	De La Plage	","	Darribah Road, Darwin, NT, 801	","	French, Vegan Options, Vegetarian Friendly, Gluten Free Options	",	-12.361268	,	130.86807	,	34	),
new GET_RESTAURANTS_AROUND_Results(	83	,	8491	,"	Digger's Bistro	","	106 Stuart Highway, Adelaide River, NT, 846	","	Bar, Pub, Australian	",	-13.238703	,	131.10631	,	34	),
new GET_RESTAURANTS_AROUND_Results(	84	,	33788	,"	Dimitrios Speciality Cakes	","	1 Eric St, Darwin, NT, 810	","	Greek	",	-12.37827	,	130.87466	,	34	),
new GET_RESTAURANTS_AROUND_Results(	85	,	48865	,"	Domino's Pizza	","	283 Trower Road, Darwin, NT, 810	","	Pizza, Fast Food, Italian	",	-12.371862	,	130.88359	,	34	),
new GET_RESTAURANTS_AROUND_Results(	86	,	33598	,"	Domino's Pizza	","	159 Dick Ward Dr, Darwin, NT, 810	","	Italian, Pizza	",	-12.390074	,	130.85081	,	34	),
new GET_RESTAURANTS_AROUND_Results(	87	,	3209	,"	Domino's Pizza	","	Stuart Highway, Darwin, NT, 835	","	Pizza, Italian	",	-12.42523	,	130.88567	,	34	),
new GET_RESTAURANTS_AROUND_Results(	88	,	17031	,"	Domino's Pizza	","	109 Smith St, Darwin, NT, 800	","	Pizza, Fast Food, Italian, Vegetarian Friendly	",	-12.457149	,	130.83554	,	34	),
new GET_RESTAURANTS_AROUND_Results(	89	,	8750	,"	Dukes Cafe + Eatery	","	43 Knuckey St, Darwin, NT, 800	","	Cafe, Australian, American, Vegetarian Friendly, Gluten Free Options, Vegan Options	",	-12.461148	,	130.84335	,	34	),
new GET_RESTAURANTS_AROUND_Results(	90	,	35500	,"	Eagle Boys Pizza	","	15 Temple Tce, Palmerston, NT, 830	","	Pizza	",	-12.48367	,	130.9855	,	34	),
new GET_RESTAURANTS_AROUND_Results(	91	,	52477	,"	Eat A Pizza	","	1/57 Marina Blvd, Darwin, NT, 820	","	Italian, Pizza, Vegetarian Friendly, Gluten Free Options	",	-12.450964	,	130.82211	,	34	),
new GET_RESTAURANTS_AROUND_Results(	92	,	24828	,"	Eat at Martins	","	6 Caryota Ct, Darwin, NT, 810	","	Cafe, Australian, Gluten Free Options, Vegetarian Friendly, Vegan Options	",	-12.400281	,	130.852	,	34	),
new GET_RESTAURANTS_AROUND_Results(	93	,	46421	,"	Elatte Cafe	","	28 Progress Drive Nightcliff, Darwin, NT, 812	","	Restaurant	",	-12.38778	,	130.85133	,	34	),
new GET_RESTAURANTS_AROUND_Results(	94	,	21748	,"	Elements Poolside Bar & Bistro	","	901 Stuart Hwy, Holtze, NT, 829	","	Bar, Australian, Vegetarian Friendly	",	-12.4575	,	130.97055	,	34	),
new GET_RESTAURANTS_AROUND_Results(	95	,	46458	,"	Emilio's Cafe	","	641 Stuart Highway, Darwin, NT, 828	","	Italian, Asian, Australian	",	-12.43	,	130.9165	,	34	),
new GET_RESTAURANTS_AROUND_Results(	96	,	45321	,"	Essence Restaurant	","	1 Henry Wrigley Drive, Darwin, NT, 812	","	Australian, Vegetarian Friendly, Gluten Free Options	",	-12.40218	,	130.8792	,	34	),
new GET_RESTAURANTS_AROUND_Results(	97	,	38212	,"	Eva's Botanical Gardens Cafe	","	Gardens Road, Darwin, NT, 800	","	Australian, Gluten Free Options	",	-12.44624	,	130.83598	,	34	),
new GET_RESTAURANTS_AROUND_Results(	98	,	41355	,"	Exotic North Indian Cuisine	","	2/52 Marina Boulevard, Darwin, Australia	","	Indian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.450756	,	130.82286	,	34	),
new GET_RESTAURANTS_AROUND_Results(	99	,	24758	,"	Famished	","	82 Nightcliff Rd, Darwin, NT, 810	","	Cafe, Australian, Vegetarian Friendly, Vegan Options	",	-12.379984	,	130.8518	,	34	),
new GET_RESTAURANTS_AROUND_Results(	100	,	29562	,"	Fannie Bay Cool Spot	","	1 Keith Lane, Darwin, NT, 820	","	Cafe, Australian, Vegan Options, Vegetarian Friendly, Gluten Free Options	",	-12.42426	,	130.83638	,	34	),
new GET_RESTAURANTS_AROUND_Results(	101	,	49322	,"	Fannie Bay Super Pizza Italian Restaurant	","	Fannie Bay Place, Darwin, NT, 820	","	Italian, Pizza, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.424126	,	130.83653	,	34	),
new GET_RESTAURANTS_AROUND_Results(	102	,	3038	,"	Fiddlers Green	","	1C 19a Kitchener Dr, Darwin, NT, 800	","	Irish, Bar, Pub, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.467383	,	130.84592	,	34	),
new GET_RESTAURANTS_AROUND_Results(	103	,	31382	,"	Finlays Joint Cafe	","	Lot 4 Piersenne Rd, Palmerston, NT, 831	","	Cafe, Australian	",	-12.470772	,	130.9918	,	34	),
new GET_RESTAURANTS_AROUND_Results(	104	,	49278	,"	Four Birds	","	Star Village 32 Smith St, Darwin, NT, 800	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.464039	,	130.8432	,	34	),
new GET_RESTAURANTS_AROUND_Results(	105	,	17213	,"	Frankie's Pizza Joint	","	48 - 50 Smith St, Darwin, NT, 800	","	Italian, Pizza	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	106	,	31357	,"	Fresh Point Co	","	127 Flynn Cricuit, Palmerston, NT, 832	","	Asian, Australian, Cafe, Vegetarian Friendly, Vegan Options	",	-12.512889	,	130.97926	,	34	),
new GET_RESTAURANTS_AROUND_Results(	107	,	12513	,"	Gloria Jeans	","	55-59 Mitchell St, Darwin, NT, 800	","	Cafe, Australian	",	-12.46399	,	130.84013	,	34	),
new GET_RESTAURANTS_AROUND_Results(	108	,	31396	,"	Gloria Jeans Coffees Palmerston	","	10 Temple Tce, Palmerston, NT, 830	","	Cafe, Australian	",	-12.48027	,	130.98592	,	34	),
new GET_RESTAURANTS_AROUND_Results(	109	,	58478	,"	Go Sushi Grand Central	","	U 4 28 Mitchell St, Darwin, NT, 800	","	Japanese, Sushi, Asian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.465008	,	130.84184	,	34	),
new GET_RESTAURANTS_AROUND_Results(	110	,	52961	,"	Good Thanks	","	33 Knuckey St, Darwin, NT, 800	","	American, Bar, Pub, Australian, Vegetarian Friendly, Vegan Options	",	-12.462297	,	130.84221	,	34	),
new GET_RESTAURANTS_AROUND_Results(	111	,	16857	,"	Gourmet Deli	","	Mantra Pandanus Hotel 45 Knuckey St, Darwin, NT, 800	","	Cafe, Australian	",	-12.461306	,	130.84334	,	34	),
new GET_RESTAURANTS_AROUND_Results(	112	,	52727	,"	Great Little Place	","	Stuart Hwy, Darwin, NT, 820	","	Cafe, Australian, Healthy, Vegetarian Friendly, Vegan Options	",	-12.42523	,	130.88567	,	34	),
new GET_RESTAURANTS_AROUND_Results(	113	,	3337	,"	Green Chillies Darwin	","	Alatai Apartments 7 Finniss St, Darwin, NT, 800	","	Indian, Thai, Vegetarian Friendly, Gluten Free Options	",	-12.454019	,	130.83858	,	34	),
new GET_RESTAURANTS_AROUND_Results(	114	,	33506	,"	Grill'd	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	Australian, Vegetarian Friendly, Vegan Options	",	-12.375625	,	130.88223	,	34	),
new GET_RESTAURANTS_AROUND_Results(	115	,	8522	,"	Grumpy's Breuhaus	","	Handorf Freeway Exit Verdun SA, Adelaide River, Australia	","	Australian	",	-13.239862	,	131.10645	,	34	),
new GET_RESTAURANTS_AROUND_Results(	116	,	29501	,"	Haensel & Gretel	","	Chapman road, Darwin, NT, 810	","	German, Austrian, European	",	-12.376493	,	130.85602	,	34	),
new GET_RESTAURANTS_AROUND_Results(	117	,	37663	,"	Hanuman Restaurant	","	The Beaufort Hotel 93 Mitchell St, Darwin, NT, 800	","	Indian, Thai, Singaporean, Sri Lankan, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.460492	,	130.83699	,	34	),
new GET_RESTAURANTS_AROUND_Results(	118	,	41426	,"	Happy Garden Chinese Restaurant	","	2 Parap Pl, Darwin, NT, 820	","	Chinese, Asian	",	-12.43174	,	130.84412	,	34	),
new GET_RESTAURANTS_AROUND_Results(	119	,	52556	,"	Harvest Coffee Shop	","	53 Yanyula Dr, Darwin, NT, 812	","	Austrian, European	",	-12.39189	,	130.89104	,	34	),
new GET_RESTAURANTS_AROUND_Results(	120	,	46425	,"	Hibiscus Tavern	","	8 Leanyer Dr, Darwin, NT, 812	","	Bar, Pub, Australian	",	-12.3774	,	130.89552	,	34	),
new GET_RESTAURANTS_AROUND_Results(	121	,	17157	,"	HIdden Valley Tavern	","	644 Stuart Highway, Darwin, NT, 820	","	Bar, Pub, Australian	",	-12.43221	,	130.91795	,	34	),
new GET_RESTAURANTS_AROUND_Results(	122	,	35314	,"	Hillbillys cafe	","	1/42 Toupein Rd, Palmerston, NT, 831	","	Cafe	",	-12.47467	,	130.991	,	34	),
new GET_RESTAURANTS_AROUND_Results(	123	,	37783	,"	Hingston Chinese Restaurant & Take Away	","	53 Yanyula Dr, Darwin, NT, 812	","	Chinese, Asian	",	-12.39189	,	130.89104	,	34	),
new GET_RESTAURANTS_AROUND_Results(	124	,	38098	,"	Hog's Breath Casuarina	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	American, Steakhouse, Australian, Vegetarian Friendly, Vegan Options	",	-12.375126	,	130.88252	,	34	),
new GET_RESTAURANTS_AROUND_Results(	125	,	30416	,"	Hog's Breath PALMERSTON NT	","	18 The Boulevard, Palmerston, NT, 830	","	Steakhouse, Bar, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.478592	,	130.9854	,	34	),
new GET_RESTAURANTS_AROUND_Results(	126	,	3152	,"	Horizen Cafe	","	6 Carey St, Darwin, NT, 800	","	Australian, Vegetarian Friendly	",	-12.459988	,	130.84659	,	34	),
new GET_RESTAURANTS_AROUND_Results(	127	,	57792	,"	Hot Tamale	","	F 2 19 Kitchener Dr, Darwin, NT, 800	","	Mexican, Central American, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.468564	,	130.84685	,	34	),
new GET_RESTAURANTS_AROUND_Results(	128	,	41973	,"	Howard Springs Bakery	","	2/290 Whitewood Rd, Howard Springs, NT, 835	","	Restaurant	",	-12.496762	,	131.04457	,	34	),
new GET_RESTAURANTS_AROUND_Results(	129	,	41885	,"	Howard Springs Tavern	","	280 Whitewood Rd, Humpty Doo, NT, 835	","	Bar, Pub, Australian, Vegetarian Friendly	",	-12.496767	,	131.04353	,	34	),
new GET_RESTAURANTS_AROUND_Results(	130	,	31531	,"	Hungry Jack's	","	Cnr Temple Tce & Maluka St, Palmerston, NT, 830	","	Fast Food, American, Australian	",	-12.480486	,	130.9877	,	34	),
new GET_RESTAURANTS_AROUND_Results(	131	,	49257	,"	Hungry Jacks Pty Ltd	","	Cnr Bradshaw Tce & Trower Rd, Darwin, SA, 5790	","	Fast Food, Australian	",	-12.370526	,	130.88339	,	34	),
new GET_RESTAURANTS_AROUND_Results(	132	,	30642	,"	Hungry Joes Pizza & Ribs	","	Shop 4 11 University Ave, Palmerston, NT, 830	","	Pizza, Barbecue	",	-12.47732	,	130.98425	,	34	),
new GET_RESTAURANTS_AROUND_Results(	133	,	21433	,"	il lido	","	Darwin Waterfront, Darwin, NT, 800	","	Australian, Italian, Pizza, Seafood, Vegetarian Friendly	",	-12.468572	,	130.84709	,	34	),
new GET_RESTAURANTS_AROUND_Results(	134	,	45605	,"	il Piatto	","	Darwin Gilruth Avenue, The Gardens, Darwin, NT, 820	","	Italian, Pizza, Australian, Vegan Options, Vegetarian Friendly, Gluten Free Options	",	-12.4478	,	130.8298	,	34	),
new GET_RESTAURANTS_AROUND_Results(	135	,	24883	,"	Indian Curry Paradise	","	54 Bradshaw Terrace, Darwin, NT, 810	","	Indian, Asian, Vegetarian Friendly, Vegan Options, Gluten Free Options, Halal	",	-12.37147	,	130.88237	,	34	),
new GET_RESTAURANTS_AROUND_Results(	136	,	35680	,"	Indian Delicious House	","	U 1 20 Essington Ave, Palmerston, NT, 830	","	Indian	",	-12.487524	,	130.98164	,	34	),
new GET_RESTAURANTS_AROUND_Results(	137	,	21549	,"	Istanbul Kebab Bar Mitchell	","	16 69 B Mitchell ST Drwn Cty, Darwin, NT, 800	","	Fast Food	",	-12.46602	,	130.84329	,	34	),
new GET_RESTAURANTS_AROUND_Results(	138	,	45738	,"	Jamaica Blue	","	247 Trower Road, Darwin, NT, 801	","	Cafe, Australian, Vegetarian Friendly	",	-12.37481	,	130.88277	,	34	),
new GET_RESTAURANTS_AROUND_Results(	139	,	29355	,"	Jays Coffeebar	","	Nightcliff Jetty, Darwin, NT, 810	","	Cafe, Australian	",	-12.38273	,	130.85403	,	34	),
new GET_RESTAURANTS_AROUND_Results(	140	,	21435	,"	Jet Wok	","	33 Knuckey St, Darwin, NT, 800	","	Chinese	",	-12.46222	,	130.84212	,	34	),
new GET_RESTAURANTS_AROUND_Results(	141	,	8975	,"	Johnn Johnns	","	Unit 4 14 Knuckey Street, Darwin, NT, 800	","	International, Contemporary, Australian	",	-12.46339	,	130.84148	,	34	),
new GET_RESTAURANTS_AROUND_Results(	142	,	9058	,"	Kalidonis Taverna	","	87 Woods Street, Darwin, NT, 800	","	Mediterranean, Greek	",	-12.457516	,	130.83948	,	34	),
new GET_RESTAURANTS_AROUND_Results(	143	,	38130	,"	Karma Cafe and Fitness	","	12 Salonika St, Darwin, NT, 801	","	Cafe, Australian, Healthy, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.440046	,	130.8396	,	34	),
new GET_RESTAURANTS_AROUND_Results(	144	,	8694	,"	Kebab and Momo House	","	U 3 4 Edmunds St, Darwin, NT, 800	","	Nepali, Indian, Asian, Vegetarian Friendly, Vegan Options	",	-12.462004	,	130.84132	,	34	),
new GET_RESTAURANTS_AROUND_Results(	145	,	16773	,"	KFC	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	Restaurant	",	-12.374696	,	130.8828	,	34	),
new GET_RESTAURANTS_AROUND_Results(	146	,	35584	,"	KFC	","	Cnr Temple Tce & Maluka St, Palmerston, NT, 830	","	Fast Food, American	",	-12.48071	,	130.98749	,	34	),
new GET_RESTAURANTS_AROUND_Results(	147	,	8723	,"	Kopi Stop	","	U 1 2 Harriet Pl, Darwin, NT, 800	","	Cafe, Australian	",	-12.45677	,	130.83585	,	34	),
new GET_RESTAURANTS_AROUND_Results(	148	,	35368	,"	k-tong thai & chinese restaurant palmerston	","	Shop B3 Palm Plaza, Palmerston, NT, 831	","	Chinese, Asian	",	-12.47843	,	130.98186	,	34	),
new GET_RESTAURANTS_AROUND_Results(	149	,	33563	,"	Kurt's Cakes	","	U 1 35 Cavenagh St, Darwin, NT, 800	","	Cafe, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.461628	,	130.84203	,	34	),
new GET_RESTAURANTS_AROUND_Results(	150	,	13276	,"	La Tramontana Restaurant	","	McMinn Street, Darwin, NT, 800	","	Restaurant	",	-12.45664	,	130.84116	,	34	),
new GET_RESTAURANTS_AROUND_Results(	151	,	20554	,"	Lakes Restaurant	","	170 Doris Rd, Berry Springs, NT, 838	","	Australian	",	-12.71898	,	131.01454	,	34	),
new GET_RESTAURANTS_AROUND_Results(	152	,	56921	,"	Laksa House	","	54 Stuart Hwy, Darwin, NT, 820	","	Asian	",	-12.44558	,	130.84143	,	34	),
new GET_RESTAURANTS_AROUND_Results(	153	,	24854	,"	Laneway Specialty Coffee	","	U 4 1 Vickers St, Darwin, NT, 820	","	Australian, Cafe, Vegetarian Friendly, Gluten Free Options, Vegan Options	",	-12.431912	,	130.8446	,	34	),
new GET_RESTAURANTS_AROUND_Results(	154	,	37881	,"	Lazy Susans Eating House	","	U 9 21 Cavenagh St, Darwin, NT, 800	","	Chinese, Asian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.46278	,	130.8432	,	34	),
new GET_RESTAURANTS_AROUND_Results(	155	,	8598	,"	Le Bistro Rakuya	","	Casuarina Square Shopping Center, Darwin, NT, 810	","	Fusion	",	-12.44989	,	130.84149	,	34	),
new GET_RESTAURANTS_AROUND_Results(	156	,	17186	,"	Le Cure	","	Darwin Gpo U 9 48 Cavenagh St, Darwin, NT, 800	","	Restaurant	",	-12.46085	,	130.84195	,	34	),
new GET_RESTAURANTS_AROUND_Results(	157	,	20582	,"	Leelahs	","	Berry Springs Po 10 Doris Rd, Darwin, NT, 838	","	Italian, Mexican, Indian, Asian	",	-12.702493	,	131.01427	,	34	),
new GET_RESTAURANTS_AROUND_Results(	158	,	36887	,"	Litchfield Tourist Park Bar and Cafe	","	2916 Litchfield Park Rd, Rum Jungle, NT, 845	","	Australian, Bar, Cafe, Pub	",	-13.02857	,	130.98312	,	34	),
new GET_RESTAURANTS_AROUND_Results(	159	,	56757	,"	Little Miss Korea	","	Austin Lane, Darwin, NT, 800	","	Barbecue, Asian, Korean, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462311	,	130.84166	,	34	),
new GET_RESTAURANTS_AROUND_Results(	160	,	16938	,"	Lizards Bar & Restaurant	","	105 Mitchell St, Darwin, NT, 800	","	Bar, Pub, Australian	",	-12.459167	,	130.83556	,	34	),
new GET_RESTAURANTS_AROUND_Results(	161	,	52585	,"	Lola's Pergola	","	48 Marina Boulevard, Darwin, NT, 832	","	Bar, Australian	",	-12.450634	,	130.82309	,	34	),
new GET_RESTAURANTS_AROUND_Results(	162	,	33880	,"	Loong Fong Seafood Restaurant	","	Darwin Airport Inn, Henry Wrigley Drive, Darwin, NT, 812	","	Chinese, Seafood, Asian, Vegetarian Friendly, Gluten Free Options	",	-12.406103	,	130.88	,	34	),
new GET_RESTAURANTS_AROUND_Results(	163	,	17331	,"	Lorenzo	","	33 Knuckey St, Darwin, NT, 800	","	Australian	",	-12.46222	,	130.84212	,	34	),
new GET_RESTAURANTS_AROUND_Results(	164	,	9025	,"	Love Thy Juice	","	12 Cavenagh St, Darwin, NT, 800	","	Australian, Cafe, Vegetarian Friendly, Vegan Options	",	-12.464834	,	130.84245	,	34	),
new GET_RESTAURANTS_AROUND_Results(	165	,	24778	,"	Lucky Bat Cafe	","	Pavonia Place, Darwin, NT, 810	","	Cafe, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.386917	,	130.85057	,	34	),
new GET_RESTAURANTS_AROUND_Results(	166	,	38067	,"	Mad About Coffee and Tea	","	3 Parap Pl, Darwin, NT, 820	","	Cafe	",	-12.43096	,	130.8441	,	34	),
new GET_RESTAURANTS_AROUND_Results(	167	,	21813	,"	Mad Hatterz Cafe	","	7 Coffey St, Darwin, NT, 822	","	Restaurant	",	-12.474433	,	130.95813	,	34	),
new GET_RESTAURANTS_AROUND_Results(	168	,	37715	,"	Manoli's Greek Taverna	","	64 Smith St, Darwin, NT, 800	","	Greek, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462217	,	130.84084	,	34	),
new GET_RESTAURANTS_AROUND_Results(	169	,	38007	,"	Max Brenner	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	Cafe	",	-12.375181	,	130.88208	,	34	),
new GET_RESTAURANTS_AROUND_Results(	170	,	33681	,"	McDonald's	","	Bagot Rd, Darwin, NT, 800	","	Fast Food, Australian	",	-12.39352	,	130.85594	,	34	),
new GET_RESTAURANTS_AROUND_Results(	171	,	3291	,"	Mcdonald's	","	21/29 Stuart Hwy, Darwin, NT, 820	","	Fast Food	",	-12.42523	,	130.88567	,	34	),
new GET_RESTAURANTS_AROUND_Results(	172	,	35407	,"	McDonald's	","	1 Cambridge St, Palmerston, NT, 831	","	Restaurant	",	-12.47195	,	130.9729	,	34	),
new GET_RESTAURANTS_AROUND_Results(	173	,	21632	,"	McDonald's	","	Cnr Knuckey & Smith Sts, Darwin, NT, 800	","	American, Fast Food	",	-12.462928	,	130.84154	,	34	),
new GET_RESTAURANTS_AROUND_Results(	174	,	35401	,"	Mcdonald's Family Restaurants	","	Cnr University Dr & Cambridge St, Palmerston, NT, 830	","	Fast Food, Australian	",	-12.47195	,	130.97241	,	34	),
new GET_RESTAURANTS_AROUND_Results(	175	,	52643	,"	Meihua Vietnamese and Chines Cuisine	","	Links Road, Darwin, NT, 813	","	Asian, Chinese, Vietnamese	",	-12.3962	,	130.89574	,	34	),
new GET_RESTAURANTS_AROUND_Results(	176	,	8895	,"	Melissa's Take Away	","	Westlane Arcade, Darwin, NT, 800	","	Cafe, Australian	",	-12.46447	,	130.84213	,	34	),
new GET_RESTAURANTS_AROUND_Results(	177	,	52752	,"	Mellow Thai Restaurant and Cafe	","	Mitchell Street, Darwin, NT, 800	","	Cafe, Asian, Thai, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462822	,	130.83917	,	34	),
new GET_RESTAURANTS_AROUND_Results(	178	,	24803	,"	Memories of India	","	Shop NO. 5 2 Sabine Rd, Darwin, NT, 810	","	Indian, Vegetarian Friendly, Vegan Options	",	-12.39478	,	130.8626	,	34	),
new GET_RESTAURANTS_AROUND_Results(	179	,	33418	,"	Ming Court Pizza	","	18 Jingili Tce, Darwin, NT, 810	","	Chinese, Asian, Pizza	",	-12.38918	,	130.87547	,	34	),
new GET_RESTAURANTS_AROUND_Results(	180	,	30619	,"	Mint Leaf- An Indian Aroma	","	Temple Terrace, Palmerston, NT, 830	","	Indian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.48069	,	130.98674	,	34	),
new GET_RESTAURANTS_AROUND_Results(	181	,	12191	,"	Mitchelli's Pizza Cafe	","	Shop 11, Darwin, NT, 800	","	Italian, Pizza, Fast Food	",	-12.46298	,	130.83917	,	34	),
new GET_RESTAURANTS_AROUND_Results(	182	,	8832	,"	Mitchell's Bar & Grill	","	32 Mitchell St, Darwin, NT, 800	","	Grill, Australian, Steakhouse, Seafood, Gluten Free Options	",	-12.464551	,	130.8415	,	34	),
new GET_RESTAURANTS_AROUND_Results(	183	,	48832	,"	Monsoons	","	46 Mitchell St, Darwin, NT, 800	","	Bar, Pub, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.463485	,	130.84027	,	34	),
new GET_RESTAURANTS_AROUND_Results(	184	,	33907	,"	Moorish Cafe	","	37 Knuckey St, Darwin, NT, 800	","	Moroccan, Mediterranean, Spanish, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462162	,	130.8425	,	34	),
new GET_RESTAURANTS_AROUND_Results(	185	,	30440	,"	Mosko's Market	","	1 The Boulevard, Palmerston, NT, 830	","	Cafe, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.479516	,	130.98463	,	34	),
new GET_RESTAURANTS_AROUND_Results(	186	,	12480	,"	Mr Sushi	","	Darwin Mall, Darwin, NT, 800	","	Japanese, Sushi, Asian, Fast Food	",	-12.46037	,	130.83893	,	34	),
new GET_RESTAURANTS_AROUND_Results(	187	,	52699	,"	My Friend's Kitchen	","	52 Mitchell St, Darwin, NT, 800	","	Asian, Vietnamese, Vegetarian Friendly, Vegan Options	",	-12.46267	,	130.8399	,	34	),
new GET_RESTAURANTS_AROUND_Results(	188	,	31497	,"	Nando's	","	Gateway Shopping Centre 1 Roystonea Ave, Palmerston, NT, 830	","	European, Portuguese	",	-12.47712	,	130.98639	,	34	),
new GET_RESTAURANTS_AROUND_Results(	189	,	17271	,"	Nando's	","	21 Knuckey St, Darwin, NT, 800	","	Portuguese, Fast Food, European	",	-12.46328	,	130.84134	,	34	),
new GET_RESTAURANTS_AROUND_Results(	190	,	52639	,"	Nando's Casuarina	","	365/247 Trower Road, Darwin, NT, 810	","	European, Portuguese	",	-12.375689	,	130.88226	,	34	),
new GET_RESTAURANTS_AROUND_Results(	191	,	21465	,"	Nevaeh's Cafe	","	22 Harry Chan Ave, Darwin, NT, 800	","	Australian	",	-12.46433	,	130.84624	,	34	),
new GET_RESTAURANTS_AROUND_Results(	192	,	3180	,"	Nightcliff Fish and Chip Shop	","	38 Progress Dr, Darwin, NT, 810	","	Fast Food, Australian, Seafood, Asian	",	-12.38749	,	130.85098	,	34	),
new GET_RESTAURANTS_AROUND_Results(	193	,	33602	,"	Nightcliff Pizzaria	","	Millner, NT 48 Trower Rd, Darwin, NT, 810	","	Pizza	",	-12.38617	,	130.8614	,	34	),
new GET_RESTAURANTS_AROUND_Results(	194	,	46413	,"	Niliturk	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	Restaurant	",	-12.37481	,	130.88277	,	34	),
new GET_RESTAURANTS_AROUND_Results(	195	,	45182	,"	Nirvana Restaurant	","	6 Dashwood Crescent, Darwin, NT, 801	","	Indian, Asian, Thai, Malaysian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.456628	,	130.83537	,	34	),
new GET_RESTAURANTS_AROUND_Results(	196	,	12259	,"	Non La Restaurant	","	11 Knuckey St, Darwin, NT, 800	","	Asian, Thai, Vietnamese	",	-12.46361	,	130.84065	,	34	),
new GET_RESTAURANTS_AROUND_Results(	197	,	57761	,"	Noodle House Mitchell	","	84 Mitchell St, Darwin, NT, 800	","	Chinese, Asian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.460336	,	130.83702	,	34	),
new GET_RESTAURANTS_AROUND_Results(	198	,	20471	,"	Noonamah Tavern	","	1801 Stuart Highway, Noonamah, NT, 837	","	Steakhouse, Bar, Pub, Australian	",	-12.63335	,	131.07458	,	34	),
new GET_RESTAURANTS_AROUND_Results(	199	,	29628	,"	NT Pizza Co	","	159 Dick Ward Dr, Darwin, NT, 810	","	Pizza, Australian	",	-12.39019	,	130.85117	,	34	),
new GET_RESTAURANTS_AROUND_Results(	200	,	45546	,"	Nutrition Station	","	247 Trower Road, Darwin, NT, 801	","	Cafe, Australian, Vegetarian Friendly, Vegan Options	",	-12.375578	,	130.88252	,	34	),
new GET_RESTAURANTS_AROUND_Results(	201	,	49446	,"	Oasis Cafe	","	50 Mitchell St, Darwin, NT, 800	","	Restaurant	",	-12.4629	,	130.84013	,	34	),
new GET_RESTAURANTS_AROUND_Results(	202	,	30645	,"	Oasis Kebabs	","	15 Temple Tce, Palmerston, NT, 830	","	Turkish, Fast Food, Middle Eastern, Halal, Vegetarian Friendly	",	-12.48367	,	130.9855	,	34	),
new GET_RESTAURANTS_AROUND_Results(	203	,	55225	,"	O'Charley's Restaurant & Bar	","	8140 South Tryon Street, Charlotte, Australia, 28273	","	Restaurant	",	-12.795692	,	130.8572	,	34	),
new GET_RESTAURANTS_AROUND_Results(	204	,	30391	,"	Oka Malaysian & Chinese Cuisine	","	Shop T1 Bakewell Woolworths, Palmerston, NT, 831	","	Chinese, Asian, Malaysian, Vegetarian Friendly, Vegan Options	",	-12.500138	,	130.98615	,	34	),
new GET_RESTAURANTS_AROUND_Results(	205	,	33471	,"	Oka Teppanyaki	","	U 11 34 Parap Rd, Darwin, NT, 820	","	Japanese, Sushi, Asian, Gluten Free Options	",	-12.432059	,	130.84357	,	34	),
new GET_RESTAURANTS_AROUND_Results(	206	,	12165	,"	Outback Jacks Bar & Grill Darwin	","	28 Mitchell St, Darwin, NT, 800	","	Steakhouse, Bar, Barbecue, Australian	",	-12.464751	,	130.84184	,	34	),
new GET_RESTAURANTS_AROUND_Results(	207	,	48917	,"	Oyster Bar Darwin	","	19 Kitchener Dr, Darwin, NT, 800	","	Seafood, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.468179	,	130.84653	,	34	),
new GET_RESTAURANTS_AROUND_Results(	208	,	48838	,"	Pad Thai Darwin	","	200 E Point Road, Darwin, Darwin, NT, 800	","	Thai	",	-12.413974	,	130.83014	,	34	),
new GET_RESTAURANTS_AROUND_Results(	209	,	30719	,"	Palmerston Sports Club Inc	","	3 Maluka St, Palmerston, NT, 830	","	Bar, Pub, Australian, Vegetarian Friendly	",	-12.480617	,	130.98807	,	34	),
new GET_RESTAURANTS_AROUND_Results(	210	,	30692	,"	Palmerston Tavern	","	1110 Chung Wah Terrace, Palmerston, NT, 830	","	Bar, Pub, Australian	",	-12.48884	,	130.98846	,	34	),
new GET_RESTAURANTS_AROUND_Results(	211	,	41392	,"	PappaRich	","	247 Trower Road, Darwin, NT, 811	","	Asian, Malaysian, Vegetarian Friendly, Vegan Options	",	-12.375504	,	130.88246	,	34	),
new GET_RESTAURANTS_AROUND_Results(	212	,	57848	,"	Parap Village Tavern	","	15 Parap Rd, Darwin, NT, 820	","	Bar, Pub, Australian	",	-12.433387	,	130.8433	,	34	),
new GET_RESTAURANTS_AROUND_Results(	213	,	24705	,"	Pee Wee's at the Point	","	Alec Fong Lim Drive, East Point Reserve, Darwin, NT, 820	","	Australian, International, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.412525	,	130.82352	,	34	),
new GET_RESTAURANTS_AROUND_Results(	214	,	52534	,"	Pint Club	","	165 Abala Road, Darwin, NT, 812	","	Bar, Asian, Pub, Australian	",	-12.40115	,	130.88728	,	34	),
new GET_RESTAURANTS_AROUND_Results(	215	,	41296	,"	Pizza Capers	","	2 Sabine Road Millner, Darwin, NT, 812	","	Pizza, Italian	",	-12.39498	,	130.86221	,	34	),
new GET_RESTAURANTS_AROUND_Results(	216	,	8949	,"	Pizza Hut Casuarina	","	Shop 3 291 Trower RD, Darwin, NT, 801	","	Pizza	",	-12.37136	,	130.88358	,	34	),
new GET_RESTAURANTS_AROUND_Results(	217	,	35607	,"	Pizza Hut Palmerston	","	15 Temple Tce, Palmerston, NT, 830	","	Fast Food	",	-12.48367	,	130.9855	,	34	),
new GET_RESTAURANTS_AROUND_Results(	218	,	52722	,"	Pizza King	","	8 Leanyer Dr, Darwin, NT, 812	","	Pizza, Fast Food	",	-12.3774	,	130.89552	,	34	),
new GET_RESTAURANTS_AROUND_Results(	219	,	33856	,"	PM Eat & Drink	","	U 1 56 Smith St, Darwin, NT, 800	","	Seafood, Australian, Vegetarian Friendly, Gluten Free Options, Vegan Options	",	-12.462549	,	130.84201	,	34	),
new GET_RESTAURANTS_AROUND_Results(	220	,	3367	,"	Poolside Restaurant	","	122 Esplanade, Darwin, NT, 800	","	Australian	",	-12.46024	,	130.83548	,	34	),
new GET_RESTAURANTS_AROUND_Results(	221	,	21685	,"	Port Side Char Grill	","	45 Stokes Hill Rd, Darwin, NT, 800	","	Asian	",	-12.46745	,	130.85081	,	34	),
new GET_RESTAURANTS_AROUND_Results(	222	,	29735	,"	Pour	","	48 Trower Rd, Darwin, NT, 810	","	Cafe, Australian, Vegetarian Friendly	",	-12.38617	,	130.8614	,	34	),
new GET_RESTAURANTS_AROUND_Results(	223	,	33707	,"	Prickles Mexican Resturaunt	","	Parap Shopping Village, Parap place, Darwin, NT, 820	","	Mexican, Vegetarian Friendly, Vegan Options	",	-12.431144	,	130.8446	,	34	),
new GET_RESTAURANTS_AROUND_Results(	224	,	48807	,"	Q Bar and Brasserie on The Avenue	","	152/12 Salonika Street, Darwin, NT, 821	","	Cafe, Australian, Fusion, Gluten Free Options	",	-12.440533	,	130.83968	,	34	),
new GET_RESTAURANTS_AROUND_Results(	225	,	37636	,"	Rabbithole	","	44 The Mall, Darwin, NT, 800	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.463722	,	130.84236	,	34	),
new GET_RESTAURANTS_AROUND_Results(	226	,	33630	,"	Rachael's Seafood Shack	","	Fishermans Wharf, Darwin, NT, 800	","	Seafood, Australian, Gluten Free Options	",	-12.458701	,	130.84773	,	34	),
new GET_RESTAURANTS_AROUND_Results(	227	,	29192	,"	Rapid Creek Cafe	","	48 Trower Rd, Darwin, NT, 810	","	Japanese, Cafe, Sushi, Asian, Vegetarian Friendly	",	-12.38617	,	130.8614	,	34	),
new GET_RESTAURANTS_AROUND_Results(	228	,	29416	,"	Ratatouille - Nightcliff Sports Club	","	11 Camphor St, Darwin, NT, 810	","	Bar, Pub, Australian, European	",	-12.3834	,	130.85265	,	34	),
new GET_RESTAURANTS_AROUND_Results(	229	,	17301	,"	Raw Bean Espresso	","	39 Smith St Mall, Darwin, NT, 800	","	Restaurant	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	230	,	17091	,"	Rawgasm	","	39 Smith St, Darwin, NT, 800	","	Cafe, Australian, Healthy, Vegetarian Friendly, Vegan Options	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	231	,	31424	,"	Red Lantern Chinese Restaurant	","	Shop 4 3 Mansfield Mall, Palmerston, NT, 831	","	Chinese, Asian	",	-12.47899	,	130.98378	,	34	),
new GET_RESTAURANTS_AROUND_Results(	232	,	21536	,"	Red Rooster	","	44 Mitchell St, Darwin, NT, 800	","	Fast Food, Australian	",	-12.46376	,	130.84052	,	34	),
new GET_RESTAURANTS_AROUND_Results(	233	,	35438	,"	Red Rooster	","	4277 Chung Wah Tce, Palmerston, NT, 830	","	Fast Food	",	-12.48884	,	130.98846	,	34	),
new GET_RESTAURANTS_AROUND_Results(	234	,	57006	,"	Red Rooster, Marrara	","	3292 McMillans Rd, Darwin, NT, 812	","	Restaurant	",	-12.3964	,	130.89857	,	34	),
new GET_RESTAURANTS_AROUND_Results(	235	,	56867	,"	Rendezvous Cafe	","	22 Mitchell St, Darwin, NT, 800	","	Cafe, Asian, Malaysian, Vegetarian Friendly, Gluten Free Options	",	-12.46534	,	130.84262	,	34	),
new GET_RESTAURANTS_AROUND_Results(	236	,	52456	,"	Roast and Noodle	","	37-39 Smith St, Darwin, NT, 800	","	Chinese, Asian	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	237	,	52829	,"	Roma Bar Cafe	","	9 Cavenagh St, Darwin, NT, 800	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.463463	,	130.84407	,	34	),
new GET_RESTAURANTS_AROUND_Results(	238	,	17241	,"	Rooftop Restaurant	","	3 Buffalo Ct, Darwin, NT, 800	","	International	",	-12.4537	,	130.83742	,	34	),
new GET_RESTAURANTS_AROUND_Results(	239	,	57820	,"	Rorkes Beer Wine Food	","	22 Smith St, Darwin, NT, 800	","	Bar, Pub, Australian, Fusion, Gluten Free Options	",	-12.46475	,	130.84346	,	34	),
new GET_RESTAURANTS_AROUND_Results(	240	,	45354	,"	Ruby	","	48-50 Smith St, Darwin, NT, 800	","	Asian, Vietnamese, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	241	,	36862	,"	Rum Jungle Tavern	","	5 Nurndina Street, Batchelor, NT, 845	","	Bar, Pub, Australian, Vegetarian Friendly	",	-13.046619	,	131.02849	,	34	),
new GET_RESTAURANTS_AROUND_Results(	242	,	29259	,"	Saffrron	","	U 14 34 Parap Rd, Darwin, NT, 820	","	Indian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.432193	,	130.84387	,	34	),
new GET_RESTAURANTS_AROUND_Results(	243	,	31526	,"	Saigon Street	","	Yarrawonga Road, Palmerston, NT, 830	","	Asian, Vietnamese	",	-12.47049	,	130.98428	,	34	),
new GET_RESTAURANTS_AROUND_Results(	244	,	45232	,"	Salsas Fresh Mex Grill Casuarina	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	Mexican, Fast Food	",	-12.37481	,	130.88277	,	34	),
new GET_RESTAURANTS_AROUND_Results(	245	,	26076	,"	Salt n Peppa	","	6/6 Woodlake Boulevard, Palmerston, NT, 830	","	Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.47929	,	130.97597	,	34	),
new GET_RESTAURANTS_AROUND_Results(	246	,	21604	,"	Saltbox Cafe	","	2/10 Mel Rd, Darwin, NT, 828	","	Restaurant	",	-12.4421	,	130.92052	,	34	),
new GET_RESTAURANTS_AROUND_Results(	247	,	56813	,"	Salvatores Cafe	","	Smith Street, Darwin, NT, 800	","	Italian, Pizza, Cafe, Vegetarian Friendly, Gluten Free Options	",	-12.463222	,	130.84169	,	34	),
new GET_RESTAURANTS_AROUND_Results(	248	,	21681	,"	Santa Fe Cafe	","	Stuart Highway, Darwin, NT, 828	","	Australian	",	-12.4392	,	130.93791	,	34	),
new GET_RESTAURANTS_AROUND_Results(	249	,	49299	,"	Sari Rasa	","	U 6 24 Cavenagh St, Darwin, NT, 800	","	Indonesian, Asian, Halal, Vegetarian Friendly	",	-12.46231	,	130.84349	,	34	),
new GET_RESTAURANTS_AROUND_Results(	250	,	25550	,"	Satay Time	","	15 Yarrawonga Road, Darwin, NT, 830	","	Restaurant	",	-12.47049	,	130.98428	,	34	),
new GET_RESTAURANTS_AROUND_Results(	251	,	38186	,"	Seafood On Cullen	","	51 Marina Bvd, Darwin, NT, 820	","	Seafood, Asian, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.450072	,	130.82251	,	34	),
new GET_RESTAURANTS_AROUND_Results(	252	,	16915	,"	Shenanigans Darwin	","	69 Mitchell St, Darwin, NT, 820	","	Irish, Bar, Pub	",	-12.46298	,	130.83917	,	34	),
new GET_RESTAURANTS_AROUND_Results(	253	,	49138	,"	Shenannigans Restaurant & Bar	","	69 Mitchell St, Darwin, NT, 800	","	Irish, Bar, European, Pub, Vegetarian Friendly	",	-12.462396	,	130.83899	,	34	),
new GET_RESTAURANTS_AROUND_Results(	254	,	29622	,"	Shillelagh's Restaurant	","	378 Stuart Highway, Darwin, NT, 820	","	Vegetarian Friendly, Gluten Free Options	",	-12.425833	,	130.86833	,	34	),
new GET_RESTAURANTS_AROUND_Results(	255	,	21294	,"	Simply Foods	","	Star Village 32 Smith St, Darwin, NT, 800	","	Restaurant	",	-12.464088	,	130.84302	,	34	),
new GET_RESTAURANTS_AROUND_Results(	256	,	57731	,"	Six Tanks Brew Co.	","	4/ 69 Mitchell St, Darwin, NT, 800	","	Brew Pub, Bar, Pub, Australian, Wine Bar, Vegetarian Friendly	",	-12.462675	,	130.83923	,	34	),
new GET_RESTAURANTS_AROUND_Results(	257	,	46536	,"	Skin	","	12 Knuckey St, Darwin, NT, 800	","	Australian	",	-12.46368	,	130.84116	,	34	),
new GET_RESTAURANTS_AROUND_Results(	258	,	3104	,"	Sky Room Sky City	","	Gilruth Ave, Darwin, NT, 801	","	Restaurant	",	-12.44788	,	130.83249	,	34	),
new GET_RESTAURANTS_AROUND_Results(	259	,	45737	,"	Sole Restaurant & Bar	","	622 Lee Point Rd, Lee Point, NT, 810	","	Australian, Vegetarian Friendly, Vegan Options	",	-12.34095	,	130.89316	,	34	),
new GET_RESTAURANTS_AROUND_Results(	260	,	17274	,"	Sorriento Snack Bar	","	38 Cavenagh St, Darwin, NT, 800	","	Restaurant	",	-12.46185	,	130.84247	,	34	),
new GET_RESTAURANTS_AROUND_Results(	261	,	8624	,"	Speaker's Corner Cafe	","	Mitchell Street, Darwin, NT, 800	","	Cafe, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.466952	,	130.84285	,	34	),
new GET_RESTAURANTS_AROUND_Results(	262	,	24684	,"	Spice Garden	","	2 Pavonia Place, Nightcliff, Darwin, NT, 810	","	Sri Lankan, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.38707	,	130.85133	,	34	),
new GET_RESTAURANTS_AROUND_Results(	263	,	56946	,"	Spice Of Himalaya	","	U 12 69 Mitchell St, Darwin, NT, 800	","	Asian, Nepali, Vegetarian Friendly, Gluten Free Options	",	-12.462825	,	130.83957	,	34	),
new GET_RESTAURANTS_AROUND_Results(	264	,	3316	,"	Steam Up	","	Smith Street, Darwin, NT, 800	","	Asian, Chinese, Vegetarian Friendly	",	-12.4645	,	130.84274	,	34	),
new GET_RESTAURANTS_AROUND_Results(	265	,	35554	,"	Subway	","	Temple Tce, Palmerston, NT, 830	","	Restaurant	",	-12.48069	,	130.98674	,	34	),
new GET_RESTAURANTS_AROUND_Results(	266	,	9029	,"	Sumatra Cafe	","	U 9 38 Smith St, Darwin, NT, 800	","	Cafe, Indonesian, Fast Food, Asian, Healthy, Vegetarian Friendly	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	267	,	17099	,"	Sunset Restaurant	","	Gilruth Avenue, Darwin, NT, 800	","	Australian	",	-12.44788	,	130.83249	,	34	),
new GET_RESTAURANTS_AROUND_Results(	268	,	56713	,"	Supero Pizza	","	465 Stuart Highway, Darwin, NT, 835	","	Restaurant	",	-12.42533	,	130.88312	,	34	),
new GET_RESTAURANTS_AROUND_Results(	269	,	33416	,"	Sweet Tooth	","	Sabine Road, Darwin, NT, 810	","	Cafe, Greek	",	-12.39514	,	130.86266	,	34	),
new GET_RESTAURANTS_AROUND_Results(	270	,	56978	,"	Table Forty Three	","	43 Knuckey St, Darwin, NT, 800	","	Australian, Contemporary, Vegetarian Friendly, Gluten Free Options	",	-12.461429	,	130.84305	,	34	),
new GET_RESTAURANTS_AROUND_Results(	271	,	12293	,"	Tandoori Vibes	","	T 5 56 Smith St, Darwin, NT, 800	","	Indian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462822	,	130.84195	,	34	),
new GET_RESTAURANTS_AROUND_Results(	272	,	57764	,"	Thai Corner	","	6 Holzerland Street, Darwin, NT, 812	","	Restaurant	",	-12.39661	,	130.90433	,	34	),
new GET_RESTAURANTS_AROUND_Results(	273	,	21265	,"	Thai Larna	","	37-39 Smith St, Darwin, NT, 800	","	Restaurant	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	274	,	33737	,"	Thai Thai	","	266 Trower Rd, Darwin, NT, 810	","	Asian, Thai	",	-12.37444	,	130.88356	,	34	),
new GET_RESTAURANTS_AROUND_Results(	275	,	52528	,"	Thailicious	","	Shop 26/69 Mitchell St, Darwin, NT, 800	","	Asian, Thai, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.462938	,	130.83945	,	34	),
new GET_RESTAURANTS_AROUND_Results(	276	,	30521	,"	The Arch Rival	","	11 University Ave, Palmerston, NT, 830	","	Bar, Australian, Asian, Pub	",	-12.47732	,	130.98425	,	34	),
new GET_RESTAURANTS_AROUND_Results(	277	,	30462	,"	The Bell Bar And Bistro	","	127 Flynn Circuit, Palmerston, NT, 832	","	Pizza, Cafe, Pub, Australian, Gastropub, Vegetarian Friendly	",	-12.513088	,	130.979	,	34	),
new GET_RESTAURANTS_AROUND_Results(	278	,	3242	,"	The Boatshed Coffee House	","	54-56 Marina Boulevarde, Darwin, Australia	","	Cafe, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.450944	,	130.8226	,	34	),
new GET_RESTAURANTS_AROUND_Results(	279	,	45435	,"	The Cav	","	12 Cavenagh St, Darwin, NT, 800	","	Bar, Pub, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.463129	,	130.84398	,	34	),
new GET_RESTAURANTS_AROUND_Results(	280	,	29326	,"	The Chantilly Kitchen Tea Room	","	U 3 66 Aralia St, Darwin, NT, 810	","	Cafe, Australian, Vegetarian Friendly	",	-12.379008	,	130.84967	,	34	),
new GET_RESTAURANTS_AROUND_Results(	281	,	52986	,"	The Chippy Darwin	","	68 Frances Bay Drive, Darwin, NT, 800	","	Fast Food, Australian, Irish, Seafood, British, Vegetarian Friendly	",	-12.45147	,	130.85	,	34	),
new GET_RESTAURANTS_AROUND_Results(	282	,	52933	,"	The Chook Shed	","	90 Frances Bay Drive, Darwin, Australia	","	Fast Food, Australian, Vegetarian Friendly	",	-12.44801	,	130.84956	,	34	),
new GET_RESTAURANTS_AROUND_Results(	283	,	35362	,"	The Coffee Club	","	Roystonea Avenue, Palmerston, NT, 830	","	Restaurant	",	-12.47712	,	130.98639	,	34	),
new GET_RESTAURANTS_AROUND_Results(	284	,	13328	,"	The Coffee Club	","	55-59 Mitchell St, Darwin, NT, 800	","	Healthy	",	-12.463269	,	130.83986	,	34	),
new GET_RESTAURANTS_AROUND_Results(	285	,	8567	,"	The Coffee Club	","	Tenancy B5, 5 Kitchener Drive, Darwin, NT, 800	","	Cafe, Australian, Vegetarian Friendly, Gluten Free Options, Vegan Options	",	-12.467033	,	130.84612	,	34	),
new GET_RESTAURANTS_AROUND_Results(	286	,	49349	,"	The Coffee Club	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	Cafe, Australian	",	-12.375506	,	130.88095	,	34	),
new GET_RESTAURANTS_AROUND_Results(	287	,	45578	,"	The Deck Bar	","	22 Mitchell St, Darwin, NT, 800	","	Bar, Pub, Australian, Fusion, Vegetarian Friendly, Gluten Free Options	",	-12.465342	,	130.8423	,	34	),
new GET_RESTAURANTS_AROUND_Results(	288	,	24735	,"	The Foreshore Restaurant & Cafe	","	259 Casuarina Dr, Darwin, NT, 810	","	Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.377247	,	130.84802	,	34	),
new GET_RESTAURANTS_AROUND_Results(	289	,	30549	,"	The Fork and Dagger Bar & Grill	","	15 Maluka Drive, Palmerston, NT, 831	","	Bar, Australian, Grill, Vegetarian Friendly, Gluten Free Options	",	-12.481021	,	130.98868	,	34	),
new GET_RESTAURANTS_AROUND_Results(	290	,	49399	,"	The Galley	","	68 Frances Bay Dr, Darwin, NT, 820	","	International, Australian	",	-12.45147	,	130.85	,	34	),
new GET_RESTAURANTS_AROUND_Results(	291	,	29469	,"	The Groove	","	2/40 Progress Drive, Darwin, NT, 814	","	Australian, Cafe, Vegetarian Friendly, Gluten Free Options	",	-12.38789	,	130.8542	,	34	),
new GET_RESTAURANTS_AROUND_Results(	292	,	37748	,"	The Groove Train	","	Casuarina Square 247 Trower Rd, Darwin, NT, 810	","	Australian, Vegetarian Friendly, Vegan Options	",	-12.375328	,	130.8825	,	34	),
new GET_RESTAURANTS_AROUND_Results(	293	,	3064	,"	The Jetty	","	Stokes Hill Wharf, Darwin, NT, 800	","	Seafood, Asian, Australian, Vegetarian Friendly	",	-12.467899	,	130.85107	,	34	),
new GET_RESTAURANTS_AROUND_Results(	294	,	35467	,"	The Landmark	","	Corner Roystonea Ave & Yarrawonga Crescent, Palmerston, NT, 830	","	Pub	",	-12.47366	,	130.98326	,	34	),
new GET_RESTAURANTS_AROUND_Results(	295	,	16942	,"	The Lemon Grass	","	62 Marina Bvd, Darwin, NT, 820	","	Thai	",	-12.4514	,	130.82193	,	34	),
new GET_RESTAURANTS_AROUND_Results(	296	,	3175	,"	The Lost Arc	","	89 Mitchell St, Darwin, NT, 800	","	Bar, Pub, Australian	",	-12.460809	,	130.8374	,	34	),
new GET_RESTAURANTS_AROUND_Results(	297	,	33936	,"	The Magic Wok Restaurant	","	Shop 20, West Lane Arcade, Darwin, NT, 800	","	Chinese, Asian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.464463	,	130.84227	,	34	),
new GET_RESTAURANTS_AROUND_Results(	298	,	20606	,"	The Meat House	","	425 Stuart Hwy, Darwin, NT, 839	","	Steakhouse, Grill, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.520924	,	131.04083	,	34	),
new GET_RESTAURANTS_AROUND_Results(	299	,	56898	,"	The Meat House	","	4 Berrimah Rd, Darwin, NT, 828	","	Steakhouse, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.434625	,	130.9235	,	34	),
new GET_RESTAURANTS_AROUND_Results(	300	,	8921	,"	The O.A.K	","	31-33 Woods St, Darwin, NT, 800	","	Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.461477	,	130.84415	,	34	),
new GET_RESTAURANTS_AROUND_Results(	301	,	8953	,"	The Office Espresso Bar	","	Quest Hotel 55 Cavenagh St, Darwin, NT, 800	","	Cafe, Australian	",	-12.459513	,	130.84006	,	34	),
new GET_RESTAURANTS_AROUND_Results(	302	,	33538	,"	The Poly Shak	","	48 Towers Rd., Darwin, NT, 810	","	Polynesian	",	-12.38661	,	130.86179	,	34	),
new GET_RESTAURANTS_AROUND_Results(	303	,	52437	,"	The Precinct Tavern	","	7 Kitchener Dr, Darwin, NT, 800	","	Bar, Pub, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.466548	,	130.84735	,	34	),
new GET_RESTAURANTS_AROUND_Results(	304	,	5131	,"	The Purple Mango Cafe and Brewery	","	294 Stephen Road, Marrakai, NT, 822	","	Pizza, Cafe, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.765067	,	131.46739	,	34	),
new GET_RESTAURANTS_AROUND_Results(	305	,	25607	,"	The Souvlaki Grill & Chill	","	159 Dick Ward Dr, Nightcliff, NT, 810	","	Greek	",	-12.39019	,	130.85117	,	34	),
new GET_RESTAURANTS_AROUND_Results(	306	,	49208	,"	The Tap on Mitchell	","	58 Mitchell St, Darwin, NT, 800	","	Bar, Australian, Pub, Vegetarian Friendly, Gluten Free Options	",	-12.462736	,	130.83942	,	34	),
new GET_RESTAURANTS_AROUND_Results(	307	,	17367	,"	The Urban Fuel Station	","	39 Smith St, Darwin, NT, 800	","	Restaurant	",	-12.46288	,	130.84094	,	34	),
new GET_RESTAURANTS_AROUND_Results(	308	,	3612	,"	The Vue	","	Gilruth Ave, Darwin, NT, 820	","	American, Seafood, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.448137	,	130.83014	,	34	),
new GET_RESTAURANTS_AROUND_Results(	309	,	21492	,"	Thirsty Zac	","	19 Kitchener Dr, Darwin, NT, 800	","	Cafe, Asian, Healthy, Australian, Taiwanese	",	-12.467492	,	130.84596	,	34	),
new GET_RESTAURANTS_AROUND_Results(	310	,	12336	,"	Three Mum's Kitchen	","	38 Anthony Plaza, The Mall, Darwin, Darwin, NT, 800	","	Vietnamese	",	-12.463693	,	130.84288	,	34	),
new GET_RESTAURANTS_AROUND_Results(	311	,	38036	,"	Tim's Surf & Turf Restaurant	","	10 Litchfield St, Darwin, NT, 800	","	Seafood, Australian, Vegetarian Friendly, Gluten Free Options	",	-12.462413	,	130.84416	,	34	),
new GET_RESTAURANTS_AROUND_Results(	312	,	17000	,"	Tommo's Pies	","	1/ 3 Howell Street Berrimah, Darwin, NT, 828	","	Australian, Cafe, Fast Food, British	",	-12.44035	,	130.91971	,	34	),
new GET_RESTAURANTS_AROUND_Results(	313	,	52613	,"	Toppy's Sandwich Bar	","	7 Parap Pl, Darwin, NT, 820	","	Restaurant	",	-12.43096	,	130.8444	,	34	),
new GET_RESTAURANTS_AROUND_Results(	314	,	52890	,"	Tracy Village Social & Sports Club	","	28 Tambling Terrace, Darwin, NT, 810	","	Bar, Pub, Australian	",	-12.36317	,	130.88873	,	34	),
new GET_RESTAURANTS_AROUND_Results(	315	,	49167	,"	Trader Jacks	","	38 Bishop St, Darwin, NT, 820	","	Cafe, Australian, Vegan Options, Vegetarian Friendly	",	-12.43239	,	130.85786	,	34	),
new GET_RESTAURANTS_AROUND_Results(	316	,	53022	,"	Trampoline Gelato	","	19 Kitchener Dr, Darwin, NT, 800	","	Australian, Vegetarian Friendly, Gluten Free Options	",	-12.467579	,	130.84612	,	34	),
new GET_RESTAURANTS_AROUND_Results(	317	,	56786	,"	Transit Lounge Cafe	","	396 Stuart Hwy, Darwin, NT, 820	","	Restaurant	",	-12.42588	,	130.87209	,	34	),
new GET_RESTAURANTS_AROUND_Results(	318	,	12301	,"	Tree Tops Restaurant	","	62 Cavenagh St, Darwin, NT, 800	","	Australian	",	-12.46001	,	130.84059	,	34	),
new GET_RESTAURANTS_AROUND_Results(	319	,	16917	,"	Uncle Sam's Take Away Food	","	109 Smith St, Darwin, NT, 800	","	Fast Food	",	-12.45723	,	130.83571	,	34	),
new GET_RESTAURANTS_AROUND_Results(	320	,	16800	,"	Vault Cafe	","	Nab House Shop 3 71 Smith St, Darwin, NT, 800	","	Cafe, Australian, Gluten Free Options	",	-12.46129	,	130.83942	,	34	),
new GET_RESTAURANTS_AROUND_Results(	321	,	3125	,"	Vietnamese Saigon Star	","	60 Smith St, Darwin, NT, 800	","	Asian, Vietnamese, Soups, Vegetarian Friendly, Gluten Free Options, Vegan Options	",	-12.462724	,	130.84135	,	34	),
new GET_RESTAURANTS_AROUND_Results(	322	,	38701	,"	Wangi Falls Cafe	","	Wangi Falls, Litchfield National Park, NT, 822	","	Cafe, Fast Food, Australian	",	-13.16333	,	130.67802	,	34	),
new GET_RESTAURANTS_AROUND_Results(	323	,	12168	,"	Waratah Sports Club	","	Gilruth Ave, Darwin, NT, 800	","	Restaurant	",	-12.44788	,	130.83249	,	34	),
new GET_RESTAURANTS_AROUND_Results(	324	,	46351	,"	Water Lillies Cafe	","	215 Vanderlin Drive Malak, Darwin, NT, 812	","	Seafood	",	-12.38726	,	130.90671	,	34	),
new GET_RESTAURANTS_AROUND_Results(	325	,	45256	,"	Wharf One Food & Wine	","	19 Kitchener Dr, Darwin, NT, 800	","	Australian, Vegetarian Friendly, Gluten Free Options, Vegan Options	",	-12.468707	,	130.84726	,	34	),
new GET_RESTAURANTS_AROUND_Results(	326	,	49185	,"	Wisdom Bar and Cafe	","	48 Mitchell St, Darwin, NT, 800	","	Bar, Pub, Australian, Vegetarian Friendly, Vegan Options, Gluten Free Options	",	-12.463287	,	130.84023	,	34	),
new GET_RESTAURANTS_AROUND_Results(	327	,	3614	,"	Wongs Chinese Takeaway	","	3 Westralia St, Darwin, NT, 820	","	Restaurant	",	-12.4447	,	130.84164	,	34	),
new GET_RESTAURANTS_AROUND_Results(	328	,	17327	,"	Xtreme Caffeine	","	13 Cavenagh St, Darwin, NT, 800	","	Cafe	",	-12.463096	,	130.84381	,	34	),
new GET_RESTAURANTS_AROUND_Results(	329	,	57711	,"	Yogi's Way	","	9 Westralia St, Darwin, NT, 820	","	Australian, Nepali	",	-12.44469	,	130.84213	,	34	),
new GET_RESTAURANTS_AROUND_Results(	330	,	33768	,"	Yots Greek Taverna	","	54 Marina Bvd, Darwin, NT, 820	","	Mediterranean, Greek, Gluten Free Options, Vegetarian Friendly	",	-12.45091	,	130.8227	,	34	),
new GET_RESTAURANTS_AROUND_Results(	331	,	49443	,"	Yummy Noodle	","	5a/291 Trower Rd, Darwin, NT, 810	","	Asian	",	-12.37062	,	130.88371	,	34	),
new GET_RESTAURANTS_AROUND_Results(	332	,	13148	,"	Zambrero Darwin CBD	","	Mitchell Street, Darwin, NT, 800	","	Mexican, Fast Food	",	-12.46143	,	130.8381	,	34	),
new GET_RESTAURANTS_AROUND_Results(	333	,	8492	,"	Zest Restaurant & Terrace	","	Novotel Atrium Hotel 100 Esplanade, Darwin, NT, 800	","	Australian, Gluten Free Options	",	-12.46286	,	130.83762	,	34	),
new GET_RESTAURANTS_AROUND_Results(	334	,	12226	,"	Zhen's Corner	","	U 1 130 Smith St, Darwin, NT, 800	","	Chinese, Fast Food, Asian, Vegetarian Friendly	",	-12.45691	,	130.8357	,	34	),
new GET_RESTAURANTS_AROUND_Results(	335	,	16947	,"	Zhen's Kitchen	","	48/50 Smith Street, Darwin, NT, 800	","	Asian	",	-12.46037	,	130.83893	,	34	)
        
        ];        
        
    }
    ict : number;
    size1:number;
     newFiltoredList(searchLoad:RestaurantSearchModel){
        this.size1 =10;
         //alert('aa '+ searchLoad.currentPage)
         this.start1 = ((searchLoad.currentPage -1) * this.size1) + 1;
         this.end1 = (searchLoad.currentPage * this.size1);
         this.ict = 1;
         //this.list.forEach(element => {
         //   element.NUMBEROFPAGES = this.list[0].NUMBEROFPAGES;
         //   element.RowNum = this.ict;
         //   this.ict = this.ict + 1; 
        //});
        //alert('long:' + searchLoad.Longitude);
        //alert('Lati:' + searchLoad.Latitude)
        //alert('lower:' + this.start1);
        //alert('Upeer :' + this.end1);
        //alert('Distance :' + searchLoad.maxDistance);
        let SelectedCity : string;
        if(searchLoad.LocalityId != 0)
        {
            //SelectedCity = searchLoad.selectedLocalities.filter(r => r.CityId == searchLoad.LocalityId)[0].CityName;
            //alert(SelectedCity)
            if(searchLoad.selectedLocalities != null && searchLoad.selectedLocalities.length >0)
            {
                //alert("HHHH")
                searchLoad.Latitude = searchLoad.selectedLocalities.filter(r => r.CityId == searchLoad.LocalityId)[0].CityLatitude;  
                searchLoad.Longitude = searchLoad.selectedLocalities.filter(r => r.CityId == searchLoad.LocalityId)[0].CityLongitude;  
            
                searchLoad.maxDistance = 5;
                searchLoad.minDistance = 0;
             }

        }
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
        //alert('X1LON:' + X1LON + '  searchLoad.Longitude: ' + searchLoad.Longitude);
        //alert('X1LAT :' + X1LAT + '  searchLoad.Latitude: ' + searchLoad.Latitude);
        //alert('X2LON:' + X2LON + '  searchLoad.Longitude: ' + searchLoad.Longitude);
        //alert('X2LAT :' + X2LAT + '  searchLoad.Latitude: ' + searchLoad.Latitude);
        //alert('searchstring :'  + searchLoad.searchstring + ' this.list.length :' + this.list.length);
        
        this.list = this.list.filter(
            r => 
                ((r.RestaurantName.toLocaleLowerCase().includes(searchLoad.searchstring.toLocaleLowerCase()) ||
                r.Cuisine.toLocaleLowerCase().includes(searchLoad.searchstring.toLocaleLowerCase()) ||
                r.FullAddress.toLocaleLowerCase().includes(searchLoad.searchstring.toLocaleLowerCase()) 
               // ||
               // r.FullAddress.toLocaleLowerCase().includes(SelectedCity.toLocaleLowerCase())
                ) &&
                  
            
                (r.Latitude >= X1LAT && r.Latitude <= X2LAT && r.Longitude >= X1LON && r.Longitude <= X2LON ) &&
                !(r.Latitude >= X1LATLESS && r.Latitude <= X2LATLESS && r.Longitude >= X1LONLESS && r.Longitude <= X2LONLESS )) 
                //r.RowNum>= this.start1 && r.RowNum <= this.end1
            
        )
        .sort().slice();
        //alert('searchstring :'  + searchLoad.searchstring + ' this.list.length :' + this.list.length);
        
        let imagelist = new ImagesTest();
        let verifyList = new GET_IMAGE1();
        let i1,i2,i3,i4,i5,i6,i7,i8: string ="";
        let number1 : number = 1;
        this.list.forEach(element => {
            element.RowNum = number1;
            number1 = number1 + 1;
            //element.NUMBEROFPAGES = a; 
        });
        //alert('[this.list.length : '+ this.list.length + " ]");
        let a = 0;
        if(this.list.length >= searchLoad.noOfItemsPerPage)
        {
            a = Math.trunc(this.list.length / searchLoad.noOfItemsPerPage)
            if((this.list.length / searchLoad.noOfItemsPerPage)/Math.trunc(this.list.length / searchLoad.noOfItemsPerPage) * 1000>= 1)
            {
                a = a +1;
            }
    
        }
        else
        {
            a = 0;
        }

        this.list = this.list.filter(
            r => 
                r.RowNum>= this.start1 && r.RowNum <= this.end1
            
        )
        .sort().slice();
        number1 = 0;
        this.list.forEach(element => {
            //alert(element.RowNum)
            element.ImageList = new GET_IMAGES(element.RestaurantId,"","","","","","","","",);
            i1 = verifyList.ImagenameList[ this.getRandomInt(0, 79)]
            i2 = verifyList.ImagenameList[ this.getRandomInt(0, 79)]
            i3 = verifyList.ImagenameList[ this.getRandomInt(0, 79)]
            i4 = verifyList.ImagenameList[ this.getRandomInt(0, 79)]
            i5 = verifyList.ImagenameList[ this.getRandomInt(0, 79)]
            i6 = verifyList.ImagenameList[ this.getRandomInt(0, 79)]
            i7 = verifyList.ImagenameList[ this.getRandomInt(0, 79)]
            i8 = verifyList.ImagenameList[ this.getRandomInt(0, 79)]
            if(i1 == null || i1.trim() == "")
            {
                i1 = "Australian.png";
            }
            number1 = number1 +1;
            element.ImageList.imagename1 = "../../assets/img/flags/" + i1;            
            element.ImageList.imagename2 = "../../assets/img/flags/" + i2;            
            element.ImageList.imagename3 = "../../assets/img/flags/" + i3;            
            element.ImageList.imagename4 = "../../assets/img/flags/" + i4;            
            element.ImageList.imagename5 = "../../assets/img/flags/" + i5;            
            element.ImageList.imagename6 = "../../assets/img/flags/" + i6;            
            element.ImageList.imagename7 = "../../assets/img/flags/" + i7;            
            element.ImageList.imagename8 = "../../assets/img/flags/" + i8;            
            element.NUMBEROFPAGES = a;
          //  alert(element.ImageList.imagename1)
        })
        return this.list;
     }



    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}


/*

        //filter(
            ( //r => 
                //(r.RestaurantName.toLocaleLowerCase().includes(searchLoad.searchstring.toLocaleLowerCase()) ||
                //r.Cuisine.toLocaleLowerCase().includes(searchLoad.searchstring.toLocaleLowerCase()) ||
                //r.FullAddress.toLocaleLowerCase().includes(searchLoad.searchstring.toLocaleLowerCase())) &&
                //(r.RestaurantId >=this.start1 && r.RestaurantId <= this.end1) &&
                //(r.Latitude >= X1LAT && r.Latitude <= X2LAT && r.Longitude >= X1LON && r.Longitude <= X2LON ) &&
 //               r.RowNum>= this.start1 && r.RowNum <= this.end1
             // )
              //).sort().slice();


*/