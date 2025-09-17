import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darkbrown via-maroon to-darkred text-ivory">
      {/* Theater Curtains Header */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-velvethered to-darkred opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-8 bg-theatergold"></div>
        <div className="absolute top-8 left-0 w-full h-4 bg-richgold"></div>
        
        <header className="relative z-10 bg-velvethered/95 backdrop-blur-sm border-b-4 border-theatergold sticky top-0">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-theatergold">🎭</div>
                <div>
                  <h1 className="text-3xl font-bold text-theatergold">ТЕАТР ДРАМЫ</h1>
                  <p className="text-cream/80 text-sm">Санкт-Петербург</p>
                </div>
              </div>
              <Button className="bg-theatergold hover:bg-richgold text-darkred font-bold shadow-2xl border-2 border-richgold">
                🎫 КУПИТЬ БИЛЕТ
              </Button>
            </div>
          </div>
        </header>
      </div>

      {/* Grand Theater Stage Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-velvethered/40 via-darkred/60 to-darkbrown"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-theatergold/20 to-transparent"></div>
        
        {/* Theater Curtain Effect */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-velvethered to-transparent opacity-80"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-velvethered to-transparent opacity-80"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-4 text-6xl">
                <span>🎭</span>
                <span className="text-theatergold">✨</span>
                <span>🎪</span>
              </div>
            </div>
            
            <h2 className="text-6xl font-bold text-theatergold mb-6 drop-shadow-2xl">
              Добро пожаловать
            </h2>
            <h3 className="text-4xl font-bold text-cream mb-8">
              в волшебный мир театра!
            </h3>
            
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-velvethered/80 via-darkred/70 to-velvethered/80 backdrop-blur-sm border-4 border-theatergold p-8 rounded-none shadow-2xl mb-8">
              <div className="text-theatergold text-2xl mb-4">🌟 🌟 🌟</div>
              <h4 className="text-3xl font-bold text-theatergold mb-4">
                "Открой мир театра с Пушкинской картой!"
              </h4>
              <p className="text-cream text-lg">
                Захватывающие сцены из спектаклей и фотографии наших талантливых актеров
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ornate Pushkin Card Info */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-darkbrown via-maroon to-darkbrown opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-velvethered/90 to-darkred/90 border-4 border-theatergold shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-theatergold"></div>
            <CardHeader className="text-center py-8 bg-gradient-to-r from-transparent via-theatergold/10 to-transparent">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-16 h-1 bg-theatergold"></div>
                <span className="text-4xl">👑</span>
                <div className="w-16 h-1 bg-theatergold"></div>
              </div>
              <CardTitle className="text-4xl text-theatergold font-bold">
                Что такое Пушкинская карта?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <div className="text-center bg-cream/10 p-6 rounded border border-theatergold/30">
                <p className="text-xl text-cream leading-relaxed">
                  "Пушкинская карта – это уникальная возможность для молодежи от 14 до 22 лет 
                  наслаждаться культурой без затрат, получая 1000 рублей на посещение театров и музеев! 
                  Узнай, как легко попасть в мир искусства!"
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-darkred/50 to-velvethered/50 p-8 border-l-8 border-theatergold">
                <h4 className="text-2xl font-bold text-theatergold mb-6 flex items-center">
                  <span className="mr-3">📜</span>
                  Как оформить карту:
                </h4>
                <div className="space-y-6">
                  {[
                    "Зайди на сайт Госуслуги или скачай приложение Почта Банк",
                    "Заполни заявку, указав свои данные",
                    "Жди подтверждения! Карту можно забрать в удобном для тебя месте"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Badge className="bg-theatergold text-darkred w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </Badge>
                      <p className="text-cream text-lg">{step}</p>
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