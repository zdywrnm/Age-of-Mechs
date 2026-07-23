// v4 初始岛六区总装（各区逐步迁入：henge/spawnerIsle → town → bamboo → mountains → ghost → forest）
// 约定：模块内禁止裸数字地标，一律引 POS/ZONES（本项目在坐标漂移上栽过两次）
import { buildHenge } from './henge.js'
import { buildSpawnerIsle } from './spawnerIsle.js'

export function buildIsland(world, STRUCT) {
  buildHenge(world, STRUCT)
  buildSpawnerIsle(world, STRUCT)
}
