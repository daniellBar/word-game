import type { ACTIONS } from "./consts";

export type ActionType = (typeof ACTIONS)[keyof typeof ACTIONS];

export type Status = "success" | "error" | "pending";

export type FinalStatus = Exclude<Status, "pending">;
