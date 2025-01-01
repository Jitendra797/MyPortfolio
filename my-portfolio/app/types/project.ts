export const projectsData: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A brief description of Project 1.',
    },
    // Add more project objects
  ];
  
  interface Project {
    id: number;
    title: string;
    description: string;
    // Add other relevant fields like image, url, etc.
  }