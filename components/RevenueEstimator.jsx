"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

const currencies = {
  INR: { label: "₹ INR", symbol: "₹", locale: "en-IN" },
  USD: { label: "$ USD", symbol: "$", locale: "en-US" },
  GBP: { label: "£ GBP", symbol: "£", locale: "en-GB" },
  EUR: { label: "€ EUR", symbol: "€", locale: "de-DE" },
  AUD: { label: "A$ AUD", symbol: "A$", locale: "en-AU" },
};

const propertyTypes = [
  "Hotel",
  "Resort",
  "Villa",
  "Homestay",
  "Airbnb / Vacation Rental",
];

const numberFormat = (value, currency) =>
  new Intl.NumberFormat(currencies[currency].locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);

const integerFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);

const percentFormat = (value) => `${value.toFixed(1)}%`;

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
    const days = 365;

    const calculate = (occ, nightlyRate, platformShare) => {
      const roomNights = rooms * days * (occ / 100);
      const revenue = roomNights * nightlyRate;
      const commissionPaid =
        revenue * (platformShare / 100) * (commission / 100);

      return {
        roomNights,
        occupancy: occ,
        rate: nightlyRate,
        revpar: (occ / 100) * nightlyRate,
        revenue,
        commissionPaid,
        netRevenue: revenue - commissionPaid,
      };
    };

    const today = calculate(occupancy, rate, otaShare);

    const improvedOccupancy = Math.min(
      100,
      occupancy + occupancyIncrease
    );

    const improvedRate = rate * (1 + rateIncrease / 100);
    const improvedOtaShare = Math.max(0, otaShare - directShift);

    const improved = calculate(
      improvedOccupancy,
      improvedRate,
      improvedOtaShare
    );

    return {
      today,
      improved,
      extraNet: improved.netRevenue - today.netRevenue,
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

  const rows = [
    {
      label: "Room nights sold / year",
      today: integerFormat(results.today.roomNights),
      improved: integerFormat(results.improved.roomNights),
    },
    {
      label: "Occupancy",
      today: percentFormat(results.today.occupancy),
      improved: percentFormat(results.improved.occupancy),
    },
    {
      label: "Average nightly rate",
      today: numberFormat(results.today.rate, currency),
      improved: numberFormat(results.improved.rate, currency),
    },
    {
      label: "Revenue per available room (RevPAR)",
      today: numberFormat(results.today.revpar, currency),
      improved: numberFormat(results.improved.revpar, currency),
    },
    {
      label: "Annual room revenue",
      today: numberFormat(results.today.revenue, currency),
      improved: numberFormat(results.improved.revenue, currency),
    },
    {
      label: "Platform commission paid",
      today: numberFormat(results.today.commissionPaid, currency),
      improved: numberFormat(results.improved.commissionPaid, currency),
    },
    {
      label: "Net revenue after commission",
      today: numberFormat(results.today.netRevenue, currency),
      improved: numberFormat(results.improved.netRevenue, currency),
    },
  ];

  const Field = ({ label, children }) => (
    <label className="block min-w-0">
      <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.12em] text-[#a5a29d] sm:text-[11px]">
        {label}
      </span>
      {children}
    </label>
  );

  const inputClass =
    "h-[46px] w-full rounded-xl border border-white/25 bg-transparent px-3 text-sm text-[#f3f0e9] outline-none transition focus:border-[#cbb071] sm:h-[52px] sm:px-4 sm:text-base";

  const Slider = ({ label, value, min, max, onChange, suffix = " points" }) => (
    <div className="min-w-0">
      <div className="mb-3 flex min-h-8 items-start justify-between gap-2">
        <span className="text-[10px] uppercase leading-4 tracking-[0.1em] text-[#aaa7a1] sm:text-[11px]">
          {label}
        </span>
        <span className="shrink-0 text-xs text-[#cbb071]">
          {value}{suffix}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-[#cbb071]"
      />
    </div>
  );

  return (
    <section
      id="revenue-estimator"
      className="bg-[#10131b] px-5 py-16 text-[#f3f0e9] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Section heading */}
        <div className="mb-10 max-w-[900px] sm:mb-12">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#cbb071] sm:text-xs">
            Illustrative Estimate
          </p>

          <h2 className="text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Estimate your room-revenue{" "}
            <span className="font-serif italic text-[#cbb071]">
              potential.
            </span>
          </h2>

          <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#d0cec9] sm:text-base sm:leading-[1.9]">
            For hotels, resorts, villas, homestays, Airbnbs and vacation
            rentals. Enter your own numbers, then set the improvements you
            want to test. The result is a simple what-if, not client data
            and not a promise.
          </p>
        </div>

        {/* Estimator panel */}
        <div className="rounded-[22px] border border-white/15 bg-[#191c25] p-5 sm:p-8 lg:p-10">
          {/* Input fields */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5">
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

            <Field label="Rooms / units available to rent">
              <input
                type="number"
                min="1"
                max="100000"
                value={rooms}
                onChange={(e) =>
                  setRooms(Math.max(1, Math.min(100000, Number(e.target.value) || 1)))
                }
                className={inputClass}
              />
            </Field>

            <Field label="Average nightly rate">
              <input
                type="number"
                min="1"
                max="100000000"
                value={rate}
                onChange={(e) =>
                  setRate(Math.max(1, Math.min(100000000, Number(e.target.value) || 1)))
                }
                className={inputClass}
              />
            </Field>

            <Field label="Current occupancy (%)">
              <input
                type="number"
                min="0"
                max="100"
                value={occupancy}
                onChange={(e) =>
                  setOccupancy(Math.max(0, Math.min(100, Number(e.target.value) || 0)))
                }
                className={inputClass}
              />
            </Field>

            <Field label="Bookings via OTAs / platforms (%)">
              <input
                type="number"
                min="0"
                max="100"
                value={otaShare}
                onChange={(e) =>
                  setOtaShare(Math.max(0, Math.min(100, Number(e.target.value) || 0)))
                }
                className={inputClass}
              />
            </Field>

            <Field label="Average platform commission (%)">
              <input
                type="number"
                min="0"
                max="100"
                value={commission}
                onChange={(e) =>
                  setCommission(Math.max(0, Math.min(100, Number(e.target.value) || 0)))
                }
                className={inputClass}
              />
            </Field>
          </div>

          {/* Improvement sliders */}
          <div className="mt-9 sm:mt-10">
            <h3 className="mb-5 text-base font-medium text-[#cbb071] sm:text-lg">
              Improvements to test
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
              <Slider
                label="Occupancy increase"
                value={occupancyIncrease}
                min={0}
                max={30}
                onChange={setOccupancyIncrease}
                suffix=" points"
              />

              <Slider
                label="Average rate increase"
                value={rateIncrease}
                min={0}
                max={50}
                onChange={setRateIncrease}
                suffix="%"
              />

              <Slider
                label="Shift to direct bookings"
                value={directShift}
                min={0}
                max={100}
                onChange={setDirectShift}
                suffix=" points"
              />
            </div>
          </div>

          {/* Results table */}
          <div className="mt-9 overflow-hidden rounded-xl border border-white/15 sm:mt-10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-xs sm:text-sm">
                <thead className="bg-white/[0.06] text-[10px] uppercase tracking-[0.1em] text-[#cbb071] sm:text-[11px]">
                  <tr>
                    <th className="px-3 py-3 font-medium sm:px-4">Per year</th>
                    <th className="px-3 py-3 font-medium sm:px-4">Today</th>
                    <th className="px-3 py-3 font-medium sm:px-4">
                      With improvements
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-t border-white/10 transition-colors hover:bg-white/[0.025]"
                    >
                      <td className="px-3 py-3.5 text-[#e5e2dc] sm:px-4">
                        {row.label}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5 text-[#d0cec9] sm:px-4">
                        {row.today}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3.5 text-[#f3f0e9] sm:px-4">
                        {row.improved}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Revenue result */}
          <div className="mt-7">
            <p className="font-serif text-2xl leading-snug tracking-tight text-[#cbb071] sm:text-3xl">
              Illustrative extra net revenue:{" "}
              {numberFormat(results.extraNet, currency)} / year
            </p>

            <p className="mt-3 text-sm text-[#b9b6b0] sm:text-base">
              About {numberFormat(results.extraNet / 12, currency)} per month
            </p>
          </div>

          <p className="mt-5 max-w-[720px] text-xs leading-5 text-[#a5a29d]">
            Planning estimate only. Assumes 365 available nights per year
            and that the selected improvements are achieved. Actual results
            depend on season, market demand, operating costs, taxes and your
            property. This is not a guarantee or a forecast. Direct-booking
            shifts reduce estimated platform commission; payment and
            marketing costs are not included.
          </p>

          <Link
            href="#contact"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#cbb071] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.07em] text-[#101116] transition-colors hover:bg-[#dfc58c] sm:px-8 sm:text-sm"
          >
            Talk to an OTA Nexus Expert
          </Link>
        </div>
      </div>
    </section>
  );
}