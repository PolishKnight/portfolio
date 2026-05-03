import { Skill } from './skill-interface';

export interface Category {
  title: { pl: string; en: string };
  skills: Skill[];
}
