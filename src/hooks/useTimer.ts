import { create } from "zustand";
type Ttimer = {
  timer: number;
  setTimer: (v: number) => void;
};
const useTimer = create<Ttimer>((set) => ({
  timer: 30,
  setTimer: (v: number) => set(() => ({ timer: v })),
}));
export default useTimer;
