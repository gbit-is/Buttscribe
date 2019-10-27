import { IAttachment, discordAttachment } from './types/attachment';
import { get } from 'request-promise-native';
import { readFile } from 'fs';


export class MessageAttachment implements IAttachment {
  attachment: discordAttachment

  constructor(attachment: discordAttachment) {
    this.attachment = attachment
  }

  async downloadAttachment(uri: string) {
    try {
      interface requestOptions {
        uri: string
        encoding: null
      }
      const options: requestOptions = {
        uri,
        encoding: null
      }
      return await get(options);
    } catch (err) {
      throw err;
    }
    
  }

  async extractFile(file: BinaryType) {

  }

  async getXML(file: BinaryType) {
    return new Promise((resolve, reject) => {
      const fileExtension = file.substring(file.lastIndexOf('.')+1, file.length ) || file;
      if (fileExtension === 'rosz') {
        // Unzip file
      } else {
        readFile(file, 'utf8', (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        })
      }
    })
  }

  async getStylesheet(gameSystemName: string) {
      interface gameSystemIndex {
        [name: string]: string
      }
      const gameSystemNames: gameSystemIndex = {
        'Warhammer 40,000: Kill Team (2018)': 'kill-team.xsl',
        'Warhammer 40,000 8th Edition': 'wh40k.xsl'
      }
      return new Promise((resolve, reject) => {
        readFile(`src/stylesheets/${gameSystemNames[gameSystemName]}`, 'utf8', (err, data) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        })
      })
  }
}