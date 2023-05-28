let ItemFiltersPreset = {
  betweenTimeMinMax (info, min, max) {
    // console.log(info)
    if (info.duration > (max * 60)) {
      return false
    }
    else if (info.duration < (min * 60)) {
      return false
    }
    return true
  },
  between3minTo30Min (info) {
    return ItemFiltersPreset.betweenTimeMinMax(info, 3, 30)
  },
  between10minTo60Min (info) {
    return ItemFiltersPreset.betweenTimeMinMax(info, 10, 60)
  }
}

module.exports = ItemFiltersPreset