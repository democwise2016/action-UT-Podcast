module.exports = {
  between3minTo30Min (info) {
    // console.log(info)
    if (info.duration > (30 * 60)) {
      return false
    }
    else if (info.duration < (3 * 60)) {
      return false
    }
    return true
  }
}