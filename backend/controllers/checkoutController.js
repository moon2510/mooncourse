const { session } = require("passport");
const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51MvEbFIiRClu0ttqsQ6HnA6qA8qpTLKYTzpsk10guFO6HpWmSnfDUIxcIGZuFvea7nYjjuVCUPz6LeZhfcHnufgg00yNrggqNb"
);

const CheckoutController = {
  createTracsaction: async function (req, res, next) {
    const { price, name, description } = req.body;
    try {
      const sessions = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: name,
              },
              unit_amount: price,
            },
            quantity: 1,
          },
        ],
        success_url: `http://localhost:3000/?courseId=${_id}`,
        cancel_url: `http://localhost:3000/errorPayment`,
      });
      console.log(sessions);
      res.status(200).json({
        url: sessions.url,
      });
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  },
};

module.exports = CheckoutController;
