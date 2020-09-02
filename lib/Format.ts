class Format {
  private data: object[];

  constructor(data: object[]) {
    this.data = data;
  }

  run(format: string): void {
    switch (format) {
      case "default":
        console.log(this.data);
        break;
      case "json":
        console.log(this.toJson());
        break;
      default:
        console.log(this.data);
        break;
    }
  }

  private toJson(): string {
    return JSON.stringify(this.data);
  }
}

export default Format;
