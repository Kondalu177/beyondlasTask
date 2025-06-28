import axios from "axios";
import React, { useEffect, useState } from "react";

export interface WebsiteData {
  terms: boolean;
  websiteUrl: string;
  country: string;
  language: string;
  mainCategories: string[];
  description1: string;
  normalOffer: {
    Guest_posting: number;
    Link_insertion: number;
  };
  greyNiche: {
    Enter_price: number;
    GamblingGuest_posting1: string;
    GamblingLink_insertion1: string;
    CryptoGuest_posting1: string;
    CryptoLink_insertion1: string;
    AdultGuest_posting1: string;
    AdultLink_insertion1: string;
    GamblingGuest_posting2: string;
    GamblingLink_insertion2: string;
    CryptoGuest_posting2: string;
    CryptoLink_insertion2: string;
    AdultGuest_posting2: string;
    AdultLink_insertion2: string;
  };
  homepageLink: {
    Guest_posting: number;
    Description_Website: string;
  };
  isArticleIncluded: string;
  taggingPolicy: string;
  articleWordCount: string;
  articleMinWords: number;
  articleMaxWords: number;
  advertiserLinkCount: string;
  advertiserMinLinks: number;
  advertiserMaxLinks: number;
  allowDoFollowLinks: string;
  otherLinksInArticle: string;
  linkTypeAllowed: string;
  description3: string;
}

function useGetData() {
  const [getData_view, setGetData_view] = useState<WebsiteData[]>([]);
  console.log(getData_view);

  useEffect(() => {
    const FacilityData = async () => {
      try {
        const res = await axios.get("http://65.2.124.28:5000/view_website");
        setGetData_view(res.data);
      } catch (err) {
        console.error("Failed to get Facility data", err);
      }
    };
    FacilityData();
  }, []);
  return { getData_view };
}

export default useGetData;
