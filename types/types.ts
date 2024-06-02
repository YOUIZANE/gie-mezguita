import { ReactElement } from "react";

export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }


  export interface RatingProps {
    rating: number;
    numReviews: number;
  }

  export interface ProductProps {
    name: string;
    isNew: boolean;
    imageURL: string;
    rating: number;
    numReviews:number;
    price: number

  }

  export interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
  }



