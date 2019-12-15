import React, { FC, useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import SVG from './Icon'
import linkSvg from '../svg/link.svg'
import shipSvg from '../svg/ship.svg'
import planeSvg from '../svg/plane.svg'
import buildingSvg from '../svg/building.svg'
import device from '../breakpoints'
import useAxios from 'axios-hooks'
import { Property, Person } from '../apiTypes'
import { StateContext } from '../App'
import { FormattedNumber, FormattedDate, FormattedRelativeTime } from 'react-intl'

const SidebarContainer = styled.div<SidebarContainerProps>`
    width: 100vw;
    height: 70vh;
    top: 30vh;
    background-color: #FFF;
    position: fixed;
    left: 0;
    z-index: 10;
    overflow-y: scroll;

    transform: translateX(${props => props.show ? 0 : -100}%);
    transition: transform 200ms ease;

    @media ${device.laptop} {
        width: 420px;
        height: 100vh;
        top: 0;
        transform: translateX(${props => props.show ? 0 : -100}%);
        transform: translateY(${props => props.show ? 0 : 100}%);
    }
`

const SidebarTitle = styled.div`
    font-family: Roboto;
    font-size: 13px;
    color: #646464;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: medium;
`

const Block = styled.div`
    padding: 0 24px;
    margin-bottom: 24px;
`

const ClickableBlock = styled(Block)`
    cursor: pointer;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

const SearchBar = styled.div`
    margin: 24px;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.20);
    height: 48px;
`

const PropertyImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 24px;
`

const PropertyName = styled.div`
    font-family: PTSerif;
    font-weight: bold;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
`

const PropertyFeature = styled.div`
    color: #646464;
    font-size: 16px;
`

const PropertyDescription = styled.div`
    font-size: 15px;
    line-height: 22px;
    color: #646464;
`

const PriceTag = styled.div`
    padding: 9px 15px;
    border-radius: 5px;
    background-color: #E32525;
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
`

const Link = styled.a`
    padding: 20px 0;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    text-decoration: none;
`

const LogoFBK = styled.div`
    width: 16px;
    height: 16px;
    background-color: #CC0001;
    border-radius: 8px;
`

const GreyIcon = styled(SVG)`
    fill: #B7B7B7;
`

const LinkTitle = styled.div`
    font-size: 15px;
    color: #000000;
    margin-left: 12px;
    margin-right: auto;
`

interface ImageProps {
    src: string;
}

const PersonImage = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-size: cover;
    margin-right: 20px;
`

const PersonSurname = styled.div`
    font-family: PTSerif;
    font-weight: bold;
    font-size: 20px;
    color: #000000;
`

const PersonName = styled.div`
    font-family: PTSerif;
    font-size: 18px;
    color: #000000;
`

const PersonBlock = styled(Flex)`
    align-items: center;
    justify-content: flex-start;
`

const PersonDescription = styled.div`
    padding: 16px 24px;
    background-color: #F7F7F7;
    font-size: 15px;
    color: #000000;
    line-height: 22px;
    margin-bottom: 20px;
`

const InfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
`

const InfoLabel = styled.div`
    font-size: 15px;
    color: #646464;
    letter-spacing: 0;
    max-width: 65%;
`

const Line = styled.div`
    height: 1px;
    background-color: #E5E5E5;
`

const InfoData = styled.div`
`

const PropertyType = styled.div`
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.07);
    border-radius: 18px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    margin-right: 10px;
    margin-bottom: 10px;
`

const PropertyTypeName = styled.div`
    font-size: 14px;
    color: #4A4A4A;
    margin-left: 10px;
    margin-right: 14px;
`

const PropertyDash = styled.div`
    width: 1px;
    height: 20px;
    background-color: #E5E5E5;
`

const PropertyCount = styled.div`
    margin-left: 14px;
    color: #4A4A4A;
`

const PropertyTypes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: -10px;
`

const OtherPropertyImage = styled.img`
    border-radius: 5px;
    width: 100%;
    height: auto;
    margin-bottom: 16px;
`

const OtherPropertyPrice = styled.div`
    font-size: 15px;
    color: #646464;
