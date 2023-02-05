package main.scala
import scala.io.Source

case class CSV(headers: List[String], rows: List[List[String]])

class CSVParser() {

  def parse(path: String, splitter: String): CSV = {
    val source = Source.fromFile(path);
    val lines = source.getLines().toList
    CSV(
      lines.head.split(splitter).toList,
      lines.tail.map(_.split(splitter).toList)
    )
  }
}