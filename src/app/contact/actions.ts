"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type FormState = {
  message: string;
  success: boolean;
} | null;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors in the form.",
      success: false,
    };
  }

  try {
    // In a real application, you would send an email, save to a database, etc.
    // For this example, we'll just log the data and simulate a success response.
    console.log("Contact form submitted:", validatedFields.data);

    return {
      message: "Thank you for your message! We will get back to you shortly.",
      success: true,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}
