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
    images: [
      '/artists/oykni/1.jpg.jpg',
      '/artists/oykni/2.jpg.jpg',
      '/artists/oykni/3.jpg.jpg',
    ],
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
    images: [
      '/artists/jongmey-kim/1.jpg.jpg',
      '/artists/jongmey-kim/2.jpg.jpg',
      '/artists/jongmey-kim/3.jpg.jpg',
    ],
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
    images: [
      '/artists/brotha-q/1.jpg.jpg',
      '/artists/brotha-q/2.jpg.jpg',
      '/artists/brotha-q/3.jpg.jpg',
    ],
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
우리가 매일 마주하는 장면들, 
가령 보도블록 위 작은 얼룩, 신호등을 이루는 작은 점 하나,
쇼윈도로 스미는 빛, 누군가의 옷자락, 
발자국, 흩어진 채 배치되어 있는 돌들과
어디서부터 시작된 것인지 알 수 없는 틈까지도.
모두 깃들어 있고 모두 깃들게 한다.
커다랗고 빠르게 지나가는 여러 장면들 속에서 나는 멈추어 바라본다.
더 작게 나누고 쪼개어 응시한다.
한없이 작아진 나는 한없이 작아진 것들 속에서 오히려 자유롭다.
나에게 한국은 작은 것이고 숨을 통해 스미는 것이며 흐르는 것이다. 
그렇기에 가장 큰 것이기도 하다. 눈을 감아본다.
다시 눈을 뜬다. 시선 끝엔 무엇이 있는가.

How can we define what is Korean? What about "Korea" when we say "Korean"? In fact, the series started with the question of whether everything in this land that we are stepping on is Korea and Korean. The scenes we face every day, perhaps small stains on sidewalk blocks, a small dot of traffic lights, lights glimmering from show windows, someone's hem, footprints, scattered stones across the roads, and even the gaps that we have know idea where it started from. It all dwells there, and it all makes it dwell there. I stop myself and look at the big, fast passing scenes. I divide them into smaller pieces and stare. Being infinitely small, I'm rather free in the infinitely smaller things. To me, Korea is the smallest, seeping through the breath, flowing thing. That's why it's the biggest one at the same time. Close your eyes. Open your eyes again. What's at the end of your sight?`,
      images: Array.from({ length: 19 }, (_, i) => `/artists/gitae-um/gaze${String(i + 1).padStart(2, '0')}.jpg.jpg`)
    },
    images: Array.from({ length: 24 }, (_, i) => `/artists/gitae-um/${i + 1}.jpg.jpg`),
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
    additionalVideos: [
      'https://www.youtube.com/embed/TamKzd2muL8'
    ],
    images: [
      '/artists/vvaldemin864/1.jpg.jpg',
      '/artists/vvaldemin864/2.jpg.jpg',
      '/artists/vvaldemin864/3.jpg.jpg',
    ],
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

const Navbar = ({ onNavigate, onContactClick }: { onNavigate: (page: 'home' | 'artists') => void, onContactClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 py-4 md:py-6 mix-blend-difference">
      <div className="flex items-center gap-4 md:gap-8">
        <div 
          onClick={() => {
            onNavigate('home');
            setIsMenuOpen(false);
          }}
          className="cursor-pointer"
        >
          <img 
            src="/logo.png.png" 
            alt="Jangdan Logo" 
            className="h-6 md:h-8 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/jangdan-logo/200/80";
            }}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">
          <button onClick={() => onNavigate('artists')} className="hover:opacity-100 transition-opacity">Artists</button>
          <button onClick={() => onNavigate('home')} className="hover:opacity-100 transition-opacity">Projects</button>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={onContactClick}
          className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Contact
        </button>
        <div className="relative">
          <Menu 
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full right-0 mt-4 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden md:hidden"
              >
                <div className="flex flex-col p-4 gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold">
                  <button 
                    onClick={() => {
                      onNavigate('artists');
                      setIsMenuOpen(false);
                    }} 
                    className="text-left hover:text-accent transition-colors"
                  >
                    Artists
                  </button>
                  <button 
                    onClick={() => {
                      onNavigate('home');
                      setIsMenuOpen(false);
                    }} 
                    className="text-left hover:text-accent transition-colors"
                  >
                    Projects
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

