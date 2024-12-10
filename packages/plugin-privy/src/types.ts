import { z } from "zod";

export const TwitterUsernameSchema = z.object({
    username: z.string(),
});

export interface TwitterUsernameContent {
    username: string;
}

export const isTwitterUsernameContent = (
    object: any
): object is TwitterUsernameContent => {
    return TwitterUsernameSchema.safeParse(object).success;
};
