package controller

import com.twitter.finatra.http.Controller
import com.twitter.finagle.http.Request
import transport.IdRequest
import persistence.{ArticleRepository, InMemoryArticleRepository}
import model.Article
import org.json4s.jackson.JsonMethods.parse
import org.json4s.DefaultFormats

class ArticleController extends Controller {

  private val articleRepo: ArticleRepository = new InMemoryArticleRepository()

  implicit val formats: DefaultFormats = DefaultFormats

  get("/article/") { request: Request =>
    articleRepo.getArticles
  }

  get("/article/:id") { request: IdRequest => {
      val id: Int = request.id
      articleRepo.getArticle(id)
    }
  }

  post("/article/") { request: Request => {
      val jsonContent = parse(request.contentString)
      val newArticle: Article = articleRepo.createArticle(
        (jsonContent \ "title").extract[String],
        (jsonContent \ "url").extract[String])
      newArticle
    }
  }

  put("/article/") { request: Request =>
    val jsonContent = parse(request.contentString)
    val updatedArticle: Article = articleRepo.updateArticle(new Article(
      (jsonContent \ "title").extract[String],
      (jsonContent \ "url").extract[String],
      (jsonContent \ "tags").extract[List[String]],
      (jsonContent \ "up_votes").extract[Int],
      (jsonContent \ "down_votes").extract[Int],
      (jsonContent \ "id").extract[String]))
    updatedArticle
  }

  delete("/article/:id") { request: IdRequest =>
    val id: Int = request.id
    articleRepo.deleteArticle(id)
  }

}
