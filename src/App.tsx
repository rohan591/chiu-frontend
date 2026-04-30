import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, Heart, Star, CheckCircle2, ShoppingBag, Clock, MapPin, Instagram, Phone, ChevronRight, Menu, X
} from 'lucide-react';

// --- Utility Components ---

const Button = ({ children, className = "", onClick, variant = "primary" }) => {
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold transition-all active:scale-95 shadow-lg text-lg";
  const variants = {
    primary: "bg-[#F472B6] text-white hover:bg-[#db2777]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E]",
    outline: "border-2 border-[#F472B6] text-[#F472B6] hover:bg-[#FDF2F8]"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-10 px-4">
    <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-[#831843]'}`} style={{ fontFamily: "'Baloo 2', cursive" }}>
      {title}
    </h2>
    {subtitle && <p className={`text-lg ${light ? 'text-pink-100' : 'text-gray-600'}`}>{subtitle}</p>}
    <div className={`h-1.5 w-16 mx-auto mt-4 rounded-full ${light ? 'bg-white' : 'bg-[#F472B6]'}`}></div>
  </div>
);

// --- Content Sections ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "919000000000"; // Replace with real number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=नमस्कार, मला तुमच्या ड्रेसेस बद्दल अधिक माहिती हवी आहे.`;

  const products = [
    { id: 1, name: "Yellow Princess Frock", price: "₹७९९", img: "/images/catalog/Yellow-Princess-Frock_02.png" },
    { id: 2, name: "Summer Bloom", price: "₹१२९९", img: "/images/catalog/Summer-Bloom-02.png" },
    { id: 3, name: "Red Paithani Frock", price: "₹६५०", img: "/images/catalog/Red-Paithani-Frock-02.png" },
    { id: 4, name: "Punjabi Dress", price: "₹९५०", img: "/images/catalog/Punjabi-Dress-02.png" },
    { id: 5, name: "Festive Frock", price: "₹९५०", img: "/images/catalog/Festive-Frock-02.png" },
    { id: 6, name: "Blue Princess Frock", price: "₹९५०", img: "/images/catalog/Blue-Princess-Frock-02.png" },
    { id: 7, name: "Aqua Paithani Frock", price: "₹९५०", img: "/images/catalog/Aqua-Paithani-Frock-02.png" },
    { id: 8, name: "Casual Long Gown", price: "₹९५०", img: "/images/catalog/Casual-Long-Gown-02.png" },
  ];

  // const galleryImages = [
  //   "https://images.unsplash.com/photo-1621454523226-eb4f392c8475?auto=format&fit=crop&q=80&w=300",
  //   "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=300",
  //   "https://images.unsplash.com/photo-1503919919749-646ddc46afe1?auto=format&fit=crop&q=80&w=300",
  //   "https://images.unsplash.com/photo-1533512930330-4ac257c86793?auto=format&fit=crop&q=80&w=300",
  //   "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=300",
  //   "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=300",
  // ];

  return (
    <div className="min-h-screen bg-[#FFF7ED] text-gray-800 selection:bg-pink-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Google Fonts Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Poppins:wght@300;400;600&display=swap');
          .font-marathi { font-family: 'Baloo 2', cursive; }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm px-6 py-2">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
              <Heart className="text-[#F472B6]" size={20} fill="#F472B6" />
            </div>
            <span className="text-xl font-bold text-[#831843] font-marathi">Chiu Boutique</span>
          </div> */}
          <img className="h-14" src="/images/logo.webp" alt="" />
          <a href={whatsappLink} className="hidden md:flex items-center gap-2 text-[#25D366] font-bold">
            <MessageCircle size={20} />
            WhatsApp वर ऑर्डर करा
          </a>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-12 container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1 bg-pink-100 text-[#F472B6] rounded-full text-sm font-bold mb-4">
             लहान मुलांच्या कपड्यांचे हब
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#831843] leading-tight mb-4 font-marathi">
            चिऊ बुटीक
          </h1>
          <p className="text-2xl text-[#BE185D] font-marathi font-medium mb-8">
            "तुमच्या चिमुकल्यांसाठी"
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            3 ते १० वयोगटातील मुलींसाठी खास डिझाइन केलेले आरामदायी आणि आकर्षक कपडे. प्रत्येक ड्रेस प्रेमाने आणि काळजीने तयार केलेला!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={whatsappLink} className="w-full sm:w-auto">
              <Button variant="whatsapp" className="w-full">
                <MessageCircle size={24} />
                WhatsApp वर ऑर्डर करा
              </Button>
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-1 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform md:rotate-2">
            <img 
              src="/images/hero.webp" 
              alt="Cute kid in boutique dress" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-peach-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Featured Designs */}
      <section id="designs" className="py-20 bg-white px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="आमचे खास डिझाइन्स" 
            subtitle="प्रत्येक सणासाठी आणि आनंदाच्या क्षणासाठी खास कपडे"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#831843] mb-1 font-marathi">{item.name}</h3>
                  <p className="text-[#F472B6] font-bold text-lg mb-4">किंमत: {item.price} पासून</p>
                  <a href={whatsappLink}>
                    <button className="w-full py-3 rounded-xl border border-pink-100 text-pink-500 font-bold bg-pink-50 flex items-center justify-center gap-2">
                      <MessageCircle size={18} />
                      चौकशी करा
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mt-12 text-center">
            <a href={whatsappLink}>
              <Button variant="outline">आणखी डिझाइन्स पहा <ChevronRight size={20} /></Button>
            </a>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-[#FDF2F8] px-6">
        <div className="container mx-auto">
          <SectionHeading title="आमची वैशिष्ट्ये" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <CheckCircle2 className="text-green-500" size={32} />, title: "कस्टम साईज उपलब्ध", desc: "तुमच्या बाळाच्या मापाप्रमाणे आम्ही खास ड्रेस बनवून देतो." },
              { icon: <Heart className="text-pink-500" size={32} fill="currentColor" />, title: "हॅन्डमेड प्रेम", desc: "आमचे प्रत्येक कपडे हाताने शिवलेले आणि उच्च दर्जाचे असतात." },
              { icon: <Star className="text-yellow-500" size={32} fill="currentColor" />, title: "मऊ आणि आरामदायक फॅब्रिक", desc: "बाळाच्या नाजूक त्वचेसाठी आम्ही फक्त मऊ कापड वापरतो." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm text-center border-b-4 border-[#F472B6]">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 font-marathi text-[#831843]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white px-6 overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading title="कशी करावी ऑर्डर?" subtitle="सोपी आणि जलद प्रक्रिया" />
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 border-t-2 border-dashed border-pink-200 z-0"></div>
            
            {[
              { step: "१", title: "डिझाइन निवडा", desc: "आमच्या गॅलरीमधून किंवा WhatsApp वरून तुमचे आवडते डिझाइन निवडा.", icon: <ShoppingBag /> },
              { step: "२", title: "माप पाठवा", desc: "तुमच्या बाळाचे वय आणि माप आम्हाला WhatsApp वर शेअर करा.", icon: <MessageCircle /> },
              { step: "३", title: "ड्रेस मिळवा", desc: "तुमचा आवडता ड्रेस काही दिवसात घरपोच मिळवा!", icon: <Clock /> }
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10 px-4">
                <div className="w-24 h-24 rounded-full bg-[#F472B6] text-white flex items-center justify-center text-3xl font-bold shadow-xl mb-6 ring-8 ring-pink-50">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3 font-marathi text-[#831843]">{item.step}. {item.title}</h4>
                <p className="text-gray-600 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-[#FFF7ED]">
        <div className="container mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-pink-50 shadow-inner">
               <img src="/images/rasika.jpg" alt="Owner" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#831843] mb-4 font-marathi">आमची गोष्ट...</h2>
            <p className="text-lg text-gray-700 leading-relaxed italic mb-3">
              {/* "एक गृहिणी म्हणून काम करत असताना, माझ्या मुलांसाठी मी स्वतः कपडे शिवण्यास सुरुवात केली. इतर आयांना ते खूप आवडले आणि तिथूनच 'Chiu Boutique' चा जन्म झाला. आज आम्ही शेकडो चिमुकल्यांना सुंदर बनवत आहोत." */}
              "गृहिणी म्हणून घर आणि मुलांची जबाबदारी सांभाळताना, माझ्या चिमुकल्यांसाठी प्रेमाने कपडे शिवण्याची छोटीशी सुरुवात केली. त्या कपड्यांमध्ये माझं ममत्व आणि जिव्हाळा गुंफलेला होता. हळूहळू इतरांनाही हे कपडे मनापासून आवडू लागले, आणि त्या कौतुकातूनच ‘Chiu Boutique’ जन्माला आलं.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
              आज ही केवळ एक बुटीक नाही, तर प्रत्येक चिमुकल्याला प्रेमाने सजवण्याचं एक स्वप्न आहे—जिथे प्रत्येक कपड्यात आईच्या मायेचा स्पर्श आहे."
            </p>
            <p className="text-xl font-bold text-[#F472B6] font-marathi">— चिऊ बुटीक फॅमिली</p>
          </div>
        </div>
      </section>

      {/* Customer Love */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto">
          <SectionHeading title="आमचे आनंदी ग्राहक" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "स्मिता पाटील", text: "खूप छान ड्रेस आहे! फिटिंग आणि कापड एकदम मस्त आहे. माझ्या मुलीला खूप आवडला.", location: "जयसिंगपूर" },
              { name: "कविता माने", text: "वाढदिवसासाठी घेतलेला ड्रेस सर्वांनाच खूप आवडला. वेळेवर डिलिव्हरी मिळाल्याबद्दल धन्यवाद!", location: "कोल्हापूर" },
              { name: "प्रिया देशपांडे", text: "खूपच युनिक डिझाइन्स आहेत. बाजारात असे कपडे मिळत नाहीत.", location: "सांगली" }
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-pink-50 border border-pink-100">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#F472B6" className="text-[#F472B6]" />)}
                </div>
                <p className="text-gray-700 mb-6 font-medium leading-relaxed">"{review.text}"</p>
                <div>
                  <h5 className="font-bold text-[#831843] font-marathi">{review.name}</h5>
                  <p className="text-sm text-pink-400">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-20 bg-[#FDF2F8] px-6">
        <div className="container mx-auto text-center">
          <SectionHeading title="गॅलरी" subtitle="आमच्या काही सुंदर कलाकृती" />
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-md">
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-auto hover:opacity-90 transition-opacity cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#F472B6] to-[#BE185D] text-white px-6 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-marathi">
            तुमच्या चिमुकल्यांसाठी खास ड्रेस आजच ऑर्डर करा
          </h2>
          <p className="text-xl mb-10 text-pink-100">
            मर्यादित स्लॉट्स उपलब्ध! आताच WhatsApp वर मेसेज करा.
          </p>
          <div className="flex flex-col justify-center items-center gap-6">
            <a href={whatsappLink} className="flex flex-col justify-center items-center gap-6 w-full sm:w-auto scale-110">
              <Button variant="whatsapp" className="md:w-full !px-12 !py-5">
                <MessageCircle size={28} />
                WhatsApp वर चॅट करा
              </Button>
            </a>
            <p className="flex items-center gap-2 opacity-80">
              <Phone size={18} /> संपर्क: +91 90000 00000
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-12 bg-[#831843] text-white/80 px-6">
        <div className="container mx-auto text-center">

          <div>
            <h4 className="text-xl font-bold text-white mb-4 font-marathi">संपर्क करा</h4>
            <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
              <li className="flex items-start gap-3"><MapPin className="mt-1 flex-shrink-0" size={18} />जयसिंगपुर, महाराष्ट्र - 416101</li>
              <li className="flex items-center gap-3"><Phone size={18} /> +91 90000 00000</li>
              <li className="flex items-center gap-3"><Clock size={18} /> सकाळी १० ते रात्री ८</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mt-8 mb-4 font-marathi">Chiu Boutique</h3>
            <p className="mb-4">"तुमच्या चिमुकल्यांसाठी" - एक विश्वासार्ह ब्रँड जिथे आम्ही तुमच्या स्वप्नातील ड्रेस वास्तवात आणतो.</p>
            <div className="flex justify-center items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F472B6] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F472B6] transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          © 2026 Chiu Boutique. All Rights Reserved. <br />
          <span className="opacity-50">Designed by <a href="https://chougule.me" target="_blank">chougule.me</a></span>
        </div>

      </footer>

      {/* Floating WhatsApp Button */}
      <a href={whatsappLink} className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce-slow">
        <MessageCircle size={32} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">1</span>
      </a>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#831843] z-[60] flex flex-col items-center justify-center text-center p-6 space-y-8 animate-in fade-in duration-300">
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          <h2 className="text-3xl font-bold text-white font-marathi">Chiu Boutique</h2>
          <nav className="flex flex-col space-y-6 text-2xl text-pink-100 font-marathi">
            <a href="#" onClick={() => setIsMenuOpen(false)}>होम</a>
            <a href="#designs" onClick={() => setIsMenuOpen(false)}>डिझाइन्स</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>आमच्याबद्दल</a>
            <a href="#footer" onClick={() => setIsMenuOpen(false)}>संपर्क</a>
          </nav>
          <a href={whatsappLink} className="w-full">
            <Button variant="whatsapp" className="w-full">WhatsApp ऑर्डर</Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default App;