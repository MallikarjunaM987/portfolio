
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: string;
}
