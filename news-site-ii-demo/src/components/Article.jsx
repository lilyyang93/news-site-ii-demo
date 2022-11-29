export default function Article({id, title, created_date, author, url}) {
    return (
        <div className="Article">
            <h1>{id}. {title}</h1>
            <p>published: {created_date}</p>
            <p>author: {author}</p>
            <a href={url}>go to article</a>
        </div>
    )
}