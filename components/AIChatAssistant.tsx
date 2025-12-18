
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: 'مرحباً! أنا مساعدك الذكي لمعهد Master Office. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Fix: Initialize GoogleGenAI strictly using process.env.API_KEY as per the guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `
            You are an AI Assistant for "Master Office" or "Daily School" in Algiers, Algeria (Bab Ezzouar). 
            You help prospective students with questions about the Microsoft Office training course (Word, Excel, PowerPoint).
            Course Details:
            - Duration: 24 hours total, spread across weekends.
            - Location: Bab Ezzouar, Douzi 03.
            - Certification: State-recognized certificate.
            - Since: 2006.
            - Graduates: Over 7000.
            - Language: Primarily Arabic (Algerian dialect is great). 
            Be helpful, professional, and encouraging. If someone wants to register, tell them to click the "احجز موعدا" button.
          `
        }
      });

      // Fix: response.text is a property, ensuring robust output extraction
      const aiText = response.text || "عذراً، حدث خطأ ما. حاول مرة أخرى.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "عذراً، لا يمكنني الاتصال بالخدمة حالياً." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-40 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <div className={`fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 z-50 overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ height: '500px' }}>
        <div className="bg-blue-600 p-4 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <span className="font-bold">مساعد Master Office</span>
          </div>
          <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
        </div>
        
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" dir="rtl">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 shadow-sm border border-slate-100'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-end">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                <span className="text-xs text-slate-400">جاري التفكير...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t bg-white flex gap-2" dir="rtl">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اسأل أي شيء عن الدورة..."
            className="flex-1 bg-slate-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AIChatAssistant;