`

interface ApiPropertiesResponse {
    count: number
    items: Property[]
}

interface PropertyInfoProps {
    property: Property
}

const PropertyInfo: FC<PropertyInfoProps> = ({ property }) => {
    return (
        <>
            <Block>
                <SidebarTitle>
                    Объект
                </SidebarTitle>
            </Block>
            <PropertyImage src={property.photoUrl} />
            <Block>
                <Flex>
                    <PropertyName>{property.name}</PropertyName>
                    <PropertyFeature>2112м<sup>2</sup></PropertyFeature>
                </Flex>
                <PropertyDescription>{property.text}</PropertyDescription>
            </Block>
            {!!property.price && <Block>
                <Flex>
                    <PriceTag><FormattedNumber value={property.price} /> руб.</PriceTag>
                </Flex>
            </Block>}
            <Block>
                <Link target='_blank' href={property.proofUrl}>
                    <LogoFBK />
                    <LinkTitle>Ссылка на расследование ФБК</LinkTitle>
                    <GreyIcon src={linkSvg} />
                </Link>
            </Block>
        </>
    )
}

interface PersonInfoProps {
    person: Person
}

const PersonInfo: FC<PersonInfoProps> = ({ person }) => {
    return (
        <>
            <Block>
                <SidebarTitle>
                    Владелец
                </SidebarTitle>
            </Block>
            <Block>
                <PersonBlock>
                    <PersonImage style={{ backgroundImage: `url(${person.photoUrl})` }} />
                    <div>
                        <PersonSurname>{person.surname}</PersonSurname>
                        <PersonName>{person.name}</PersonName>
                    </div>
                </PersonBlock>
            </Block>
            <PersonDescription>
                {person.description}
            </PersonDescription>
            <Block>
                <InfoBlock>
                    <InfoLabel>Партия</InfoLabel>
                    <InfoData>{person.party}</InfoData>
                </InfoBlock>
                <InfoBlock>
                    <InfoLabel>Стаж на посту</InfoLabel>
                    <InfoData><FormattedDate value={person.workFrom} /></InfoData>
                </InfoBlock>
                {!!person.salary && <InfoBlock>
                    <InfoLabel>Официальный оклад</InfoLabel>
                    <InfoData><FormattedNumber value={person.salary} /> руб.</InfoData>
                </InfoBlock>}
                <InfoBlock>
                    <InfoLabel>Время для накопления стоимости объекта</InfoLabel>
                    <InfoData>90 лет</InfoData>
                </InfoBlock>
            </Block>
        </>
    )
}

const OtherProperty: FC<PropertyInfoProps> = ({ property }) => {
    const { dispatch } = useContext(StateContext)
    return (
        <ClickableBlock onClick={() => dispatch({ type: 'SELECT_PROPERTY', propertyId: property._id, ownerId: property.personId })}>
            <OtherPropertyImage src={property.photoUrl} />
            <Flex>
                <PropertyName>{property.name}</PropertyName>
                <PropertyFeature>1920м<sup>2</sup></PropertyFeature>
            </Flex>
            <OtherPropertyPrice><FormattedNumber value={property.price} /> руб</OtherPropertyPrice>
        </ClickableBlock>
    )
}

interface OtherPropertiesProps {
    properties: Property[]
    propertyId?: string
}

const OtherProperties: FC<OtherPropertiesProps> = ({ properties, propertyId }) => {
    let total = 0
    const [houses, ships, planes] = properties.reduce(([s, h, p], { type, price }) => {
        total += price
        switch (type) {
            case 'yacht': s += 1
                break
            case 'building': h += 1
                break
            case 'plane': p += 1
                break
        }
        return [s, h, p]
    }, [0, 0, 0])

    return (
        <>
            <Block>
                <SidebarTitle>Другое имущество чиновника</SidebarTitle>
            </Block>
            <Block>
                <InfoBlock>
                    <InfoLabel>Общая стоимость</InfoLabel>
                    <InfoData><FormattedNumber value={total} /> руб</InfoData>
                </InfoBlock>
            </Block>
            <Block>
                <PropertyTypes>
                    {ships > 0 && <PropertyType>
                        <GreyIcon src={shipSvg} />
                        <PropertyTypeName>Яхты</PropertyTypeName>
                        <PropertyDash />
                        <PropertyCount>{ships}</PropertyCount>
                    </PropertyType>}
                    {planes > 0 && <PropertyType>
                        <GreyIcon src={planeSvg} />
                        <PropertyTypeName>Самолёты</PropertyTypeName>
                        <PropertyDash />
                        <PropertyCount>{planes}</PropertyCount>
                    </PropertyType>}
                    {houses > 0 && <PropertyType>
                        <GreyIcon src={buildingSvg} />
                        <PropertyTypeName>Недвижимость</PropertyTypeName>
                        <PropertyDash />
                        <PropertyCount>{houses}</PropertyCount>
                    </PropertyType>}
                </PropertyTypes>
            </Block>
            {properties.filter(p => p._id !== propertyId).map(otherProperty =>
                <OtherProperty key={otherProperty._id} property={otherProperty} />
            )}
        </>
    )
}

const Title = styled.div`
    font-family: PTSerif;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
`

const Description = styled.div`
    font-family: Roboto;
    font-size: 15px;
    color: #646464;
    line-height: 22px;
`

const SidebarPage = styled.div`
    width: 100%;
    height: 100%;
`

interface SidebarProps {
    show: boolean
    propertyId?: string
    ownerId?: string
}

interface SidebarContainerProps {
    show: boolean
}

interface PersonListProps {
    persons: Person[]
}

const PersonList: FC<PersonListProps> = ({ persons }) => {
    return (
        <>

        </>
    )
}

const Sidebar: FC<SidebarProps> = ({ show, propertyId, ownerId }) => {
    const sidebarContainerRef = useRef<HTMLDivElement>(null)
    // const [{ data, loading, error }] = useAxios<Property>(
    //     `https://branched-glue.glitch.me/object/objects/${propertyId}`
    // )

    const [{ data: person }] = useAxios(
        `https://branched-glue.glitch.me/object/persons/${ownerId}`
    )

    const [{ data: propertiesData }] = useAxios<ApiPropertiesResponse>(
        `https://branched-glue.glitch.me/object/objects?personId=${ownerId}`
    )

    useEffect(() => {
        if (sidebarContainerRef.current) {
            sidebarContainerRef.current.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }, [propertyId])

    console.log(propertiesData)

    const property = propertiesData && propertiesData.count > 0 && propertiesData.items.find(p => p._id === propertyId)

    return (
        <SidebarContainer ref={sidebarContainerRef} show={show}>
            {!!ownerId ?
                <SidebarPage>
                    {/* <SearchBar /> */}
                    <Block></Block>
                    {property && <PropertyInfo property={property} />}
                    {person && <PersonInfo person={person} />}
                    <Block>
                        <Line />
                    </Block>
                    {propertiesData && propertiesData.items && <OtherProperties properties={propertiesData.items} propertyId={propertyId} />}
                </SidebarPage>
                :
                <SidebarPage>
                    <Block></Block>
                    <Block>
                        <Title>Карта коррупционных расследований</Title>
                        <Description>
                        </Description>
                    </Block>
                    <Block>
                        <Line />
                    </Block>
                </SidebarPage>
            }
        </SidebarContainer>
    )
}

export default Sidebar
