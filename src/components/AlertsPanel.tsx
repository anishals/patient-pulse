import { Alert } from '@/types/patient';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

interface AlertsPanelProps {
  alerts: Alert[];
}

export const AlertsPanel = ({ alerts }: AlertsPanelProps) => {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'critical':
        return <AlertCircle className="h-5 w-5" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5" />;
      case 'info':
        return <Info className="h-5 w-5" />;
    }
  };

  const getAlertColor = (type: Alert['type']) => {
    switch (type) {
      case 'critical':
        return 'border-l-clinical-red bg-clinical-red/5';
      case 'warning':
        return 'border-l-clinical-amber bg-clinical-amber/5';
      case 'info':
        return 'border-l-clinical-blue bg-clinical-blue/5';
    }
  };

  const getAlertVariant = (type: Alert['type']): 'destructive' | 'default' => {
    return type === 'critical' ? 'destructive' : 'default';
  };

  return (
    <Card className="border-l-4 border-l-clinical-amber">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-5 w-5 text-clinical-amber" />
          <h2 className="text-xl font-semibold text-foreground">Clinical Alerts & Flags</h2>
        </div>
        <div className="space-y-3">
          {alerts.map((alert, idx) => (
            <div
              key={idx}
              className={`border-l-4 p-4 rounded-md ${getAlertColor(alert.type)}`}
            >
              <div className="flex items-start gap-3">
                <div className={alert.type === 'critical' ? 'text-clinical-red' : alert.type === 'warning' ? 'text-clinical-amber' : 'text-clinical-blue'}>
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground mb-1">{alert.message}</p>
                  {alert.source && (
                    <Badge variant={getAlertVariant(alert.type)} className="text-xs mt-1">
                      {alert.source}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
