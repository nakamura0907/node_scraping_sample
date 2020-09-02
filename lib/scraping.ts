const cli = require("cheerio-httpcli");

const scraping = (url: string) => {
  let result: object[] = [];
  const param = {};

  cli.fetch(url, param, (err: any, $: any, res: any) => {
    if (err) {
      console.error(err);
      return;
    }

    for (let i = 1; i <= 6; i++) {
      $(`h${i}`).each(function (this: any, idx: any) {
        const key: string = `h${i}`;
        const text: string = $(this).text(); // get hi text
        result = [...result, { tag: key, text }];
      });
    }

    /* output */
    console.log(result);
    console.log(JSON.stringify(result));
  });
};

export default scraping;
