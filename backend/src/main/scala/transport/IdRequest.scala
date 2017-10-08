package transport

import com.twitter.finatra.request.QueryParam

case class IdRequest(@QueryParam id: Int)
