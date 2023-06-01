import React from "react";
import styled from "styled-components";
import Maintitle from "../components/main.title.component";
import { useCloContext } from "../context";


const ServicesAndPricing = () => {

    const { servicesData } = useCloContext()

    return(
        <>
        <Maintitle title={<h2>Services and Pricing</h2>}/>
        <ServicesAndPricingWrapper id='services-and-pricing-page'>
            <div className="services-and-pricing-page--content">    
            <div>
            {servicesData.map(service => (
                <div key={service.id}>
                <h2 className="span">{service.title}</h2>
                {service.description && <p>{service.description}</p>}
                {service.price && <div className="price">Price: ${service.price}</div>}
                {service.services && (
                    <ul>
                    {service.services.map(subService => (
                        <li key={subService.id}>
                        <h3 className='sub-service'>{subService.title}</h3>
                        <p>{subService.description}</p>
                        <div className="price">Price: ${subService.price}</div>
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            ))}
            </div>
            </div>
        </ServicesAndPricingWrapper>
        </>
    )
}

const ServicesAndPricingWrapper = styled.section`

    h2{
        margin-bottom: 3rem;
    }

    .span{
        width: fit-content;
        background-color: var(--color-sixth);
        padding: 1rem;
        border-radius: 0.75rem;
    }

    p{
        
        color: var(--font-color-brown-dark);
    }

    .sub-service{
        text-transform: capitalize;
        text-decoration: underline;
        font-size: 1.5rem;
        text-shadow:var(--color-fifth);
    }

    .price {
        display: grid;
        background-color: var(--color-tertiary-dark);
        width: 100px; /* Adjust the width as needed */
        height: 100px; /* Ensure the height matches the width */
        border-radius: 50%;
        place-content: center;
        font-size: 1.2rem;
        font-weight: 700;
    }
`

export default ServicesAndPricing;