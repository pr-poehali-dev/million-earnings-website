import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import RegistrationForm from "@/components/RegistrationForm";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const openRegistration = (planId?: string) => {
    if (planId) setSelectedPlan(planId);
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 text-lg font-semibold animate-pulse">
            МОТИВАЦИЯ • ЭНЕРГИЯ
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-['Montserrat']">
            1,000,000₽
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">
            Заработок за месяц
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Присоединяйтесь к успешным людям, которые уже достигли финансовой свободы. 
            Уникальная система, проверенные методы, гарантированный результат.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => openRegistration()}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать зарабатывать
            </Button>
            <Button variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/img/b8eaeec7-c59e-4118-905b-b0592fe87912.jpg" 
              alt="График успеха" 
              className="w-64 h-64 object-contain rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">Планы подписки</h2>
            <p className="text-xl text-gray-600">Выберите подходящий тариф для максимального результата</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Базовый план */}
            <Card className="relative border-2 border-gray-200 hover:border-orange-300 transition-colors duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-gray-900 font-['Montserrat']">Базовый</CardTitle>
                <div className="text-4xl font-bold text-orange-600 font-['Montserrat'] mt-4">₽29,000</div>
                <p className="text-gray-500">за месяц</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Доступ к базовым стратегиям</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Еженедельные вебинары</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Комьюнити единомышленников</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Техническая поддержка</span>
                </div>
                <Button 
                  onClick={() => openRegistration("basic")}
                  className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white rounded-full py-3 font-semibold"
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Премиум план */}
            <Card className="relative border-2 border-orange-500 hover:border-orange-600 transition-colors duration-300 shadow-xl transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 text-sm font-semibold">
                  ПОПУЛЯРНЫЙ
                </Badge>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-gray-900 font-['Montserrat']">Премиум</CardTitle>
                <div className="text-4xl font-bold text-orange-600 font-['Montserrat'] mt-4">₽59,000</div>
                <p className="text-gray-500">за месяц</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Все из Базового плана</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Star" className="text-amber-500" size={20} />
                  <span>Персональный наставник</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Star" className="text-amber-500" size={20} />
                  <span>Эксклюзивные стратегии</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Star" className="text-amber-500" size={20} />
                  <span>Приоритетная поддержка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Gift" className="text-orange-500" size={20} />
                  <span className="font-semibold text-orange-600">Бонус: 5% от прибыли</span>
                </div>
                <Button 
                  onClick={() => openRegistration("premium")}
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full py-3 font-semibold"
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* VIP план */}
            <Card className="relative border-2 border-amber-400 hover:border-amber-500 transition-colors duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-gray-900 font-['Montserrat']">VIP</CardTitle>
                <div className="text-4xl font-bold text-amber-600 font-['Montserrat'] mt-4">₽99,000</div>
                <p className="text-gray-500">за месяц</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Все из Премиум плана</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Crown" className="text-amber-500" size={20} />
                  <span>Личные консультации 1-на-1</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Crown" className="text-amber-500" size={20} />
                  <span>Закрытые инвестиционные сделки</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Crown" className="text-amber-500" size={20} />
                  <span>Доступ к VIP-событиям</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Gift" className="text-amber-500" size={20} />
                  <span className="font-semibold text-amber-600">Бонус: 10% от прибыли</span>
                </div>
                <Button 
                  onClick={() => openRegistration("vip")}
                  className="w-full mt-6 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-full py-3 font-semibold"
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus System */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">Бонусная система</h2>
            <p className="text-xl text-gray-600">Дополнительные возможности для увеличения дохода</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 p-4 bg-orange-100 rounded-full w-fit mx-auto">
                <Icon name="Users" className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Montserrat']">Реферальная программа</h3>
              <p className="text-gray-600 mb-4">Получайте 15% с каждого приглашенного друга</p>
              <Badge className="bg-orange-500 text-white">+15%</Badge>
            </Card>
            
            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 p-4 bg-amber-100 rounded-full w-fit mx-auto">
                <Icon name="TrendingUp" className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Montserrat']">Прогрессивные бонусы</h3>
              <p className="text-gray-600 mb-4">Больше зарабатываете - больше получаете</p>
              <Badge className="bg-amber-500 text-white">до 25%</Badge>
            </Card>
            
            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 p-4 bg-orange-100 rounded-full w-fit mx-auto">
                <Icon name="Calendar" className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Montserrat']">Ежемесячные акции</h3>
              <p className="text-gray-600 mb-4">Специальные предложения каждый месяц</p>
              <Badge className="bg-orange-500 text-white">Новые акции</Badge>
            </Card>
            
            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 p-4 bg-amber-100 rounded-full w-fit mx-auto">
                <Icon name="Trophy" className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Montserrat']">Конкурсы и призы</h3>
              <p className="text-gray-600 mb-4">Участвуйте и выигрывайте ценные призы</p>
              <Badge className="bg-amber-500 text-white">Призы</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-['Montserrat']">🔥 Ограниченное предложение</h2>
          <p className="text-2xl mb-8 font-semibold">
            Скидка 50% на первый месяц для новых участников!
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold mb-4 font-['Montserrat']">24:59:35</div>
            <p className="text-xl">до окончания акции</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => openRegistration()}
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Воспользоваться скидкой
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Statistics */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">Наши результаты</h2>
            <p className="text-xl text-gray-600">Цифры, которые говорят сами за себя</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-orange-600 mb-2 font-['Montserrat']">10,000+</div>
              <p className="text-gray-600 text-lg">Успешных участников</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-amber-600 mb-2 font-['Montserrat']">₽50M+</div>
              <p className="text-gray-600 text-lg">Общий заработок</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-orange-600 mb-2 font-['Montserrat']">95%</div>
              <p className="text-gray-600 text-lg">Довольных клиентов</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-amber-600 mb-2 font-['Montserrat']">24/7</div>
              <p className="text-gray-600 text-lg">Поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isRegistrationOpen && (
        <RegistrationForm
          selectedPlan={selectedPlan}
          onClose={() => setIsRegistrationOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;