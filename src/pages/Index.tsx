import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Wrench',
      title: 'Ремонт двигателей',
      description: 'Диагностика и капремонт двигателей всех типов грузовых автомобилей',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Settings',
      title: 'Ремонт ходовой части',
      description: 'Замена и восстановление элементов подвески, рулевого управления',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Диагностика',
      description: 'Компьютерная диагностика всех систем автомобиля',
      price: 'от 2 500 ₽'
    },
    {
      icon: 'Zap',
      title: 'Электрика',
      description: 'Ремонт электрооборудования, проводки, электронных систем',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'CircleDot',
      title: 'Тормозная система',
      description: 'Ремонт и обслуживание тормозов, замена колодок, дисков',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Cog',
      title: 'Трансмиссия',
      description: 'Ремонт КПП, сцепления, карданных валов',
      price: 'от 15 000 ₽'
    }
  ];

  const priceList = [
    { service: 'Диагностика двигателя', price: '2 500 ₽' },
    { service: 'Замена масла и фильтров', price: '3 500 ₽' },
    { service: 'Ремонт стартера', price: '6 000 ₽' },
    { service: 'Замена тормозных колодок', price: '5 500 ₽' },
    { service: 'Ремонт подвески', price: '8 000 ₽' },
    { service: 'Замена сцепления', price: '18 000 ₽' },
    { service: 'Капитальный ремонт двигателя', price: 'от 80 000 ₽' },
    { service: 'Ремонт КПП', price: 'от 25 000 ₽' }
  ];

  const faqs = [
    {
      question: 'Какие марки грузовых автомобилей вы обслуживаете?',
      answer: 'Мы работаем со всеми марками грузовых автомобилей: КАМАЗ, МАЗ, ГАЗ, Volvo, Scania, MAN, Mercedes-Benz, Iveco и другие. Наши специалисты имеют опыт работы с российской и импортной техникой.'
    },
    {
      question: 'Сколько времени занимает ремонт?',
      answer: 'Время ремонта зависит от сложности работ. Диагностика занимает 1-2 часа, мелкий ремонт — 1-3 дня, капитальный ремонт двигателя или КПП — от 7 до 14 дней. Точные сроки озвучиваются после диагностики.'
    },
    {
      question: 'Предоставляете ли вы гарантию на работы?',
      answer: 'Да, мы предоставляем гарантию на все виды работ от 3 до 12 месяцев в зависимости от типа ремонта. На запчасти действует гарантия производителя.'
    },
    {
      question: 'Работаете ли вы с юридическими лицами?',
      answer: 'Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем полный пакет документов, работаем по безналичному расчету, заключаем договоры на постоянное обслуживание автопарков.'
    },
    {
      question: 'Можно ли записаться на ремонт заранее?',
      answer: 'Да, рекомендуем записываться заранее по телефону или через форму на сайте. Это позволит нам подготовить необходимые запчасти и выделить время для качественного обслуживания вашего автомобиля.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-secondary" />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">Грузовое СТО</h1>
              <p className="text-xs text-primary-foreground/80">Ухта</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-primary-foreground hover:text-secondary transition-colors">Услуги</a>
            <a href="#price" className="text-primary-foreground hover:text-secondary transition-colors">Прайс</a>
            <a href="#about" className="text-primary-foreground hover:text-secondary transition-colors">О нас</a>
            <a href="#faq" className="text-primary-foreground hover:text-secondary transition-colors">FAQ</a>
            <a href="#contacts" className="text-primary-foreground hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <a href="tel:+78216123456" className="hidden md:flex items-center gap-2 text-primary-foreground font-semibold">
            <Icon name="Phone" size={20} />
            +7 (8216) 12-34-56
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Профессиональный ремонт грузовых автомобилей в Ухте
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Качественный сервис, опытные мастера, современное оборудование. 
              Работаем с любыми марками грузовой техники.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <a href="#contacts">Записаться на ремонт</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-primary-foreground/80">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">2000+</div>
                <div className="text-primary-foreground/80">отремонтировано</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <div className="text-primary-foreground/80">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию грузовых автомобилей
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-secondary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12">
            Базовые цены на популярные услуги
          </p>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {priceList.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 hover:bg-muted/50 transition-colors">
                      <span className="font-medium">{item.service}</span>
                      <span className="text-secondary font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground text-center mt-6">
              * Точная стоимость определяется после диагностики. Цены указаны без учета стоимости запчастей.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Icon name="Award" className="text-secondary mb-4" size={32} />
                  <CardTitle>Профессионализм</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Наши мастера имеют сертификаты и более 15 лет опыта работы с грузовой техникой всех марок.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Sparkles" className="text-secondary mb-4" size={32} />
                  <CardTitle>Современное оборудование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Используем профессиональные диагностические стенды и инструменты последнего поколения.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Clock" className="text-secondary mb-4" size={32} />
                  <CardTitle>Соблюдение сроков</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Четко придерживаемся согласованных сроков ремонта. Гарантируем выполнение работ вовремя.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Shield" className="text-secondary mb-4" size={32} />
                  <CardTitle>Гарантия качества</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Предоставляем гарантию на все виды работ. Используем только качественные запчасти.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Почему выбирают нас?</h3>
              <p className="mb-6">
                Мы специализируемся на ремонте грузовых автомобилей с 2008 года. 
                За это время наша команда отремонтировала более 2000 единиц техники. 
                Мы работаем как с частными владельцами, так и с крупными транспортными компаниями, 
                предлагая выгодные условия постоянного обслуживания автопарков.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <a href="#contacts">Связаться с нами</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Частые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на популярные вопросы наших клиентов
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-secondary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a href="tel:+78216123456" className="text-muted-foreground hover:text-secondary transition-colors">
                      +7 (8216) 12-34-56
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-secondary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@gruzovoe-sto.ru" className="text-muted-foreground hover:text-secondary transition-colors">
                      info@gruzovoe-sto.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-secondary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Ухта, ул. Промышленная, д. 15<br />
                      Пн-Пт: 8:00 - 20:00<br />
                      Сб-Вс: 9:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите проблему"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={24} className="text-secondary" />
              <span className="font-bold">Грузовое СТО Ухта</span>
            </div>
            <div className="text-sm text-primary-foreground/80">
              © 2024 Все права защищены
            </div>
            <div className="text-sm text-primary-foreground/80">
              грузовое.с.ухта.рф
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
