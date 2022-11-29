import { useParams } from "react-router-dom"
import Article from "../components/Article"

export default function ArticlePage({getArticle}) {

    let { articleID } = useParams()

    return (
        <div>
            <Article {...getArticle(articleID)}/>
        </div>
    )
}

