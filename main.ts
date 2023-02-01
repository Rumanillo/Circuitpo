DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 10)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 45)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 45)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 10)
    }
})
