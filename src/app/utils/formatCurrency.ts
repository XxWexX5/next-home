export function formatCurrency(value: string) {
    const number = parseFloat(value);
    if (isNaN(number)) return "";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  }