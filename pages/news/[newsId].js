import {useRouter} from 'next/router';

function DetailPage() {
    const route = useRouter();
    console.log(route.query.newsId);
    return <h1>The Detail Page</h1>
}

export default DetailPage;