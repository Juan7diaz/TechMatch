import { ResponseWishedProduct } from "../interfaces/wishedProduct.interface";

interface Metadata {
  subtotal: number;
  iva: number;
  deliveryCost: number;
  total: number;
}

export const handleWhatsAppClick = (
  items: ResponseWishedProduct[],
  metadata: Metadata,
  numberWhatsApp: string,
  usuarioId: string
) => {
  const message = encodeURIComponent(
    `*Hola, me gustaría comprar productos:*\n` +
      `\`\`\`\n` +
      `${items
        ?.map((item) => `- ${item.pieza.nombre}: $${item.pieza.precio}`)
        .join("\n")}\n\n` +
      `Subtotal: $${metadata.subtotal.toFixed(2)}\n` +
      `IVA (19%): $${metadata.iva.toFixed(2)}\n` +
      `Costo de entrega: $${metadata.deliveryCost.toFixed(2)}\n` +
      `Total: $${metadata.total.toFixed(2)}\n` +
      `Referencia: ${usuarioId}\n` +
      `\`\`\``
  );

  window.open(`https://wa.me/${numberWhatsApp}?text=${message}`);
};
