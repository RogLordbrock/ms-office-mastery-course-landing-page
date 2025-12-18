
import React, { useState } from 'react';
import { 
  CalendarCheck2, 
  ArrowDown, 
  FileText, 
  Sheet, 
  Presentation, 
  CheckCircle, 
  Laptop, 
  GraduationCap, 
  Timer, 
  Landmark, 
  MapPin, 
  Clock, 
  Phone, 
  Check 
} from 'lucide-react';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen selection:bg-blue-100 flex flex-col">
      {/* Persistent Floating Header for Mobile / Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white/80 backdrop-blur-md border border-slate-200 z-40 rounded-full px-6 py-3 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <span className="bg-slate-900 text-white p-1.5 rounded-lg">M</span>
          <span className="hidden sm:inline">Master Office</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#curriculum" className="hidden md:block text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">ماذا ستتعلم؟</a>
          <button 
            onClick={openForm}
            className="px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            احجز الآن
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-32 relative overflow-hidden bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-sm font-bold text-blue-600 animate-bounce">
            🚀 غير حياتك مع دورات تطبيقية واحترافية في مدة قياسية
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.4] text-slate-900" style={{ fontFamily: 'Cairo' }}>
            علاش راك تضيع وقتك وجهدك <span className="bg-yellow-300 px-3 py-1 rounded-xl text-slate-900 inline-block transform -rotate-2 shadow-sm">ودراهمك</span>؟ <br />
            احترف <span className="text-blue-700">Word</span> <span className="text-emerald-700">Excel</span> <span className="text-orange-600">PowerPoint</span> <br />
            في 24 ساعة فقط
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" dir="rtl">
            انضم إلى ورشة تطبيقية مع جهاز مخصص لك واتعلم المهارات الحقيقية لي تحتاجها في حياتك وفي خدمتك 💻
            <br className="block mt-4" />
            تعلم في وقت قياسي في 24 ساعة مقسمة على كل ويكاند ⏰
            <br className="block mt-4" />
            انضم إلى أكثر من 7000+ متكون تخرج عندنا منذ 2006 👥
            <br className="block mt-4" />
            تحصل على شهادة معتمدة من طرف الدولة في نهاية الدورة تمكنك من تطبيق مهاراتك مباشرة 🎓
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={openForm}
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 active:scale-95"
            >
              <CalendarCheck2 className="w-6 h-6" />
              احجز موعدا لزيارة المعهد هذا الأسبوع
            </button>
            <a 
              href="#curriculum" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 font-bold text-lg rounded-2xl border-2 border-slate-100 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-3"
            >
              ماذا ستتعلم؟
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3 font-black text-blue-700 text-xl"><FileText className="w-8 h-8" /> Word</div>
            <div className="flex items-center gap-3 font-black text-emerald-700 text-xl"><Sheet className="w-8 h-8" /> Excel</div>
            <div className="flex items-center gap-3 font-black text-orange-600 text-xl"><Presentation className="w-8 h-8" /> PowerPoint</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-blue-600/5 transform -rotate-3 rounded-3xl"></div>
              <div className="relative bg-white p-10 rounded-3xl border border-slate-100 shadow-2xl space-y-8" dir="rtl">
                {[
                  { title: "احترف استعمال الأدوات", desc: "الكتابة والتصميم ووضع الجداول والمخططات البيانية وغير ذلك" },
                  { title: "أطلق مشاريعك الخاصة", desc: "ما تتعطلش على مشاريعك لأنك متعرفش تنظم ملفاتك وبياناتك" },
                  { title: "فرص العمل مايزيدوش يضيعولك", desc: "اتعلم المهارات المطلوبة على أرض الواقع" },
                  { title: "أبهر مديرك أو زملائك", desc: "قدم تقارير وعروض احترافية تظهر كفاءتك العالية" },
                  { title: "اربح وقتك وجهدك", desc: "اتعلم الطرق الصحيحة لإنجاز مهام طويلة في وقت قياسي" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-600 shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-10 order-1 md:order-2">
              <div className="text-right">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6" style={{ fontFamily: 'Cairo' }}>لماذا معهد دايلي سكول؟</h2>
                <p className="text-slate-500 text-lg leading-relaxed font-medium" dir="rtl">
                  نحن لا نقدم لك مجرد دورة، بل نصنع لك تجربة تعليمية تطبيقية حسب احتياجاتك الخاصة.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir="rtl">
                <div className="bg-slate-50 p-8 rounded-3xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                  <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6"><Laptop className="w-8 h-8" /></div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">ورشات تطبيقية</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">اخدم ونتا تتعلم واربح الوقت مع جهاز خاص بكل متكون.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><GraduationCap className="w-8 h-8" /></div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">شهادة معتمدة</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">شهادة معتمدة من الدولة تفتح لك أبواب العمل بكل ثقة.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-100">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6"><Timer className="w-8 h-8" /></div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">برنامج مكثف</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">24 ساعة مقسمة على كل ويكاند.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl hover:bg-rose-50 transition-colors border border-transparent hover:border-rose-100">
                  <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6"><Landmark className="w-8 h-8" /></div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">خبرة عريقة</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">منذ سنة 2006 ونحن في مجال التكوينات الإحترافية.</p>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button onClick={openForm} className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
                  <CalendarCheck2 className="w-6 h-6" />
                  احجز موعدا للزيارة الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900" style={{ fontFamily: 'Cairo' }}>ثلاثية الإنتاج والإبداع</h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto" dir="rtl">ثلاث دورات مطلوبة في السوق في دورة واحدة شاملة واحترافية.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" dir="rtl">
            {/* Word Card */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 border-t-8 border-t-blue-600 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900" style={{ fontFamily: 'Cairo' }}>Word: وثائق احترافية</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">تجاوز مرحلة الكتابة البسيطة. تعلم تنسيق الأنماط، إنشاء الفهارس الآلية، وتصميم المستندات باحترافية تامة.</p>
              <ul className="space-y-4">
                {["تنسيق متقدم (Styles)", "دمج المراسلات (Mail Merge)", "المراجع والفهارس الآلية"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-semibold"><Check className="w-5 h-5 text-blue-500" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Excel Card */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 border-t-8 border-t-emerald-600 group">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Sheet className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900" style={{ fontFamily: 'Cairo' }}>Excel: احتراف البيانات</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">حوّل البيانات إلى قرارات. أتقن المعادلات المعقدة، الجداول المحورية، وإنشاء لوحات المعلومات التفاعلية.</p>
              <ul className="space-y-4">
                {["دوال البحث (V/XLOOKUP)", "الجداول المحورية (Pivot)", "لوحات البيانات (Dashboards)"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-semibold"><Check className="w-5 h-5 text-emerald-500" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* PPT Card */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 border-t-8 border-t-orange-600 group">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Presentation className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900" style={{ fontFamily: 'Cairo' }}>PPT: تأثير بصري</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">صمم عروضاً مقنعة تخطف الأنظار. أتقن الشرائح الرئيسية، الانتقالات السلسة، وسرد القصص المرئية.</p>
              <ul className="space-y-4">
                {["الشرائح الرئيسية (Master)", "التحريك والانتقال (Morph)", "تصميم الانفوجرافيك"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-semibold"><Check className="w-5 h-5 text-orange-500" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button onClick={openForm} className="px-12 py-5 bg-slate-900 text-white font-black text-xl rounded-[2rem] hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl active:scale-95">
              ابدأ رحلة الاحتراف الآن
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-soft-light filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-soft-light filter blur-[100px] opacity-20"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10" dir="rtl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-right space-y-8">
              <h2 className="text-5xl md:text-7xl font-black leading-tight" style={{ fontFamily: 'Cairo' }}>
                انضم إلى أكثر من <br />
                <span className="text-yellow-400">7000+ متكون</span>
              </h2>
              <p className="text-xl text-blue-50 leading-relaxed font-medium opacity-90 max-w-xl">
                نحن نفخر بأن نكون الخيار الأول للتدريب والتكوين في المنطقة. خبرتنا الممتدة منذ 2006  تقدم لشهادتنا الأولوية في التوظيف عند المؤسسات.
              </p>
              <div className="pt-4 flex gap-6">
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                  <div className="text-3xl font-black text-yellow-400">100%</div>
                  <div className="text-xs text-blue-100 uppercase tracking-widest font-bold">معتمد</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                  <div className="text-3xl font-black text-yellow-400">18+</div>
                  <div className="text-xs text-blue-100 uppercase tracking-widest font-bold">سنة خبرة</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "7000+", lab: "خريج فخور" },
                { val: "30+", lab: "برنامج تكويني" },
                { val: "2006", lab: "سنة التأسيس" },
                { val: "24h", lab: "مدة التكوين" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all transform hover:-translate-y-2 group shadow-2xl">
                  <span className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:scale-110 transition-transform">{stat.val}</span>
                  <span className="text-blue-100 font-bold tracking-wide">{stat.lab}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-32 bg-white relative mb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 border border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 text-center" dir="rtl">
              <h2 className="text-4xl font-black mb-6 text-slate-900" style={{ fontFamily: 'Cairo' }}>تعال لزيارة المؤسسة</h2>
              <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto font-medium">
                حضورك يضمن مناقشة أحسن لاحتياجاتك، زرنا في معهدنا حتى نناقش أهدافك بشكل أوضح ونعرفك على بيئة العمل.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-right">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600"><MapPin className="w-6 h-6" /></div>
                  <span className="font-bold text-slate-700 leading-snug">باب الزوار، حي دوزي 03 مقابل الإقامة الجامعية</span>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600"><Clock className="w-6 h-6" /></div>
                  <span className="font-bold text-slate-700 leading-snug">السبت - الخميس: 9:00 صباحاً - 7:00 مساءً</span>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 md:col-span-2 lg:col-span-1">
                  <div className="bg-rose-50 p-4 rounded-2xl text-rose-600"><Phone className="w-6 h-6" /></div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase font-black mb-1">اتصل بنا</span>
                    <span className="font-black text-xl text-slate-900" dir="ltr">0555 36 17 17</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={openForm}
                  className="px-12 py-5 bg-slate-900 text-white font-black text-xl rounded-2xl hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl active:scale-95"
                >
                  احجز موعداً الآن
                </button>
                <a 
                  href="https://wa.me/message/EKBPZNHXV2MKI1" 
                  target="_blank" 
                  rel="noopener"
                  className="px-12 py-5 bg-emerald-500 text-white font-black text-xl rounded-2xl hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isFormOpen} 
        onClose={closeForm} 
        title="حجز موعد جديد (Book Appointment)"
      >
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSclVuHfRb40Ssk6VW1Xda2n06mPx4L9G8ReFv2r72TijVzUYw/viewform?embedded=true" 
          className="w-full h-full border-0"
          title="Registration Form"
        >
          جاري التحميل...
        </iframe>
      </Modal>
    </div>
  );
};

export default App;
