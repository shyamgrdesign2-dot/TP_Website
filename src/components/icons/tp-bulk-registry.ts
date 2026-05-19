/**
 * Curated bulk-style icons from tp_icon.
 * The package barrel (`tp_icon/bulk`) is incomplete; import components individually.
 */
import type { ComponentType, SVGProps } from "react";

import Microphone2Pro from "../../../node_modules/tp_icon/dist/bulk/Microphone2Pro.js";
import Edit2Pro from "../../../node_modules/tp_icon/dist/bulk/Edit2Pro.js";
import CameraPro from "../../../node_modules/tp_icon/dist/bulk/CameraPro.js";
import AiMessage from "../../../node_modules/tp_icon/dist/bulk/AiMessage.js";
import StethoscopeTp from "../../../node_modules/tp_icon/dist/bulk/StethoscopeTp.js";
import ClipboardText from "../../../node_modules/tp_icon/dist/bulk/ClipboardText.js";
import DocumentFavorite from "../../../node_modules/tp_icon/dist/bulk/DocumentFavorite.js";
import Calendar1 from "../../../node_modules/tp_icon/dist/bulk/Calendar1.js";
import ChartPro from "../../../node_modules/tp_icon/dist/bulk/ChartPro.js";
import ShieldTick from "../../../node_modules/tp_icon/dist/bulk/ShieldTick.js";
import Global from "../../../node_modules/tp_icon/dist/bulk/Global.js";
import Money from "../../../node_modules/tp_icon/dist/bulk/Money.js";
import Flash from "../../../node_modules/tp_icon/dist/bulk/Flash.js";
import Magicpen from "../../../node_modules/tp_icon/dist/bulk/Magicpen.js";
import HospitalTp from "../../../node_modules/tp_icon/dist/bulk/HospitalTp.js";
import People from "../../../node_modules/tp_icon/dist/bulk/People.js";
import DocumentText from "../../../node_modules/tp_icon/dist/bulk/DocumentText.js";
import HospitalPro from "../../../node_modules/tp_icon/dist/bulk/HospitalPro.js";
import TranslatePro from "../../../node_modules/tp_icon/dist/bulk/TranslatePro.js";
import HealthCircle from "../../../node_modules/tp_icon/dist/bulk/HealthCircle.js";
import LocationPro from "../../../node_modules/tp_icon/dist/bulk/LocationPro.js";
import ArrowDown01 from "../../../node_modules/tp_icon/dist/bulk/ArrowDown01.js";

export type TpBulkIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const TP_BULK_ICONS = {
  microphone: Microphone2Pro,
  edit: Edit2Pro,
  camera: CameraPro,
  message: AiMessage,
  stethoscope: StethoscopeTp,
  clipboardText: ClipboardText,
  documentFavorite: DocumentFavorite,
  calendar: Calendar1,
  chart: ChartPro,
  shieldTick: ShieldTick,
  global: Global,
  money: Money,
  flash: Flash,
  magicpen: Magicpen,
  hospital: HospitalTp,
  people: People,
  documentText: DocumentText,
  hospitalPro: HospitalPro,
  translate: TranslatePro,
  healthCircle: HealthCircle,
  location: LocationPro,
  arrowDown: ArrowDown01,
} as const satisfies Record<string, TpBulkIconComponent>;

export type TpBulkIconName = keyof typeof TP_BULK_ICONS;
