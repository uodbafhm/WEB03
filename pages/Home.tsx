
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Star, Clock, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-950 overflow-hidden">
      
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Clinic Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 w-full">
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-8">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white">
              <Sparkles size={18} className="text-sky-400" />
              <span className="text-sm font-bold tracking-wide">الرائد في تجميل الأسنان بالدار البيضاء</span>
            </div>

            {/* Main Headline - Reduced font size for better balance */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter">
                ابتسامة <br />
                <span className="text-sky-400">مثالية</span> <br />
                تستحقها أنت
              </h1>
            </div>

            {/* Bottom Philosophy Paragraph */}
            <div className="max-w-xl lg:mr-4">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                نجمع بين الفن والطب لنمنحك الابتسامة التي تحلم بها <br className="hidden md:block" />
                بأحدث التقنيات العالمية ومعايير الجودة السويسرية.
              </p>
            </div>

            {/* CTA Arrow (Mobile helper) */}
            <div className="pt-6 animate-bounce text-sky-400">
               <ArrowLeft size={32} className="-rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Dark Mode Styling */}
      <section className="py-32 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20 border-r-4 border-sky-500 pr-8">
            <div className="space-y-2">
              <h2 className="text-5xl font-black text-white tracking-tighter">خدماتنا التخصصية</h2>
              <p className="text-slate-400 text-xl font-medium">نقدم أفضل رعاية لأسنانكم في المغرب</p>
            </div>
            <Link to="/services" className="text-sky-400 font-bold text-lg hover:underline flex items-center gap-2">
              عرض كل الخدمات <ArrowLeft size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-slate-800/40 border border-slate-700/50 rounded-[2.5rem] p-10 hover:bg-slate-800 hover:border-sky-500/50 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg mb-8 font-medium">
                  {service.description}
                </p>
                <Link to="/contact" className="text-sky-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  حجز الآن <ArrowLeft size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'سنوات خبرة', val: '10+', icon: Clock },
            { label: 'مريض سعيد', val: '2500+', icon: Star },
            { label: 'ضمان الجودة', val: '100%', icon: ShieldCheck },
            { label: 'تقنية حديثة', val: '30+', icon: Sparkles }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="flex justify-center text-sky-500 mb-2"><stat.icon size={30} /></div>
              <p className="text-4xl font-black text-white font-jakarta">{stat.val}</p>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
