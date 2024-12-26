import React, { createContext, useContext, useState, ReactNode } from "react";

interface Building {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  Sale_Price: number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

interface BuildingsContextProps {
  buildings: Building[];
  handleBuilding: (id: number) => void;
  building: Building;
}

const BuildingsContext = createContext<BuildingsContextProps | undefined>(
  undefined
);

const data = [
  {
    Id: 2534,
    DateListed: "2023-03-03 17:41:13",
    Title: "Lovely House with Mountain View",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 349000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Paris",
    Sqft: 4638,
    Bedrooms: 4,
    Bathrooms: 3,
    Parking: 4,
    YearBuilt: 2006,
  },
  {
    Id: 1278,
    DateListed: "2018-03-20 22:24:21",
    Title: "Single Family House",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 499000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Barcelona",
    Sqft: 5638,
    Bedrooms: 5,
    Bathrooms: 3,
    Parking: 3,
    YearBuilt: 2008,
  },
  {
    Id: 5631,
    DateListed: "2018-03-16 21:55:28",
    Title: "5 bedroom house in Sao Paulo",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 449000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Sao Paulo",
    Sqft: 5838,
    Bedrooms: 5,
    Bathrooms: 3,
    Parking: 4,
    YearBuilt: 2003,
  },
  {
    Id: 4720,
    DateListed: "2018-02-28 23:37:28",
    Title: "3 bedroom house in Cartagena",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 350000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Cartagena",
    Sqft: 2638,
    Bedrooms: 3,
    Bathrooms: 2,
    Parking: 2,
    YearBuilt: 2006,
  },
  {
    Id: 6631,
    DateListed: "2018-03-01 20:18:20",
    Title: "Beautiful traditional ranch in California",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 575000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "California",
    Sqft: 4638,
    Bedrooms: 4,
    Bathrooms: 4,
    Parking: 4,
    YearBuilt: 2006,
  },
  {
    Id: 4234,
    DateListed: "2018-03-20 22:15:34",
    Title: "4 bedrooms with a spacious garage",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 475000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Ontario",
    Sqft: 2048,
    Bedrooms: 4,
    Bathrooms: 2,
    Parking: 2,
    YearBuilt: 1840,
  },
  {
    Id: 5130,
    DateListed: "2018-03-19 20:53:04",
    Title: "Beautiful spacious 1306 sq ft Bungalow",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 374000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Alberta",
    Sqft: 1306,
    Bedrooms: 5,
    Bathrooms: 3,
    Parking: 4,
    YearBuilt: 2001,
  },
  {
    Id: 1125,
    DateListed: "2018-03-01 19:59:05",
    Title: "EXQUISITE POND VIEW HOME",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 450000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Paris",
    Sqft: 1935,
    Bedrooms: 3,
    Bathrooms: 2,
    Parking: 2,
    YearBuilt: 2001,
  },
  {
    Id: 110,
    DateListed: "2019-01-31 16:24:09",
    Title: "Meticulously maintained Lampman Family Home",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 199000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Saskatchewan",
    Sqft: 1204,
    Bedrooms: 5,
    Bathrooms: 3,
    Parking: 6,
    YearBuilt: 1966,
  },
  {
    Id: 10847,
    DateListed: "2018-02-28 19:03:26",
    Title: "Charming updated gem",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
    Sale_Price: 725000,
    ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
    PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
    Location: "Seattle",
    Sqft: 6194,
    Bedrooms: 4,
    Bathrooms: 2,
    Parking: 1,
    YearBuilt: 1948,
  },
];

export const BuildingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [buildings] = useState<Building[]>(data);
  const [building, setBuilding] = useState<Building>({} as Building);

  function handleBuilding(id: number) {
    const build = buildings.filter((build) => build.Id === id)[0];

    setBuilding(build);
  }

  return (
    <BuildingsContext.Provider value={{ buildings, handleBuilding, building }}>
      {children}
    </BuildingsContext.Provider>
  );
};

export const useBuildings = () => {
  const context = useContext(BuildingsContext);
  if (!context) {
    throw new Error("useBuildings must be used within a BuildingsProvider");
  }
  return context;
};
