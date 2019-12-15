export interface Property {
    _id: string
    link: string
    name: string
    price: string
    personInfo: {
        name: string
    }
    locationUrl: string
    location: any
    text: string
    fbkUrl: string
    personId: string
    type: 'building' | 'yacht' | 'plane'
}

export interface Person {
    _id: string
    name: string
    description: string
    party: string
    salary: number
    workFrom: string
    surname: string
    views: number
}