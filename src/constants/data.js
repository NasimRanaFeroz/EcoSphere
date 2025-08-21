import {
  Leaf,
  Award,
  Recycle,
  TrendingUp,
  Shield,
  Zap,
  Sun,
  Battery,
  Utensils,
  Home,
  Heart,
  Sparkles,
} from "lucide-vue-next";

import utensilImage from "../assets/Home&Kitchen/utensil.jpg";
import siliconeCoverImage from "../assets/Home&Kitchen/siliconeCover.jpg";

import bambooToothbrushImage from "../assets/personal/bambooBrush.jpg";
import bodySoapImage from "../assets/Personal/bodySoap.webp";

import reuseBagImage from "../assets/ZeroWaste/reusableBag.webp";

import dishSoapImage from "../assets/GreenClean/dishSoap.webp";

export const topSelling = [
  {
    name: "Bamboo Utensil Set",
    image: utensilImage,
    description:
      "Complete 4-piece bamboo utensil set with carrying case - perfect for eco-friendly dining on-the-go.",
    price: 11.99,
    rating: 5,
    reviews: 142,
    ecoIcon: Utensils,
    badgeIcon: Home,
    badgeText: "Home",
  },
  {
    name: "Reusable Produce Bags",
    image: reuseBagImage,
    description:
      "Set of 6 mesh produce bags made from organic cotton - say goodbye to plastic bags forever.",
    price: 9.99,
    originalPrice: 14.99,
    rating: 5,
    reviews: 287,
    ecoIcon: Heart,
    badgeIcon: Sparkles,
    badgeText: "Organic",
  },
  {
    name: "Reusable Silicone Food Covers",
    image: siliconeCoverImage,
    description:
      "Stretchable silicone lids set of 6 - replace plastic wrap with these durable, dishwasher-safe covers.",
    price: 18.99,
    rating: 5,
    reviews: 156,
    ecoIcon: Shield,
    badgeIcon: Zap,
    badgeText: "New",
  },
  {
    name: "Plant-based Dish Soap",
    image: dishSoapImage,
    description:
      "Concentrated eco-friendly dish soap made from plant-based ingredients - tough on grease, gentle on hands.",
    price: 7.99,
    originalPrice: 10.99,
    rating: 4,
    reviews: 198,
    ecoIcon: Sun,
    badgeIcon: Battery,
    badgeText: "Plant-Based",
  },
  {
    name: "Bamboo Toothbrush Set",
    image: bambooToothbrushImage,
    description:
      "Pack of 4 biodegradable bamboo toothbrushes with soft bristles - sustainable oral care for the family.",
    price: 14.99,
    originalPrice: 19.99,
    rating: 5,
    reviews: 324,
    ecoIcon: Leaf,
    badgeIcon: Award,
    badgeText: "Best Seller",
  },
  {
    name: "Organic Body Soap Bar",
    image: bodySoapImage,
    description:
      "Handcrafted organic soap bar with essential oils - nourishes skin naturally without harsh chemicals.",
    price: 8.99,
    rating: 5,
    reviews: 267,
    ecoIcon: Recycle,
    badgeIcon: TrendingUp,
    badgeText: "Trending",
  },
];
