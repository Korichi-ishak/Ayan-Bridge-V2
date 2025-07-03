export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz';
  duration: number; // in minutes
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Débutant' | 'Intermédiaire' | 'Expert';
  lessons: Lesson[];
  coverImage: string;
}

export const mockCourses: Course[] = [
  {
    id: 'course_001',
    title: 'Les bases de la programmation en JavaScript',
    description: 'Un cours complet pour apprendre les fondamentaux de JavaScript.',
    level: 'Débutant',
    coverImage: 'https://via.placeholder.com/300x200.png?text=Cours+JS',
    lessons: [
      { id: 'l_01', title: 'Introduction', type: 'video', duration: 10 },
      { id: 'l_02', title: 'Variables et types', type: 'text', duration: 15 },
      { id: 'l_03', title: 'Quiz #1', type: 'quiz', duration: 5 },
    ],
  },
  {
    id: 'course_002',
    title: 'React: De zéro à héros',
    description: 'Maîtrisez le framework React pour construire des applications web modernes.',
    level: 'Intermédiaire',
    coverImage: 'https://via.placeholder.com/300x200.png?text=Cours+React',
    lessons: [
      { id: 'l_01', title: 'Setup et composants', type: 'video', duration: 25 },
      { id: 'l_02', title: 'Le state et les props', type: 'video', duration: 30 },
      { id: 'l_03', title: 'Le cycle de vie', type: 'text', duration: 20 },
      { id: 'l_04', title: 'Quiz final', type: 'quiz', duration: 10 },
    ],
  },
]; 