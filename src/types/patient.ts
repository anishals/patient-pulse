export interface Patient {
  id: string;
  name: string;
  age: number;
  sex: string;
  mrn: string;
  allergies: string[];
  currentMedications: Medication[];
  keyDiagnoses: string[];
  presentingIssue: string;
}

export interface Medication {
  name: string;
  dose: string;
  frequency: string;
  startDate: string;
}

export interface Alert {
  type: 'critical' | 'warning' | 'info';
  message: string;
  source?: string;
}

export interface TimelineEvent {
  date: string;
  type: 'admission' | 'operation' | 'investigation' | 'consultation' | 'ed-visit';
  title: string;
  description: string;
  source: string;
}

export interface ClinicalSection {
  title: string;
  icon: string;
  items: ClinicalItem[];
}

export interface ClinicalItem {
  label: string;
  value: string;
  date?: string;
  source: string;
  sourceDocument: string;
}

export type ViewMode = 'brief' | 'clinical' | 'specialty';
