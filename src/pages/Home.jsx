import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Plans } from "../components/Plans"
import '../assets/css/Home.css'

export const Home = () => {
    return (
        <>
            <Navbar />

            <main className='main'>
                <section className="featured">
                    <h2>Featured</h2>
                    <p>Listen al the music you want, whenever you want, with Kodigo Music, all your favorite music is header
                        an a hole new world of music is waiting for you.
                    </p>

                </section>
                <section className="plans-section">
                    <h2>Plans</h2>
                    <div className="plans">
                    {Plans({nombrePlan: 'Free', description: 'Listen all the music you want in random mode with some ads that help us to keep the service free for you.', price: 'Free'})}
                    {Plans({nombrePlan: 'Premium', description: 'Listen all the music online and offline, without ads, and with the best quality.', price: '4.99 USD'})}
                    {Plans({nombrePlan: 'Family', description: 'Listen all the music online and offline, without ads, and with the best quality, share your account with your family, you can add up to 5 members to the plan', price: '9.99 USD'})}
                    </div>
                </section>

                <section className="about-us">
                    <h2>About us</h2>
                    <p>Kodigo Music is an application of music streaming that keeps a balance between quality and affordable price, </p>
                </section>


            </main>

            <Footer />
        </>
    )
}
