package controller

import com.twitter.finagle.http.Request
import com.twitter.finatra.http.Controller

import persistence.ArticleRepository

class ArticleController extends Controller {

  private val articleRepo: ArticleRepository = new ArticleRepository()

  get("/article/") { request: Request =>
    articleRepo.getArticles
  }

}
