import jsPDF from "jspdf";
import { Order } from "@/app/lib/dummy-orders";

export function generateInvoice(order: Order) {
  const doc = new jsPDF();

  doc.text(`Invoice - ${order.id}`, 10, 10);
  doc.text(`Date: ${order.createdAt}`, 10, 20);

  let y = 40;
  order.items.forEach((item) => {
    doc.text(`${item.title} x${item.quantity} - ₹${item.priceCents}`, 10, y);
    y += 10;
  });

  doc.text(`Total: ₹${order.totalCents}`, 10, y + 10);

  doc.save(`invoice-${order.id}.pdf`);
}
