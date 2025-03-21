export interface TemperatureRange {
  title: string
  range: string
  description: string
  facilities: string[]
}

export const temperatureRanges: TemperatureRange[] = [
  {
    title: "ソフトサウナ",
    range: "70-80°C",
    description: "初心者におすすめの温度帯です。",
    facilities: ["サウナA", "サウナB"]
  },
  {
    title: "スタンダード",
    range: "80-90°C",
    description: "一般的なサウナの温度帯です。",
    facilities: ["サウナC", "サウナD"]
  },
  {
    title: "ハードサウナ",
    range: "90-100°C",
    description: "上級者向けの高温サウナです。",
    facilities: ["サウナE", "サウナF"]
  }
]
