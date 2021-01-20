import fs from 'fs'
import axios from 'axios'
import cheerio from 'cheerio'

async function backup(url, path) {
  try {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const content = $('.markdown-body').text()

    if (path) {
      const pathArray = path.split('/')

      for (let index = 0; index < pathArray.length; index++) {
        let newPath = pathArray.slice(0, index + 1).join('/')
        if (!fs.existsSync(newPath)) {
          fs.mkdirSync(newPath)
        }
      }
    }

    fs.writeFileSync(
      path ? `./${path}/README.md` : 'README.md',
      content,
      'utf-8',
      (err) => {
        if (err) {
          throw err
        }
        console.log('README update complete.')
      }
    )
  } catch (e) {
    console.log(e)
  }
}

backup('https://hackmd.io/@FrontEndSharedDocumentTeam/SyWn-Vy1d')
