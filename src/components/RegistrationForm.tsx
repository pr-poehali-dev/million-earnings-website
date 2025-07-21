import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  color: string;
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Базовый",
    price: "₽29,000",
    features: ["Базовые стратегии", "Еженедельные вебинары", "Комьюнити", "Техподдержка"],
    color: "gray"
  },
  {
    id: "premium",
    name: "Премиум",
    price: "₽59,000",
    features: ["Всё из Базового", "Персональный наставник", "Эксклюзивные стратегии", "Бонус 5%"],
    popular: true,
    color: "orange"
  },
  {
    id: "vip",
    name: "VIP",
    price: "₽99,000",
    features: ["Всё из Премиум", "Консультации 1-на-1", "VIP-события", "Бонус 10%"],
    color: "amber"
  }
];

interface RegistrationFormProps {
  onClose: () => void;
  selectedPlan?: string;
}

const RegistrationForm = ({ onClose, selectedPlan = "premium" }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: selectedPlan,
    promoCode: "",
    agreeTerms: false,
    agreeMarketing: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Введите ваше имя";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Введите корректный номер телефона";
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Необходимо согласие с условиями";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Здесь была бы отправка данных на сервер
    console.log("Регистрация:", formData);
    
    setIsSubmitting(false);
    onClose();
  };

  const selectedPlanData = plans.find(p => p.id === formData.plan);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-4 top-4 h-8 w-8 p-0"
          >
            <Icon name="X" size={16} />
          </Button>
          <CardTitle className="text-2xl font-bold text-center font-['Montserrat']">
            Регистрация на программу
          </CardTitle>
          <p className="text-center text-gray-600">
            Заполните форму и начните зарабатывать уже сегодня!
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Выбор тарифа */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Выберите тарифный план</Label>
              <RadioGroup
                value={formData.plan}
                onValueChange={(value) => setFormData(prev => ({ ...prev, plan: value }))}
                className="space-y-3"
              >
                {plans.map((plan) => (
                  <div key={plan.id} className="relative">
                    <div className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      formData.plan === plan.id 
                        ? `border-${plan.color}-500 bg-${plan.color}-50` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <RadioGroupItem value={plan.id} id={plan.id} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Label htmlFor={plan.id} className="font-semibold text-lg cursor-pointer">
                            {plan.name}
                          </Label>
                          {plan.popular && (
                            <Badge className="bg-orange-500 text-white text-xs">
                              ПОПУЛЯРНЫЙ
                            </Badge>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-2">{plan.price}</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Icon name="Check" className="text-green-500" size={14} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Персональные данные */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Персональные данные</Label>
              
              <div className="space-y-2">
                <Label htmlFor="name">Полное имя *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="promoCode">Промокод (опционально)</Label>
                <Input
                  id="promoCode"
                  type="text"
                  placeholder="Введите промокод для скидки"
                  value={formData.promoCode}
                  onChange={(e) => setFormData(prev => ({ ...prev, promoCode: e.target.value }))}
                />
              </div>
            </div>

            {/* Соглашения */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
                  }
                  className={errors.agreeTerms ? "border-red-500" : ""}
                />
                <Label htmlFor="agreeTerms" className="text-sm leading-5 cursor-pointer">
                  Я согласен с{" "}
                  <a href="#" className="text-orange-600 hover:underline">
                    пользовательским соглашением
                  </a>{" "}
                  и{" "}
                  <a href="#" className="text-orange-600 hover:underline">
                    политикой конфиденциальности
                  </a>
                  *
                </Label>
              </div>
              {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms}</p>}
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeMarketing"
                  checked={formData.agreeMarketing}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeMarketing: checked as boolean }))
                  }
                />
                <Label htmlFor="agreeMarketing" className="text-sm leading-5 cursor-pointer">
                  Согласен получать информацию о новых акциях и предложениях
                </Label>
              </div>
            </div>

            {/* Итоговая информация */}
            {selectedPlanData && (
              <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Выбранный план:</span>
                    <span className="font-bold text-lg">{selectedPlanData.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Стоимость:</span>
                    <span className="font-bold text-xl text-orange-600">{selectedPlanData.price}</span>
                  </div>
                  {formData.promoCode && (
                    <div className="flex justify-between items-center text-green-600">
                      <span>Промокод применен:</span>
                      <span className="font-semibold">-50%</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Кнопка отправки */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 text-lg font-semibold rounded-full"
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                  Обрабатываем заявку...
                </>
              ) : (
                <>
                  <Icon name="CreditCard" className="mr-2" size={20} />
                  Зарегистрироваться и оплатить
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;