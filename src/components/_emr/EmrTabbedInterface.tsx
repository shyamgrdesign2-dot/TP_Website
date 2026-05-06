"use client";

import { useState } from "react";
import EmrClinicalCare from "./imports/EmrWeb/EmrWeb";
import EmrDigitalPresence from "./imports/EmrWeb-1/EmrWeb-1-908";
import EmrAbdm from "./imports/EmrWeb-2/EmrWeb-1-931";
import EmrAnalytics from "./imports/EmrWeb-3/EmrWeb-1-955";
import EmrFrontDesk from "./imports/EmrWeb-4/EmrWeb-1-975";

type TabType = "clinical-care" | "front-desk" | "analytics" | "abdm" | "digital-presence";

interface TabConfig {
  id: TabType;
  label: string;
  component: React.ComponentType;
}

const tabs: TabConfig[] = [
  { id: "clinical-care", label: "Clinic Care", component: EmrClinicalCare },
  { id: "front-desk", label: "Front Desk", component: EmrFrontDesk },
  { id: "analytics", label: "Analytics", component: EmrAnalytics },
  { id: "abdm", label: "ABDM", component: EmrAbdm },
  { id: "digital-presence", label: "Digital Presence", component: EmrDigitalPresence },
];

export default function EmrTabbedInterface() {
  const [activeTab, setActiveTab] = useState<TabType>("clinical-care");

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || EmrClinicalCare;

  return (
    <div className="relative size-full">
      <div key={activeTab} className="tab-content-anim relative size-full">
        <ActiveComponent />
      </div>

      <div className="-translate-x-1/2 absolute backdrop-blur-[10px] content-stretch flex flex-col h-[62px] items-center justify-center left-[calc(50%-1.5px)] overflow-clip px-[18.319px] rounded-bl-[27.637px] rounded-br-[27.637px] shadow-[0px_1.527px_9.159px_0px_rgba(255,255,255,0.25)] top-[-0.5px] w-[662px] z-10" style={{ background: "linear-gradient(143deg, rgba(248, 225, 251, 0.20) -45.06%, rgba(215, 165, 235, 0.20) 42.51%, rgba(121, 70, 203, 0.20) 218.92%), #FFF" }} data-name="Tabs Container">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`content-stretch flex h-[42px] items-center justify-center p-[12px] relative rounded-[41.729px] shrink-0 transition-all ${
                activeTab === tab.id
                  ? "shadow-[0px_3.818px_22.909px_0px_rgba(0,0,0,0.10)]"
                  : ""
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
              <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${
                activeTab === tab.id ? "text-white" : "text-[rgba(69,69,81,0.8)]"
              }`}>
                <p className="leading-[7.951px]">{tab.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
