import { AppDataSource } from "../data-source";
import { Story } from "../entity/Story";

export const StoryRepository = AppDataSource.getRepository(Story);