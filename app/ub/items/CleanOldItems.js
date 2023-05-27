const fs = require('fs')

function getFileListByCreationDate(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);
    const fileStats = files.map(file => {
      const filePath = `${folderPath}/${file}`;
      const stat = fs.statSync(filePath);
      return {
        name: file,
        createdAt: stat.ctime.getTime()
      };
    });

    // Sort the file list by creation date in ascending order
    const sortedFiles = fileStats.sort((a, b) => a.createdAt - b.createdAt);

    // Extract only the file names
    const fileList = sortedFiles.map(file => file.name);

    return fileList;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

module.exports = async function (feedID, options = {}) {
  let {
    maxItems = 30,
  } = options

  // --------------------
  // 列出目前檔案，按照建立日期排序
  let folder = `/output/${feedID}/`
  let fileList = getFileListByCreationDate(folder)
  // console.log(fileList)

  for (let i = 0; i < fileList.length - maxItems; i++) {
    let filePath = folder + fileList[i]
    console.log('Clean: ', filePath)
    fs.unlinkSync(filePath)
  }
}