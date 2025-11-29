import { ViewMode } from '@/types/patient';
import { Button } from '@/components/ui/button';
import { Eye, FileText, Stethoscope } from 'lucide-react';

interface ViewModeToggleProps {
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export const ViewModeToggle = ({ mode, onModeChange }: ViewModeToggleProps) => {
  return (
    <div className="flex items-center gap-2 bg-card p-1 rounded-lg border border-border shadow-sm">
      <Button
        variant={mode === 'brief' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onModeChange('brief')}
        className="flex items-center gap-2"
      >
        <Eye className="h-4 w-4" />
        Brief
      </Button>
      <Button
        variant={mode === 'clinical' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onModeChange('clinical')}
        className="flex items-center gap-2"
      >
        <FileText className="h-4 w-4" />
        Clinical
      </Button>
      <Button
        variant={mode === 'specialty' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onModeChange('specialty')}
        className="flex items-center gap-2"
      >
        <Stethoscope className="h-4 w-4" />
        Specialty
      </Button>
    </div>
  );
};
