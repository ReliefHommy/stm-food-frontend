import React from 'react';
import { 
  BookOpen, Palette, Tag, Sparkles, MessageSquare, ShoppingBag 
} from 'lucide-react';

const modules = [
  {
    title: 'Catalogue Builder',
    desc: 'Manage products and create a public catalogue.',
    status: 'Ready',
    icon: <BookOpen />,
    btnText: 'Open'
  },
  {
    title: 'AI Brand Builder',
    desc: 'Create professional branding for your shop.',
    status: 'Beta',
    icon: <Palette />,
    btnText: 'Try Beta'
  },
  {
    title: 'Food Label Helper',
    desc: 'Create structured ingredient and allergen info.',
    status: 'MVP',
    icon: <Tag />,
    btnText: 'Try'
  },
  {
    title: 'Content Generator',
    desc: 'Generate social media posts for your products.',
    status: 'Coming soon',
    icon: <Sparkles />,
    btnText: 'Preview'
  },
  {
    title: 'AI Reply Assistant',
    desc: 'Help answer customer questions automatically.',
    status: 'Coming soon',
    icon: <MessageSquare />,
    btnText: 'Preview'
  },
  {
    title: 'Smart Order System',
    desc: 'Manage incoming orders and track delivery.',
    status: 'Coming soon',
    icon: <ShoppingBag />,
    btnText: 'View'
  }
];

export default function SaaSModuleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((m) => (
        <div key={m.title} className="bg-white border border-neutral-200 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-neutral-100 rounded-xl text-neutral-700">{m.icon}</div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                m.status === 'Ready' ? 'bg-green-100 text-green-700' : 
                m.status === 'Beta' || m.status === 'MVP' ? 'bg-amber-100 text-amber-700' : 
                'bg-neutral-100 text-neutral-500'
              }`}>
                {m.status}
              </span>
            </div>
            <h3 className="font-bold text-neutral-900 mb-2">{m.title}</h3>
            <p className="text-sm text-neutral-500 mb-6">{m.desc}</p>
          </div>
          <button 
            disabled={m.status === 'Coming soon'}
            className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all ${
              m.status === 'Coming soon' 
              ? 'bg-neutral-50 text-neutral-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {m.btnText}
          </button>
        </div>
      ))}
    </div>
  );
}