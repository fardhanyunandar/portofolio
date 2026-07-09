import React, { useEffect, useRef, useState, useCallback, useMemo, memo } from "react";
import {
  Github, Mail, Phone, MapPin, ExternalLink, Code2, Award, ChevronRight,
  Menu, X, Linkedin, Cpu, Layers, Sparkles, Eye, Sun, Moon, ArrowUpRight,
  Download, Zap, Database, Palette, Terminal, GitBranch, Star, Send, Heart,
  Rocket, ArrowRight, Play, Pause, MessageCircle, Calendar, TrendingUp,
  Target, Lightbulb, Shield, Clock, CheckCircle2, AlertCircle, Info,
  RefreshCw, Grid, List, Globe, ArrowDown, Coffee, Briefcase, GraduationCap,
  FileText, Copy, Check, ChevronDown, Sparkle, MousePointer2
} from "lucide-react";

import laporPublikImg from "./assets/LaporPublik.webp";
import wareTrackImg from "./assets/WareTrack.webp";
import dashboardInstitutImg from "./assets/Dashboard-Institut.webp";
import darulFikriDigitalImg from "./assets/Darul Fikri Digital.webp";
import darulQuranRahmanImg from "./assets/Darul Quran Rahman.webp";
import profileImg from "./assets/FardhanMaulana.webp";
import zakiPropertyImg from "./assets/zakiProperty.webp";
import absensiKuImg from "./assets/AbsensiKu.webp";

import {
  SiHtml5, SiJavascript, SiFlask, SiPhp, SiReact, SiMysql, SiGithub,
  SiBootstrap, SiCss, SiSqlite, SiPython, SiTailwindcss
} from "react-icons/si";

// ═══════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════

const ROLES = [
  "Junior Web Developer",
  "Python Flask Developer",
  "PHP Developer",
  "UI/UX Enthusiast",
  "Full Stack Developer"
];

const NAV_ITEMS = [
  { id: "profil", label: "Profil" },
  { id: "keahlian", label: "Keahlian" },
  { id: "proyek", label: "Proyek" },
  { id: "edukasi", label: "Edukasi" },
  { id: "kontak", label: "Kontak" },
];

const USER_DATA = {
  name: "FARDHAN MAULANA YUNANDAR",
  shortName: "Fardhan Maulana",
  role: "Junior Web Developer",
  location: "Tangerang, Banten",
  phone: "088214486502",
  email: "fardhanyundr@gmail.com",
  socials: {
    github: "https://github.com/fardhanyunandar",
    linkedin: "https://linkedin.com/in/fardhanmaulana",
  },
  summary:
    "Junior Web Developer dengan latar belakang Teknik Komputer dan Jaringan serta pendidikan Pengembangan Perangkat Lunak di PeTIK YBM PLN Jombang. Berpengalaman membangun web application menggunakan Python Flask, PHP MVC, dan MySQL.",
  skills: {
    languages: [
      { name: "HTML", icon: <SiHtml5 size={18} className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss size={18} className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript size={18} className="text-[#E8D44D]" /> },
      { name: "Python Flask", icon: <SiPython size={18} className="text-[#3776AB]" /> },
      { name: "PHP", icon: <SiPhp size={18} className="text-[#777BB4]" /> },
      { name: "React", icon: <SiReact size={18} className="text-[#61DAFB]" /> },
    ],
    tools: [
      { name: "MySQL", icon: <Database size={16} /> },
      { name: "SQLite", icon: <SiSqlite size={16} /> },
      { name: "Git & GitHub", icon: <GitBranch size={16} /> },
      { name: "Bootstrap 5", icon: <Globe size={16} /> },
      { name: "Tailwind CSS", icon: <Palette size={16} /> },
      { name: "RESTful API", icon: <Zap size={16} /> },
      { name: "VS Code", icon: <Terminal size={16} /> },
      { name: "Postman", icon: <Send size={16} /> },
      { name: "Figma", icon: <Palette size={16} /> },
    ],
    softSkills: [
      { name: "Komunikatif", icon: <MessageCircle size={16} /> },
      { name: "Bertanggung jawab", icon: <Shield size={16} /> },
      { name: "Disiplin", icon: <Clock size={16} /> },
      { name: "Cepat belajar", icon: <Lightbulb size={16} /> },
      { name: "Manajemen waktu", icon: <Calendar size={16} /> },
      { name: "Teliti", icon: <Target size={16} /> }
    ],
  },
  projects: [
    {
      title: "LaporPublik",
      tech: ["Python", "Flask", "MySQL", "Google Maps API"],
      description: "Sistem pelaporan masyarakat dengan GPS otomatis dan notifikasi WhatsApp real-time.",
      category: "Fullstack",
      accent: "from-blue-500 to-cyan-400",
      github: "https://github.com/fardhanyunandar/LaporPublik",
      live: null,
      image: laporPublikImg,
      featured: true
    },
    {
      title: "WareTrack",
      tech: ["PHP", "MVC", "MySQL"],
      description: "Manajemen inventaris gudang dengan dashboard stok real-time dan critical alert.",
      category: "System",
      accent: "from-blue-500 to-indigo-400",
      github: "https://github.com/fardhanyunandar/Inventaris-Barang",
      live: null,
      image: wareTrackImg,
      featured: false
    },
    {
      title: "Dashboard Institut",
      tech: ["PHP", "MVC", "MySQL"],
      description: "Sistem akademik untuk pengelolaan data mahasiswa, CRUD, dan ekspor statistik.",
      category: "System",
      accent: "from-emerald-500 to-teal-400",
      github: "https://github.com/fardhanyunandar/Dasboard-Institut",
      live: null,
      image: dashboardInstitutImg,
      featured: false
    },
    {
      title: "Darul Fikri Digital",
      tech: ["Bootstrap 5", "JS", "AOS"],
      description: "Website profil pesantren modern multi-halaman dengan animasi interaktif.",
      category: "Landing Page",
      accent: "from-orange-500 to-yellow-400",
      github: "https://github.com/fardhanyunandar/DarulFikriDigital",
      live: "https://fardhanyunandar.github.io/DarulFikriDigital/",
      image: darulFikriDigitalImg,
      featured: true
    },
    {
      title: "Darul Qur'an Rahman",
      tech: ["HTML", "CSS", "JS"],
      description: "Website profil lembaga sosial dengan desain islami dan fitur donasi.",
      category: "Landing Page",
      accent: "from-blue-600 to-indigo-500",
      github: "https://github.com/fardhanyunandar/DarulQuranRahman",
      live: "https://fardhanyunandar.github.io/DarulQuranRahman/",
      image: darulQuranRahmanImg,
      featured: false
    },
    {
      title: "AbsensiKu",
      tech: ["Python", "Flask", "SQLite", "Flask-Login"],
      description: "Aplikasi sistem absensi siswa berbasis web dengan fitur administrasi sekolah modern.",
      category: "Fullstack",
      accent: "from-purple-600 to-pink-500",
      github: "https://github.com/fardhanyunandar/AbsensiKu",
      live: null,
      image: absensiKuImg,
      featured: true
    },
    {
      title: "Zaki Property Group",
      tech: ["HTML", "CSS", "JS"],
      description: "Platform pemasaran properti yang menawarkan jual beli dan sewa berbagai jenis properti.",
      category: "Landing Page",
      accent: "from-green-600 to-emerald-500",
      github: "https://github.com/fardhanyunandar/Zaki-Property-Group",
      live: "https://zaki.santripetikjombang.com/",
      image: zakiPropertyImg,
      featured: false
    },
  ],
  education: [
    {
      institution: "PeTIK II YBM PLN Jombang",
      major: "Software Development",
      period: "2025 - 2026",
      desc: "Fokus pada pengembangan aplikasi web modern dan arsitektur perangkat lunak.",
      icon: <Rocket size={20} />,
      gpa: "3.85"
    },
    {
      institution: "SMKIT Nurantika",
      major: "Teknik Komputer dan Jaringan",
      period: "2022 - 2025",
      desc: "Dasar-dasar jaringan, server, dan infrastruktur IT.",
      icon: <Cpu size={20} />,
      gpa: "3.72"
    },
  ],
  achievements: [
    { title: "Best Web Design Award", desc: "Final Project Web Design @ PeTIK II", year: "2026", icon: <Award size={20} /> },
    { title: "Belajar Dasar AI", desc: "Sertifikasi Dicoding - Pembelajaran Dasar Kecerdasan Buatan", year: "2025", icon: <Lightbulb size={20} /> },
    { title: "JavaScript Dasar", desc: "Sertifikasi Dicoding - Fundamental JavaScript", year: "2025", icon: <Code2 size={20} /> },
  ],
};

