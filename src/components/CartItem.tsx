import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { XIcon } from "lucide-react";

type Props = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: Props) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <div className="rounded border p-1">
        <img
          src={item.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "contain" }}
        />
      </div>
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        <XIcon size={14} />
      </Button>
    </Stack>
  );
}
