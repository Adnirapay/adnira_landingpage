'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Truck, Code, Wallet, Check, ArrowRight, Menu, X, Mail, Phone, MapPin } from 'lucide-react';

export default function AdniraLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Transportasi Terpercaya",
      subtitle: "Solusi Logistik untuk Bisnis Anda",
      description: "Armada modern, pengemudi profesional, dan layanan tepat waktu untuk mendukung operasional bisnis Anda",
      gradient: "from-blue-900/90 via-blue-800/85 to-slate-900/90",
      image: "/images/hero-transport.jpg", // Placeholder - ganti dengan gambar asli
      accentColor: "blue"
    },
    {
      title: "Teknologi Digital Masa Depan",
      subtitle: "Transformasi Digital Dimulai dari Sini",
      description: "Pengembangan aplikasi web & mobile yang inovatif, scalable, dan user-friendly untuk meningkatkan efisiensi bisnis",
      gradient: "from-red-900/90 via-red-800/85 to-slate-900/90",
      image: "/images/hero-technology.jpg", // Placeholder - ganti dengan gambar asli
      accentColor: "red"
    },
    {
      title: "Complete B2B & H2H Solutions",
      subtitle: "PPOB Host to Host yang Stabil & Aman",
      description: "Sistem pembayaran digital real-time dengan uptime tinggi untuk mendukung pertumbuhan bisnis mitra",
      gradient: "from-purple-900/90 via-blue-800/85 to-slate-900/90",
      image: "/images/hero-payment.jpg", // Placeholder - ganti dengan gambar asli
      accentColor: "purple"
    }
  ];

  const services = [
    {
      icon: Truck,
      title: 'Jasa Transportasi',
      description: 'Solusi transportasi terpadu dari kendaraan ringan hingga angkutan berat',
      features: [
        'Armada terawat & layak jalan',
        'Pengemudi berpengalaman',
        'Penjadwalan fleksibel',
        'Monitoring real-time',
        'Ketepatan waktu terjamin'
      ],
      color: 'from-blue-500 to-blue-700',
      delay: '0'
    },
    {
      icon: Code,
      title: 'Pengembangan Aplikasi',
      description: 'Solusi IT terpadu untuk transformasi digital bisnis Anda',
      features: [
        'Frontend Web & Android',
        'Backend & API Integration',
        'Database Management',
        'UI/UX Design',
        'Maintenance & Support'
      ],
      color: 'from-red-500 to-red-700',
      delay: '100'
    },
    {
      icon: Wallet,
      title: 'PPOB Host to Host',
      description: 'Layanan pembayaran digital yang stabil dan terintegrasi',
      features: [
        'Transaksi real-time',
        'Sistem uptime tinggi',
        'Keamanan terjamin',
        'Dukungan teknis 24/7',
        'Multi-payment gateway'
      ],
      color: 'from-blue-600 to-red-600',
      delay: '200'
    }
  ];

  const values = [
    { title: 'Profesionalisme', desc: 'Standar kerja berkualitas tinggi' },
    { title: 'Integritas', desc: 'Kepercayaan adalah prioritas' },
    { title: 'Inovasi', desc: 'Solusi relevan & modern' },
    { title: 'Komitmen', desc: 'Kepuasan pelanggan utama' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-2xl shadow-blue-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-lg flex items-center justify-center transform transition-transform group-hover:rotate-6 group-hover:scale-110">
                <span className="text-2xl font-black">A</span>
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                  ADNIRA
                </h1>
                <p className="text-xs text-slate-400 -mt-1">Dalil Anugrah</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-semibold hover:text-blue-400 transition-colors">Beranda</a>
              <a href="#services" className="text-sm font-semibold hover:text-blue-400 transition-colors">Layanan</a>
              <a href="#about" className="text-sm font-semibold hover:text-blue-400 transition-colors">Tentang</a>
              <a href="#contact" className="text-sm font-semibold hover:text-blue-400 transition-colors">Kontak</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all">
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-sm font-semibold hover:text-blue-400 transition-colors">Beranda</a>
              <a href="#services" className="block text-sm font-semibold hover:text-blue-400 transition-colors">Layanan</a>
              <a href="#about" className="block text-sm font-semibold hover:text-blue-400 transition-colors">Tentang</a>
              <a href="#contact" className="block text-sm font-semibold hover:text-blue-400 transition-colors">Kontak</a>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-full text-sm font-bold">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax Carousel */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Carousel Container */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentSlide === index 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              style={{
                transform: currentSlide === index 
                  ? `translateY(${scrollY * 0.5}px)` 
                  : 'translateY(0)'
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                {/* Placeholder Background - Replace with actual images */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    transform: `translateY(${scrollY * 0.3}px)` // Parallax effect
                  }}
                >
                  {/* Fallback gradient if image not loaded */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}></div>
                </div>

                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 255, 255, 0.05) 35px, rgba(255, 255, 255, 0.05) 70px)`,
                  }}></div>
                </div>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/80"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10 absolute'
                }`}
              >
                <div className="max-w-4xl">
                  {/* Badge */}
                  <div className="inline-block mb-6 animate-fade-in">
                    <div className={`px-6 py-2 rounded-full backdrop-blur-md border ${
                      slide.accentColor === 'blue' 
                        ? 'bg-blue-500/10 border-blue-500/30 text-blue-300' 
                        : slide.accentColor === 'red'
                        ? 'bg-red-500/10 border-red-500/30 text-red-300'
                        : 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                    }`}>
                      <span className="text-sm font-semibold">
                        {slide.accentColor === 'blue' ? '🚚 Transportasi' : 
                         slide.accentColor === 'red' ? '💻 Teknologi' : 
                         '💳 Pembayaran Digital'}
                      </span>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                    <span className={`block bg-gradient-to-r ${
                      slide.accentColor === 'blue'
                        ? 'from-blue-300 via-blue-400 to-cyan-300'
                        : slide.accentColor === 'red'
                        ? 'from-red-300 via-red-400 to-orange-300'
                        : 'from-purple-300 via-blue-400 to-cyan-300'
                    } bg-clip-text text-transparent drop-shadow-2xl`}>
                      {slide.title}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className={`group px-8 py-4 bg-gradient-to-r ${
                      slide.accentColor === 'blue'
                        ? 'from-blue-600 to-cyan-600'
                        : slide.accentColor === 'red'
                        ? 'from-red-600 to-orange-600'
                        : 'from-purple-600 to-blue-600'
                    } rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all flex items-center justify-center gap-2`}>
                      Konsultasi Gratis
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    <button className="px-8 py-4 border-2 border-white/30 backdrop-blur-md rounded-full text-lg font-bold hover:border-white hover:bg-white/10 transition-all">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-red-500' 
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
          aria-label="Previous slide"
        >
          <ChevronRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
          aria-label="Next slide"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
        </button>

        {/* Stats Section (moved here from old hero) */}
        <div className="absolute bottom-24 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-slate-950/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10">
              {[
                { number: '100+', label: 'Klien Terpercaya' },
                { number: '24/7', label: 'Dukungan Pelanggan' },
                { number: '99.9%', label: 'Uptime System' },
                { number: '5+', label: 'Tahun Pengalaman' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-slate-300 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="rotate-90 text-white/50" size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm font-semibold text-red-400 mb-6">
              Layanan Kami
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                Solusi Terpadu
              </span>
              <br />
              <span className="text-white">untuk Setiap Kebutuhan</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tiga pilar utama yang mendukung pertumbuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${service.delay}ms both`
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                    <service.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-500 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full px-6 py-3 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    Pelajari Lebih Lanjut
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Mitra Section */}
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-400 mb-4">
              Dipercaya Oleh
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                Mitra Kami
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Lebih dari 100+ perusahaan telah mempercayai layanan kami
            </p>
          </div>

          {/* Auto-Scrolling Partners Logo - Right to Left */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            {/* Scrolling Container */}
            <div className="partners-scroll">
              <div className="partners-track">
                {/* First Set of Logos */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <div 
                    key={`partner-${num}`}
                    className="partner-item group"
                  >
                    <div className="relative w-full h-full bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300 p-6">
                      <img 
                        src={`/images/partners/partner-${num}.png`}
                        alt={`Partner ${num} - PT Adnira Dalil Anugrah`}
                        className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          // Fallback if image not found
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="text-center">
                              <div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-red-500 rounded-lg flex items-center justify-center">
                                  <span class="text-white font-black text-lg">${num}</span>
                                </div>
                              </div>
                              <p class="text-slate-500 text-xs font-semibold">
                                Partner ${num}
                              </p>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Duplicate Set for Seamless Loop */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <div 
                    key={`partner-dup-${num}`}
                    className="partner-item group"
                  >
                    <div className="relative w-full h-full bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300 p-6">
                      <img 
                        src={`/images/partners/partner-${num}.png`}
                        alt={`Partner ${num} - PT Adnira Dalil Anugrah`}
                        className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          // Fallback if image not found
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="text-center">
                              <div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-red-500 rounded-lg flex items-center justify-center">
                                  <span class="text-white font-black text-lg">${num}</span>
                                </div>
                              </div>
                              <p class="text-slate-500 text-xs font-semibold">
                                Partner ${num}
                              </p>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Below Partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: '100+', label: 'Mitra Aktif' },
              { number: '500+', label: 'Project Selesai' },
              { number: '15+', label: 'Industri Dilayani' },
              { number: '98%', label: 'Kepuasan Klien' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/50 to-red-900/50 rounded-2xl overflow-hidden border border-slate-800">
                <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-black">A</span>
                    </div>
                    <p className="text-slate-400 text-sm">Company Image Placeholder</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/20 rounded-full blur-2xl"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-400 mb-6">
                  Tentang Kami
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                    Mitra Strategis
                  </span>
                  <br />
                  <span className="text-white">untuk Kesuksesan Anda</span>
                </h2>
              </div>

              {/* Vision */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Visi Perusahaan
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Menjadi perusahaan nasional yang unggul, terpercaya, dan berdaya saing tinggi 
                  dalam penyediaan jasa transportasi, pengembangan teknologi aplikasi, 
                  serta layanan pembayaran digital dengan mengedepankan profesionalisme, 
                  kualitas layanan, dan inovasi berkelanjutan.
                </p>
              </div>

              {/* Mission Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Layanan Aman & Efisien',
                  'Teknologi Terintegrasi',
                  'Sistem Stabil & Aman',
                  'Kepuasan Pelanggan'
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <Check size={18} className="text-blue-400" />
                      <span className="text-sm font-semibold text-slate-200">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                  Nilai-Nilai Perusahaan
                </span>
              </h3>
              <p className="text-slate-400">Fondasi yang membentuk identitas kami</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-black group-hover:rotate-12 transition-transform">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{value.title}</h4>
                  <p className="text-sm text-slate-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-400 mb-6">
              Galeri Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                Dokumentasi
              </span>
              <br />
              <span className="text-white">Kegiatan Perusahaan</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Momen-momen penting dalam perjalanan PT Adnira Dalil Anugrah
            </p>
          </div>
        </div>

        {/* Auto-Scrolling Gallery */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="gallery-scroll">
            <div className="gallery-track">
              {/* First Set of Images */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div 
                  key={`img-${num}`}
                  className="gallery-item group"
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                    <img 
                      src={`/images/gallery/gallery-${num}.jpg`}
                      alt={`PT Adnira Dalil Anugrah - Gallery ${num}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if image not found
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                            <div class="text-center p-6">
                              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <span class="text-3xl font-black text-white">${num}</span>
                              </div>
                              <p class="text-slate-400 text-sm">Gallery ${num}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                    
                    {/* Hover Overlay with Caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <p className="text-white font-bold text-lg drop-shadow-lg">
                          Armada & Layanan Profesional
                        </p>
                        <p className="text-blue-200 text-sm mt-1">
                          PT Adnira Dalil Anugrah
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate Set for Seamless Loop */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div 
                  key={`img-dup-${num}`}
                  className="gallery-item group"
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                    <img 
                      src={`/images/gallery/gallery-${num}.jpg`}
                      alt={`PT Adnira Dalil Anugrah - Gallery ${num}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if image not found
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                            <div class="text-center p-6">
                              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <span class="text-3xl font-black text-white">${num}</span>
                              </div>
                              <p class="text-slate-400 text-sm">Gallery ${num}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                    
                    {/* Hover Overlay with Caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <p className="text-white font-bold text-lg drop-shadow-lg">
                          Armada & Layanan Profesional
                        </p>
                        <p className="text-blue-200 text-sm mt-1">
                          PT Adnira Dalil Anugrah
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            * Klik pada gambar untuk melihat detail
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-950 via-slate-950 to-red-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Siap untuk </span>
            <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              Bertransformasi?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Mari wujudkan visi bisnis Anda bersama tim profesional kami. 
            Konsultasi gratis untuk menentukan solusi terbaik.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-red-600 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all flex items-center justify-center gap-2">
              Konsultasi Gratis
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-10 py-5 border-2 border-slate-700 rounded-full text-lg font-bold hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              Download Company Profile
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-black">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-black">PT ADNIRA DALIL ANUGRAH</h3>
                  <p className="text-sm text-slate-400">Solusi Terpadu untuk Bisnis Modern</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Mitra strategis Anda dalam transportasi, teknologi, dan pembayaran digital. 
                Komitmen kami adalah memberikan layanan terbaik untuk mendukung pertumbuhan bisnis Anda.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a 
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-red-600 transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Navigasi</h4>
              <ul className="space-y-3">
                {['Beranda', 'Layanan', 'Tentang Kami', 'Kontak'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                      <ChevronRight size={16} />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Kontak</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <Mail size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">Email</p>
                    <a href="mailto:info@adnira.com" className="text-white hover:text-blue-400 transition-colors">
                      info@adnira.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <Phone size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">Telepon</p>
                    <a href="tel:+62" className="text-white hover:text-blue-400 transition-colors">
                      +62 xxx xxxx xxxx
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">Alamat</p>
                    <p className="text-white">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 PT Adnira Dalil Anugrah. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gallery-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes partners-scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        /* Gallery Scroll (Left to Right) */
        .gallery-scroll {
          overflow: hidden;
          position: relative;
          padding: 20px 0;
        }

        .gallery-track {
          display: flex;
          gap: 24px;
          animation: gallery-scroll 40s linear infinite;
          width: fit-content;
        }

        .gallery-track:hover {
          animation-play-state: paused;
        }

        .gallery-item {
          flex-shrink: 0;
          width: 400px;
          height: 300px;
        }

        /* Partners Scroll (Right to Left) */
        .partners-scroll {
          overflow: hidden;
          position: relative;
          padding: 10px 0;
        }

        .partners-track {
          display: flex;
          gap: 20px;
          animation: partners-scroll 35s linear infinite;
          width: fit-content;
        }

        .partners-track:hover {
          animation-play-state: paused;
        }

        .partner-item {
          flex-shrink: 0;
          width: 200px;
          height: 120px;
        }

        @media (max-width: 768px) {
          .gallery-item {
            width: 300px;
            height: 225px;
          }

          .gallery-track {
            animation: gallery-scroll 30s linear infinite;
            gap: 16px;
          }

          .partner-item {
            width: 160px;
            height: 100px;
          }

          .partners-track {
            animation: partners-scroll 25s linear infinite;
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .gallery-item {
            width: 250px;
            height: 188px;
          }

          .partner-item {
            width: 140px;
            height: 90px;
          }
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0f172a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #ef4444);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #dc2626);
        }
      `}</style>
    </div>
  );
}