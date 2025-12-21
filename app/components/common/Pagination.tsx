"use client";

import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex justify-center gap-2">
      {/* Previous */}
      <Link
        href={`?page=${currentPage - 1}`}
        className={`rounded-md border px-3 py-1 text-sm ${
          currentPage === 1 ? "pointer-events-none opacity-40" : ""
        }`}
      >
        Prev
      </Link>

      {/* Page numbers */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`rounded-md px-3 py-1 text-sm ${
              page === currentPage ? "bg-black text-white" : "border"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {/* Next */}
      <Link
        href={`?page=${currentPage + 1}`}
        className={`rounded-md border px-3 py-1 text-sm ${
          currentPage === totalPages ? "pointer-events-none opacity-40" : ""
        }`}
      >
        Next
      </Link>
    </div>
  );
}