const TECH_STACK = [
  { name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", Icon: SiCss, color: "text-[#1572B6]" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-[#E8D44D]" },
  { name: "Python", Icon: SiPython, color: "text-[#3776AB]" },
  { name: "Flask", Icon: SiFlask, color: "text-gray-800 dark:text-gray-200" },
  { name: "PHP", Icon: SiPhp, color: "text-[#777BB4]" },
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "MySQL", Icon: SiMysql, color: "text-[#4479A1]" },
  { name: "GitHub", Icon: SiGithub, color: "text-gray-900 dark:text-white" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "text-[#7952B3]" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
];

const PROJECT_CATEGORIES = ["all", "System", "Fullstack", "Landing Page"];

// ═══════════════════════════════════════════════════════════════
// CUSTOM HOOKS
// ═══════════════════════════════════════════════════════════════

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return; // Skip mouse tracking on touch devices

    let rafId;
    const handler = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handler, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { position, isTouchDevice };
};

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const p = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setProgress(Math.min(p, 100));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return progress;
};

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("profil");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = NAV_ITEMS.map(item => item.id);
          for (const id of [...sections].reverse()) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 200) {
              setActiveSection(id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};

// Hook to detect mobile device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

// ═══════════════════════════════════════════════════════════════
// UTILITY COMPONENTS
// ═══════════════════════════════════════════════════════════════

const AnimatedBackground = memo(({ isDark }) => {
  const canvasRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      // Reduce particle count on mobile for better performance
      const count = isMobile
        ? Math.min(20, Math.floor(window.innerWidth / 50))
        : Math.min(40, Math.floor(window.innerWidth / 30));

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.2
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(59, 130, 246, ${particle.opacity})`
          : `rgba(59, 130, 246, ${particle.opacity * 0.4})`;
        ctx.fill();
      });

      // Skip line connections on mobile for performance
      if (!isMobile) {
        particles.forEach((p1, i) => {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (distance < 120) {
              const alpha = 0.12 * (1 - distance / 120);
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = isDark
                ? `rgba(59, 130, 246, ${alpha})`
                : `rgba(59, 130, 246, ${alpha * 0.6})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDark, isMobile]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.04]"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(128,128,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
});

