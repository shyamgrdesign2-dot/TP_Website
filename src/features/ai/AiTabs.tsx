"use client";

import { useState } from "react";
import FloatingTabShowcase from "@/components/tabs/FloatingTabShowcase";
import ProductTabPanel from "@/components/tabs/ProductTabPanel";
import { AI_TABS, type AiTabId } from "./aiTabsData";

export default function AiTabs() {
  const [active, setActive] = useState<AiTabId>(AI_TABS[0].id);
  const tab = AI_TABS.find((t) => t.id === active) ?? AI_TABS[0];

  return (
    <FloatingTabShowcase
      tabs={AI_TABS.map((t) => ({ id: t.id, label: t.label }))}
      active={active}
      onSelect={setActive}
      accent="ai"
    >
      <ProductTabPanel kind="ai" tab={tab} />
    </FloatingTabShowcase>
  );
}
