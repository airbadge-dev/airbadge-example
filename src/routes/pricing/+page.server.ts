import { SECRET_STRIPE_KEY } from '$env/static/private'
import { Stripe } from 'stripe'
import type { PageServerLoad } from './$types';

const stripe = new Stripe(SECRET_STRIPE_KEY)

export const load : PageServerLoad = async () => {
  const { data } = await stripe.products.list({
    active: true,
    expand: ['data.default_price']
  })

  return {
    products: data
  }
}
