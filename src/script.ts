import Security from "../lib/Security";
import scraping from "../lib/scraping";
import { exit } from "process";

const url: string = process.argv[2] || "http://nakamura0907.html.xdomain.jp/";
const format: string = process.argv[3] || "default";

/* Validation */
if (!new Security(url).check()) {
  console.log(
    "第1引数には許可されたURLのみが指定可能です。README.mdを確認してください"
  );
  //   exit();
}

/* Scraping Main Process */
scraping(url);

/* output */
// switch (format) {
//   case "default":
//     console.log("hoge");
//     break;
//   default:
//     console.log("huga");
//     break;
// }
