import React from "react";
import styled from "styled-components";
import Maintitle from "../components/main.title.component";
import { useCloContext } from "../context";


const ServicesAndPricing = () => {

    const { servicesData } = useCloContext()

    return(
        <>
        <Maintitle title={<h2>Our Services</h2>}/>
        <ServicesAndPricingWrapper id='services-and-pricing-page'>
            <div className="services-and-pricing-page--content">    
            <div>
            {servicesData.map(service => (
                <div key={service.id}>
                <h2 className="span">{service.title}</h2>
                <div className='sub-service--price--and--desc'>
                    {service.price && <div className="price"> ${service.price}</div>}
                    {service.title === 'First visit' ? 
                    <>
                    <div className="sub-service--price--and--desc--first-visit">
                        {service.description && <p>{service.description}</p>}
                        {service.title === 'First visit' && <p><strong> Note: </strong> {service.note}</p>}
                    </div>
                    </> :
                    <>
                    {service.description && <p>{service.description}</p>}
                    </>
                    }
             
                </div>    
                {service.services && (
                    <ul>
                    {service.services.map(subService => (
                        <li key={subService.id}>
                        <h3 className='sub-service'>{subService.title}</h3>
                        <div className='sub-service--price--and--desc'>
                            <div className="price">${subService.price}</div>
                            <p>{subService.description}</p>
                        </div>
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
        font-size:4rem;
    }

    .sub-service--price--and--desc .sub-service--price--and--desc--first-visit p{
        margin-bottom: 2rem;
    }

    h3{
        margin: 1rem;
        padding: 1rem;
        border-radius: 0.75rem;
        width: fit-content;
        background-color: var(--color-fifth);
    }

    .span{
        width: fit-content;
        background-color: var(--color-sixth);
        color: var(--clr-white);
        padding: 1rem;
        border-radius: 0.75rem;
    }

    p{
        
        color: var(--font-color-brown-dark);
    }

    .sub-service{
        text-transform: capitalize;
        font-size: 3.5rem;
        text-shadow:var(--color-fifth);
    }

    .price {
        display: grid;
        background-color: var(--color-tertiary-dark);
        width: 15vw;
        height: 15vw;
        max-width: 10rem;
        max-height: 10rem;
        border-radius: 50%;
        place-content: center;
        font-size: 3rem;
        font-weight: 700;
    }

    .sub-service--price--and--desc{
        display: flex;
        align-items: center;
    }

    .sub-service--price--and--desc p{
        width: fit-content;
    }

    .note{
        background-color: var(--color-white);
    }

    @media screen and (max-width:600px){
        h2{
            margin-bottom: 3rem;
            font-size:1.5rem;
        }   

        .sub-service{
            text-transform: capitalize;
            font-size: 1.2rem;
            text-shadow:var(--color-fifth);
        }

        .price {
            width: 20vw;
            height: 20vw;
        }
    }
`

export default ServicesAndPricing;