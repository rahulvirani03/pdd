import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Corona1 from '../assets/image/corona1.jpeg'
import Corona2 from '../assets/image/corona2.jpeg'
import Corona3 from '../assets/image/corona3.jpeg'
import Corona4 from '../assets/image/corona4.jpeg'

import '../styles/GuideCard.css'

function DataCard(props) {
    
    const docs=[
        {
            image:Corona1,
            title:'Guidelines on Preventive Measures to Contain Spread of COVID-19 in Yoga Institutes & Gymnasiums',
            link:'https://www.mohfw.gov.in/pdf/GuidelinesonPreventiveMeasurestoContainSpreadofCOVID19inYogaInstitutes&Gymnasiums.pdf'
        },
        {
            image:Corona2,
            title:'SOP on preventive measures in Hotels and other Hospitality Units to contain spread of COVID-19 01-03-2021',
            link:'https://www.mohfw.gov.in/pdf/SOPonpreventivemeasuresinHotelsandotherHospitalityUnitstocontainspreadofCOVID19.pdf'
        },
        {
            image:Corona3,
            title:'SOP on preventive measures in Restaurants to contain spread of COVID-19 01-03-2021',
            link:'https://www.mohfw.gov.in/pdf/SOPonpreventivemeasuresinRestaurantstocontainspreadofCOVID19.pdf'
        },
        {
            image:Corona4,
            title:'SOP on preventive measures in shopping malls to contain spread of COVID-19 01-03-2021 ',
            link:'https://www.mohfw.gov.in/pdf/SOPonpreventivemeasuresinshoppingmallstocontainspreadofCOVID19.pdf'
        },
        {
            image:Corona2,
            title:'SOP on preventive measures to be followed in Entertainment Parks 01-03-2021 ',
            link:'https://www.mohfw.gov.in/pdf/SOPonpreventivemeasurestobefollowedinEntertainmentParks.pdf'
        },
        {
            image:Corona1,
            title:'SOP on preventive measures to contain spread of COVID-19 in temples 01-03-2021 ',
            link:'https://www.mohfw.gov.in/pdf/SOPonpreventivemeasurestocontainspreadofCOVID19inreligiousplacesandplacesofworship.pdf'
        },
        {
            image:Corona3,
            title:'SOP on preventive measures to contain spread of COVID-19 in skill institutions 01-03-2021.',
            link:'https://www.mohfw.gov.in/pdf/SOPonpreventivemeasurestocontainspreadofCOVID19inskillorentrepreneurshiptraininginstitutionshighereducationalinstitutions.pdf'
        },
        {
            image:Corona2,
            title:'User Manual - Citizen Registration & Appointment for Vaccination Ver 1.1 28-02-2021.',
            link:'https://www.mohfw.gov.in/pdf/UserManualCitizenRegistration&AppointmentforVaccination.pdf'
        },
        {
            image:Corona4,
            title:'Guidance Note for Co-WIN 2.0 with improved immunity efficiency. 28-02-2021',
            link:'https://www.mohfw.gov.in/pdf/GuidancedocCOWIN2.pdf'
        },
        {
            image:Corona2,
            title:'SOP on preventive measures to contain spread of COVID-19 in offices 13-02-2021.',
            link:'https://www.mohfw.gov.in/pdf/SOPonpreventivemeasurestocontainspreadofCOVID19inoffices.pdf'
        },
        {
            image:Corona3,
            title:'MHA Order with Guidelines on Surveilance- containment and caution dt 27.01.2021 27-01-2021',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_161180745751307401.pdf'
        },
        {image:Corona2,

            title:'Update on New Strain of novel Coronavirus and its new set of symptons from UK 04-01-2021.',
            link:'https://cdnbbsr.s3waas.gov.in/s3850af92f8d9903e7a4e0559a98ecc857/uploads/2021/01/2021010423.pdf'
        },
        {
            image:Corona3,
            title:'MHA Order dt 28.12.2020 regarding extension of Guidelines for Caution upto 31.01.2021 28-12-2020',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_160939502151307401.pdf'
        },
        {
            image:Corona1,
            title:'SOP on preventive measures in markets to contain spread of COVID-19 30-11-2020',
            link:'https://www.mohfw.gov.in/pdf/30NovSOPonpreventivemeasuresinmarketstocontainspreadofCOVID19.pdf'
        },
        {
            image:Corona4,
            title:'Home Department Guidelines on Surveillance, containment and caution (covid-19)dt 26.11.2020 26-11-2020',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_160646471351307401.pdf'
        },
        {
            image:Corona2,
            title:'MHA Order with Guidelines on Surveilance- containment and caution dt 25.11.2020 25-11-2020',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_160630497651307401.pdf'
        },
        {
            image:Corona3,
            title:'Maharashtra: Notification dated 23.11.2020 regarding easing of restrictions 23-11-2020"',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_160628601555063671.pdf'
        },
        {
            image:Corona1,
            title:'Finance Minister announces measures on AatmaNirbhar Bharat 3.0 - Ministry of Finance 12-11-2020',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_160525398651307401.pdf'
        },
        {
            image:Corona2,
            title:'UGC guidelines for Re-opening the Universities and Colleges Post Lockdown 05-11-2020',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_160464930551307401.pdf'
        },
        {
            image:Corona4,
            title:' Salient Features of UGC Guidelines for Re-opening the Universities due to COVID-19 05-11-2020',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_160464936751307401.pdf'
        },
        {
            image:Corona1,
            title:'India maintains a steady trajectory of sustained fall in Active Cases in all states providing data in the pdf on 05-11-2020',
            link:'https://static.mygov.in/rest/s3fs-public/mygov_160464944151307401.pdf'
        }
    
    ]
        
    return (
        <div className='grid'>
            {docs && docs.map(doc => (
                    <Card style={{ width: '22rem' }} className='box'>
                        <Card.Img variant="top" src={doc.image}className='boximg'/>
                            <Card.Body>
                              {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                                {doc.title}
                            </Card.Text>
                            <hr/>
                            <center><Button className="btn1" variant="outlined"  href={doc.link} type="submit">More Information</Button></center>
                            
                        </Card.Body>
                    </Card>
                    ))}     
        </div>
    );
}

export default DataCard;