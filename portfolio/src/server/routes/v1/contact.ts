import { defineEventHandler, readBody } from "h3";
import { ofetch } from "ofetch";

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);
  const brevo_API_KEY = import.meta.env.BREVO_API_KEY;
  try {
    const data = await ofetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Api-Key": brevo_API_KEY,
      },
      body: JSON.stringify({
        email: body,
        listIds: [5],
      })
    });
    return data;
  } catch (error: any) {
    console.log(body, error.data);
    return "";
  }
});
