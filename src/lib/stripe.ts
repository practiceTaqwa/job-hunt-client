import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export const PLAN_PRICE_ID={
    'seeker_pro':'price_1ThKSz0TNix7Pssy4AxwigvX',
    'seker_preminum':'',
    'recruter_growth':'',
    'recruter_enterprise':''
}