const ArtistsPage = ({ onOpenArtist }: { onOpenArtist: (a: Artist) => void }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 min-h-screen"
    >
      <div className="container mx-auto">
        <div className="mb-12 md:mb-24">
          <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-4 block">Directory</span>
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase italic font-serif">Artists.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {ARTISTS.map((artist, idx) => (
            <motion.div 
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onOpenArtist(artist)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 glass">
                <img 
                  src={artist.thumbnail} 
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${artist.id}/800/1000`;
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black tracking-tighter group-hover:text-accent transition-colors">
                  {artist.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Immersive Background (Inspired by Spline Earth) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] rounded-full bg-[radial-gradient(circle,rgba(242,125,38,0.15)_0%,transparent_70%)] blur-[120px] animate-pulse" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-4 md:px-8"
      >
        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold text-accent mb-6 md:mb-8 block">
          Creative Collective
        </span>
        <h2 className="text-5xl md:text-[10vw] font-black leading-[0.9] md:leading-[0.85] tracking-tighter uppercase italic mb-10 md:mb-16 break-keep">
          프로젝트_장단
        </h2>
        
        <div className="flex flex-col items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <p className="text-sm md:text-lg opacity-80 font-light leading-relaxed break-keep">
              프로젝트_장단은 다양한 창작 분야의 재능 있는 아티스트들이 풀어내는 문화, 예술 컨텐츠 프로젝트이다. 
              다양한 개성을 지닌 젊은 아티스트들이 개개인의 예술활동의 다양성을 존중하면서 조화롭게 세상과 교류한다. 
              그들은 한국의 전통문화를 주제로 개인의 창작 예술 네트워크 구축을 통해 공연기획, 공공예술 등의 다양한 활동을 병행하고 있으며, 
              우리나라의 전통문화와 현대문화를 결합한 다양한 컨텐츠를 제작하여 한국문화의 우수성을 전세계에 알리고자 한다.
            </p>
            
            <p className="text-[10px] md:text-xs opacity-40 font-light leading-relaxed tracking-wide uppercase">
              Project_Jangdan releases cultural and artistic contents created by talented artists in various creative fields. 
              Young artists with diverse individualities interact harmoniously with the world while respecting the diversity of individual artistic activities. 
              With the Korean traditional culture as the theme, they expand their creative works by being faithful to individual creative desires and collective instincts. 
              By actively intervening in all processes of socialization of art, they want to show the nature of art where the Korean traditional culture intersects with the modern culture. 
              Through the establishment of an art network of several contemporary artists, various activities including performance planning and public art are being carried out in parallel with producing various contents that merge the Korean traditional culture and modern culture to showcase the excellence of the Korean culture to the world.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 w-full max-w-xs">
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold opacity-30">
              COPYRIGHT Wonderwave 2017. ALL RIGHTS RESERVED.
            </p>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-4 md:mt-8"
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 opacity-30" />
          </motion.div>
        </div>
      </motion.div>

      {/* Side Vertical Text (Inspired by Project Jangdan) */}
      <div className="absolute left-8 bottom-12 z-10 hidden md:block">
        <span className="vertical-text text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">
          Est. 2017 / Seoul, Korea
        </span>
      </div>
    </section>
  );
};

interface ArtistSectionProps {
  artist: Artist;
  onOpen: (a: Artist) => void;
}

const ArtistSection = ({ artist, onOpen }: ArtistSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <div ref={ref} className="relative py-16 md:py-32 border-b border-white/5 overflow-hidden group">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="md:col-span-5 space-y-6 md:space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 block">
              {artist.englishName}
            </span>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter mb-4 md:mb-6">
              {artist.name}
            </h3>
            {artist.description && (
              <p className="text-sm md:text-lg opacity-60 leading-relaxed mb-6 md:mb-8 whitespace-pre-line break-keep">
                {artist.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
              {artist.tags.map(tag => (
                <span key={tag} className="px-3 md:px-4 py-1 rounded-full border border-white/10 text-[9px] md:text-[10px] uppercase tracking-wider">
                  #{tag}
                </span>
              ))}
            </div>
            <button 
              onClick={() => onOpen(artist)}
              className="group/btn flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest"
            >
              View Works 
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent transition-all">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </button>
          </motion.div>
        </div>

        <div className="md:col-span-7 relative">
          <motion.div 
            style={{ rotate }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-2xl"
            onClick={() => onOpen(artist)}
          >
            <img 
              src={artist.thumbnail} 
              alt={artist.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${artist.id}/800/1000`;
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                <Play className="w-6 h-6 md:w-8 md:h-8 fill-white" />
              </div>
            </div>
          </motion.div>
          
          {/* Floating Background Text */}
          <motion.div 
            style={{ x }}
            className="absolute -bottom-6 md:-bottom-12 -right-6 md:-right-12 text-[20vw] md:text-[15vw] font-black opacity-[0.03] pointer-events-none whitespace-nowrap italic font-serif"
          >
            {artist.englishName}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ArtistModal = ({ artist, onClose }: { artist: Artist, onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col overflow-y-auto"
    >
      <div className="sticky top-0 z-10 flex justify-between items-center p-4 md:p-8 mix-blend-difference">
        <h4 className="text-lg md:text-xl font-black italic font-serif">{artist.englishName}</h4>
        <button onClick={onClose} className="p-3 md:p-4 rounded-full glass hover:bg-white hover:text-black transition-all">
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 space-y-16 md:space-y-24">
        {/* Content Section (Video or Photo Series) */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-center justify-between">
            <h5 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">
              {artist.photoSeries ? 'Photo' : 'MUSIC VIDEO'}
            </h5>
            <div className="flex gap-4 opacity-40 text-[10px] md:text-xs uppercase tracking-widest font-bold">
              <span>01</span>
              <div className="w-8 md:w-12 h-[1px] bg-white self-center" />
              <span>{artist.photoSeries ? 'Photo' : 'Video'}</span>
            </div>
          </div>

          {artist.photoSeries ? (
            <div className="space-y-12 md:space-y-16">
              <div className="max-w-3xl space-y-6 md:space-y-8">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic font-serif">
                  {artist.photoSeries.title}
                </h2>
                <div className="opacity-70 leading-relaxed text-base md:text-lg whitespace-pre-line font-light break-keep">
                  {artist.photoSeries.content}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {artist.photoSeries.images.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx % 4) * 0.1 }}
                    className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden glass shadow-2xl"
                  >
                    <img 
                      src={img} 
                      alt={`${artist.name} series ${idx}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/gaze-${idx}/800/1000`;
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8 md:space-y-12">
              {artist.videoUrl && (
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Main Video</span>
                  <div className="aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden glass shadow-2xl">
                    <iframe 
                      src={artist.videoUrl} 
                      className="w-full h-full" 
                      allowFullScreen 
                      title={artist.name}
                    />
                  </div>
                </div>
              )}
              
              {artist.additionalVideos && artist.additionalVideos.length > 0 && (
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">More Videos</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {artist.additionalVideos.map((video, idx) => (
                      <div key={idx} className="aspect-video w-full rounded-2xl overflow-hidden glass shadow-2xl">
                        <iframe 
                          src={video} 
                          className="w-full h-full" 
                          allowFullScreen 
                          title={`${artist.name} video ${idx + 2}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Gallery Section */}
        {artist.images && artist.images.length > 0 && (
          <section className="space-y-8 md:space-y-12">
            <div className="flex items-center justify-between">
              <h5 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">
                Gallery
              </h5>
              <div className="flex gap-4 opacity-40 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                <span>02</span>
                <div className="w-8 md:w-12 h-[1px] bg-white self-center" />
                <span>Works</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {artist.images.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (idx % 8) * 0.05 }}
                  className="aspect-[3/4] rounded-xl overflow-hidden glass group/img cursor-zoom-in"
                >
                  <img 
                    src={img} 
                    alt={`${artist.name} work ${idx}`} 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${artist.id}-${idx}/800/1000`;
                    }}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Footer Info */}
        <footer className="py-16 md:py-24 border-t border-white/10 flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-white/10">
                <img 
                  src={artist.thumbnail} 
                  alt={artist.name} 
                  className="w-full h-full object-cover grayscale" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${artist.id}/200/200`;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h6 className="text-3xl md:text-4xl font-black tracking-tighter">{artist.name}</h6>
            </div>
            <p className="text-sm md:text-base opacity-60 leading-relaxed whitespace-pre-line break-keep">
              {artist.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Connect</span>
            <div className="flex gap-6 md:gap-8">
              {artist.socials?.instagram && (
                <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-accent transition-colors" />
                </a>
              )}
              {artist.socials?.youtube && (
                <a href={artist.socials.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-accent transition-colors" />
                </a>
              )}
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

const ContactModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-8"
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 p-4 rounded-full glass hover:bg-white hover:text-black transition-all z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-2xl w-full space-y-12 md:space-y-16 text-center overflow-y-auto max-h-full py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-black block">Email</span>
          <a 
            href="mailto:contact@wonderwave.asia" 
            className="text-2xl md:text-5xl lg:text-7xl font-black tracking-tighter hover:text-accent transition-all duration-500 block break-all px-4"
          >
            contact@wonderwave.asia
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-black block">Instagram</span>
          <div className="space-y-4 px-4">
            <a 
              href="https://www.instagram.com/wonderwave.official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl md:text-5xl lg:text-7xl font-black tracking-tighter hover:text-accent transition-all duration-500 block break-all"
            >
              @wonderwave.official
            </a>
            <a 
              href="https://www.instagram.com/wonderave.official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl md:text-5xl lg:text-7xl font-black tracking-tighter hover:text-accent transition-all duration-500 block break-all"
            >
              @wonderave.official
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.4 }}
          className="pt-12 border-t border-white/10"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold">
            Creative Collective Jangdan.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'artists'>('home');

  useEffect(() => {
    if (selectedArtist || isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedArtist, isContactOpen]);

  const handleOpenArtist = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const handleNavigate = (page: 'home' | 'artists') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <GridLines />
      <Navbar onNavigate={handleNavigate} onContactClick={() => setIsContactOpen(true)} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />

            <section className="bg-white text-black py-16 md:py-24 px-4 md:px-8">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div className="max-w-2xl">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 block opacity-40">Our Vision</span>
                  <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] break-keep">
                    우리는 전통위에 오늘을 쌓습니다.<br />
                    <span className="font-traditional italic text-accent">전통을 새롭게, 예술을 다르게.</span>
                  </h2>
                </div>
                <p className="max-w-xs text-xs md:text-sm opacity-60 leading-relaxed font-medium break-keep whitespace-pre-line">
                  장단 프로젝트는 다양한 분야의 아티스트들이 모여
                  한국의 전통을 현대적 감각으로 재해석하는
                  크리에이티브 컬렉티브입니다.
                  개인의 예술은 존중받고, 그 다양성은 하나의 울림이 됩니다.
                </p>
              </div>
            </section>

            <section id="artists-preview" className="relative">
              {ARTISTS.slice(0, 3).map(artist => (
                <div key={artist.id}>
                  <ArtistSection 
                    artist={artist} 
                    onOpen={handleOpenArtist} 
                  />
                </div>
              ))}
              <div className="py-24 flex justify-center">
                <button 
                  onClick={() => handleNavigate('artists')}
                  className="px-12 py-4 rounded-full border border-white/20 text-sm font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                >
                  View All Artists
                </button>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div 
            key="artists-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ArtistsPage onOpenArtist={handleOpenArtist} />
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-16 md:py-32 px-4 md:px-8 border-t border-white/5">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="sm:col-span-2 space-y-8">
          <img 
            src="/logo.png.png" 
            alt="Jangdan Logo" 
            className="h-10 md:h-12 w-auto object-contain opacity-80"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/jangdan-logo/200/80";
            }}
            referrerPolicy="no-referrer"
          />
          <p className="max-w-sm opacity-40 text-xs md:text-sm leading-relaxed">
              COPYRIGHT Wonderwave 2017. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Navigation</span>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li onClick={() => handleNavigate('home')} className="hover:text-accent cursor-pointer transition-colors">Home</li>
              <li onClick={() => handleNavigate('artists')} className="hover:text-accent cursor-pointer transition-colors">Artists</li>
              <li onClick={() => handleNavigate('home')} className="hover:text-accent cursor-pointer transition-colors">Projects</li>
              <li 
                onClick={() => setIsContactOpen(true)}
                className="hover:text-accent cursor-pointer transition-colors"
              >
                Contact
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Social</span>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li>
                <a href="https://www.instagram.com/wonderwave.official" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Wonderwave" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedArtist && (
          <ArtistModal 
            artist={selectedArtist} 
            onClose={() => setSelectedArtist(null)} 
          />
        )}
        {isContactOpen && (
          <ContactModal onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </main>
  );
}
