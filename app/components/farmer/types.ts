export type Farmer = {
  id: number;
  farmName: string;
  region: string;
  province: string;
  products: string[];
  capacity: string;
  status: "Verified" | "In Review";
  story: string;
};
