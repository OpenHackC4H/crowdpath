package persistence

import model.Article

class ArticleRepository {
  def getArticles: List[Article] = {
    List(new Article("Page 1", "www.page1.com"),
      new Article("Page 2", "www.page2.com"))
  }
}
