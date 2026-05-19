"use client";

import { useState } from "react";
import FloatingTabShowcase from "@/components/tabs/FloatingTabShowcase";
import ProductTabPanel from "@/components/tabs/ProductTabPanel";
import { EMR_TABS, type EmrTabId } from "./emrTabsData";

export default function EmrTabs() {
  const [active, setActive] = useState<EmrTabId>(EMR_TABS[0].id);
  const tab = EMR_TABS.find((t) => t.id === active) ?? EMR_TABS[0];

  return (
    <FloatingTabShowcase
      tabs={EMR_TABS.map((t) => ({ id: t.id, label: t.label }))}
      active={active}
      onSelect={setActive}
      accent="emr"
    >
      <ProductTabPanel kind="emr" tab={tab} />
    </FloatingTabShowcase>
  );
}
