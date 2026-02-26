/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Play, 
  X, 
  ArrowRight, 
  Instagram, 
  Youtube, 
  Globe, 
  Menu,
  ChevronDown,
  Maximize2,
  Volume2
} from 'lucide-react';

// --- Types ---

interface Artist {
  id: string;
  name: string;
  englishName: string;
  role: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  additionalVideos?: string[];
  photoSeries?: {
    title: string;
    content: string;
    images: string[];
  };
  images: string[];
  tags: string[];
  socials?: {
    instagram?: string;
    youtube?: string;
    website?: string;
  };
}

// --- Mock Data ---

const ARTISTS: Artist[] = [
  {
    id: 'oykni',
    name: 'OYKNI',
    englishName: 'OYKNI',
    role: 'Electronic / Media Art',
    description: `OYKNI는 전자음악을 기반으로 작업을 해오며 
국악과 전자음악 콜라보레이션 
'프로젝트_장단' 이라는 프로젝트를 진행 중에 있으며 
Obf 팀에서 라이브 셋 아티스트로도 활동중이다.
OYKNI는 기존의 전자음악이 가지고 있던 형식을 넘어서, 
새로운 경계를 넓혀가고 있으며,
한국의 전자음악과 국악씬에 보다 확장된 지평을 선보이고 있다.`,
    thumbnail: '/artists/oykni/thumbnail.jpg.jpg', 
    videoUrl: 'https://www.youtube.com/embed/Ff5WaVMYnKQ',
    additionalVideos: [
      'https://www.youtube.com/embed/TamKzd2muL8',
      'https://www.youtube.com/embed/v6N6my6N1wo',
      'https://www.youtube.com/embed/K2XbQ8HPLr0',
      'https://www.youtube.com/embed/5l0zNbbNlK8',
      'https://www.youtube.com/embed/a7L7kcmrMUs',
      'https://www.youtube.com/embed/u_XTjUoYpBs',
      'https://www.youtube.com/embed/edr2Utq5mOM'
    ],
    images: ['/artists/oykni/thumbnail.jpg.jpg'],
    tags: ['OYKNI', 'electronic', 'media art', 'performance', 'wonderwave', 'wonderave', 'obf', 'projectjangdan'],
    socials: {
      instagram: 'https://www.instagram.com/oykni/',
      youtube: 'https://www.youtube.com/@oykni8366'
    }
  },
  {
    id: 'jongmey-kim',
    name: 'Jongmey Kim',
    englishName: 'Jongmey Kim',
    role: 'Ajaeng / Traditional Music',
    description: '',
    thumbnail: '/artists/jongmey-kim/thumbnail.jpg.jpg',
    videoUrl: 'https://www.youtube.com/embed/a7L7kcmrMUs',
    additionalVideos: [
      'https://www.youtube.com/embed/5l0zNbbNlK8',
      'https://www.youtube.com/embed/VFNqGD8qW6Q',
      'https://www.youtube.com/embed/Ff5WaVMYnKQ'
    ],
    images: ['/artists/jongmey-kim/thumbnail.jpg.jpg'],
    tags: ['Jongmeykim', 'mediaart', 'wonderwave', 'wonderave', 'projectjangdan'],
    socials: {
      instagram: 'https://www.instagram.com/jmey.km',
      youtube: 'https://www.youtube.com/@Wonderwave'
    }
  },
  {
    id: 'brotha-q',
    name: 'Brotha Q',
    englishName: 'Brotha Q',
    role: 'Bassist / Producer',
    description: '',
    thumbnail: '/artists/brotha-q/thumbnail.jpg.jpg',
    videoUrl: 'https://www.youtube.com/embed/v6N6my6N1wo',
    images: ['/artists/brotha-q/thumbnail.jpg.jpg'],
    tags: ['brothaq', 'wonderwave', 'wonderave', 'projectjangdan'],
    socials: {
      instagram: 'https://www.instagram.com/brothaqlee',
      youtube: 'https://www.youtube.com/@Wonderwave'
    }
  },
  {
    id: 'gitae-um',
    name: 'Gitae Um',
    englishName: 'Gitae Um',
    role: 'Percussionist',
    description: '',
    thumbnail: '/artists/gitae-um/thumbnail.jpg.jpg',
    photoSeries: {
      title: 'GAZE _가제',
      content: `한국적인 것은 무엇일까. 한국적,이라고 했을 때 ‘한국’은 어떠한가.
사실 우리가 발 딛고 있는 이 땅의 모든 것이 한국이고 
한국적인 것이 아닐까, 하는 물음에서 이 시리즈는 시작되었다.
우리가 매일 마주하는 장면들, 가령 보도블록 위 작은 얼룩, 신호등을 이루는 작은 점 하나,
쇼윈도로 스미는 빛, 누군가의 옷자락, 발자국, 흩어진 채 배치되어 있는 돌들과
어디서부터 시작된 것인지 알 수 없는 틈까지도. 모두 깃들어 있고 모두 깃들게 한다.`,
      images: [
        '/artists/gitae-um/gaze01.jpg.jpg', '/artists/gitae-um/gaze02.jpg.jpg',
        '/artists/gitae-um/gaze03.jpg.jpg', '/artists/gitae-um/gaze04.jpg.jpg',
        '/artists/gitae-um/gaze05.jpg.jpg', '/artists/gitae-um/gaze06.jpg.jpg',
        '/artists/gitae-um/gaze07.jpg.jpg', '/artists/gitae-um/gaze08.jpg.jpg',
        '/artists/gitae-um/gaze09.jpg.jpg', '/artists/gitae-um/gaze10.jpg.jpg',
        '/artists/gitae-um/gaze11.jpg.jpg', '/artists/gitae-um/gaze12.jpg.jpg',
        '/artists/gitae-um/gaze13.jpg.jpg', '/artists/gitae-um/gaze14.jpg.jpg',
        '/artists/gitae-um/gaze15.jpg.jpg', '/artists/gitae-um/gaze16.jpg.jpg',
        '/artists/gitae-um/gaze17.jpg.jpg', '/artists/gitae-um/gaze18.jpg.jpg',
        '/artists/gitae-um/gaze19.jpg.jpg', '/artists/gitae-um/gaze20.jpg.jpg',
        '/artists/gitae-um/gaze21.jpg.jpg', '/artists/gitae-um/gaze22.jpg.jpg',
        '/artists/gitae-um/gaze23.jpg.jpg', '/artists/gitae-um/gaze24.jpg.jpg'
      ]
    },
    images: ['/artists/gitae-um/thumbnail.jpg.jpg'],
    tags: ['gitaeum', 'wonderwave', 'wonderave', 'projectjangdan'],
    socials: {
      instagram: 'https://www.instagram.com/gitae.um'
    }
  },
  {
    id: 'vvaldemin864',
    name: 'VV Aldemin 864',
    englishName: 'VV Aldemin 864',
    role: 'Visual / Media Art',
    description: '',
    thumbnail: '/artists/vvaldemin864/thumbnail.jpg.jpg',
    videoUrl: 'https://www.youtube.com/embed/K2XbQ8HPLr0',
    additionalVideos: ['https://www.youtube.com/embed/TamKzd2muL8'],
    images: ['/artists/vvaldemin864/thumbnail.jpg.jpg'],
    tags: ['VValdemin864', 'Videoart', 'mediaart', 'wonderwave', 'wonderave', 'projectjangdan'],
    socials: {
      instagram: 'https://www.instagram.com/vv.aldemin.864/'
    }
  }
];

