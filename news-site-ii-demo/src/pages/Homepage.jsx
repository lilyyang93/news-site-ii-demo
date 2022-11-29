import ArticleList from "../components/ArticleList"

export default function Homepage({articles}) {
    return (
        <div>
            <ArticleList articles={articles}/>
        </div>
    )
}