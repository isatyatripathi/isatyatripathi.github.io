export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
  icon: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
  current?: boolean;
};

export type ExpertiseGroup = {
  title: string;
  icon: string;
  description: string;
  skills: string[];
};

export type ImpactStory = {
  eyebrow: string;
  title: string;
  summary: string;
  result: string;
  capabilities: string[];
  icon: string;
};

export type Recognition = {
  title: string;
  detail: string;
  icon: string;
};

export type Portfolio = {
  person: {
    name: string;
    shortName: string;
    role: string;
    headline: string;
    location: string;
    email: string;
    website: string;
    availability: string;
    summary: string[];
    portrait: string;
    portraitAlt: string;
  };
  socialLinks: SocialLink[];
  navigation: { label: string; href: string }[];
  metrics: Metric[];
  expertise: ExpertiseGroup[];
  impacts: ImpactStory[];
  experience: Experience[];
  leadershipPrinciples: {
    title: string;
    description: string;
    icon: string;
  }[];
  recognition: Recognition[];
  education: {
    degree: string;
    specialization: string;
    institution: string;
    years: string;
  };
  certifications: string[];
  publication: {
    title: string;
    publisher: string;
  };
  resume: {
    path: string;
    filename: string;
    description: string;
  };
};
