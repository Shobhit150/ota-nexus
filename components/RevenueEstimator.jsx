
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const currencies = {
  INR: { label: "₹ INR", locale: "en-IN" },
  USD: { label: "$ USD", locale: "en-US" },
  GBP: { label: "£ GBP", locale: "en-GB" },
  EUR: { label: "€ EUR", locale: "de-DE" },
  AUD: { label: "A$ AUD", locale: "en-AU" },
};

const propertyTypes = [
  "Hotel",
  "Resort",
  "Villa",
  "Homestay",
  "Airbnb / Vacation Rental",
];

const formatMoney = (value, currency) =>
  new Intl.NumberFormat(currencies[currency].locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);

const inputClass =
  "h-10 w-full min-w-0 rounded-lg border border-white/15 bg-[#11141c] px-3 text-sm text-white outline-none transition focus:border-[#cbb071]";

function Field({ label, children }) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-xs text-[#aaa9a4]">
        {label}
      </span>
      {children}
    </label>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  suffix = "%",
  onChange,
}) {
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center justify-between gap-3">
        <label className="text-xs text-[#c7c5bf]">{label}</label>
        <span className="text-xs font-medium text-[#cbb071]">
          {value}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer accent-[#cbb071]"
      />
    </div>
  );
}

export default function RevenueEstimator() {
  const [propertyType, setPropertyType] = useState("Hotel");
  const [currency, setCurrency] = useState("INR");
  const [rooms, setRooms] = useState(20);
  const [rate, setRate] = useState(3500);
  const [occupancy, setOccupancy] = useState(55);

  const [otaShare, setOtaShare] = useState(60);
  const [commission, setCommission] = useState(15);
  const [occupancyIncrease, setOccupancyIncrease] = useState(5);
  const [rateIncrease, setRateIncrease] = useState(5);
  const [directShift, setDirectShift] = useState(10);

  const results = useMemo(() => {
    const calculate = (occ, nightlyRate, platformShare) => {
      const roomNights = rooms * 365 * (occ / 100);
      const revenue = roomNights * nightlyRate;
      const commissionPaid =
        revenue * (platformShare / 100) * (commission / 100);

      return {
        roomNights,
        occupancy: occ,
        rate: nightlyRate,
        revenue,
        commissionPaid,
        netRevenue: revenue - commissionPaid,
      };
    };

    const today = calculate(occupancy, rate, otaShare);
    const improved = calculate(
      Math.min(100, occupancy + occupancyIncrease),
      rate * (1 + rateIncrease / 100),
      Math.max(0, otaShare - directShift)
    );

    return {
      today,
      improved,
      extraNet: improved.netRevenue - today.netRevenue,
      commissionSaved:
        today.commissionPaid - improved.commissionPaid,
    };
  }, [
    rooms,
    rate,
    occupancy,
    otaShare,
    commission,
    occupancyIncrease,
    rateIncrease,
    directShift,
  ]);

  const breakdown = [
    {
      label: "Annual room revenue",
      today: results.today.revenue,
      improved: results.improved.revenue,
    },
    {
      label: "Platform commission",
      today: results.today.commissionPaid,
      improved: results.improved.commissionPaid,
    },
    {
      label: "Revenue after commission",
      today: results.today.netRevenue,
      improved: results.improved.netRevenue,
    },
  ];

  return (
    <section
      id="revenue-estimator"
      className="bg-[#10131b] px-4 py-14 text-[#f3f0e9] sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 max-w-xl">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#cbb071]">
            Revenue calculator
          </p>
          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl">
            What could your property{" "}
            <span className="font-serif italic text-[#cbb071]">
              earn?
            </span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#aaa9a4]">
            Enter three numbers to get a quick estimate. Adjust the
            assumptions only if you want a more tailored result.
          </p>
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-[1fr_0.85fr]">
          {/* Compact form */}
          <div className="rounded-2xl border border-white/10 bg-[#191c25] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-sm font-medium text-white">
                Your property
              </h3>
              <span className="text-[11px] text-[#898a91]">
                Takes about 30 seconds
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Property type">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className={inputClass}
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#191c25]">
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Currency">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className={inputClass}
                >
                  {Object.entries(currencies).map(([key, item]) => (
                    <option key={key} value={key} className="bg-[#191c25]">
                      {item.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Rooms / units">
                <input
                  type="number"
                  min="1"
                  max="100000"
                  value={rooms}
                  onChange={(e) =>
                    setRooms(
                      Math.max(1, Math.min(100000, Number(e.target.value) || 1))
                    )
                  }
                  className={inputClass}
                />
              </Field>

              <Field label="Nightly rate">
                <input
                  type="number"
                  min="1"
                  max="100000000"
                  value={rate}
                  onChange={(e) =>
                    setRate(
                      Math.max(
                        1,
                        Math.min(100000000, Number(e.target.value) || 1)
                      )
                    )
                  }
                  className={inputClass}
                />
              </Field>

              <div className="col-span-2">
                <Field label={`Average occupancy · ${occupancy}%`}>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={occupancy}
                    onChange={(e) => setOccupancy(Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer accent-[#cbb071]"
                  />
                  <div className="mt-1 flex justify-between text-[10px] text-[#85868d]">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </Field>
              </div>
            </div>

            <details className="mt-5 border-t border-white/10 pt-4">
              <summary className="cursor-pointer list-none text-sm text-[#cbb071] marker:hidden">
                <span className="flex items-center justify-between gap-3">
                  <span>Advanced assumptions</span>
                  <span className="text-lg leading-none">+</span>
                </span>
              </summary>

              <div className="mt-4 space-y-5">
                <p className="text-xs leading-5 text-[#92939a]">
                  Change these only if you know your current booking mix
                  and the improvements you want to explore.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <Field label="Bookings via OTAs (%)">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={otaShare}
                      onChange={(e) =>
                        setOtaShare(
                          Math.max(0, Math.min(100, Number(e.target.value) || 0))
                        )
                      }
                      className={inputClass}
                    />
                  </Field>

                  <Field label="OTA commission (%)">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={commission}
                      onChange={(e) =>
                        setCommission(
                          Math.max(0, Math.min(100, Number(e.target.value) || 0))
                        )
                      }
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="space-y-4 rounded-xl bg-black/15 p-3">
                  <p className="text-xs font-medium text-white">
                    Improvements to explore
                  </p>

                  <RangeField
                    label="Occupancy increase"
                    value={occupancyIncrease}
                    min={0}
                    max={30}
                    suffix=" points"
                    onChange={setOccupancyIncrease}
                  />

                  <RangeField
                    label="Nightly rate increase"
                    value={rateIncrease}
                    min={0}
                    max={50}
                    onChange={setRateIncrease}
                  />

                  <RangeField
                    label="Shift from OTA to direct bookings"
                    value={directShift}
                    min={0}
                    max={100}
                    suffix=" points"
                    onChange={setDirectShift}
                  />
                </div>
              </div>
            </details>
          </div>

          {/* Immediate result */}
          <div className="rounded-2xl border border-[#cbb071]/25 bg-gradient-to-br from-[#22232b] to-[#171922] p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#b4b1a9]">
              Illustrative additional net revenue
            </p>

            <p className="mt-3 break-words text-3xl font-medium tracking-tight text-[#cbb071] sm:text-4xl">
              {formatMoney(results.extraNet, currency)}
            </p>
            <p className="mt-1 text-sm text-[#a8a7a2]">per year</p>

            <div className="my-5 h-px bg-white/10" />

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/[0.04] p-3">
                <p className="text-xs text-[#a8a7a2]">Current net revenue</p>
                <p className="mt-2 break-words text-base font-medium text-white">
                  {formatMoney(results.today.netRevenue, currency)}
                </p>
                <p className="mt-1 text-[10px] text-[#85868d]">per year</p>
              </div>

              <div className="rounded-xl bg-white/[0.04] p-3">
                <p className="text-xs text-[#a8a7a2]">With improvements</p>
                <p className="mt-2 break-words text-base font-medium text-white">
                  {formatMoney(results.improved.netRevenue, currency)}
                </p>
                <p className="mt-1 text-[10px] text-[#85868d]">per year</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 text-sm">
              <span className="text-[#a8a7a2]">Monthly difference</span>
              <span className="text-right font-medium text-white">
                {formatMoney(results.extraNet / 12, currency)}
              </span>
            </div>

            <details className="mt-5 border-t border-white/10 pt-4">
              <summary className="cursor-pointer text-xs text-[#cbb071]">
                View revenue breakdown
              </summary>

              <div className="mt-3 space-y-3">
                {breakdown.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-2 text-xs"
                  >
                    <span className="text-[#a8a7a2]">{item.label}</span>
                    <span className="text-[#d0cec9]">
                      {formatMoney(item.today, currency)}
                    </span>
                    <span className="text-right text-white">
                      {formatMoney(item.improved, currency)}
                    </span>
                  </div>
                ))}

                <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-t border-white/10 pt-2 text-[10px] text-[#85868d]">
                  <span>Per year</span>
                  <span>Today</span>
                  <span>Improved</span>
                </div>

                <p className="text-xs text-[#a8a7a2]">
                  Estimated platform commission saved:{" "}
                  <span className="text-white">
                    {formatMoney(results.commissionSaved, currency)}
                  </span>
                </p>
              </div>
            </details>

            <Link
              href="https://wa.me/919560440478"
              className="mt-5 flex min-h-11 w-full items-center justify-center rounded-full bg-[#cbb071] px-5 py-3 text-center text-xs font-semibold text-[#11131a] transition hover:bg-[#dfc58c]"
            >
              Discuss your property
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>

            <p className="mt-3 text-[10px] leading-4 text-[#85868d]">
              Estimate only, not a forecast or guarantee. Assumes 365 days
              per year. Seasonality, taxes, operating costs, payment fees
              and marketing costs are excluded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
