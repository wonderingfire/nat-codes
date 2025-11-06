import { CloudIcon, CodeIcon, DatabaseIcon, PuzzleIcon, WorkflowIcon, WrenchIcon } from 'lucide-angular';

export const technicalExpertise = [
  {
    topic: 'Programming',
    icon: CodeIcon,
    items: [
      'Java',
      'TypeScript',
      'Javascript',
      'Python',
      'C#'
    ]
  },
  {
    topic: 'Frameworks & Libraries',
    icon: PuzzleIcon,
    items: [
      'Spring Boot',
      'Spring Framework',
      'Flask',
      'Angular',
    ]
  },
  {
    topic: 'Cloud & Infrastructure',
    icon: CloudIcon,
    items: [
      'Kubernetes',
      'OpenShift',
      'AWS'
    ]
  },
  {
    topic: 'Architecture & Integration',
    icon: WorkflowIcon,
    items: [
      'Microservices',
      'REST APIs',
      'Apache Kafka'
    ]
  },
  {
    topic: 'Databases',
    icon: DatabaseIcon,
    items: [
      'SQL',
      'GraphQl'
    ]
  },
  {
    topic: 'Tools and Testing',
    icon: WrenchIcon,
    items: [
      'Git',
      'Gradle',
      'Maven',
      'Unit & Integration Testing',
      'Jest'
    ]
  },
];