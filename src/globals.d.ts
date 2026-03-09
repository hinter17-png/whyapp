interface Window {
  electronAPI: {
    platform: string;
    invoke(channel: string, ...args: any[]): Promise<any>;
    on(channel: string, callback: (...args: any[]) => void): () => void;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface Element extends any {}
  interface ElementClass extends any {}
  interface ElementAttributesProperty extends any {}
  interface ElementChildrenAttribute extends any {}
}

declare module 'react' {
  export = React;
  export as namespace React;
  const React: any;
  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prev: T) => T)) => void];
  export const useEffect: (effect: () => (void | (() => void)), deps?: any[]) => void;
  export const useRef: <T>(initialValue: T) => { current: T };
  export const useMemo: <T>(factory: () => T, deps?: any[]) => T;
  export const useCallback: <T extends (...args: any[]) => any>(callback: T, deps?: any[]) => T;
  export const createContext: (defaultValue: any) => any;
  export const useContext: (context: any) => any;
  export const Fragment: any;
  export const StrictMode: any;
  export type ReactNode = any;
  export type CSSProperties = any;

  export interface ChangeEvent<T = any> {
    target: T & { value: string };
    currentTarget: T & { value: string };
  }
  export interface FormEvent<T = any> {
    preventDefault(): void;
    stopPropagation(): void;
    target: T;
    currentTarget: T;
  }
  export interface KeyboardEvent<T = any> {
    key: string;
    code: string;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    preventDefault(): void;
    stopPropagation(): void;
    target: T;
    currentTarget: T;
  }
  export interface MouseEvent<T = any> extends any {}
  export interface DragEvent<T = any> extends any {}
  export interface ClipboardEvent<T = any> extends any {}
  export interface TouchEvent<T = any> extends any {}
  export interface PointerEvent<T = any> extends any {}
  export interface WheelEvent<T = any> extends any {}
  export interface AnimationEvent<T = any> extends any {}
  export interface TransitionEvent<T = any> extends any {}
  export type FC<P = {}> = any;
  export type ReactElement = any;
  export type ComponentType<P = {}> = any;
}

declare module 'react-dom/client' {
  export const createRoot: (container: any) => { render: (element: any) => void };
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
  export const useAnimation: any;
}

declare module 'lucide-react' {
  export const MessageSquare: any;
  export const Globe: any;
  export const LayoutGrid: any;
  export const Wallet: any;
  export const Music: any;
  export const Video: any;
  export const LayoutDashboard: any;
  export const Flame: any;
  export const Infinity: any;
  export const Zap: any;
  export const Crown: any;
  export const Eye: any;
  export const Palette: any;
  export const Sparkles: any;
  export const Cross: any;
  export const Heart: any;
  export const GraduationCap: any;
  export const Plus: any;
  export const Shield: any;
  export const Settings: any;
  export const Users: any;
  export const Phone: any;
  export const MoreHorizontal: any;
  export const Send: any;
  export const Search: any;
  export const User: any;
  export const LogOut: any;
  export const ChevronRight: any;
  export const UserPlus: any;
  export const Filter: any;
  export const Archive: any;
  export const Orbit: any;
  export const Cpu: any;
  export const Layers: any;
  export const ArrowRight: any;
  export const Box: any;
  export const Layout: any;
  export const Terminal: any;
  export const Binary: any;
  export const Shapes: any;
  export const FlaskConical: any;
  export const Scale: any;
  export const Activity: any;
  export const Brain: any;
  export const ShieldAlert: any;
  export const RefreshCw: any;
  export const Timer: any;
  export const Ghost: any;
  export const Atom: any;
  export const ShieldCheck: any;
  export const Waves: any;
  export const Sun: any;
  export const Compass: any;
  export const CloudRain: any;
  export const Flower2: any;
  export const RotateCw: any;
  export const Cloud: any;
  export const Radio: any;
  export const Lock: any;
  export const Wifi: any;
  export const Minus: any;
  export const Square: any;
  export const X: any;
  export const ShoppingCart: any;
  export const Gamepad2: any;
  export const Star: any;
  export const Stars: any;
  export const Moon: any;
  export const Dna: any;
  export const Cross: any;
  export const Rocket: any;
  export const Palette: any;
  export const Feather: any;
  export const Share2: any;
  export const Trophy: any;
  export const Ghost: any;
  export const Play: any;
  export const Pause: any;
  export const SkipBack: any;
  export const SkipForward: any;
  export const Repeat: any;
  export const Shuffle: any;
  export const Disc: any;
  export const ListMusic: any;
  export const Mic2: any;
  export const Volume2: any;
  export const TrendingUp: any;
  export const History: any;
  export const ArrowUpRight: any;
  export const ArrowDownLeft: any;
  export const RefreshCcw: any;
  export const CreditCard: any;
  export const BookOpen: any;
  export const Wind: any;
  export const Tornado: any;
  export const Pyramid: any;
  export const Hexagon: any;
  export const Network: any;
  export const Languages: any;
  export const Scroll: any;
  export const Mic: any;
  export const Smile: any;
  export const Paperclip: any;
  export const CheckCheck: any;
}

declare module 'vitest' {
  export const describe: any;
  export const it: any;
  export const expect: any;
  export const beforeEach: any;
  export const vi: any;
}

declare module 'zustand' {
  const create: any;
  export default create;
}

declare module 'clsx' {
  const clsx: any;
  export default clsx;
}

declare module 'tailwind-merge' {
  export const twMerge: any;
}

declare module 'vite' {
  export const defineConfig: any;
}

declare module '@vitejs/plugin-react' {
  const react: any;
  export default react;
}
