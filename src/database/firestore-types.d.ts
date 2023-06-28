import { Timestamp } from 'firebase/firestore'

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  plate_number: string;
  driver: string;
}

type Result = "GOOD"|"BAD"|"MAINTAIN"|"MISSING"
export interface Inspection {
  vehicleId: string;
  inspector: string;
  date: Timestamp;
  underChassis: {
    differential: Result;
    leftSpring: Result;
    wheelBearing: Result;
    brakeShoe: Result;
    brakeChamber: Result;
    centerBolt: Result;
    uBolt: Result;
    steering: Result;
    gearBox: Result;
    airTank: Result;
    hydroVacAssembly: Result;
    clutchBooster9070: Result;
    propellerShaft: Result;
    brakeMaster: Result;
    primaryClutch: Result;
  }
  transmissionAssembly: Result;
  engineAssembly: Result;
  injectionPump: Result;
  electricalParts: {
    headLight: Result;
    domeLamp: Result;
    wiper: Result;
    tireWrench: Result;
    signalLight: Result;
    sunVisor: Result;
    seatBelt: Result;
    earlyWarningDevice: Result;
    tailLight: Result;
    sideViewMirror: Result;
    radiatorCap: Result;
    carJack: Result;
    fogLamp: Result;
    fuelTankCap: Result;
    antenna: Result;
    tools: Result;
    horn: Result;
    wheelCaps: Result;
    stereo: Result;
    spareTire: Result;
  }
}