import com.twitter.finatra.http.routing.HttpRouter
import com.twitter.finatra.http.HttpServer

import controller.ArticleController


class CrowdPathServer extends HttpServer {

  override protected def defaultFinatraHttpPort: String = ":8080"
  //  override protected def defaultTracingEnabled: Boolean = false
  override protected def defaultHttpServerName: String = "HelloServer"

  override protected def configureHttp(router: HttpRouter): Unit = {
    router.add(new ArticleController)
  }

}

object CrowdPathMain extends CrowdPathServer