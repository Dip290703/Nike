import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpeicalOffers = () => {
  return (
   <section className="flex justify-wrap items-center max-xl:-1flex-col-reverse gap-10 max-container">
    <div className="flex">
      <img
       src={offer}
       width={670} 
       height={580}
       className="object-contain w-full"/>
    </div>
    <div className="flex flex-1 flex-col">
        
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible saving offer unparalleled value that sets us apart.</p>
          <p className="mt-6 lg:max-w-lg info-text ">Our dedication to Navigate a realm of possibilities designed to fulfill your unique desires. surpassing the loftiest expectations .Your journey with  us is nothing short of exceptional</p>
        
        <div className="mt-11 flex flex-wrap gap-4"><Button label="Shop now" iconURL={arrowRight} />
        <Button label="Learn more"
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray" />
        </div>
      </div>
   </section>
  )
}

export default SpeicalOffers