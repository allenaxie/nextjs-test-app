import { useRouter } from 'next/router';


// path:domain/news/newsId

export default function DetailsPage () {

    const router = useRouter();

    const newsId = router.query.newsId;

    // send request to backend API to fetch news item with newsId

    return (
        <>
        Details Page
        </>
    )
}