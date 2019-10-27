import { IAttachment } from '../src/types/attachment'
import { MessageAttachment } from '../src/attachment';

const testAttachment: IAttachment = new MessageAttachment({url: 'http://', fileName: 'necrons.rosz'})

describe('Attachment getStylesheet method', () => {
  it('should return an xsl string', async () => {
    const xsl = await testAttachment.getStylesheet('Warhammer 40,000: Kill Team (2018)')
    expect(xsl).toBeDefined()
  })
})

describe('Attachment downloadAttachment method', () => {
  it('should download the file', async () => {
    const file = await testAttachment.downloadAttachment('http://google.com')
    expect(file)
  })
})
