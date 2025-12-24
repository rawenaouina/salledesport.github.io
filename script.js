const stripe = Stripe("pk_test_TA_CLE_PUBLIQUE_STRIPE");

const prices = {
    mensuel: "price_MENSUEL_ID",
    trimestriel: "price_TRIMESTRIEL_ID",
    annuel: "price_ANNUEL_ID"
};

function payer(type) {
    stripe.redirectToCheckout({
        lineItems: [{
            price: prices[type],
            quantity: 1,
        }],
        mode: "payment",
        successUrl: window.location.origin + "/success.html",
        cancelUrl: window.location.origin + "/cancel.html",
    });
}
