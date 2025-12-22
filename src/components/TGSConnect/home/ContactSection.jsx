import React from 'react'

function ContactSection() {
    return (
        // <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-700 max-w-5xl mx-auto rounded-3xl mb-20 mx-4">
        <section className="py-20 bg-sky-900 max-w-5xl mx-auto rounded-3xl mb-20 mx-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-7xl font-bold text-white mb-6"
                    style={{
                        fontFamily: "Great vibes"
                    }}
                >
                    Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-sky-100 mb-8">
                    Join thousands of young people who are already transforming their futures
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-sky-600 px-8 py-2 rounded-lg hover:bg-sky-50 transition-colors font-medium text-lg shadow-xl">
                        Get Started Today
                    </button>
                    <button className="border-2 border-white text-white px-8 py-2 rounded-lg hover:bg-sky-600 transition-colors font-medium text-lg">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ContactSection