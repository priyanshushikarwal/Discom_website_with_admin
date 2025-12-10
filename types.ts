export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Institutional' | 'Infrastructure';
  image: string;
  location: string;
  capacity: string;
}

export interface CalculatorState {
  bill: number;
  roofArea: number; // in sq ft
  city: string;
}

export interface SavingsResult {
  monthlySavings: number;
  annualSavings: number;
  treesSaved: number;
  roiYears: number;
}