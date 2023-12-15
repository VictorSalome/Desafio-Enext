import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tenis from "../../assets/Tenis.png";
import { Rating } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export default function CardInfo() {
  return (
    <Card sx={{ maxWidth: 216 }}>
      <CardMedia
        sx={{ width: 180, height: 150 }}
        image={Tenis}
        title="tenisCard"
      />
      <CardContent className="flex flex-col text-center	">
        <Typography
          gutterBottom
          variant="p"
          component="div"
          color="#7A7A7A"
          className="text-xs"
        >
          TÊNIS COURO PUMA R698 Q4 V2
        </Typography>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

        <Typography variant="body2" color="#7A7A7A" className="line-through">
          de R$ 299,00
        </Typography>
        <Typography variant="h6" color="#2EC4B6">
          por R$ 199,00
        </Typography>
        <Typography variant="body2" color="#7A7A7A">
          ou em 3x de 66.33
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button variant="contained">
          <ShoppingCartCheckoutIcon />
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
