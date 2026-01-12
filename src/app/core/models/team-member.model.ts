export interface TeamMember {
  id: string;
  name: string;
  nameAr: string;
  position: string;
  positionAr: string;
  bio?: string;
  bioAr?: string;
  image?: string;
  email?: string;
  phone?: string;
  department?: string;
  departmentAr?: string;
  isBoardMember?: boolean;
}