const AnimatedCounter = memo(({ end, duration = 2000, suffix = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    let rafId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
});

const RevealSection = memo(({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
});

const TiltCard = memo(({ children, className = "", intensity = 15 }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / intensity) * -1;
    const rotateY = (x - centerX) / intensity;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  }, [intensity, isMobile]);

  const handleMouseEnter = useCallback(() => !isMobile && setIsHovered(true), [isMobile]);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("");
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transform, willChange: isHovered ? 'transform' : 'auto' }}
    >
      {children}
    </div>
  );
});

<<<<<<< HEAD
=======

>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
const Toast = memo(({ message, type = "success", isVisible, onClose }) => {
  const icons = {
    success: <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />,
    error: <AlertCircle className="text-red-500 flex-shrink-0" size={20} />,
    info: <Info className="text-blue-500 flex-shrink-0" size={20} />
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:max-w-md z-[100] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-3.5 bg-white/95 dark:bg-[#1a1a2e]/95 border border-slate-200/80 dark:border-white/[0.08] rounded-2xl shadow-2xl text-slate-900 dark:text-white text-sm font-medium backdrop-blur-xl">
        {icons[type]}
        <span className="flex-1">{message}</span>
        <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity p-1 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Close notification">
          <X size={16} />
        </button>
      </div>
    </div>
  );
});

// ═══════════════════════════════════════════════════════════════
// MAIN APP COMPONENT
// ═══════════════════════════════════════════════════════════════

const App = () => {
  // ─── UI State ───────────────────────────────────────────────
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [isDark, setIsDark] = useState(true);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [isPlaying, setIsPlaying] = useState(true);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // ─── Typing Animation ────────────────────────────────────────
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ─── Intersection Observers ─────────────────────────────────
  const [skillsRef, skillsVisible] = useIntersectionObserver({ threshold: 0.25 });

  // ─── Refs ────────────────────────────────────────────────────
  const drawerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const navRef = useRef(null);

  // ─── Hooks ───────────────────────────────────────────────────
  const { position: mousePos, isTouchDevice } = useMousePosition();
  const activeSection = useActiveSection();
  const isMobile = useIsMobile();

  // ─── Memoized filtered projects ──────────────────────────────
  const filteredProjects = useMemo(() => {
    return activeTab === "all"
      ? USER_DATA.projects
      : USER_DATA.projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // ─── Theme classes ──────────────────────────────────────────
  const themeClasses = useMemo(() => ({
    bg: isDark ? "bg-[#0a0a0f]" : "bg-[#fafafa]",
    bgNav: isDark ? "bg-[#0a0a0f]/80" : "bg-white/80",
    bgCard: isDark ? "bg-white/[0.03] backdrop-blur-xl" : "bg-white/80 backdrop-blur-xl",
    bgCardHover: isDark ? "hover:bg-white/[0.06]" : "hover:bg-white",
    borderCard: isDark ? "border-white/[0.08]" : "border-slate-200/80",
    textPrimary: isDark ? "text-white" : "text-slate-900",
    textSecondary: isDark ? "text-slate-400" : "text-slate-600",
    textMuted: isDark ? "text-slate-500" : "text-slate-400",
    bgToolTag: isDark ? "bg-white/[0.04]" : "bg-slate-100",
    bgSkillTrack: isDark ? "bg-white/[0.06]" : "bg-slate-200",
    bgInput: isDark ? "bg-white/5 border-white/10 focus:border-blue-500" : "bg-slate-50 border-slate-200 focus:border-blue-500",
  }), [isDark]);

  // ═══════════════════════════════════════════════════════════════
  // EFFECTS
  // ═══════════════════════════════════════════════════════════════

  // Scroll detection
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          setShowScrollTop(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  // Typing animation
  useEffect(() => {
    if (!isPlaying) return;

    const current = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, isPlaying]);

  // Mobile menu focus trap
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") { setIsMenuOpen(false); return; }
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = Array.from(
          drawerRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const current = document.activeElement;
        if (!e.shiftKey && current === last) { e.preventDefault(); first.focus(); }
        else if (e.shiftKey && current === first) { e.preventDefault(); last.focus(); }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  // ═══════════════════════════════════════════════════════════════
  // HANDLERS
  // ═══════════════════════════════════════════════════════════════

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const showToast = useCallback((message, type = "success") => {
    setToast({ show: true, message, type });
  }, []);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(USER_DATA.email);
      setCopiedEmail(true);
      showToast("Email berhasil disalin!", "success");
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      showToast("Gagal menyalin email", "error");
    }
  }, [showToast]);

  const validateForm = useCallback(() => {
    const errors = {};
    if (!contactForm.name.trim()) errors.name = "Nama wajib diisi";
    if (!contactForm.email.trim()) {
      errors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = "Format email tidak valid";
    }
    if (!contactForm.message.trim()) errors.message = "Pesan wajib diisi";
    else if (contactForm.message.trim().length < 10) errors.message = "Pesan minimal 10 karakter";
    return errors;
  }, [contactForm]);

  const handleContactSubmit = useCallback(async (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      showToast("Mohon lengkapi semua field dengan benar", "error");
      return;
    }

    setFormSubmitting(true);

    try {
      const waNumber = `62${USER_DATA.phone.slice(1)}`;
      const text = [
        "Halo Fardhan, saya mengirim pesan melalui website portfolio.",
        "\n---",
        `Nama: ${contactForm.name}`,
        `Email: ${contactForm.email}`,
        "\nPesan:",
        contactForm.message,
      ].join("\n");

      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

      showToast("Membuka WhatsApp...", "success");
      setContactForm({ name: "", email: "", message: "" });
      setFormErrors({});

      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      showToast("Gagal membuka WhatsApp. Silakan coba lagi.", "error");
    } finally {
      setFormSubmitting(false);
    }
  }, [validateForm, showToast, contactForm]);

  // ═══════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════

  const { bg, bgNav, bgCard, bgCardHover, borderCard, textPrimary, textSecondary, textMuted, bgToolTag, bgSkillTrack, bgInput } = themeClasses;

  return (
<<<<<<< HEAD
    <div className={`min-h-screen ${bg} ${textPrimary} font-sans selection:bg-blue-500/30 transition-colors duration-500 relative`} style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
=======
    <div className={`min-h-screen ${bg} ${textPrimary} font-sans selection:bg-blue-500/30 transition-colors duration-500 relative`}>
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f

      {/* Animated Background */}
      <AnimatedBackground isDark={isDark} />

      {/* Cursor Glow - Desktop only */}
      {!isTouchDevice && (
        <div
          className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 transition-opacity duration-300 hidden lg:block"
          style={{
            left: mousePos.x - 250,
            top: mousePos.y - 250,
            background: isDark
              ? "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 transition-all duration-500 hover:scale-110 hover:shadow-blue-500/40 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ChevronRight size={20} className="-rotate-90" />
      </button>

      {/* ═══ NAVBAR ═══ */}
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-500 will-change-transform ${scrolled ? `${bgNav} backdrop-blur-2xl border-b ${borderCard} shadow-lg` : "bg-transparent"} py-3 sm:py-5`}
        role="navigation"
        aria-label="Main navigation"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group min-h-[44px]"
            aria-label="Go to top"
          >
            <img src="/favicon.png" alt="Fardhan" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl" />
            <span className={`text-base sm:text-lg font-bold tracking-tight ${textPrimary} hidden xs:block`}>
              Fardhan<span className="text-blue-500">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-1 ${isDark ? "bg-white/[0.03]" : "bg-slate-100/80"} p-1 sm:p-1.5 rounded-2xl border ${borderCard} backdrop-blur-xl`}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
<<<<<<< HEAD
                className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 min-h-[44px] ${activeSection === item.id
=======
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${activeSection === item.id
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                    ? isDark ? "text-white bg-white/10" : "text-slate-900 bg-white shadow-sm"
                    : isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause animations" : "Play animations"}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${isDark ? "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10" : "bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200"} border flex items-center justify-center transition-all duration-300 hover:scale-110`}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

            <button
              onClick={() => setIsDark((v) => !v)}
              aria-label="Toggle dark mode"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${isDark ? "bg-white/5 border-white/10 text-slate-400 hover:text-yellow-400 hover:bg-white/10" : "bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200"} border flex items-center justify-center transition-all duration-300 hover:scale-110`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={`mailto:${USER_DATA.email}`}
              className="hidden lg:flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-105 min-h-[44px]"
            >
              Contact Me <ArrowUpRight size={14} />
            </a>

            <button
              className={`md:hidden ${textPrimary} p-2 rounded-xl hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center`}
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ MOBILE DRAWER ═══ */}
      <div className={`md:hidden fixed inset-0 z-[60] ${isMenuOpen ? "" : "pointer-events-none"}`} aria-hidden={!isMenuOpen}>
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute left-0 top-0 w-full ${isDark ? "bg-[#0a0a0f]/98" : "bg-white/98"} border-b ${borderCard} shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
          style={{ paddingTop: 'env(safe-area-inset-top)' }}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex items-center gap-2">
              <img src="/favicon.png" alt="Fardhan" className="w-8 h-8 rounded-lg" />
              <span className={`text-lg font-bold ${textPrimary}`}>Fardhan<span className="text-blue-500">.</span></span>
            </div>
            <button ref={closeBtnRef} className={`${textPrimary} p-2 rounded-xl hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center`} onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="p-4 sm:p-6 pt-2 flex flex-col gap-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => { setIsMenuOpen(false); scrollToSection(item.id); }}
                className={`px-5 py-4 rounded-2xl text-sm font-semibold ${isDark ? "bg-white/[0.03] border-white/[0.06] text-slate-200 hover:bg-white/[0.08]" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"} border transition-all active:scale-[0.98] flex items-center justify-between group min-h-[56px]`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </button>
            ))}
            <a
              href={`mailto:${USER_DATA.email}`}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl text-sm font-bold hover:shadow-lg transition-all min-h-[56px]"
            >
              Contact Me <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section id="profil" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          {/* Left Column */}
<<<<<<< HEAD
          <RevealSection className="w-full lg:w-3/5 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
=======
          <RevealSection className="w-full lg:w-3/5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
              <Sparkles size={14} className="animate-pulse" /> Hello, I&#39;m Fardhan!
            </div>

            <h1 className={`font-black leading-[0.95] tracking-tighter ${textPrimary}`} style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
              <span className="block">Building</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital
              </span>
              <span className="block">Experiences.</span>
            </h1>

            <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-mono h-8 justify-center lg:justify-start">
              <ArrowRight size={18} className="text-blue-500 flex-shrink-0" aria-hidden="true" />
              <span className={`${textSecondary} truncate`}>{displayText}</span>
              <span className="inline-block w-0.5 h-5 sm:h-6 bg-blue-500 animate-pulse flex-shrink-0" aria-hidden="true" />
            </div>

            <p className={`text-base sm:text-lg md:text-xl ${textSecondary} leading-relaxed max-w-2xl mx-auto lg:mx-0`}>
              Saya <span className={`${textPrimary} font-semibold`}>{USER_DATA.shortName}</span>, seorang Junior Web Developer yang bersemangat dalam menciptakan solusi web yang efisien dan estetik. Spesialis dalam <span className="text-blue-400 font-medium">Python Flask</span> & <span className="text-cyan-400 font-medium">PHP</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("proyek")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl sm:rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center gap-2 overflow-hidden text-sm sm:text-base min-h-[48px]"
              >
                <span className="relative z-10 flex items-center gap-2">Lihat Proyek <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
              </button>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection("kontak"); }}
                className={`px-6 sm:px-8 py-3 sm:py-4 ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-slate-100 border-slate-200 hover:bg-slate-200"} border rounded-xl sm:rounded-2xl font-bold transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base min-h-[48px]`}
              >
                <Download size={18} /> Resume
              </a>
              <div className="flex items-center gap-2">
                <a href={USER_DATA.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50" : "bg-slate-100 border-slate-200 hover:bg-slate-200 hover:border-blue-300"} border flex items-center justify-center hover:scale-110 transition-all duration-300`}>
                  <Github size={20} />
                </a>
                <a href={USER_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50" : "bg-slate-100 border-slate-200 hover:bg-slate-200 hover:border-blue-300"} border flex items-center justify-center hover:scale-110 transition-all duration-300`}>
                  <Linkedin size={20} />
                </a>
                <button onClick={handleCopyEmail} aria-label="Copy email" className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50" : "bg-slate-100 border-slate-200 hover:bg-slate-200 hover:border-blue-300"} border flex items-center justify-center hover:scale-110 transition-all duration-300`}>
                  {copiedEmail ? <Check size={20} className="text-green-500" /> : <Mail size={20} />}
                </button>
              </div>
            </div>
          </RevealSection>

          {/* Right Column: Profile Photo */}
          <RevealSection delay={200} className="w-full lg:w-2/5 flex justify-center lg:justify-end items-center">
            <div className="relative group w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-110" aria-hidden="true" />
              <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow" aria-hidden="true" />

              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                {!imageLoaded && (
                  <div className={`absolute inset-0 ${isDark ? "bg-white/5" : "bg-slate-200"} animate-pulse`} />
                )}
                <img
                  src={profileImg}
                  alt={USER_DATA.name}
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Floating Tech Badges - Better mobile layout */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 w-full max-w-lg px-2 sm:px-4 z-10">
                {TECH_STACK.slice(0, 6).map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl ${isDark ? "bg-[#1a1a2e]/90" : "bg-white/90"} backdrop-blur-xl border ${borderCard} shadow-xl flex items-center gap-1.5 sm:gap-2 animate-bounce-slow hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-default`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <tech.Icon size={14} className={`${tech.color} drop-shadow-sm`} />
                    <span className={`text-[10px] sm:text-xs font-bold ${textPrimary}`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className={`text-xs ${textMuted} font-medium`}>Scroll</span>
          <ArrowDown size={16} className={textMuted} />
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="keahlian" ref={skillsRef} className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
              <div className="max-w-xl text-center md:text-left">
                <div className="flex items-center gap-3 mb-3 sm:mb-4 justify-center md:justify-start">
                  <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                  <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Keahlian</span>
                </div>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ${textPrimary} mb-4 sm:mb-6 tracking-tight`} style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)' }}>
                  Tech Stack &<br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
                </h2>
                <p className={`${textSecondary} text-base sm:text-lg`}>Berfokus pada pengembangan backend yang kuat dan antarmuka pengguna yang responsif.</p>
              </div>
              <div className="flex gap-2 sm:gap-3">
                {[
                  { icon: <Cpu size={24} />, color: "text-blue-400" },
                  { icon: <Layers size={24} />, color: "text-cyan-400" },
                  { icon: <Database size={24} />, color: "text-indigo-400" },
                ].map((item, i) => (
                  <div key={i} className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${bgCard} border ${borderCard} ${item.color} hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

<<<<<<< HEAD
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Skill Section */}
            <RevealSection delay={100}>
              <div className="space-y-6 sm:space-y-8">
                {/* Section Header */}
                <h3 className={`text-lg sm:text-xl font-bold ${textPrimary} flex items-center gap-3 justify-center md:justify-start`}>
=======
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Skill Section */}
            <RevealSection delay={100}>
              <div className="space-y-8">
                {/* Section Header */}
                <h3 className={`text-xl font-bold ${textPrimary} flex items-center gap-3`}>
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full animate-pulse" />
                  Proficiency
                </h3>

<<<<<<< HEAD
                {/* Skills Grid - Adaptive columns */}
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                  {USER_DATA.skills.languages.map((skill, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ease-out text-center min-h-[100px] sm:min-h-[120px]"
=======
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {USER_DATA.skills.languages.map((skill, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ease-out text-center"
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                      style={{
                        background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.65)",
                        borderColor: isDark ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
                      }}
                    >
<<<<<<< HEAD
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl sm:rounded-2xl transition-opacity duration-300 pointer-events-none" />
                      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out filter drop-shadow-sm">
                        {skill.icon}
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold transition-colors duration-300`} style={{ color: isDark ? "rgba(148,163,184,1)" : "rgba(71,85,105,1)" }}>
=======
                      {/* Efek Spotlight Halus di Background saat Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl transition-opacity duration-300 pointer-events-none" />

                      {/* Icon Skill */}
                      <div className="text-3xl mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out filter drop-shadow-sm" style={{ color: undefined }}>
                        {skill.icon}
                      </div>

                      {/* Nama Skill */}
                      <span
                        className={`text-sm font-semibold transition-colors duration-300`}
                        style={{ color: isDark ? "rgba(148,163,184,1)" : "rgba(71,85,105,1)" }}
                      >
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                        <span className="group-hover:text-blue-400 dark:group-hover:text-cyan-400">
                          {skill.name}
                        </span>
                      </span>
<<<<<<< HEAD
                      <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ border: `1px solid ${isDark ? "rgba(59,130,246,0.35)" : "rgba(14,165,233,0.35)"}` }} />
=======

                      {/* Hover accent border */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          border: `1px solid ${isDark ? "rgba(59,130,246,0.35)" : "rgba(14,165,233,0.35)"}`,
                        }}
                      />
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Tools & Soft Skills */}
            <RevealSection delay={200}>
              <div className={`${bgCard} border ${borderCard} rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10`}>
                <h3 className={`text-lg sm:text-xl font-bold ${textPrimary} mb-6 sm:mb-8 flex items-center gap-3 justify-center md:justify-start`}>
                  <Zap size={20} className="text-yellow-400" /> Ecosystem & Tools
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                  {USER_DATA.skills.tools.map((tool, i) => (
                    <span
                      key={i}
<<<<<<< HEAD
                      className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-medium cursor-default`}
=======
                      className={`px-4 py-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 text-sm font-medium cursor-default`}
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                      style={{
                        background: isDark ? "rgba(255,255,255,0.04)" : "rgba(241,245,249,1)",
                        borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.10)",
                        color: isDark ? "rgba(148,163,184,1)" : "rgba(71,85,105,1)",
                      }}
                    >
                      <span className="transition-colors group-hover:text-blue-400 dark:group-hover:text-cyan-400">
                        {tool.icon}
                      </span>
                      <span className="select-none">{tool.name}</span>
                    </span>
                  ))}
                </div>
                <div className={`mt-8 sm:mt-10 pt-8 sm:pt-10 border-t ${isDark ? "border-white/5" : "border-slate-200"}`}>
                  <h3 className={`text-lg sm:text-xl font-bold ${textPrimary} mb-4 sm:mb-6 flex items-center gap-3 justify-center md:justify-start`}>
                    <Star size={20} className="text-yellow-400" /> Soft Skills
                  </h3>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                    {USER_DATA.skills.softSkills.map((skill, i) => (
                      <div
                        key={i}
<<<<<<< HEAD
                        className={`flex items-center gap-2 sm:gap-3 text-xs sm:text-sm p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 group cursor-default`}
=======
                        className={`flex items-center gap-3 text-sm p-3 rounded-xl border transition-all duration-300 group cursor-default`}
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                        style={{
                          background: isDark ? "rgba(255,255,255,0.04)" : "rgba(248,250,252,1)",
                          borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.10)",
                          color: isDark ? "rgba(148,163,184,1)" : "rgba(71,85,105,1)",
                        }}
                      >
<<<<<<< HEAD
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
=======
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                          {skill.icon}
                        </div>
                        <span className="font-medium transition-colors group-hover:text-blue-400 dark:group-hover:text-cyan-400">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="proyek" className={`py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative ${isDark ? "bg-white/[0.01]" : "bg-slate-100/40"}`}>
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Portfolio</span>
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
              </div>
<<<<<<< HEAD
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ${textPrimary} mb-4 sm:mb-6 tracking-tight`} style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)' }}>
=======
              <h2 className={`text-4xl md:text-6xl font-black ${textPrimary} mb-6 tracking-tight`}>
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
                My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className={`${textSecondary} text-base sm:text-lg max-w-2xl mx-auto px-2`}>
                Koleksi proyek terbaik yang menampilkan kemampuan teknis dan kreativitas saya.
              </p>

              <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10 flex-wrap">
                {PROJECT_CATEGORIES.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border min-h-[40px] ${activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-lg shadow-blue-500/20 scale-105"
                      : isDark ? "text-slate-400 border-white/10 hover:border-white/30 hover:text-white" : "text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                      }`}
                  >
                    {tab === "all" ? "Semua" : tab}
                  </button>
                ))}

                <div className={`flex items-center gap-1 p-1 rounded-lg sm:rounded-xl ${isDark ? "bg-white/5" : "bg-slate-100"} border ${borderCard}`}>
                  <button
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    className={`p-2 rounded-lg transition-all min-w-[40px] min-h-[40px] flex items-center justify-center ${viewMode === "grid" ? "bg-blue-600 text-white" : textMuted}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    className={`p-2 rounded-lg transition-all min-w-[40px] min-h-[40px] flex items-center justify-center ${viewMode === "list" ? "bg-blue-600 text-white" : textMuted}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>
          </RevealSection>

          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" : "grid gap-4 sm:gap-6"}>
            {filteredProjects.map((project, idx) => (
              <RevealSection key={project.title} delay={idx * 100}>
                <TiltCard>
                  <article
                    className={`group ${bgCard} rounded-2xl sm:rounded-[2rem] overflow-hidden border ${borderCard} hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-blue-500/5 ${viewMode === "list" ? "flex-row" : ""}`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 sm:w-64 h-40 sm:h-48 flex-shrink-0" : "h-48 sm:h-56"}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className={`px-2 sm:px-3 py-1 sm:py-1.5 ${isDark ? "bg-black/40" : "bg-white/80"} backdrop-blur-xl rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-bold text-white border border-white/20 uppercase tracking-wider`}>
                          {project.category}
                        </span>
                      </div>

                      {project.featured && (
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                          <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 backdrop-blur-xl rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-bold text-white border border-white/20 uppercase tracking-wider flex items-center gap-1">
                            <Star size={10} /> Featured
                          </span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                        <div className="flex gap-2 sm:gap-3 w-full">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg sm:rounded-xl text-white text-[10px] sm:text-xs font-bold hover:bg-white/20 transition-all min-h-[40px]"
                          >
                            <Github size={14} /> Source
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 bg-blue-500/80 backdrop-blur-xl border border-blue-400/30 rounded-lg sm:rounded-xl text-white text-[10px] sm:text-xs font-bold hover:bg-blue-500 transition-all min-h-[40px]"
                            >
                              <Eye size={14} /> Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-4 sm:p-6 flex-grow flex flex-col ${viewMode === "list" ? "justify-center" : ""}`}>
                      <h3 className={`text-lg sm:text-xl font-bold ${textPrimary} mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors flex items-center gap-2`}>
                        {project.title}
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-[-4px] group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className={`${textSecondary} text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow`}>{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className={`text-[9px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg ${isDark ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-600"}`}>
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EDUCATION ═══ */}
      <section id="edukasi" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
          <RevealSection>
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center lg:justify-start">
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Journey</span>
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${textPrimary} mb-12 sm:mb-16 tracking-tight text-center lg:text-left`} style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}>
                Pendidikan &<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pencapaian</span>
              </h2>
              <div className="space-y-6 sm:space-y-8 relative">
                <div className="absolute left-5 sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" aria-hidden="true" />
                {USER_DATA.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-12 sm:pl-16 group">
                    <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center z-10 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      {edu.icon}
                    </div>
                    <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl ${bgCard} border ${borderCard} ${bgCardHover} transition-all duration-300 hover:border-blue-500/30`}>
                      <span className="text-xs sm:text-sm font-mono text-blue-400 mb-2 block font-bold">{edu.period}</span>
                      <h3 className={`text-base sm:text-lg md:text-xl font-bold ${textPrimary} mb-1`}>{edu.institution}</h3>
                      <p className={`${isDark ? "text-slate-300" : "text-slate-600"} mb-2 sm:mb-3 text-sm sm:text-base font-medium`}>{edu.major}</p>
                      <p className={`text-xs sm:text-sm ${textMuted} leading-relaxed mb-2 sm:mb-3`}>{edu.desc}</p>
                      {edu.gpa && (
                        <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg ${isDark ? "bg-blue-500/10" : "bg-blue-50"} text-blue-500 text-[10px] sm:text-xs font-bold`}>
                          <TrendingUp size={12} /> GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="flex flex-col justify-center h-full">
              <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-cyan-500 text-white group overflow-hidden shadow-2xl shadow-blue-500/20">
                <div className="absolute inset-0 opacity-10" aria-hidden="true">
                  <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-white rounded-full blur-3xl" />
                </div>
                <Award size={120} className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-1000 hidden sm:block" aria-hidden="true" />

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-white/20">
                    <Award size={24} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 leading-tight">Achievement<br />Of Excellence</h2>
                  <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8 max-w-sm">Sertifikasi dan pencapaian yang menjadi bukti dedikasi saya dalam belajar.</p>

                  <div className="space-y-3 sm:space-y-4">
                    {USER_DATA.achievements.map((ach, i) => (
                      <div key={i} className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl ${i === 0 ? "bg-white/10" : "bg-white/5"} backdrop-blur-xl border border-white/10 hover:bg-white/15 transition-all`}>
                        <div className="flex items-start justify-between gap-2 sm:gap-4">
                          <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                              {ach.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-base sm:text-lg font-bold mb-1 truncate">{ach.title}</p>
                              <p className="text-blue-200 text-xs sm:text-sm line-clamp-2">{ach.desc}</p>
                            </div>
                          </div>
                          <span className="text-[10px] sm:text-xs font-mono bg-white/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg flex-shrink-0">{ach.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="kontak" className={`py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative ${isDark ? "bg-white/[0.01]" : "bg-slate-100/40"}`}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Contact</span>
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ${textPrimary} mb-4 sm:mb-6 tracking-tight`} style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)' }}>
                Mari{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Berkolaborasi
                </span>
              </h2>
              <p className={`${textSecondary} text-base sm:text-lg leading-relaxed max-w-xl mx-auto px-2`}>
                Terbuka untuk peluang kerja, proyek freelance, maupun sekadar berdiskusi soal teknologi.
              </p>
            </div>
          </RevealSection>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Info */}
            <RevealSection>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Mail size={20} />,
                    label: "Email",
                    value: USER_DATA.email,
                    action: handleCopyEmail,
                    actionLabel: copiedEmail ? "Tersalin!" : "Salin",
                    isButton: true,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: <Phone size={20} />,
                    label: "WhatsApp",
                    value: USER_DATA.phone,
                    href: `https://wa.me/62${USER_DATA.phone.slice(1)}`,
                    actionLabel: "Chat",
                    isButton: false,
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: <MapPin size={20} />,
                    label: "Lokasi",
                    value: USER_DATA.location,
                    actionLabel: "Indonesia",
                    isStatic: true,
                    color: "from-purple-500 to-pink-500",
                  },
                ].map((item, i) => (
                  <div key={i} className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl ${bgCard} border ${borderCard} text-left ${bgCardHover} transition-all duration-300 group hover:border-blue-500/30 hover:-translate-y-1`}>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <p className={`text-[10px] sm:text-xs ${textMuted} uppercase tracking-widest mb-1 font-bold`}>{item.label}</p>
                    <p className={`${textPrimary} font-medium text-xs sm:text-sm mb-3 sm:mb-4 break-all`}>{item.value}</p>
                    {item.isStatic ? (
                      <span className={`text-xs ${textMuted} font-medium`}>{item.actionLabel}</span>
                    ) : item.isButton ? (
                      <button
                        onClick={item.action}
                        className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 transition-colors min-h-[32px]"
                      >
                        {item.actionLabel} {copiedEmail ? <Check size={11} /> : <Copy size={11} />}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 transition-colors min-h-[32px]"
                      >
                        {item.actionLabel} <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </RevealSection>

            {/* Contact Form */}
            <RevealSection delay={200}>
              <form onSubmit={handleContactSubmit} className={`p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] ${bgCard} border ${borderCard}`} noValidate>
                <h3 className={`text-xl sm:text-2xl font-bold ${textPrimary} mb-4 sm:mb-6`}>Kirim Pesan</h3>

                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className={`block text-xs sm:text-sm font-medium ${textSecondary} mb-1.5 sm:mb-2`}>Nama</label>
                    <input
                      id="name"
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => { setContactForm(prev => ({ ...prev, name: e.target.value })); setFormErrors(prev => ({ ...prev, name: undefined })); }}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl ${bgInput} border ${textPrimary} focus:outline-none transition-colors text-sm sm:text-base min-h-[44px] ${formErrors.name ? 'border-red-500' : ''}`}
                      placeholder="Nama Anda"
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                    />
                    {formErrors.name && <p id="name-error" className="text-red-500 text-[10px] sm:text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12} />{formErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className={`block text-xs sm:text-sm font-medium ${textSecondary} mb-1.5 sm:mb-2`}>Email</label>
                    <input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => { setContactForm(prev => ({ ...prev, email: e.target.value })); setFormErrors(prev => ({ ...prev, email: undefined })); }}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl ${bgInput} border ${textPrimary} focus:outline-none transition-colors text-sm sm:text-base min-h-[44px] ${formErrors.email ? 'border-red-500' : ''}`}
                      placeholder="email@contoh.com"
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                    />
                    {formErrors.email && <p id="email-error" className="text-red-500 text-[10px] sm:text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12} />{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-xs sm:text-sm font-medium ${textSecondary} mb-1.5 sm:mb-2`}>Pesan</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => { setContactForm(prev => ({ ...prev, message: e.target.value })); setFormErrors(prev => ({ ...prev, message: undefined })); }}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl ${bgInput} border ${textPrimary} focus:outline-none transition-colors resize-none text-sm sm:text-base min-h-[120px] ${formErrors.message ? 'border-red-500' : ''}`}
                      placeholder="Tulis pesan Anda..."
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? "message-error" : undefined}
                    />
                    {formErrors.message && <p id="message-error" className="text-red-500 text-[10px] sm:text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12} />{formErrors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-lg sm:rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base min-h-[48px]"
                  >
                    {formSubmitting ? (
                      <>
                        <RefreshCw size={18} className="animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Domainesia Banner */}
<<<<<<< HEAD
      <div className="flex justify-center py-6 sm:py-8 px-4" hidden>
=======
      <div className="flex justify-center py-8" hidden>
>>>>>>> 54dafe4cd251ff6a383e47d207f9211900fd534f
        <a href="https://my.domainesia.com/ref.php?u=27021" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
          <img
            src="https://dnva.me/v9ev4"
            width="728"
            height="90"
            alt="DomaiNesia"
            loading="lazy"
            className="rounded-xl max-w-full h-auto"
          />
        </a>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className={`py-8 sm:py-12 border-t ${borderCard} text-center px-4 sm:px-6 relative`} style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 2rem)' }}>
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <img src="/favicon.png" alt="Fardhan" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg" />
            <span className={`text-base sm:text-lg font-bold ${textPrimary}`}>Fardhan<span className="text-blue-500">.</span></span>
          </div>
          <p className={`${textSecondary} text-xs sm:text-sm font-medium px-2`}>
            Copyright © {new Date().getFullYear()}{" "}
            <span className={textPrimary}>{USER_DATA.name}</span>. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 pt-2 sm:pt-4">
            <a href={USER_DATA.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-slate-100 border-slate-200 hover:bg-slate-200"} border flex items-center justify-center transition-all hover:scale-110`}>
              <Github size={16} />
            </a>
            <a href={USER_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-slate-100 border-slate-200 hover:bg-slate-200"} border flex items-center justify-center transition-all hover:scale-110`}>
              <Linkedin size={16} />
            </a>
            <button onClick={handleCopyEmail} aria-label="Copy email" className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-slate-100 border-slate-200 hover:bg-slate-200"} border flex items-center justify-center transition-all hover:scale-110`}>
              {copiedEmail ? <Check size={16} className="text-green-500" /> : <Mail size={16} />}
            </button>
          </div>
        </div>
      </footer>

      {/* ═══ CUSTOM STYLES ═══ */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }

        * { scrollbar-width: thin; scrollbar-color: rgba(100,100,100,0.3) transparent; }
        *::-webkit-scrollbar { width: 6px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: rgba(100,100,100,0.3); border-radius: 3px; }
        *::-webkit-scrollbar-thumb:hover { background: rgba(100,100,100,0.5); }

        html { scroll-behavior: smooth; }

        /* Custom breakpoint for extra small devices */
        @media (min-width: 480px) {
          .xs\\:block { display: block; }
          .xs\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Safe area support for iOS */
        @supports (padding: max(0px)) {
          .safe-area-top { padding-top: max(1rem, env(safe-area-inset-top)); }
          .safe-area-bottom { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
        }
      `}</style>
    </div>
  );
};

export default App;
