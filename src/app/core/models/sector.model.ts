export interface Sector {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon?: string;
  image: string;
  color?: string;
  route: string;
  details?: SectorDetails;
}

export interface SectorDetails {
  title: string;
  titleAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  features?: string[];
  featuresAr?: string[];
  stats?: SectorStat[];
  gallery?: string[];
}

export interface SectorStat {
  label: string;
  labelAr: string;
  value: string;
  icon?: string;
}
