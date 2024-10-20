import { StaffMember } from "./staff";

export interface Trip {
  id: number;
  date: string;
  staffMembers: StaffMember[];
  pickupTime: string;
  area: string;
  signature: string;
}
