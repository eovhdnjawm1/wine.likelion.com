export interface Wine{

    winery: string,
    wine:string,
    rating: {
        average: string,
        reviews: string
    },
    location: string,
    image: string,
    id: number
}

// 위에 대체해도 된다. 결합해서 쓸수도있다
interface WindeRating{
    average: string,
    reviews: string
}