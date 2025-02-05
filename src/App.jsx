import{ Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpeicalOffers,
  CustomerReview,
  Subscriber,
  Footer } from './sections/index'
  import Nav from './components/Nav'

export default function App() {
  return (
   <main className="ralative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding"><PopularProducts /></section>
    <section className="padding"><SuperQuality /></section>
    <section className="padding-x py-10"><Services /></section>
    <section className="padding"><SpeicalOffers /></section>
    <section className="padding bg-pale-blue "><CustomerReview /> </section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscriber /></section>
    <section className="bg-black padding-x padding-y pb-8 text-white-400"><Footer /></section>

   </main>
  )
}