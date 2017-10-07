package model

import com.github.nscala_time.time.Imports.DateTime

class Article(val title: String,
              val url: String,
              val tags: List[String] = List(),
              val creationDate: DateTime = DateTime.now,
              val upVotes: Int = 0,
              val downVotes: Int = 0) {

//  def updateTitle(newTitle: String): Article = new Article(newTitle,
//    this.url,
//    this.tags,
//    this.creationDate,
//    this.upVotes,
//    this.downVotes)
//
//  def updateUrl(newUrl: String): Article = new Article(this.title,
//    newUrl,
//    this.tags,
//    this.creationDate,
//    this.upVotes,
//    this.downVotes)
//
//  def addTag(newTag: String): Article = new Article(this.title,
//    this.url,
//    this.tags :+ newTag,
//    this.creationDate,
//    this.upVotes,
//    this.downVotes)
//
//  def upVote: Article = new Article(this.title,
//    this.url,
//    this.tags,
//    this.creationDate,
//    this.upVotes + 1,
//    this.downVotes)
//
//  def downVote: Article = new Article(this.title,
//    this.url,
//    this.tags,
//    this.creationDate,
//    this.upVotes,
//    this.downVotes + 1)
//
//  def getVoteSum: Int = upVotes - downVotes

}
