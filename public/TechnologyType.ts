export interface TechTypes {
  id: string;
  name: string;
  category:
    | 'Frontend'
    | 'Backend'
    | 'Database'
    | 'Language'
    | 'DevOps'
    | 'Styling'
    | 'Tools';
  description: string;
  icon: string;
  rating: number;
  difficulty: 'Beginner-Friendly' | 'Intermediate' | 'Advanced';
  badge: string;
}
