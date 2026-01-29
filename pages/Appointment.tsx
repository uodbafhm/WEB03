
import React, { useState } from 'react';
import { CONTACT_INFO, SERVICES } from '../constants';
import { AppointmentFormData } from '../types';
import { Send, MapPin, Phone, Instagram, CheckCircle } from 'lucide-react';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `أهلاً دكتور مابصو، أود حجز موعد:%0A%0A` +
      `👤 *الاسم:* ${formData.fullName}%0A` +
      `📞 *الهاتف:* ${formData.phone}%0A` +
      `🦷 *الخدمة:* ${formData.service}%0A` +
      `📅 *التاريخ:* ${formData.date}%0A` +
      `🕒 *الوقت:* ${formData.time}`;
    window.open(`https://wa.me/212781214641?text=${message}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950">
        <div className="bg-slate-900 border border-slate-800 max-w-lg w-full p-12 rounded-[3rem] text-center space-y-8 animate-in zoom-in duration-500 shadow-2xl">
          <div className="w-24 h-24 bg-sky-500/10 text-sky-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle size={48} strokeWidth={3} />
          </div>
          <h2 className="text-4xl font-black text-white">رائع! تم الإرسال</h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            لقد تم توجيهك إلى واتساب. يرجى إرسال الرسالة وسنقوم بتأكيد الموعد معك في أقرب وقت.
          </p>
          <button onClick={() => setSubmitted(false)} className="text-sky-400 font-black text-lg hover:underline">إرسال طلب آخر</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-right space-y-4 mb-16">
          <p className="text-sky-500 font-black tracking-widest uppercase text-xs">تواصل مباشر</p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">احجز مكانك الآن</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-10 md:p-14 rounded-[3rem] shadow-2xl space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-widest mr-2">الاسم الكامل</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    placeholder="مثال: يوسف العلمي"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-slate-950 border border-slate-800 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all outline-none font-bold text-lg text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-widest mr-2">رقم الهاتف</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="06 XX XX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                    dir="ltr"
                    className="w-full px-6 py-5 bg-slate-950 border border-slate-800 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all outline-none font-bold text-lg text-white text-right"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-500 uppercase tracking-widest mr-2">نوع الخدمة</label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-slate-950 border border-slate-800 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all outline-none font-bold text-lg text-white appearance-none"
                >
                  <option value="">اختر التخصص المطلوب</option>
                  {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="استشارة عامة">استشارة عامة</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-widest mr-2">تاريخ الموعد</label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-slate-950 border border-slate-800 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all outline-none font-bold text-lg text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-widest mr-2">التوقيت</label>
                  <input
                    required
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-slate-950 border border-slate-800 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all outline-none font-bold text-lg text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-6 rounded-2xl font-black text-2xl hover:bg-sky-400 hover:shadow-2xl hover:shadow-sky-500/20 transition-all flex items-center justify-center gap-4 transform active:scale-95 shadow-xl"
              >
                تأكيد الحجز عبر واتساب
                <Send size={24} strokeWidth={3} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-xl space-y-10">
              <h3 className="text-2xl font-black text-white">معلومات العيادة</h3>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'العنوان', val: 'Maârif, Casablanca' },
                  { icon: Phone, title: 'اتصل بنا', val: CONTACT_INFO.phone },
                  { icon: Instagram, title: 'إنستقرام', val: '@smma_mapso' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-center">
                    <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500">
                      <item.icon size={28} />
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{item.title}</p>
                      <p className="text-lg font-bold text-white">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-[2.5rem] overflow-hidden h-[300px] shadow-2xl border-4 border-slate-800 grayscale">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d400.86110000554396!2d-7.4860451266703985!3d33.61793607553525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1769720294894!5m2!1sen!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Appointment;
