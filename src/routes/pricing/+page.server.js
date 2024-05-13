import { SECRET_STRIPE_KEY } from '$env/static/private'
import { Stripe } from 'stripe'

const stripe = new Stripe(SECRET_STRIPE_KEY)

export async function load() {
  const { data } = await stripe.products.list({ active: true, expand: ['data.default_price'] })

  return {
    products: data
  }
}
