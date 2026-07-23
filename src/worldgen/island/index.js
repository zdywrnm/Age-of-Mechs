// v4 初始岛六区总装（各区逐步迁入：henge/spawnerIsle → town → bamboo → mountains → ghost → forest）
// 约定：模块内禁止裸数字地标，一律引 POS/ZONES（本项目在坐标漂移上栽过两次）
import { buildTown } from './town.js'
import { buildHenge } from './henge.js'
import { buildSpawnerIsle } from './spawnerIsle.js'
import { buildBamboo } from './bamboo.js'
import { buildMountains } from './mountains.js'
import { buildGhost } from './ghost.js'
import { buildForest } from './forest.js'

export function buildIsland(world, STRUCT) {
  buildTown(world, STRUCT)      // 城市先建（整城拍平；作者之塔随后在中心以同高度重拍）
  buildHenge(world, STRUCT)
  buildSpawnerIsle(world, STRUCT)
  buildBamboo(world, STRUCT)
  buildMountains(world, STRUCT)
  buildGhost(world, STRUCT)
  buildForest(world, STRUCT)
}
