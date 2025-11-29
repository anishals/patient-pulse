import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ViewMode } from '@/types/patient';
import { samplePatient, alerts, timeline, clinicalSections } from '@/data/samplePatient';
import { PatientHeader } from '@/components/PatientHeader';
import { AlertsPanel } from '@/components/AlertsPanel';
import { Timeline } from '@/components/Timeline';
import { ClinicalSections } from '@/components/ClinicalSections';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { UserPlus, Clock } from 'lucide-react';

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('clinical');
  const [showPatient, setShowPatient] = useState(false);

  if (!showPatient) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground">ClaritySync</h1>
            <p className="text-xl text-muted-foreground">
              Medical History Aggregation & Clinical Summary System
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border shadow-lg space-y-6">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Next patient ready</span>
            </div>
            
            <Button
              size="lg"
              onClick={() => setShowPatient(true)}
              className="w-full flex items-center justify-center gap-3 text-lg h-14"
            >
              <UserPlus className="h-5 w-5" />
              Accept Next Patient
            </Button>
            
            <p className="text-xs text-muted-foreground">
              ClaritySync will automatically generate a structured clinical summary from all available sources
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-primary">ClaritySync</h1>
              <div className="h-6 w-px bg-border" />
              <span className="text-sm text-muted-foreground">Clinical Summary System</span>
            </div>
            <ViewModeToggle mode={viewMode} onModeChange={setViewMode} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-6">
        <PatientHeader patient={samplePatient} />
        
        <AlertsPanel alerts={alerts} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ClinicalSections sections={clinicalSections} />
          </div>
          <div>
            <Timeline events={timeline} />
          </div>
        </div>

        {viewMode === 'specialty' && (
          <div className="bg-card p-8 rounded-lg border border-border text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Specialty Deep Dive
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Select a specialty module to view focused clinical information
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Cardiology', 'Endocrinology', 'Nephrology', 'Haematology', 'Oncology'].map((specialty) => (
                <Button key={specialty} variant="outline">
                  {specialty}
                </Button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
