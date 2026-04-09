import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook, ChevronRight, Star, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleBooking = () => {
    toast.success('Randevu talebiniz alındı! En kısa sürede size dönüş yapacağız.');
  };

  const navLinks = [
    { name: 'Ana Sayfa', id: 'hero' },
    { name: 'Hakkımızda', id: 'about' },
    { name: 'Hizmetler', id: 'services' },
    { name: 'Galeri', id: 'gallery' },
    { name: 'İletişim', id: 'contact' },
  ];

  const services = [
    {
      title: 'Bölgesel İncelme',
      description: 'Kavitasyon, radyofrekans ve vakumlu masaj ile bölgesel zayıflama. Selülit tedavisi ve vücut şekillendirme.',
      price: 'Başlangıç 1.500₺',
      image: '/service-incelme.jpg',
      duration: '60-90 dk'
    },
    {
      title: 'Lazer Epilasyon',
      description: 'Alexandrite lazer teknolojisiyle acısız ve kalıcı epilasyon. Tüm vücut bölgeleri için güvenli çözümler.',
      price: 'Başlangıç 800₺',
      image: '/service-lazer.jpg',
      duration: '30-60 dk'
    },
    {
      title: 'Kalıcı Makyaj',
      description: 'Microblading kaş, dudak renklendirme ve eyeliner. Doğal görünümlü, uzun ömürlü sonuçlar.',
      price: 'Başlangıç 4.000₺',
      image: '/service-makyaj.jpg',
      duration: '2-3 saat'
    },
    {
      title: 'Dudak Vitamini',
      description: 'Hyaluronik asit ve vitamin enjeksiyonlarıyla dolgun, nemli dudaklar. Doğal görünüm garantisi.',
      price: 'Başlangıç 2.500₺',
      image: '/service-dudak.jpg',
      duration: '30-45 dk'
    },
    {
      title: 'Cilt Bakım Protokolleri',
      description: 'Hydrafacial, kimyasal peeling ve özel protokoller. Akne, leke ve yaşlanma karşıtı tedaviler.',
      price: 'Başlangıç 1.200₺',
      image: '/service-cilt.jpg',
      duration: '60-90 dk'
    },
    {
      title: 'Saç Çoğaltma',
      description: 'PRP, mezoterapi ve saç ekimi uygulamaları. Saç dökülmesine karşı etkili çözümler.',
      price: 'Başlangıç 2.000₺',
      image: '/service-sac.jpg',
      duration: '45-60 dk'
    }
  ];

  const testimonials = [
    {
      name: 'Ayşe Yılmaz',
      comment: 'Su Keskin Beauty\'de aldığım hizmetten çok memnun kaldım. Profesyonel ekip, hijyenik ortam ve harika sonuçlar!',
      rating: 5
    },
    {
      name: 'Zeynep Kaya',
      comment: 'Lazer epilasyon için geldim, 3 seans sonra inanılmaz sonuçlar aldım. Kesinlikle tavsiye ederim.',
      rating: 5
    },
    {
      name: 'Elif Demir',
      comment: 'Kalıcı makyajım çok doğal ve güzel oldu. Su hanımın ellerine sağlık!',
      rating: 5
    }
  ];



  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className={`text-2xl font-light tracking-wider transition-colors ${
                isScrolled ? 'text-rose-900' : 'text-white'
              }`}>
                SU KESKIN
              </span>
              <span className={`ml-2 text-sm font-light tracking-widest transition-colors ${
                isScrolled ? 'text-rose-600' : 'text-white/80'
              }`}>
                BEAUTY
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm tracking-wide transition-colors hover:text-rose-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    Randevu Al
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-light text-rose-900">Randevu Al</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <Input placeholder="Adınız Soyadınız" />
                    <Input placeholder="Telefon Numaranız" type="tel" />
                    <Input placeholder="Tarih" type="date" />
                    <Textarea placeholder="Hizmet ve notlarınız..." />
                    <Button onClick={handleBooking} className="w-full bg-rose-500 hover:bg-rose-600">
                      Randevu Talebi Gönder
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-rose-500"
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white mt-4">
                <Calendar className="w-4 h-4 mr-2" />
                Randevu Al
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-salon.jpg"
            alt="Su Keskin Beauty Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/70 via-rose-800/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-white/80 text-sm tracking-[0.3em] mb-4 uppercase">
              Bursa Nilüfer
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Güzelliğinizi
              <span className="block font-normal italic">Yeniden Keşfedin</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Profesyonel ekibimiz ve son teknoloji ekipmanlarımızla 
              size özel güzellik deneyimi sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-rose-900 hover:bg-rose-50 rounded-full px-8">
                    <Calendar className="w-5 h-5 mr-2" />
                    Hemen Randevu Al
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-light text-rose-900">Randevu Al</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <Input placeholder="Adınız Soyadınız" />
                    <Input placeholder="Telefon Numaranız" type="tel" />
                    <Input placeholder="Tarih" type="date" />
                    <Textarea placeholder="Hizmet ve notlarınız..." />
                    <Button onClick={handleBooking} className="w-full bg-rose-500 hover:bg-rose-600">
                      Randevu Talebi Gönder
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="border-white text-white hover:bg-white/10 rounded-full px-8"
              >
                Hizmetlerimiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-expert.jpg"
                  alt="Su Keskin Beauty Uzmanı"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-rose-500 fill-rose-500" />
                  </div>
                  <div>
                    <p className="text-3xl font-light text-rose-900">4.8</p>
                    <p className="text-sm text-gray-500">Müşteri Puanı</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-rose-500 text-sm tracking-[0.2em] uppercase mb-4">Hakkımızda</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Güzellik Sanatında
                <span className="block text-rose-600">10+ Yıllık Deneyim</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Su Keskin Beauty olarak, Bursa Nilüfer'de hizmet veren profesyonel bir güzellik merkeziyiz. 
                Müşteri memnuniyetini ön planda tutarak, en son teknolojileri ve kaliteli ürünleri kullanıyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Uzman kadromuz ile bölgesel incelme, lazer epilasyon, kalıcı makyaj, dudak vitamini, 
                cilt bakım protokolleri ve saç çoğaltma uygulamalarında sizlere en iyi deneyimi sunuyoruz. 
                Her müşterimizin ihtiyaçlarına özel çözümler üretiyoruz.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-3xl font-light text-rose-600">10+</p>
                  <p className="text-sm text-gray-500 mt-1">Yıllık Deneyim</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-rose-600">5000+</p>
                  <p className="text-sm text-gray-500 mt-1">Mutlu Müşteri</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-rose-600">15+</p>
                  <p className="text-sm text-gray-500 mt-1">Hizmet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 text-sm tracking-[0.2em] uppercase mb-4">Hizmetlerimiz</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Size Özel <span className="text-rose-600">Güzellik</span> Hizmetleri
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-rose-600 font-medium">{service.price}</p>
                      <p className="text-gray-400 text-xs flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="ghost" className="text-rose-500 hover:text-rose-600 hover:bg-rose-50">
                          <ChevronRight className="w-5 h-5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-light text-rose-900">{service.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="flex items-center justify-between bg-rose-50 p-4 rounded-lg">
                            <div>
                              <p className="text-sm text-gray-500">Fiyat</p>
                              <p className="text-lg font-medium text-rose-600">{service.price}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Süre</p>
                              <p className="text-lg font-medium text-gray-700">{service.duration}</p>
                            </div>
                          </div>
                          <Button onClick={handleBooking} className="w-full mt-4 bg-rose-500 hover:bg-rose-600">
                            Randevu Al
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 text-sm tracking-[0.2em] uppercase mb-4">Sonuçlar</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              <span className="text-rose-600">Öncesi & Sonrası</span> Dönüşümler
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Gerçek müşterilerimizin Su Keskin Beauty deneyimi sonrası yaşadığı 
              inanılmaz dönüşümleri keşfedin.
            </p>
          </div>
          
          {/* Before/After Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Cilt Bakımı */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-rose-100">
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src="/beforeafter-cilt.jpg"
                  alt="Cilt Bakımı Öncesi Sonrası"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">
                  <span className="bg-rose-500/90 px-3 py-1 rounded-full text-sm font-medium">ÖNCESİ</span>
                  <span className="bg-green-500/90 px-3 py-1 rounded-full text-sm font-medium">SONRASI</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full" />
                  <span className="text-rose-500 text-sm font-medium">Cilt Bakımı</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Akne ve Leke Tedavisi</h3>
                <p className="text-gray-500 text-sm">
                  4 seanslık profesyonel cilt bakım protokolü sonrası pürüzsüz ve ışıltılı bir cilt.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    4 Seans
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    4.9 Puan
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 - Lazer Epilasyon */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-rose-100">
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src="/beforeafter-lazer.jpg"
                  alt="Lazer Epilasyon Öncesi Sonrası"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">
                  <span className="bg-rose-500/90 px-3 py-1 rounded-full text-sm font-medium">ÖNCESİ</span>
                  <span className="bg-green-500/90 px-3 py-1 rounded-full text-sm font-medium">SONRASI</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full" />
                  <span className="text-rose-500 text-sm font-medium">Lazer Epilasyon</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Bacak Epilasyonu</h3>
                <p className="text-gray-500 text-sm">
                  Alexandrite lazer teknolojisiyle kalıcı ve acısız epilasyon sonuçları.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    6 Seans
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    5.0 Puan
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - Kaş Microblading */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-rose-100">
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src="/beforeafter-kas.jpg"
                  alt="Kaş Microblading Öncesi Sonrası"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">
                  <span className="bg-rose-500/90 px-3 py-1 rounded-full text-sm font-medium">ÖNCESİ</span>
                  <span className="bg-green-500/90 px-3 py-1 rounded-full text-sm font-medium">SONRASI</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full" />
                  <span className="text-rose-500 text-sm font-medium">Kalıcı Makyaj</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Kaş Microblading</h3>
                <p className="text-gray-500 text-sm">
                  Doğal görünümlü, kalıcı kaş tasarımı ile yüz hatlarınızı ön plana çıkarın.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    2 Seans
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    4.9 Puan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="mt-16 bg-rose-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-light text-rose-300 mb-2">5000+</p>
                <p className="text-rose-200 text-sm">Başarılı Tedavi</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light text-rose-300 mb-2">98%</p>
                <p className="text-rose-200 text-sm">Memnuniyet Oranı</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light text-rose-300 mb-2">10+</p>
                <p className="text-rose-200 text-sm">Yıllık Deneyim</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light text-rose-300 mb-2">4.9</p>
                <p className="text-rose-200 text-sm">Ortalama Puan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 text-sm tracking-[0.2em] uppercase mb-4">Yorumlar</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Müşterilerimiz <span className="text-rose-600">Ne Diyor?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl border border-rose-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                <p className="font-medium text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-rose-300 text-sm tracking-[0.2em] uppercase mb-4">İletişim</p>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                Bize <span className="text-rose-300">Ulaşın</span>
              </h2>
              <p className="text-rose-100 text-lg mb-8 leading-relaxed">
                Randevu almak veya detaylı bilgi için bizi arayabilir 
                veya salonumuzu ziyaret edebilirsiniz.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-rose-300" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Adres</p>
                    <p className="text-rose-200">
                      Fatih Sultan Mehmet Bulvarı No:41<br />
                      Nilüfer, Bursa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-rose-300" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telefon</p>
                    <p className="text-rose-200">+90 537 789 58 98</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-rose-300" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Çalışma Saatleri</p>
                    <p className="text-rose-200">
                      Pazartesi - Cumartesi: 09:00 - 19:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-rose-800 rounded-full flex items-center justify-center hover:bg-rose-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-rose-800 rounded-full flex items-center justify-center hover:bg-rose-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-light mb-6">Bize Mesaj Gönderin</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Adınız" />
                  <Input placeholder="Soyadınız" />
                </div>
                <Input placeholder="E-posta Adresiniz" type="email" />
                <Input placeholder="Telefon Numaranız" type="tel" />
                <Textarea placeholder="Mesajınız..." className="min-h-[120px]" />
                <Button onClick={handleBooking} className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                  Mesaj Gönder
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-950 text-rose-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-light text-white tracking-wider">SU KESKIN</span>
                <span className="ml-2 text-sm font-light text-rose-400 tracking-widest">BEAUTY</span>
              </div>
              <p className="text-rose-300 leading-relaxed max-w-md">
                Bursa Nilüfer'de profesyonel güzellik merkezi. Bölgesel incelme, 
                lazer epilasyon, kalıcı makyaj, cilt bakımı ve saç çoğaltma hizmetleri.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Hizmetler</h4>
              <ul className="space-y-2">
                <li><span className="hover:text-white transition-colors cursor-pointer">Bölgesel İncelme</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Lazer Epilasyon</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kalıcı Makyaj</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Dudak Vitamini</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Cilt Bakımı</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Saç Çoğaltma</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-rose-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 Su Keskin Beauty. Tüm hakları saklıdır.
            </p>
            <p className="text-sm">
              Fatih Sultan Mehmet Bulvarı No:41, Nilüfer, Bursa
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
