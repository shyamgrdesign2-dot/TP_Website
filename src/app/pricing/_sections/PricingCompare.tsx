import SectionHeading from "@/components/SectionHeading";
import { SectionContent, SectionShell } from "@/components/SectionShell";

type FeatureRow = {
  feature: string;
  solo: boolean;
  clinic: boolean;
  hospital: boolean;
};

const ROWS: FeatureRow[] = [
  { feature: "VoiceRx", solo: true, clinic: true, hospital: true },
  { feature: "SmartSync", solo: true, clinic: true, hospital: true },
  { feature: "SnapRx", solo: true, clinic: true, hospital: true },
  { feature: "Doctor Agent (clinical AI)", solo: true, clinic: true, hospital: true },
  { feature: "DHIS earnings dashboard", solo: true, clinic: true, hospital: true },
  { feature: "Appointment booking & reminders", solo: true, clinic: true, hospital: true },
  { feature: "Basic billing & GST invoices", solo: true, clinic: true, hospital: true },
  { feature: "Patient records & history", solo: true, clinic: true, hospital: true },
  { feature: "WhatsApp messaging", solo: true, clinic: true, hospital: true },
  { feature: "Receptionist Agent (patient AI)", solo: false, clinic: true, hospital: true },
  { feature: "OPD queue management", solo: false, clinic: true, hospital: true },
  { feature: "Multi-doctor roles", solo: false, clinic: true, hospital: true },
  { feature: "Lab integration", solo: false, clinic: true, hospital: true },
  { feature: "Advanced billing & reconciliation", solo: false, clinic: true, hospital: true },
  { feature: "Custom clinic website", solo: false, clinic: true, hospital: true },
  { feature: "Priority phone support", solo: false, clinic: true, hospital: true },
  { feature: "IPD module", solo: false, clinic: false, hospital: true },
  { feature: "Pharmacy module", solo: false, clinic: false, hospital: true },
  { feature: "Multi-location access control", solo: false, clinic: false, hospital: true },
  { feature: "Custom HIS integrations", solo: false, clinic: false, hospital: true },
  { feature: "Centralised reporting", solo: false, clinic: false, hospital: true },
  { feature: "ABDM/HIS integrations", solo: false, clinic: false, hospital: true },
  { feature: "Dedicated SLA + Account Manager", solo: false, clinic: false, hospital: true },
  { feature: "On-site onboarding", solo: false, clinic: false, hospital: true },
];

function Tick({ on, accent = false }: { on: boolean; accent?: boolean }) {
  if (!on) return <span className="text-[#C8C7CD]"></span>;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="inline-block"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill={accent ? "#4B4AD5" : "#4B4AD5"}
        fillOpacity={accent ? "0.18" : "0.10"}
      />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="#4B4AD5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingCompare() {
  return (
    <SectionShell bg="none" className="w-full">
      <SectionContent padding="loose" className="items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionHeading>Compare every feature</SectionHeading>
          <p
            className="text-[#454551]"
            style={{
              maxWidth: "min(560px, 92vw)",
              fontSize: "clamp(14px, 1.05vw, 17px)",
              lineHeight: 1.6,
            }}
          >
            All {ROWS.length} features at a glance across Solo, Clinic, and
            Hospital plans. AI is on every tier from day one.
          </p>
        </div>

        <div
          className="w-full max-w-[var(--section-w)] overflow-hidden rounded-[24px] border border-[#E8E0F0] bg-white"
          style={{ boxShadow: "0 12px 36px rgba(33,32,119,0.08)" }}
        >
          <div className="overflow-x-auto">
            <table
              className="w-full border-collapse text-[14px] sm:text-[15px]"
              style={{ minWidth: 560 }}
            >
              <thead>
                <tr
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(75,74,213,0.04) 0%, rgba(155,43,246,0.02) 100%)",
                  }}
                >
                  <th className="border-b border-[#E8E0F0] px-5 py-5 text-left font-semibold text-[#454551] sm:px-7">
                    Feature
                  </th>
                  <th className="border-b border-[#E8E0F0] px-3 py-5 text-center font-semibold text-[#454551]">
                    Solo
                  </th>
                  <th className="border-b border-[#E8E0F0] px-3 py-5 text-center font-bold text-[#4B4AD5]">
                    Clinic
                  </th>
                  <th className="border-b border-[#E8E0F0] px-3 py-5 text-center font-semibold text-[#454551]">
                    Hospital
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(({ feature, solo, clinic, hospital }, i) => (
                  <tr
                    key={feature}
                    style={
                      i % 2 === 1
                        ? { background: "rgba(75,74,213,0.018)" }
                        : undefined
                    }
                  >
                    <td className="border-b border-[#F2EFF7] px-5 py-4 text-[#1F1F1F] sm:px-7">
                      {feature}
                    </td>
                    <td className="border-b border-[#F2EFF7] px-3 py-4 text-center">
                      <Tick on={solo} />
                    </td>
                    <td className="border-b border-[#F2EFF7] px-3 py-4 text-center">
                      <Tick on={clinic} accent />
                    </td>
                    <td className="border-b border-[#F2EFF7] px-3 py-4 text-center">
                      <Tick on={hospital} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionContent>
    </SectionShell>
  );
}
