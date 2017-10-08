package persistence

import model.Article

class InMemoryArticleRepository extends ArticleRepository {

  private var articles: List[Article] = List(
    // Init repo with prepared data.
    new Article("1", "www.url1.com", id = "dvf2g636dvfsdfs6"),
    new Article("2", "www.url2.com", id = "adasdvf2g6362423"),
    new Article("3", "www.url3.com", id = "dwdwdwdddvf2g636"))

  override def getArticles: List[Article] = {
    articles
  }

  override def getArticle(id: Int): Article = {
    val found = articles.find(_.id == id)
    found orNull
  }

  override def createArticle(title: String, url: String): Article = {
    val newArticle = new Article(title, url)
    articles = articles :+ newArticle
    newArticle
  }

  override def updateArticle(newArticle: Article): Article = {
    articles = articles.updated(articles.indexWhere(_.id == newArticle.id), newArticle)
    newArticle
  }

  override def deleteArticle(id: Int): Article = {
    val found = articles.find(_.id == id)
    articles = articles.filterNot(_.id == id)
    found orNull
  }

}
