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
backup('https://hackmd.io/@FrontEndSharedDocumentTeam/SycaGTJyd', 'HTML')
backup('https://hackmd.io/@FrontEndSharedDocumentTeam/HkZemp11u', 'CSS')
backup(
  'https://hackmd.io/@FrontEndSharedDocumentTeam/r1Lkfpyy_',
  'Framework/Vue/Vue2'
)
backup(
  'https://hackmd.io/@FrontEndSharedDocumentTeam/BJrodakJd/%2FN4lAyLG5SIC1njC3zVXvkQ',
  'Framework/Vue/Vue3'
)
backup(
  'https://hackmd.io/@FrontEndSharedDocumentTeam/B1QiM6yk_',
  'Framework/React'
)
backup(
  'https://hackmd.io/@FrontEndSharedDocumentTeam/BJCsMa1yO',
  'Framework/Angular'
)
