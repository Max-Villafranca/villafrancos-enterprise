import Link from 'next/link'
import SvgPlaceholder from '../../components/SvgPlaceholder'

export const metadata = {
    title: 'Our Services - Billy the Painter',
    description:
        'Detailed list of professional painting and EPA certified lead abatement services offered by Billy the Painter.',
}

const services = [
    {
        id: 1,
        title: 'Interior Painting',
        description:
            'Transform your indoor spaces with fresh, vibrant colors. We handle everything from single rooms to entire homes and commercial interiors, ensuring sharp lines, even coats, and minimal disruption. Our meticulous preparation guarantees a long-lasting, beautiful finish.',
        iconText: 'Home Interior',
        details: [
            'Walls, ceilings, and trim',
            'Cabinet painting and refinishing',
            'Drywall repair and preparation',
            'Color consultation available',
            'Use of low-VOC and eco-friendly paints',
        ],
    },
    {
        id: 2,
        title: 'Exterior Painting',
        description:
            'Boost your curb appeal and protect your property from the elements. Our exterior painting services cover siding, trim, doors, decks, and fences. We use durable, weather-resistant paints designed to withstand local conditions, ensuring a stunning look that lasts.',
        iconText: 'House Exterior',
        details: [
            'Full exterior surface preparation (cleaning, scraping, priming)',
            'Painting of all exterior materials (wood, stucco, vinyl, brick)',
            'Deck and fence staining/sealing',
            'Pressure washing services',
            'Caulking and sealing for weather protection',
        ],
    },
    {
        id: 3,
        title: 'EPA Certified Lead Abatement',
        description:
            'Safety is our priority. As EPA Lead-Safe Certified professionals (Villafranco’s Enterprise LLC), we offer safe and effective lead paint abatement and stabilization services. Essential for older properties, protecting families and occupants from lead hazards.',
        iconText: 'EPA Safe',
        details: [
            'Lead paint testing and inspection coordination',
            'Containment and safe removal of lead-based paint',
            'Lead paint encapsulation and enclosure',
            'Proper disposal of hazardous materials',
            'Post-abatement cleaning and clearance testing guidance',
        ],
    },
    {
        id: 4,
        title: 'Residential Painting',
        description:
            "Your home is your sanctuary. We provide personalized painting services for homeowners, whether it's a new build, a renovation, or a simple refresh. We treat your home with respect, ensuring a clean work environment and stunning results.",
        iconText: 'Residential',
        details: [
            'Apartments, condos, and single-family homes',
            'Custom color matching',
            'Wallpaper removal',
            'Detailed and protective prep work',
            'Flexible scheduling to suit your needs',
        ],
    },
    {
        id: 5,
        title: 'Commercial Painting',
        description:
            'First impressions matter for your business. We offer reliable and efficient painting services for commercial properties, including offices, retail spaces, warehouses, and multi-unit buildings. We work around your schedule to minimize disruption to your operations.',
        iconText: 'Building',
        details: [
            'Offices, retail stores, restaurants',
            'Warehouses and industrial facilities',
            'Property management and HOAs',
            'Durable coatings for high-traffic areas',
            'Off-hours and weekend work available',
        ],
    },
]

export default function ServicesPage() {
    return (
        <div className='container section-padding'>
            <h1 className='section-title'>Our Professional Services</h1>
            <p className='centered-text' style={{ maxWidth: '750px', margin: '0 auto 40px auto', fontSize: '1.1em' }}>
                At Billy the Painter, we offer a comprehensive range of painting and lead abatement services tailored to
                meet the needs of homeowners, property managers, and contractors. Quality craftsmanship and customer
                satisfaction are at the heart of everything we do.
            </p>

            <div className='detailed-services-list'>
                {services.map(service => (
                    <div key={service.id} className='service-detail-item'>
                        <div className='service-detail-icon-container'>
                            <SvgPlaceholder
                                width={70}
                                height={70}
                                text={service.iconText}
                                bgColor='var(--soft-gray)'
                                textColor='var(--navy-blue)'
                                className='service-detail-icon'
                            />
                        </div>
                        <div className='service-detail-content'>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            {service.details && service.details.length > 0 && (
                                <ul className='service-features-list'>
                                    {service.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className='lead-safe-notice' style={{ marginTop: '50px' }}>
                <p>
                    <strong>EPA Lead-Safe Certified Firm:</strong> Villafranco’s Enterprise LLC (Billy the Painter) is
                    certified by the EPA to conduct lead-based paint renovation, repair, and painting activities. Your
                    safety is our top priority.
                </p>
                <p style={{ marginTop: '15px', textAlign: 'center' }}>
                    <Link href='/contact' className='button'>
                        Request a Quote for Your Project
                    </Link>
                </p>
            </div>
        </div>
    )
}
