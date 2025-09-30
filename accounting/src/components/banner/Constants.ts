import rectangle from '../../assets/Rectangle.jpg';
import { SlideCertificate } from './slide-certificate/SlideCertificate';

export type SlideType = {
  id: number;
  type: 'image' | 'component';
  content: string | React.ComponentType;
  title?: string;
};

export const SLIDES: SlideType[] = [
  { 
    id: 1, 
    type: 'component', 
    content: SlideCertificate, 
  },
  { 
    id: 2, 
    type: 'image', 
    content: rectangle, 
    title: 'Небезразличный бухгалтерский аутсорсинг', 
  },
  { 
    id: 3, 
    type: 'image', 
    content: rectangle, 
    title: 'Профессиональный подход к бухгалтерии', 
  },
];
