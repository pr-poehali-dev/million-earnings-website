import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface VideoTestimonial {
  id: string;
  title: string;
  name: string;
  result: string;
  timeframe: string;
  plan: string;
  thumbnail: string;
  description: string;
  duration: string;
}

interface VideoTestimonialModalProps {
  video: VideoTestimonial;
  onClose: () => void;
}

const VideoTestimonialModal = ({ video, onClose }: VideoTestimonialModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 минуты для демо
  const videoRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, duration]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    setCurrentTime(Math.floor(percent * duration));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-gray-900 border-gray-700">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-4 top-4 h-8 w-8 p-0 z-10 bg-black/50 hover:bg-black/70 text-white"
          >
            <Icon name="X" size={16} />
          </Button>

          {/* Video Player */}
          <div 
            ref={videoRef}
            className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center cursor-pointer"
            onClick={handlePlay}
          >
            {/* Thumbnail/Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${video.thumbnail})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Play/Pause Button */}
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 hover:bg-white/20 transition-colors duration-300">
                <Icon 
                  name={isPlaying ? "Pause" : "Play"} 
                  className="text-white" 
                  size={48} 
                />
              </div>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{video.title}</h3>
                <Badge className="bg-orange-500 text-white">
                  {video.plan}
                </Badge>
              </div>
              <p className="text-gray-300 text-sm mb-3">{video.description}</p>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div 
                  className="w-full bg-gray-600 rounded-full h-2 cursor-pointer"
                  onClick={handleSeek}
                >
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            {/* Loading Animation */}
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              </div>
            )}
          </div>

          {/* Video Details */}
          <CardContent className="p-6 bg-gray-900 text-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-orange-400 font-['Montserrat']">
                  {video.name}
                </h2>
                <p className="text-gray-300 mb-4">
                  В этом видео {video.name} рассказывает о своем опыте участия в программе 
                  и делится конкретными результатами, которых удалось достичь.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" className="text-orange-400" size={16} />
                    <span className="text-sm text-gray-400">Длительность: {video.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" className="text-orange-400" size={16} />
                    <span className="text-sm text-gray-400">Период достижения результата: {video.timeframe}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Package" className="text-orange-400" size={16} />
                    <span className="text-sm text-gray-400">Выбранный план: {video.plan}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-1 font-['Montserrat']">
                      {video.result}
                    </div>
                    <p className="text-gray-300 text-sm">Заработано за {video.timeframe}</p>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-400">Ключевые моменты видео:</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-start gap-2">
                      <Icon name="ChevronRight" className="text-orange-400 mt-0.5" size={14} />
                      <span>Первые шаги и выбор стратегии</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="ChevronRight" className="text-orange-400 mt-0.5" size={14} />
                      <span>Преодоление начальных трудностей</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="ChevronRight" className="text-orange-400 mt-0.5" size={14} />
                      <span>Достижение первых результатов</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="ChevronRight" className="text-orange-400 mt-0.5" size={14} />
                      <span>Масштабирование и рост доходов</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-gray-700">
              <Button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                <Icon name="Rocket" className="mr-2" size={16} />
                Начать зарабатывать как {video.name}
              </Button>
              <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800">
                <Icon name="Share2" className="mr-2" size={16} />
                Поделиться видео
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default VideoTestimonialModal;