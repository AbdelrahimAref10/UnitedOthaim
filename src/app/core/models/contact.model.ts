export interface ContactInfo {
  address: string;
  addressAr: string;
  phone: string;
  fax: string;
  email: string;
  website?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
