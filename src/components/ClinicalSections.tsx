import { ClinicalSection } from '@/types/patient';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Activity, FileText, Calendar, FlaskConical } from 'lucide-react';

interface ClinicalSectionsProps {
  sections: ClinicalSection[];
}

export const ClinicalSections = ({ sections }: ClinicalSectionsProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'activity':
        return <Activity className="h-5 w-5" />;
      case 'file-text':
        return <FileText className="h-5 w-5" />;
      case 'calendar':
        return <Calendar className="h-5 w-5" />;
      case 'flask':
        return <FlaskConical className="h-5 w-5" />;
      default:
        return <Activity className="h-5 w-5" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {sections.map((section, sectionIdx) => (
        <Card key={sectionIdx}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-primary">{getIcon(section.icon)}</div>
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
            </div>
            <div className="space-y-4">
              {section.items.map((item, itemIdx) => (
                <TooltipProvider key={itemIdx}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="group cursor-pointer p-3 rounded-lg hover:bg-clinical-blue-light/50 transition-all border border-transparent hover:border-border">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                          {item.date && (
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-primary font-medium">{item.source}</span>
                          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                            • Hover for source
                          </span>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="max-w-md">
                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Source Document:</p>
                        <p className="text-sm">{item.sourceDocument}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
