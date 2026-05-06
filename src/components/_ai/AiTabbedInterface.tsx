"use client";

import { useState } from "react";
import VoiceRx from "./imports/Voice/EmrWeb-4-397";
import SmartSync from "./imports/SmartSync/EmrWeb-4-446";
import SnapRx from "./imports/SnapRx/EmrWeb-4-433";
import Receptionist from "./imports/Receptionist/EmrWeb-4-420";
import Doctor from "./imports/Doctor/EmrWeb-4-407";

type TabType = "voicerx" | "smartsync" | "snaprx" | "receptionist" | "doctor";

interface TabConfig {
  id: TabType;
  label: string;
  component: React.ComponentType;
}

const tabs: TabConfig[] = [
  { id: "voicerx", label: "VoiceRx", component: VoiceRx },
  { id: "smartsync", label: "SmartSync", component: SmartSync },
  { id: "snaprx", label: "SnapRx", component: SnapRx },
  { id: "receptionist", label: "Receptionist Agent", component: Receptionist },
  { id: "doctor", label: "Doctor Agent", component: Doctor },
];

export default function AiTabbedInterface() {
  const [activeTab, setActiveTab] = useState<TabType>("voicerx");

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || VoiceRx;

  return (
    <div className="relative size-full">
      {/* Keyed wrapper — remounts on tab change so the panel-swipe CSS
          animation re-runs every time the user switches tabs. */}
      <div key={activeTab} className="tab-content-anim relative size-full">
        <ActiveComponent />
      </div>

      <div
        className="-translate-x-1/2 absolute backdrop-blur-[10px] content-stretch flex flex-col h-[62px] items-center justify-center left-[calc(50%-1.5px)] overflow-clip px-[18.319px] rounded-bl-[27.637px] rounded-br-[27.637px] shadow-[0px_1.527px_9.159px_0px_rgba(255,255,255,0.25)] top-[-0.5px] w-[662px] z-10"
        style={{
          background:
            "linear-gradient(143deg, rgba(248, 225, 251, 0.20) -45.06%, rgba(215, 165, 235, 0.20) 42.51%, rgba(121, 70, 203, 0.20) 218.92%), #FFF",
        }}
        data-name="Tabs Container"
      >
        <div
          className="content-stretch flex gap-[12px] items-center relative shrink-0"
          data-name="Tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`content-stretch flex h-[42px] items-center justify-center relative rounded-[62.069px] shrink-0 transition-all ${
                activeTab === tab.id
                  ? "drop-shadow-[0px_0px_6.207px_rgba(0,0,0,0.12)] px-[24px] py-[12px]"
                  : "p-[12px]"
              }`}
              style={
                activeTab === tab.id
                  ? {
                      // Blue gradient (indigo → navy) — replaces the violet
                      backgroundImage:
                        "linear-gradient(135deg, #4B4AD5 0%, #27276F 100%)",
                    }
                  : {}
              }
              data-name="Tab"
            >
              {activeTab === tab.id && (
                <div
                  aria-hidden="true"
                  className="absolute border-[1.241px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[62.069px]"
                />
              )}
              <div
                className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${
                  activeTab === tab.id ? "text-white" : "text-[rgba(69,69,81,0.8)]"
                }`}
              >
                <p className="leading-[7.951px]">{tab.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
