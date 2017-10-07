package model

import helper.RandomIdGenerator

class Article(val title: String,
              val url: String,
              val tags: List[String] = List(),
              val upVotes: Int = 0,
              val downVotes: Int = 0,
              val id: String = RandomIdGenerator.randomAlphaNumericString(16))
