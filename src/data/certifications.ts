export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", year: "2024" },
  { name: "Meta Front-End Developer", issuer: "Meta", year: "2023" },
];