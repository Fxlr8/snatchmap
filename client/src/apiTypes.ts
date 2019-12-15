export interface Property {
    _id: string
    link: string
    name: string
    price: number
    personInfo: {
        name: string
    }
    locationUrl: string
    location: any
    text: string
    proofUrl: string
    personId: string
    photoUrl: string
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
    photoUrl: string
}