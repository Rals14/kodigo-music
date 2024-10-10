import '../assets/css/Footer.css'

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <section className="footer-container">
                    <section className="payment-methods-section">
                        <i className="bi bi-credit-card-2-back"></i>
                        <i className="bi bi-stripe"></i>
                        <i className="bi bi-wallet2"></i>
                        <i className="bi bi-paypal"></i>
                        <i className="bi bi-paypal"></i>
                    </section>

                    <section className="copyrigths-section">
                        <p>Copyright © 2024 Kodigo Music El Salvador. All rights reserved.</p>
                    </section>
                </section>
            </footer>
        </>
    )
}
