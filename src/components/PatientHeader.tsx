import { Patient } from '@/types/patient';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { User, AlertTriangle, Pill } from 'lucide-react';

interface PatientHeaderProps {
  patient: Patient;
}

export const PatientHeader = ({ patient }: PatientHeaderProps) => {
  return (
    <Card className="border-l-4 border-l-primary">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="bg-clinical-blue-light rounded-full p-3">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-foreground mb-1">{patient.name}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{patient.age}yo {patient.sex}</span>
                <span>•</span>
                <span className="font-mono">{patient.mrn}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <h3 className="text-sm font-semibold text-foreground">Allergies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {patient.allergies.map((allergy, idx) => (
                <Badge key={idx} variant="destructive" className="text-xs">
                  {allergy}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Pill className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Current Medications</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              {patient.currentMedications.slice(0, 3).map((med, idx) => (
                <li key={idx}>
                  <span className="text-foreground font-medium">{med.name}</span> {med.dose} {med.frequency}
                </li>
              ))}
              {patient.currentMedications.length > 3 && (
                <li className="text-primary cursor-pointer hover:underline">
                  +{patient.currentMedications.length - 3} more
                </li>
              )}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-sm font-semibold text-foreground">Key Diagnoses</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              {patient.keyDiagnoses.map((diagnosis, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{diagnosis}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-clinical-blue-light rounded-lg border border-border">
          <h3 className="text-sm font-semibold text-foreground mb-2">Presenting Issue</h3>
          <p className="text-sm text-foreground leading-relaxed">{patient.presentingIssue}</p>
        </div>
      </div>
    </Card>
  );
};
