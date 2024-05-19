import React from 'react'
import ReactDOM from "react-dom"
import Header from './component/header'
import Restcard from './component/restcard'
import Body from './component/body'


const restdata=[{
  "info": {
    "id": "63800",
    "name": "Cafe Yolo",
    "cloudinaryImageId": "cnw5mfg2zuvpkugomjwv",
    "locality": "Vijay Nagar",
    "areaName": "Vijay Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Indian",
      "Chinese",
      "Italian"
    ],
    "avgRating": 4,
    "parentId": "54495",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 9.9,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "9.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-05-20 03:20:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.1",
        "ratingCount": "1K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=63800",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "786183",
    "name": "Cake",
    "cloudinaryImageId": "60a8b98fc9d14de1acff6cad0731923b",
    "locality": "Vijay Nagar",
    "areaName": "Vijay Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Bakery",
      "Cakes and Pastries"
    ],
    "avgRating": 3.4,
    "parentId": "3862",
    "avgRatingString": "3.4",
    "totalRatingsString": "10+",
    "promoted": true,
    "adTrackingId": "cid=13400237~p=3~adgrpid=13400237#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=786183~eid=afad4384-edd9-4726-901a-145450ad2ace~srvts=1716151877826~collid=45995",
    "sla": {
      "deliveryTime": 44,
      "lastMileTravel": 8.6,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "8.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-05-20 05:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=786183",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},{
  "info": {
    "id": "74397",
    "name": "Punjabi Tadka Restaurant",
    "cloudinaryImageId": "gi3zvy9zv6vvlsyq6qsg",
    "locality": "Bhanwar Kuan",
    "areaName": "Bhawar Kuan",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "North Indian"
    ],
    "avgRating": 4,
    "parentId": "7989",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 34,
      "lastMileTravel": 6.8,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "6.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-05-20 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        },
        "textBased": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "3.7",
        "ratingCount": "100+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=74397",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "65268",
    "name": "McDonald's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_65268.JPG",
    "locality": "Bhawarkua main Rd",
    "areaName": "Beside Rajnandani Hotel",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "630",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 24,
      "lastMileTravel": 5.5,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "5.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-05-20 03:45:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            }
          ]
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "FREE ITEM"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=65268",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "420862",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
    "locality": "Veda Complex",
    "areaName": "Bhawar Kuan",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "4961",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 5.6,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "5.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-05-20 04:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Pizza.png",
          "description": "Delivery!"
        },
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textExtendedBadges": {
          
        },
        "textBased": {
          
        },
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            },
            {
              "attributes": {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=420862",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
}]
  




function Applayout(){
  return(
    <div className='app'>

      <Header/>
      <Body/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Applayout/>
  
)
