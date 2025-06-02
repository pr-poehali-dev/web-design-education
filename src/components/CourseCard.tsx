import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  icon: string;
  topics: string[];
}

const CourseCard = ({
  title,
  description,
  duration,
  level,
  price,
  icon,
  topics,
}: CourseCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Icon name={icon as any} size={32} className="text-purple-600" />
          <Badge variant="secondary">{level}</Badge>
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Icon name="Clock" size={16} className="mr-1" />
              {duration}
            </div>
            <div className="text-2xl font-bold text-purple-600">{price}</div>
          </div>

          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            <Icon name="ArrowRight" size={16} className="mr-2" />
            Записаться на курс
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
