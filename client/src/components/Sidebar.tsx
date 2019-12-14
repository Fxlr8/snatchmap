import React, { FC } from 'react'
import styled from 'styled-components'
import SVG from './Icon'
import linkSvg from '../svg/link.svg'
import shipSvg from '../svg/ship.svg'
import planeSvg from '../svg/plane.svg'
import buildingSvg from '../svg/building.svg'

const SidebarContainer = styled.div`
    width: 420px;
    height: 100vh;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    overflow-y: scroll;
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

const Sidebar: FC = () => {
    return (
        <SidebarContainer>
            <SearchBar />
            <Block>
                <SidebarTitle>
                    Объект
                </SidebarTitle>
            </Block>
            <PropertyImage src='https://avatars.mds.yandex.net/get-zen_doc/1641493/pub_5d5526c932335400ad075f91_5d55280ef2df2500ad7b61f1/scale_1200' />
            <Block>
                <Flex>
                    <PropertyName>Дом в Псехако</PropertyName>
                    <PropertyFeature>2112м<sup>2</sup></PropertyFeature>
                </Flex>
                <PropertyDescription>Усачёва ул., 1А, стр. 2</PropertyDescription>
            </Block>
            <Block>
                <Flex>
                    <PriceTag>240 000 000 руб.</PriceTag>
                </Flex>
            </Block>
            <Block>
                <Link href='google.com'>
                    <LogoFBK />
                    <LinkTitle>Ссылка на расследование ФБК</LinkTitle>
                    <GreyIcon src={linkSvg} />
                </Link>
            </Block>
            <Block>
                <SidebarTitle>
                    Владелец
                </SidebarTitle>
            </Block>
            <Block>
                <PersonBlock>
                    <PersonImage style={{ backgroundImage: 'url(http://duma.gov.ru/media/persons/240x240_2x/bBET61AcAEG5c8Nk7jlFAW1XRFQCAc8l.jpg)' }} />
                    <div>
                        <PersonSurname>Пупа</PersonSurname>
                        <PersonName>Виталий Сергеевич</PersonName>
                    </div>
                </PersonBlock>
            </Block>
            <PersonDescription>
                Заведующий по перепутыванию при бухгалтерии Государственной Думы Российской Федерации
            </PersonDescription>
            <Block>
                <InfoBlock>
                    <InfoLabel>Партия</InfoLabel>
                    <InfoData>Единая Россия</InfoData>
                </InfoBlock>
                <InfoBlock>
                    <InfoLabel>Стаж на посту</InfoLabel>
                    <InfoData>3,5 года</InfoData>
                </InfoBlock>
                <InfoBlock>
                    <InfoLabel>Официальный оклад</InfoLabel>
                    <InfoData>455 000 руб.</InfoData>
                </InfoBlock>
                <InfoBlock>
                    <InfoLabel>Время для накопления стоимости объекта</InfoLabel>
                    <InfoData>90 лет</InfoData>
                </InfoBlock>
            </Block>
            <Block>
                <Line />
            </Block>
            <Block>
                <SidebarTitle>
                    Другое имущество чиновника
                </SidebarTitle>
            </Block>
            <Block>
                <InfoBlock>
                    <InfoLabel>Общая стоимость</InfoLabel>
                    <InfoData>2 980 200 000 руб</InfoData>
                </InfoBlock>
            </Block>
            <Block>
                <PropertyTypes>
                    <PropertyType>
                        <GreyIcon src={shipSvg} />
                        <PropertyTypeName>Яхты</PropertyTypeName>
                        <PropertyDash />
                        <PropertyCount>1</PropertyCount>
                    </PropertyType>
                    <PropertyType>
                        <GreyIcon src={planeSvg} />
                        <PropertyTypeName>Самолёты</PropertyTypeName>
                        <PropertyDash />
                        <PropertyCount>2</PropertyCount>
                    </PropertyType>
                    <PropertyType>
                        <GreyIcon src={buildingSvg} />
                        <PropertyTypeName>Недвижимость</PropertyTypeName>
                        <PropertyDash />
                        <PropertyCount>7</PropertyCount>
                    </PropertyType>
                </PropertyTypes>
            </Block>
            <Block>
                <OtherPropertyImage src='https://i.imgur.com/A0sTAOh.jpg' />
                <Flex>
                    <PropertyName>Дом в Майнкрафте</PropertyName>
                    <PropertyFeature>1920м<sup>2</sup></PropertyFeature>
                </Flex>
                <OtherPropertyPrice>120 руб</OtherPropertyPrice>
            </Block>
            <Block>
                <OtherPropertyImage src='https://i.imgur.com/Wf8wsxR.png' />
                <Flex>
                    <PropertyName>Ещё один дом в Майнкрафте</PropertyName>
                    <PropertyFeature>1298м<sup>2</sup></PropertyFeature>
                </Flex>
                <OtherPropertyPrice>57 руб</OtherPropertyPrice>
            </Block>
        </SidebarContainer>
    )
}

export default Sidebar