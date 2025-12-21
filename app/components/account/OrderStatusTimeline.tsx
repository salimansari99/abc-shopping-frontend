import clsx from "clsx";

const STEPS = [
  { key: "placed", label: "Placed" },
  { key: "processing", label: "Processing" },
  { key: "shipped", label: "Shipped" },
  { key: "delivered", label: "Delivered" },
  { key: "cancelled", label: "Cancelled" },
  { key: "returned", label: "Returned" },
] as const;

type OrderStatus = (typeof STEPS)[number]["key"];

export default function OrderStatusTimeline({
  status,
}: {
  status: OrderStatus;
}) {
  const currentIndex = STEPS.findIndex((step) => step.key === status);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        {STEPS.map((step, index) => (
          <div key={step.key} className="flex flex-1 flex-col items-center">
            {/* Circle + Line */}
            <div className="flex w-full items-center">
              <div
                className={clsx(
                  "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
                  index <= currentIndex
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {index + 1}
              </div>

              {index < STEPS.length - 1 && (
                <div
                  className={clsx(
                    "mx-2 h-0.5 flex-1",
                    index < currentIndex ? "bg-black" : "bg-gray-200"
                  )}
                />
              )}
            </div>

            {/* Label */}
            <span
              className={clsx(
                "mt-2 text-xs text-center",
                index <= currentIndex
                  ? "font-medium text-black"
                  : "text-gray-400"
              )}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