// --- Components ---

const GridLines = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '4vw 4vw' }} />
  </div>
);

const Navbar = ({ onNavigate, onContactClick }: { onNavigate: (page: 'home' | 'artists') => void, onContactClick: () => void }) => (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference">
    <div className="flex items-center gap-8">
      <div onClick={() => onNavigate('home')} className="cursor-pointer flex items-center gap-2">
        <img 
          src="/logo.png" 
          alt="Jangdan Logo" 
          className="h-8 w-auto object-contain brightness-0 invert" 
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">
        <button onClick={() => onNavigate('artists')} className="hover:opacity-100 transition-opacity">Artists</button>
        <button onClick={() => onNavigate('home')} className="hover:opacity-100 transition-opacity">Projects</button>
        <a href="#" className="hover:opacity-100 transition-opacity">About</a>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <button onClick={onContactClick} className="text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
        Contact
      </button>
      <Menu className="w-6 h-6 cursor-pointer" />
    </div>
  </nav>
);

const ArtistsPage = ({ onOpenArtist }: { onOpenArtist: (a: Artist) => void }) => (
  <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-32 pb-24 px-8 min-h-screen">
    <div className="container mx-auto">
      <div className="mb-24">
        <span className="text-accent text-xs font-bold tracking-[0.5em] uppercase mb-4 block">Directory</span>
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic font-serif">Artists.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ARTISTS.map((artist, idx) => (
          <motion.div key={artist.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="group cursor-pointer" onClick={() => onOpenArtist(artist)}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 glass">
              <img src={artist.thumbnail} alt={artist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
            <h3 className="text-3xl font-black tracking-tighter group-hover:text-accent transition-colors">{artist.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] rounded-full bg-[radial-gradient(circle,rgba(242,125,38,0.15)_0%,transparent_70%)] blur-[120px] animate-pulse" />
      </div>
      <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center px-8">
        <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-accent mb-8 block">Creative Collective</span>
        <h2 className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-16">프로젝트_장단</h2>
        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
          <p className="text-sm md:text-lg opacity-80 font-light leading-relaxed break-keep">
            프로젝트_장단은 다양한 창작 분야의 재능 있는 아티스트들이 풀어내는 문화, 예술 컨텐츠 프로젝트이다. 
            다양한 개성을 지닌 젊은 아티스트들이 개개인의 예술활동의 다양성을 존중하면서 조화롭게 세상과 교류한다.
          </p>
          <div className="pt-8 border-t border-white/10 w-full max-w-xs">
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-30">COPYRIGHT Wonderwave 2017. ALL RIGHTS RESERVED.</p>
          </div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-8">
            <ChevronDown className="w-8 h-8 opacity-30" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const ArtistSection = ({ artist, onOpen }: { artist: Artist, onOpen: (a: Artist) => void }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  return (
    <div ref={ref} className="relative py-32 border-b border-white/5 overflow-hidden group">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 space-y-8 z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">{artist.englishName}</span>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">{artist.name}</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {artist.tags.map(tag => <span key={tag} className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-wider">#{tag}</span>)}
            </div>
            <button onClick={() => onOpen(artist)} className="group/btn flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
              View Works 
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </motion.div>
        </div>
        <div className="md:col-span-7 relative">
          <motion.div style={{ rotate }} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-2xl" onClick={() => onOpen(artist)}>
            <img src={artist.thumbnail} alt={artist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                <Play className="w-8 h-8 fill-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ArtistModal = ({ artist, onClose }: { artist: Artist, onClose: () => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black flex flex-col overflow-y-auto">
    <div className="sticky top-0 z-10 flex justify-between items-center p-8 mix-blend-difference">
      <h4 className="text-xl font-black italic font-serif">{artist.englishName}</h4>
      <button onClick={onClose} className="p-4 rounded-full glass hover:bg-white hover:text-black transition-all"><X className="w-6 h-6" /></button>
    </div>
    <div className="container mx-auto px-8 py-12 space-y-24">
      <section className="space-y-12">
        <h5 className="text-2xl font-bold uppercase tracking-tighter">{artist.photoSeries ? 'Photo' : 'MUSIC VIDEO'}</h5>
        {artist.photoSeries ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artist.photoSeries.images.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl">
                <img src={img} alt={`${artist.name} ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        ) : (
          artist.videoUrl && <div className="aspect-video w-full rounded-3xl overflow-hidden glass shadow-2xl"><iframe src={artist.videoUrl} className="w-full h-full" allowFullScreen title={artist.name} /></div>
        )}
      </section>
      <footer className="py-24 border-t border-white/10 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10"><img src={artist.thumbnail} alt={artist.name} className="w-full h-full object-cover grayscale" /></div>
          <h6 className="text-4xl font-black tracking-tighter">{artist.name}</h6>
        </div>
      </footer>
    </div>
  </motion.div>
);

const ContactModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-8">
    <button onClick={onClose} className="absolute top-8 right-8 p-4 rounded-full glass hover:bg-white hover:text-black transition-all z-10"><X className="w-6 h-6" /></button>
    <div className="max-w-2xl w-full text-center space-y-4">
      <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-black block">Email</span>
      <a href="mailto:contact@wonderwave.asia" className="text-4xl md:text-7xl font-black tracking-tighter hover:text-accent transition-all duration-500 block">contact@wonderwave.asia</a>
    </div>
  </motion.div>
);

export default function App() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'artists'>('home');
  const handleNavigate = (page: 'home' | 'artists') => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <main className="relative min-h-screen bg-black text-white">
      <GridLines />
      <Navbar onNavigate={handleNavigate} onContactClick={() => setIsContactOpen(true)} />
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div key="home">
            <Hero />
            <section className="bg-white text-black py-24 px-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] break-keep">우리는 전통위에 오늘을 쌓습니다.<br /><span className="italic text-accent">전통을 새롭게, 예술을 다르게.</span></h2>
            </section>
            <section>{ARTISTS.slice(0, 3).map(artist => <ArtistSection key={artist.id} artist={artist} onOpen={setSelectedArtist} />)}</section>
          </motion.div>
        ) : (
          <ArtistsPage onOpenArtist={setSelectedArtist} />
        )}
      </AnimatePresence>
      <footer className="py-32 px-8 border-t border-white/5">
        <div className="container mx-auto">
          <img src="/logo.png.png" alt="Logo" className="h-12 w-auto mb-8 brightness-0 invert opacity-80" />
          <p className="opacity-40 text-sm">© 2024 Jangdan Project. All rights reserved.</p>
        </div>
      </footer>
      <AnimatePresence>
        {selectedArtist && <ArtistModal artist={selectedArtist} onClose={() => setSelectedArtist(null)} />}
        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}
