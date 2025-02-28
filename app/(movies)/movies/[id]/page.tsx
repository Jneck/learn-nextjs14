import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export interface IParams {
    params: 
        Promise<{id: string}>
    
}

export async function generateMetadata({
    params,
    }: IParams){
        const id = (await params).id
        const movie = await getMovie(id)
    return {
        title: movie.title,
    }
}

export default async function MovieDetail({
params,
}: IParams) {
    const id = (await params).id
    return <div>
        <Suspense fallback={<h1>Loading Movie info </h1>}>
        <MovieInfo id={id}/>    
        </Suspense>
        <Suspense fallback={<h1>Loading Movie videos </h1>}>
        <MovieVideos id={id}/>
        </Suspense>
    </div>
}

