import { Patient, Alert, TimelineEvent, ClinicalSection } from '@/types/patient';

export const samplePatient: Patient = {
  id: '1',
  name: 'Sarah Mitchell',
  age: 68,
  sex: 'F',
  mrn: 'MRN-4582371',
  allergies: ['Penicillin (rash)', 'Latex (anaphylaxis)'],
  currentMedications: [
    { name: 'Metformin', dose: '1000mg', frequency: 'BD', startDate: '2020-03-15' },
    { name: 'Ramipril', dose: '10mg', frequency: 'Daily', startDate: '2019-11-20' },
    { name: 'Atorvastatin', dose: '40mg', frequency: 'Nocte', startDate: '2019-11-20' },
    { name: 'Aspirin', dose: '100mg', frequency: 'Daily', startDate: '2019-11-20' },
  ],
  keyDiagnoses: [
    'Type 2 Diabetes Mellitus',
    'Hypertension',
    'Ischaemic Heart Disease',
    'Chronic Kidney Disease Stage 3a',
  ],
  presentingIssue: 'Review of diabetes management. HbA1c trending upward over past 6 months (7.2% → 8.1%). Patient reports increased thirst and nocturia ×3.',
};

export const alerts: Alert[] = [
  {
    type: 'critical',
    message: 'eGFR declined from 52 to 44 mL/min in past 3 months',
    source: 'Pathology - 2025-11-15',
  },
  {
    type: 'warning',
    message: 'Missed last 2 cardiology appointments',
    source: 'Outpatient records',
  },
  {
    type: 'info',
    message: 'Recent ED presentation 3 weeks ago for chest pain - ruled out ACS',
    source: 'ED Summary - 2025-11-08',
  },
];

export const timeline: TimelineEvent[] = [
  {
    date: '2025-11-15',
    type: 'investigation',
    title: 'Pathology',
    description: 'HbA1c 8.1%, eGFR 44, Cr 115',
    source: 'Lab System',
  },
  {
    date: '2025-11-08',
    type: 'ed-visit',
    title: 'ED Presentation',
    description: 'Chest pain - ruled out ACS. Troponin negative. Discharged.',
    source: 'ED Notes',
  },
  {
    date: '2025-09-22',
    type: 'investigation',
    title: 'Echocardiogram',
    description: 'LVEF 50%, mild LV hypertrophy, no significant valvular disease',
    source: 'Cardiology',
  },
  {
    date: '2025-08-10',
    type: 'consultation',
    title: 'Endocrinology Review',
    description: 'Discussed insulin initiation. Patient declined at this time.',
    source: 'Specialist Letter',
  },
  {
    date: '2024-11-15',
    type: 'admission',
    title: 'Hospital Admission',
    description: 'Acute on chronic kidney injury. IV fluids, discharged day 3.',
    source: 'Discharge Summary',
  },
  {
    date: '2024-03-20',
    type: 'operation',
    title: 'Cholecystectomy',
    description: 'Laparoscopic cholecystectomy. Uncomplicated.',
    source: 'Operation Note',
  },
  {
    date: '2019-11-18',
    type: 'admission',
    title: 'NSTEMI',
    description: 'Coronary angiogram - 3 vessel disease. CABG deemed high risk. Medical management.',
    source: 'Cardiology Discharge Summary',
  },
];

export const clinicalSections: ClinicalSection[] = [
  {
    title: 'Chronic Conditions',
    icon: 'activity',
    items: [
      {
        label: 'Type 2 Diabetes',
        value: 'Diagnosed 2015. Currently on oral agents. HbA1c trending up (8.1%).',
        date: '2015-06-12',
        source: 'GP Records',
        sourceDocument: 'Initial diabetes diagnosis - GP letter 2015-06-12',
      },
      {
        label: 'Ischaemic Heart Disease',
        value: '3-vessel disease post-NSTEMI 2019. Not suitable for CABG. On optimal medical therapy.',
        date: '2019-11-18',
        source: 'Cardiology',
        sourceDocument: 'Discharge summary - NSTEMI admission 2019-11-18',
      },
      {
        label: 'CKD Stage 3a',
        value: 'Baseline eGFR ~50. Recent decline to 44. Likely diabetic nephropathy.',
        date: '2022-04-10',
        source: 'Nephrology',
        sourceDocument: 'Renal clinic letter 2022-04-10',
      },
    ],
  },
  {
    title: 'Significant Past History',
    icon: 'file-text',
    items: [
      {
        label: 'NSTEMI (2019)',
        value: 'Troponin 2400. Angiogram showed 3VD. Deemed high risk for surgery.',
        date: '2019-11-18',
        source: 'Cardiology',
        sourceDocument: 'Angiogram report 2019-11-18',
      },
      {
        label: 'Cholecystectomy (2024)',
        value: 'Lap chole for symptomatic cholelithiasis. Uncomplicated recovery.',
        date: '2024-03-20',
        source: 'Surgical',
        sourceDocument: 'Operation note 2024-03-20',
      },
      {
        label: 'AKI on CKD (2024)',
        value: 'Cr peaked at 180. Responded to IV fluids. No dialysis required.',
        date: '2024-11-15',
        source: 'Renal',
        sourceDocument: 'Discharge summary 2024-11-15',
      },
    ],
  },
  {
    title: 'Recent Healthcare Utilisation',
    icon: 'calendar',
    items: [
      {
        label: 'ED Presentation',
        value: 'Chest pain 3 weeks ago. Troponin negative. Discharged same day.',
        date: '2025-11-08',
        source: 'Emergency',
        sourceDocument: 'ED discharge summary 2025-11-08',
      },
      {
        label: 'GP Visits',
        value: '4 visits in past 3 months for diabetes review and medication adjustments.',
        source: 'GP',
        sourceDocument: 'GP correspondence log',
      },
    ],
  },
  {
    title: 'Investigations Timeline',
    icon: 'flask',
    items: [
      {
        label: 'Latest Pathology',
        value: 'HbA1c 8.1%, eGFR 44, Cr 115, K 4.2, Hb 128',
        date: '2025-11-15',
        source: 'Pathology',
        sourceDocument: 'Lab report 2025-11-15',
      },
      {
        label: 'Echocardiogram',
        value: 'LVEF 50%, mild LVH, trace MR, no AS',
        date: '2025-09-22',
        source: 'Cardiology',
        sourceDocument: 'Echo report 2025-09-22',
      },
      {
        label: 'Previous HbA1c',
        value: '7.8% (Aug), 7.5% (May), 7.2% (Feb) - trend upward',
        source: 'Pathology',
        sourceDocument: 'Serial HbA1c results',
      },
    ],
  },
];
