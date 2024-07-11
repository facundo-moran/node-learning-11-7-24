import { heroes } from "../data/heroes";

export const findHeroByID = (id: number) => heroes.find((h) => h.id === id);