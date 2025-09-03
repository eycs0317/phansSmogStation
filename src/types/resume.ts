// type

export type ResumeExperience = {
  company?: string;
  locality?: string;
  region?: string;
  time?: string;
  role?: string;
  intro?: string;
  description?: string;
};

export type Resume = {
  name: string;
  street1: string;
  street2: string;
  locality: string;
  region: string;
  postalCode: string;
  email: string;
  urlLinkedin: string;
  phone: string;
  summary: string;
  competencies: string;
  experience: ResumeExperience[];
  additionalExperience: ResumeExperience[];
  publications: {
    type: string;
    title: string;
    publisher: string;
    description: string;
  };
};
