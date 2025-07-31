import { z } from "zod";

export const NewsLetterSchema = z.object({
    email: z.string().email("Vous devez renseigner un email valide")
})

export const homeSchema = z.object({
    fullName: z.string().min(1, "Le nom complet est requis"),
    email: z.string().email("Vous devez renseigner un email valide"),
    phone: z.string().min(10, "vous devez renseigner votre numéro complet"). max(10, "vous devez renseigner votre numéro complet"),
    service: z.string().refine((val) => val !== "", {
        message: "Veuillez sélectionner une prestation",
    }),
    message: z.string().min(1, "un message est obligatoire.")
})

export const serviceSchema = z
  .object({
    fullName: z.string().min(1, "Le nom complet est requis"),
    email: z.string().email("Vous devez renseigner un email valide"),
    phone: z.string().min(10, "vous devez renseigner votre numéro complet").max(10, "vous devez renseigner votre numéro complet"),
    address: z.string()
      .min(1, "L'adresse est requise")
      .refine((val) => {
        const regex = /^(\d{1,4})\s+([\w\s\-']+)\s+(\d{5})$/;
        return regex.test(val);
      }, {
        message: "L'adresse doit contenir un numéro de rue, une voie, et un code postal (ex: '12 rue Victor Hugo 75001')"
      }),
    package: z.string(),
    service: z.string(),
    date_start: z.date().optional(),
    date_end: z.date().optional(),
    message: z.string().min(1, "un message est obligatoire."),
  })
  .superRefine((data, ctx) => {
    if (!data.package) {
      if (data.date_start) {
        ctx.addIssue({
          path: ['date_start'],
          message: "Veuillez choisir une formule avant de sélectionner une date",
          code: z.ZodIssueCode.custom,
        });
      }
      if (data.date_end) {
        ctx.addIssue({
          path: ['date_end'],
          message: "Veuillez choisir une formule avant de sélectionner une date",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

export type THomeSchema = z.infer<typeof homeSchema>
export type TServiceSchema = z.infer<typeof serviceSchema>
export type TNewsLetterSchema = z.infer<typeof NewsLetterSchema>