class Security {
  private url: string;
  private whitelist: string[] = ["http://nakamura0907.html.xdomain.jp"];

  constructor(url: string) {
    this.url = url;
  }

  check(): boolean {
    const result = [this.checkFormat(), this.checkWhitelist()];
    return result.every((value) => value === true);
  }

  private checkFormat(): boolean {
    return /https?:\/\/[\w!?/+\-_~;.,*&@#$%()'[\]]+/.test(this.url);
  }

  private checkWhitelist(): boolean {
    return this.whitelist.some((value) => this.url.startsWith(value));
  }
}

export default Security;
