package persistence

import model.Article

trait ArticleRepository {

  def getArticles: List[Article]

  def getArticle(id: Int): Article

  def createArticle(title: String, url: String): Article

  def updateArticle(newArticle: Article): Article

  def deleteArticle(id: Int): Article

}
