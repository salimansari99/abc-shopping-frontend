"use client";

type Variant = {
  id: string;
  attributes?: {
    size?: string;
    color?: string;
  };
};

type Props = {
  variants: Variant[];
  selectedVariantId: string | null;
  onChange: (variantId: string) => void;
};

export default function VariantSelector({
  variants,
  selectedVariantId,
  onChange,
}: Props) {
  const sizes = Array.from(
    new Set(variants.map((v) => v.attributes?.size).filter(Boolean))
  );

  const colors = Array.from(
    new Set(variants.map((v) => v.attributes?.color).filter(Boolean))
  );

  return (
    <div className="space-y-4">
      {/* Size */}
      {sizes.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-medium">Size</p>
          <div className="flex gap-2">
            {sizes.map((size) => {
              const variant = variants.find((v) => v.attributes?.size === size);
              if (!variant) return null;

              return (
                <button
                  key={size}
                  onClick={() => onChange(variant.id)}
                  className={`rounded-md border px-3 py-1 text-sm ${
                    selectedVariantId === variant.id
                      ? "border-black bg-black text-white"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Color */}
      {colors.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-medium">Color</p>
          <div className="flex gap-2">
            {colors.map((color) => (
              <span
                key={color}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {color}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
