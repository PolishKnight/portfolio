export interface Item {
  title: { pl: string; en: string };
  date: { pl: string; en: string };
  description: { pl: string; en: string };
  iconClass: string;
  techStack?: string[];
  company?: string;
}
