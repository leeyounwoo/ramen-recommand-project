export interface DataProps {
  data: number[];
}

export type RamenDetailType = {
  params: string;
  ramenInfos: {
    brand: string;
    carbs: number;
    cholesterol: number;
    code: string;
    cold: number;
    cup: number;
    englishBrand: string;
    englishName: string;
    jjajang: number;
    kcal: number;
    lipid: number;
    liquid: number;
    name: string;
    noodle: string;
    powder: number;
    protein: number;
    ramenId: number;
    salty: number;
    sampleId: string;
    saturated_fat: number;
    seasoning: number;
    sodium: number;
    soup: number;
    sugar: number;
    surveyYear: number;
    sweetness: number;
    transFat: number;
    volume: number;
  };
  userLikeBoolean: boolean;
};

export type RamenListType = {
  AllList: {
    ramenId: number;
    name: string;
    englishName: string;
    englishBrand: string;
    brand: string;
  }[];
  bongiList: {
    ramenId: number;
    name: string;
    englishName: string;
    englishBrand: string;
    brand: string;
  }[];
  cupList: {
    ramenId: number;
    name: string;
    englishName: string;
    englishBrand: string;
    brand: string;
  }[];
};
