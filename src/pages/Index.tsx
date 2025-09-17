import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-turquoise/10 to-blue/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Drama" className="text-coral" size={32} />
              <h1 className="text-2xl font-bold text-darkBlue">Театр Драмы</h1>
            </div>
            <Button className="bg-coral hover:bg-coral/90 text-white">
              🛒 Купить билет
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold text-darkBlue mb-4">
              🎉 Добро пожаловать в волшебный мир театра!
            </h2>
            <p className="text-xl text-blue mb-8 max-w-3xl mx-auto">
              На нашем ярком баннере – захватывающие сцены из спектаклей и фотографии наших талантливых актеров.
            </p>
            <div className="bg-gradient-to-r from-coral to-turquoise text-white p-8 rounded-3xl mb-8 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                🌟 "Открой мир театра с Пушкинской картой!"
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pushkin Card Info */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-yellow/20 to-turquoise/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-darkBlue">
                Что такое Пушкинская карта?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-center">
                "Пушкинская карта – это уникальная возможность для молодежи от 14 до 22 лет наслаждаться культурой без затрат, получая 1000 рублей на посещение театров и музеев! Узнай, как легко попасть в мир искусства!"
              </p>
              
              <div className="bg-white/70 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-darkBlue mb-4">
                  📝 Как оформить карту (пошаговые рекомендации):
                </h4>
                <div className="space-y-4">
                  {[
                    "Зайди на сайт Госуслуги или скачай приложение Почта Банк",
                    "Заполни заявку, указав свои данные",
                    "Жди подтверждения! Карту можно забрать в удобном для тебя месте"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Badge className="bg-coral text-white w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <p className="text-darkBlue">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Use Card */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-darkBlue mb-12">
            Как потратить карту?
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 shadow-xl bg-gradient-to-r from-blue/10 to-turquoise/10">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-darkBlue mb-6">
                  🎫 Чтобы купить билет по Пушкинской карте:
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: "Search", text: "Выбери спектакль на нашем сайте!" },
                    { icon: "ShoppingCart", text: "Нажми 'Купить билет'" },
                    { icon: "CreditCard", text: "Выбери 'Пушкинская карта' как способ оплаты" },
                    { icon: "Heart", text: "Наслаждайся спектаклем!" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white/60 p-4 rounded-xl">
                      <Icon name={step.icon as any} className="text-coral" size={24} />
                      <p className="text-darkBlue font-medium">{step.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Shows */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Комедия \"Молодость\"",
                  description: "веселые приключения молодых, не упусти возможность посмеяться!",
                  color: "from-yellow to-coral"
                },
                {
                  title: "Драма \"Игра в любовь\"",
                  description: "трогательная история о чувствах и страсти, не оставит равнодушным!",
                  color: "from-blue to-turquoise"
                }
              ].map((show, index) => (
                <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className={`h-32 bg-gradient-to-r ${show.color} rounded-t-lg`}></div>
                  <CardContent className="p-6">
                    <h5 className="text-xl font-bold text-darkBlue mb-2">{show.title}</h5>
                    <p className="text-gray-600 mb-4">{show.description}</p>
                    <Button className="w-full bg-coral hover:bg-coral/90 text-white">
                      Купить билет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Theatre */}
      <section className="py-16 px-4 bg-gradient-to-r from-turquoise/10 to-blue/10">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-darkBlue mb-8">
            Почему стоит выбрать театр?
          </h3>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            "Театр – это не просто развлечение, это открытие новых горизонтов! 
            Он развивает воображение, формирует личность и обогащает внутренний мир. Присоединись к культуре!"
          </p>

          {/* Reviews */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Мария, 19 лет",
                review: "Захватывающе! Пушкинская карта – это супер! Я побывала на двух спектаклях всего за одну неделю.",
                rating: "⭐⭐⭐⭐⭐"
              },
              {
                name: "Артем, 22 года", 
                review: "Не знал, что театр может быть так интересно! Спасибо за возможность видеть всё это бесплатно!",
                rating: "⭐⭐⭐⭐⭐"
              }
            ].map((review, index) => (
              <Card key={index} className="shadow-xl bg-white/80 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{review.rating}</div>
                  <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                  <p className="font-bold text-darkBlue">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-coral to-blue text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">
            Купить билет по Пушкинской карте
          </h3>
          
          <p className="text-xl mb-8 opacity-90">
            "Следи за акциями на нашем сайте! Используй свою Пушкинскую карту и получай скидки на определенные спектакли!"
          </p>
          
          <Button size="lg" className="bg-white text-coral hover:bg-gray-100 text-xl px-8 py-4 mb-8">
            🛒 Купить билет по Пушкинской карте
          </Button>

          <div className="mt-12 text-center">
            <h4 className="text-2xl font-bold mb-4">
              "Забудь про скучные вечера! Присоединяйся к нам в Театре Драмы и открой для себя удивительный мир искусства с Пушкинской картой! 🎭❤️"
            </h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-darkBlue text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Контактная информация</h4>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>ул. Театральная, д. 10, г. Санкт-Петербург</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>📞 +7 (812) 555-55-55</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>📧 info@teatr-dramy.ru</span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Социальные сети</h4>
              <div className="space-y-2">
                <a href="#" className="block hover:text-coral transition-colors">ВКонтакте</a>
                <a href="#" className="block hover:text-coral transition-colors">Инстаграм</a>
                <a href="#" className="block hover:text-coral transition-colors">Телеграм</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Лозунги</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>"Искусство начинается здесь!"</p>
                <p>"Пушкинская карта – твой пропуск в мир искусства!"</p>
                <p>"Молодежь выбирает театр!"</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;