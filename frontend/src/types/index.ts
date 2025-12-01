export interface Pillar {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
}

export interface CTAButton {
  id: number;
  text: string;
  variant: "primary" | "secondary";
  onClick: () => void;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface TeamMember {
  id: number;
  name: string;
  quote: string;
  image: string;
}
