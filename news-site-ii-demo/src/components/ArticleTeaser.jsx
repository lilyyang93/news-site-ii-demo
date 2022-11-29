import { Link, useNavigate } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function ArticleTeaser({article}) {

    const navigate = useNavigate()

    return (
        <div className="articleTeaser">
            {/* <div onClick={()=>{ navigate(`/article/${article.id}`)}} className="Article-Teaser"> */}
                {/* <Link to={`/article/${article.id}`}></Link> */}
                {/* <h2>{article.id}. {article.title}</h2> */}
                {/* <p>{article.created_date}</p> */}
            {/* </div> */}
            {/* <a href={`/#/article/${article.id}`}>go to article</a> */}

            <Card style={{ width: '36rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{article.id}. {article.title}</Card.Title>
                    <Card.Text>{article.created_date}</Card.Text>
                    <Button variant="primary" onClick={()=>{ navigate(`/article/${article.id}`)}}>View article page</Button>
                </Card.Body>
            </Card>
        </div>
    )  
}
