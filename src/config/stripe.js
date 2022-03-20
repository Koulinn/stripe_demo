import Stripe from "stripe";

const { APP_MODE, TEST_STRIPE_KEY, SECRET_KEY, PROD_URL_1 } = process.env;

const CUSTOMER_KEY = APP_MODE === "development" ? TEST_STRIPE_KEY : SECRET_KEY;

const stripe = Stripe(CUSTOMER_KEY);

const customer = await stripe.customers.create({
  description: "Test Customer",
});

export const paymentIntent = await stripe.paymentIntents.create({
  customer: customer.id,
  currency: "usd",
  amount: 2000,
  payment_method_types: ["card"],
  setup_future_usage: "on_session",
});

export const session = await stripe.checkout.sessions.create({
  line_items: [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "T-shirt",
        },
        unit_amount: 2000,
      },
      quantity: 1,
    },
  ],
  mode: "payment",
  success_url: `http://localhost:3000/success`,
  cancel_url: `http://localhost:3000/cancel`,
});
