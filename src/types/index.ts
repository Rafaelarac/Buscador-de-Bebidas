import { z } from "zod";
import { categoriesAPIResponseSchema } from "../utils/recipes-schema";


export type Categories =  z.infer<typeof categoriesAPIResponseSchema>