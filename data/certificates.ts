export type Certificate = {
  name: string;
  status: "earned" | "in-progress";
};

export const certificates: Certificate[] = [
  { name: "CompTIA Security+", status: "earned" },
  { name: "CRTA", status: "earned" },
  { name: "TryHackMe SAL1", status: "earned" },
  { name: "eJPT", status: "in-progress" },
];
