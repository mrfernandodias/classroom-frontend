import { type Subject } from '@/types';

// Mock data - Dados fictícios para desenvolvimento
// Em Laravel seria como ter um Seeder ou Factory
export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'CS',
    description:
      'Fundamental concepts of programming, algorithms, and computational thinking. Perfect for beginners starting their journey in tech.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Calculus II',
    department: 'Math',
    description:
      'Advanced calculus covering integration techniques, sequences, series, and introduction to differential equations.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: 'PHYS101',
    name: 'General Physics I',
    department: 'Physics',
    description:
      'Mechanics, thermodynamics, and waves. Includes laboratory sessions for hands-on experimentation.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    code: 'ENG101',
    name: 'English Composition',
    department: 'English',
    description:
      'Develop essential writing skills through essays, research papers, and critical analysis of literature.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    code: 'CHEM101',
    name: 'General Chemistry',
    department: 'Chemistry',
    description:
      'Introduction to atomic structure, chemical bonding, stoichiometry, and basic laboratory techniques.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    code: 'BIO201',
    name: 'Cell Biology',
    department: 'Biology',
    description:
      'Study of cell structure, function, and molecular mechanisms including DNA replication and protein synthesis.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    code: 'HIST101',
    name: 'World History',
    department: 'History',
    description: 'Survey of major civilizations and events from ancient times to the modern era.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    code: 'PSYCH101',
    name: 'Introduction to Psychology',
    department: 'Psychology',
    description:
      'Exploration of human behavior, cognition, emotion, and the scientific methods used in psychological research.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 9,
    code: 'ECON201',
    name: 'Microeconomics',
    department: 'Economics',
    description:
      'Analysis of individual economic decisions, market structures, supply and demand, and consumer behavior.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 10,
    code: 'CS201',
    name: 'Data Structures and Algorithms',
    department: 'CS',
    description:
      'Advanced programming concepts including arrays, linked lists, trees, graphs, sorting, and searching algorithms.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 11,
    code: 'PHIL101',
    name: 'Introduction to Philosophy',
    department: 'Philosophy',
    description:
      'Explore fundamental questions about existence, knowledge, ethics, and the nature of reality.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 12,
    code: 'SOC101',
    name: 'Introduction to Sociology',
    department: 'Sociology',
    description: 'Study of human social behavior, institutions, and the development of societies.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 13,
    code: 'ENG201',
    name: 'Mechanical Engineering Fundamentals',
    department: 'Engineering',
    description:
      'Core principles of mechanics, thermodynamics, and materials science for engineering applications.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 14,
    code: 'MED101',
    name: 'Human Anatomy',
    department: 'Medicine',
    description: 'Comprehensive study of the structure and organization of the human body systems.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 15,
    code: 'LAW101',
    name: 'Introduction to Law',
    department: 'Law',
    description:
      'Foundations of legal systems, constitutional law, and basic legal reasoning and analysis.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 16,
    code: 'ARCH101',
    name: 'Architectural Design I',
    department: 'Architecture',
    description:
      'Introduction to design principles, spatial composition, and architectural drawing techniques.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 17,
    code: 'ART101',
    name: 'Art History',
    department: 'Arts',
    description:
      'Survey of visual arts from prehistoric times to contemporary movements and their cultural contexts.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 18,
    code: 'MUS101',
    name: 'Music Theory',
    department: 'Music',
    description:
      'Fundamentals of musical notation, harmony, rhythm, and ear training for musicians.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 19,
    code: 'EDU201',
    name: 'Educational Psychology',
    department: 'Education',
    description:
      'Study of learning processes, cognitive development, and effective teaching strategies.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 20,
    code: 'BUS101',
    name: 'Introduction to Business',
    department: 'Business',
    description:
      'Overview of business operations, management principles, marketing, and entrepreneurship.',
    createdAt: new Date().toISOString(),
  },
];
