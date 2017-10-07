name := "backend"

version := "0.1"

scalaVersion := "2.12.3"

resolvers ++= Seq(
  Resolver.sonatypeRepo("releases"),
  "Twitter Maven" at "https://maven.twttr.com"
)

libraryDependencies += "com.twitter" %% "finatra-http" % "2.13.0"
libraryDependencies += "com.github.nscala-time" %% "nscala-time" % "2.16.0"