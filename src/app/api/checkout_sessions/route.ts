import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { PLAN_PRICE_ID, stripe } from "@/lib/stripe";
import { getUserSession } from "@/lib/core/session";

export async function POST(req: Request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const fromdata = await req.formData();
    const planId = fromdata.get("plan_id");
    const priceId = PLAN_PRICE_ID[planId];
    const sessionUser=await getUserSession()

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        customer_email:sessionUser?.user.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          //   price: "price_1ThKSz0TNix7Pssy4AxwigvX",
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
