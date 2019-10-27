export interface IAttachment {
  downloadAttachment(uri: string): any
  getXML(file: BinaryType): any
  getStylesheet(gameSystemName: string): any
}

export interface discordAttachment {
  url: string,
  fileName: string,
}