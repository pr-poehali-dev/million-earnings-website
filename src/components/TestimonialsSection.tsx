import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  result: string;
  timeframe: string;
  plan: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Александр Петров",
    role: "Предприниматель",
    company: "IT-консалтинг",
    image: "/img/99e29354-6309-4a3b-852a-f08ab85417aa.jpg",
    rating: 5,
    text: "За первые 3 месяца работы с программой мой доход увеличился в 4 раза! Стратегии действительно работают, а поддержка наставника помогла избежать многих ошибок. Рекомендую всем, кто серьезно настроен на результат.",
    result: "₽850,000",
    timeframe: "3 месяца",
    plan: "Премиум"
  },
  {
    id: "2", 
    name: "Елена Смирнова",
    role: "Маркетолог",
    company: "Digital-агентство",
    image: "/img/b7a60e99-f619-4f5e-b0f4-df81bfa99da6.jpg",
    rating: 5,
    text: "Программа превзошла все мои ожидания. Уникальные методики, которые я изучила, позволили не только достичь финансовых целей, но и полностью изменить подход к бизнесу. Теперь работаю на себя и зарабатываю больше, чем мечтала.",
    result: "₽1,200,000",
    timeframe: "4 месяца", 
    plan: "VIP"
  },
  {
    id: "3",
    name: "Михаил Волков",
    role: "Инвестор",
    company: "Частные инвестиции",
    image: "/img/7d7deb6f-fb21-4c91-a66f-e9da2103d680.jpg",
    rating: 5,
    text: "Скептически относился к подобным программам, но результат говорит сам за себя. Закрытые инвестиционные сделки из VIP-плана окупили себя уже в первый месяц. Команда профессионалов с огромным опытом.",
    result: "₽2,100,000",
    timeframe: "2 месяца",
    plan: "VIP"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 text-sm font-semibold">
            ИСТОРИИ УСПЕХА
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные люди, реальные результаты. Узнайте, как наши участники достигли финансового успеха
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Header with photo and info */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {testimonial.plan}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 font-['Montserrat']">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-orange-600 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={16} />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="px-6 pb-4">
                  <div className="relative">
                    <Icon name="Quote" className="absolute -top-2 -left-2 text-orange-200" size={24} />
                    <p className="text-gray-700 leading-relaxed pl-4 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 font-['Montserrat']">
                        {testimonial.result}
                      </div>
                      <p className="text-gray-600 text-sm">Заработано</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600 font-['Montserrat']">
                        {testimonial.timeframe}
                      </div>
                      <p className="text-gray-600 text-sm">Период</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Montserrat']">
              Почему нам доверяют тысячи клиентов?
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="mb-3 p-3 bg-orange-100 rounded-full w-fit mx-auto">
                  <Icon name="Shield" className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Гарантия результата</h4>
                <p className="text-gray-600 text-sm">100% возврат средств если не получите результат за 90 дней</p>
              </div>
              
              <div className="text-center">
                <div className="mb-3 p-3 bg-amber-100 rounded-full w-fit mx-auto">
                  <Icon name="Users" className="text-amber-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Проверенная команда</h4>
                <p className="text-gray-600 text-sm">Эксперты с 15+ летним опытом в финансовой сфере</p>
              </div>
              
              <div className="text-center">
                <div className="mb-3 p-3 bg-orange-100 rounded-full w-fit mx-auto">
                  <Icon name="BookOpen" className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Авторские методики</h4>
                <p className="text-gray-600 text-sm">Уникальные стратегии, недоступные в открытом доступе</p>
              </div>
              
              <div className="text-center">
                <div className="mb-3 p-3 bg-amber-100 rounded-full w-fit mx-auto">
                  <Icon name="Headphones" className="text-amber-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Поддержка 24/7</h4>
                <p className="text-gray-600 text-sm">Персональный куратор всегда готов помочь и ответить на вопросы</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video testimonials placeholder */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">
              Видео-отзывы участников
            </h3>
            <p className="text-lg text-gray-600">Смотрите, как наши клиенты рассказывают о своих результатах</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Play" className="text-orange-600" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white">
                    <h4 className="font-semibold">Отзыв участника #{i}</h4>
                    <p className="text-sm text-gray-300">Результат за {i + 1} месяца</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;