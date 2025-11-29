import { TimelineEvent } from '@/types/patient';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Scissors, FlaskConical, Calendar, AlertCircle } from 'lucide-react';

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
  const getEventIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'admission':
        return <Activity className="h-4 w-4" />;
      case 'operation':
        return <Scissors className="h-4 w-4" />;
      case 'investigation':
        return <FlaskConical className="h-4 w-4" />;
      case 'consultation':
        return <Calendar className="h-4 w-4" />;
      case 'ed-visit':
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getEventColor = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'admission':
        return 'bg-clinical-red/10 text-clinical-red border-clinical-red';
      case 'operation':
        return 'bg-clinical-amber/10 text-clinical-amber border-clinical-amber';
      case 'investigation':
        return 'bg-clinical-blue/10 text-clinical-blue border-clinical-blue';
      case 'consultation':
        return 'bg-clinical-green/10 text-clinical-green border-clinical-green';
      case 'ed-visit':
        return 'bg-destructive/10 text-destructive border-destructive';
    }
  };

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Clinical Timeline</h2>
        <div className="space-y-4">
          {events.map((event, idx) => (
            <div key={idx} className="relative pl-8 pb-4 border-l-2 border-border last:border-l-0 last:pb-0">
              <div className={`absolute left-0 top-0 -translate-x-1/2 p-2 rounded-full border-2 bg-card ${getEventColor(event.type)}`}>
                {getEventIcon(event.type)}
              </div>
              <div className="group cursor-pointer hover:bg-muted/30 p-3 rounded-lg transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-muted-foreground">{event.date}</span>
                  <Badge variant="outline" className="text-xs">
                    {event.source}
                  </Badge>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <div className="hidden group-hover:block mt-2 text-xs text-primary">
                  Click to view source document →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
