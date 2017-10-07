package persistence

import model.Article
import org.mongodb.scala.model.Filters
import org.mongodb.scala.result.UpdateResult
import org.mongodb.scala.{Document, MongoClient, MongoCollection, MongoDatabase}

class MongoArticleRepository extends ArticleRepository {
  private val client: MongoClient = MongoClient()
  private val database: MongoDatabase = client.getDatabase("crowdpath-db")
  private val collection: MongoCollection[Document] = database.getCollection("articles");

  override def getArticles: List[Article] = {
    collection.find().collect()
    null
  }

  override def getArticle(id: Int): Article = {
    collection.find(Filters.eq("_id", id)).first()
    null
  }

  override def createArticle(title: String, url: String): Article = {
    val newArticle = new Article(title, url)
    val articleDoc: Document = Document(
      "_id" -> newArticle.id,
      "title" -> newArticle.title,
      "url" -> newArticle.url,
      "tags" -> newArticle.tags,
      "upVotes" -> newArticle.upVotes,
      "downVotes" -> newArticle.downVotes
    )
    collection.insertOne(articleDoc).toFuture.value
    null
  }

  override def updateArticle(newArticle: Article): Article = {
    val articleDoc: Document = Document()
    collection.replaceOne(Filters.eq("_id", newArticle.id), articleDoc
    ).subscribe((updateResult: UpdateResult) => println(updateResult))
    null
  }

  override def deleteArticle(id: Int): Article = {
    collection.findOneAndDelete(Filters.eq("_id", id))
    null
  }

}
