import React from 'react'

const LocationOnMap = () => {
    return (
        <section className="py-16">
            <div>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-oswald pl-4 w-fit mx-auto">
                    Visit Our Campus
                </h2>
                <p className="text-center text-gray-600 text-lg mb-10 px-4 mx-auto">
                    Impact Academy of Human Excellence - Defence Academy is located in the heart of Hyderabad. Drop by to explore our vibrant and disciplined learning environment.
                </p>
                <div className="overflow-hidden shadow-xl border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4573850082223!2d78.4980502!3d17.462018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1baaaaaaab%3A0xea58e6398c042768!2sImpact%20Academy%20of%20Human%20Excellence%20-%20Defence%20Academy!5e0!3m2!1sen!2sin!4v1720887332031!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-[450px] border-0"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default LocationOnMap