import React from 'react'
import { PriceCard } from './Cards'
import {PricingPlans} from '@/constants';
import {Plan} from "@/constants/types";

const Pricing = () => {
  return (
    <div id="pricing" className="mt-12 py-12 md:h-max">
      <div className="text-center">
        <h1 className="text-3xl px-4 md:text-5xl poppins-bold">Choose Your Plan, Learn Your Way!</h1>
        <p className="text-md mt-4 px-6 md:text-xl">Flexible pricing tailored to fit your learning needs.</p>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PricingPlans.map((pricing:Plan)=>(<PriceCard key={pricing.name} name={pricing.name} price={pricing.price} features={pricing.features} description={''} planFor={pricing.planFor}/>))}
        </div>
      </div>

    </div>
  )
}

export default Pricing