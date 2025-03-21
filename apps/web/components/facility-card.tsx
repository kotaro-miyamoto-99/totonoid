import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, MapPin, Star, Thermometer } from "lucide-react";
import { Facility } from "../types/facility";

interface FacilityCardProps {
  facility: Facility;
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-2.5">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-base truncate">{facility.name}</h3>
            <div className="flex items-center text-muted-foreground text-xs mt-0.5">
              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">{facility.location}</span>
            </div>
          </div>
          <div className="flex items-center flex-shrink-0 text-sm">
            <Star className="h-3.5 w-3.5 text-yellow-500 mr-0.5" />
            <span>{facility.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1 bg-red-100 text-red-800 px-1.5 py-0.5 rounded text-[10px]">
            <Thermometer className="h-3 w-3" />
            <span>{facility.temperature}°C</span>
          </div>
          <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[10px]">
            <Droplets className="h-3 w-3" />
            <span>{facility.waterTemp}°C</span>
          </div>
          <div className="flex-1 flex flex-wrap gap-1 justify-end">
            {facility.tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="text-[10px] px-1.5 py-0 h-4 font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-xs mt-2 text-muted-foreground line-clamp-2">{facility.description}</p>
      </CardContent>
    </Card>
  );
}
