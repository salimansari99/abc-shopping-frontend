"use client";

type SavedCard = {
  id: string;
  brand: "visa" | "mastercard" | "amex";
  last4: string;
  expMonth: number;
  expYear: number;
};

export default function SavedCards({
  cards,
  onSelect,
}: {
  cards: SavedCard[];
  onSelect: (cardId: string) => void;
}) {
  if (!cards.length) return null;

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">Saved cards</p>

      {cards.map((card) => (
        <button
          key={card.id}
          onClick={() => onSelect(card.id)}
          className="flex w-full items-center justify-between rounded-lg border px-4 py-3 hover:border-black"
        >
          <div className="flex items-center gap-3">
            <img
              src={`/icons/${card.brand}.svg`}
              className="h-5"
              alt={card.brand}
            />
            <span className="text-sm">•••• {card.last4}</span>
          </div>
          <span className="text-xs text-gray-500">
            {card.expMonth}/{card.expYear}
          </span>
        </button>
      ))}
    </div>
  );
}
