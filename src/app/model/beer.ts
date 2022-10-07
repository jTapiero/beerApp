import { BeerRating } from "./beer-rating";

export interface Beer {
    id             :number;
    name           :string;
    tagline        :string;
    first_brewed   :string;
    description    :string;
    volume         :BeerVolume;
    image_url      :string;
    food_pairing   :Array<string>
    brewers_tips   :string;
    contributed_by :string ;
}

export interface BeerVolume {
    value:number;
    unit:string;
}

export interface FavoriteBeer extends Beer {
    rating :BeerRating ;
}


