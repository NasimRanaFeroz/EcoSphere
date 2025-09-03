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
  Droplets,
  Wind,
  TreePine,
  Star,
  Package,
  Coffee,
  Shirt,
  ShoppingBag,
  Wallet,
  Glasses,
  Footprints,
  Brush,
} from "lucide-vue-next";

import utensilImage from "../assets/Home&Kitchen/utensil.jpg";
import trashBagImage from "../assets/Home&Kitchen/trashBag.webp";
import siliconeCoverImage from "../assets/Home&Kitchen/siliconeCover.jpg";
import waterBottleImage from "../assets/Home&Kitchen/waterBottle.jpeg";
import dishclothsImage from "../assets/Home&Kitchen/dishCloth.jpg";
import cuttingBoardImage from "../assets/Home&Kitchen/board.webp";

import bambooToothbrushImage from "../assets/Personal/bambooBrush.jpg";
import bodySoapImage from "../assets/Personal/bodySoap.webp";
import shampooBarImage from "../assets/Personal/shampoo.jpg";
import deodorantImage from "../assets/Personal/deodorant.jpg";
import toothpasteTabsImage from "../assets/Personal/toothpasteTab.jpg";
import cottonBudsImage from "../assets/Personal/cottonBud.webp";

import reuseBagImage from "../assets/ZeroWaste/reusableBag.webp";
import foodWrapImage from "../assets/ZeroWaste/foodWrap.webp";
import strawKitImage from "../assets/ZeroWaste/straw.webp";
import glassJarsImage from "../assets/ZeroWaste/jar.webp";
import sprayBottleImage from "../assets/ZeroWaste/spray.webp";
import compostBinImage from "../assets/ZeroWaste/bin.jpeg";

import handBagImage from "../assets/Fashion/bag.webp";
import hempShirtImage from "../assets/Fashion/t-shirt.webp";
import corkWalletImage from "../assets/Fashion/wallet.webp";
import sunglassesImage from "../assets/Fashion/sunglass.jpg";
import bambooSocksImage from "../assets/Fashion/socks.webp";
import ecoSneakersImage from "../assets/Fashion/shoes.webp";

import dishSoapImage from "../assets/GreenClean/dishSoap.webp";
import laundryRefillImage from "../assets/GreenClean/detergent.webp";
import spongesImage from "../assets/GreenClean/sponge.webp";
import multiSurfaceImage from "../assets/GreenClean/cleaner.webp";
import scrubBrushImage from "../assets/GreenClean/scrub.webp";
import floorCleanerImage from "../assets/GreenClean/floorCleaner.webp";
export const sustainableHomeKitchen = [
  {
    id: 1,
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
    id: 2,
    name: "Compostable Trash Bags",
    image: trashBagImage,
    description:
      "Biodegradable trash bags made from plant-based materials - strong, leak-proof, and completely compostable.",
    price: 15.99,
    originalPrice: 19.99,
    rating: 4,
    reviews: 89,
    ecoIcon: Recycle,
    badgeIcon: Leaf,
    badgeText: "Compostable",
  },
  {
    id: 3,
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
    id: 4,
    name: "Stainless Steel Water Bottle",
    image: waterBottleImage,
    description:
      "Double-walled insulated water bottle keeps drinks cold for 24hrs, hot for 12hrs - BPA-free and leak-proof.",
    price: 24.99,
    rating: 5,
    reviews: 412,
    ecoIcon: Droplets,
    badgeIcon: Star,
    badgeText: "Premium",
  },
  {
    id: 5,
    name: "Organic Cotton Dishcloths",
    image: dishclothsImage,
    description:
      "Pack of 8 organic cotton dishcloths - highly absorbent, machine washable, and naturally antimicrobial.",
    price: 12.99,
    rating: 4,
    reviews: 203,
    ecoIcon: Heart,
    badgeIcon: Sparkles,
    badgeText: "Organic",
  },
  {
    id: 6,
    name: "Bamboo Cutting Board",
    image: cuttingBoardImage,
    description:
      "Large bamboo cutting board with juice groove - naturally antibacterial and gentle on knife blades.",
    price: 29.99,
    rating: 5,
    reviews: 178,
    ecoIcon: TreePine,
    badgeIcon: Award,
    badgeText: "Premium",
  },
];

export const ecoPersonalCare = [
  {
    id: 7,
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
    id: 8,
    name: "Organic Shampoo Bar",
    image: shampooBarImage,
    description:
      "Plastic-free shampoo bar with organic ingredients - lasts 80+ washes and works for all hair types.",
    price: 9.99,
    rating: 4,
    reviews: 156,
    ecoIcon: Sun,
    badgeIcon: Sparkles,
    badgeText: "Organic",
  },
  {
    id: 9,
    name: "Refillable Natural Deodorant",
    image: deodorantImage,
    description:
      "Aluminum-free natural deodorant in refillable packaging - 24-hour protection with organic ingredients.",
    price: 16.99,
    rating: 4,
    reviews: 98,
    ecoIcon: Wind,
    badgeIcon: Package,
    badgeText: "Refillable",
  },
  {
    id: 10,
    name: "Plant-based Toothpaste Tablets",
    image: toothpasteTabsImage,
    description:
      "Fluoride-free toothpaste tablets in glass jar - plastic-free oral care with natural whitening power.",
    price: 13.99,
    rating: 4,
    reviews: 87,
    ecoIcon: Leaf,
    badgeIcon: Zap,
    badgeText: "Zero Waste",
  },
  {
    id: 11,
    name: "Biodegradable Cotton Swabs",
    image: cottonBudsImage,
    description:
      "Bamboo cotton swabs with organic cotton tips - plastic-free alternative that's completely biodegradable.",
    price: 6.99,
    rating: 5,
    reviews: 143,
    ecoIcon: Recycle,
    badgeIcon: Heart,
    badgeText: "Plastic-Free",
  },
  {
    id: 12,
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

export const zeroWasteLifestyle = [
  {
    id: 13,
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
    id: 14,
    name: "Beeswax Food Wraps",
    image: foodWrapImage,
    description:
      "Set of 3 organic cotton wraps infused with beeswax - reusable alternative to plastic wrap and foil.",
    price: 16.99,
    rating: 4,
    reviews: 234,
    ecoIcon: Shield,
    badgeIcon: Sun,
    badgeText: "Natural",
  },
  {
    id: 15,
    name: "Stainless Steel Straw Kit",
    image: strawKitImage,
    description:
      "Set of 4 reusable straws with cleaning brush and carrying pouch - bent and straight options included.",
    price: 8.99,
    rating: 5,
    reviews: 189,
    ecoIcon: Droplets,
    badgeIcon: Package,
    badgeText: "Kit",
  },
  {
    id: 16,
    name: "Glass Food Storage Jars",
    image: glassJarsImage,
    description:
      "Set of 4 airtight glass jars with bamboo lids - perfect for pantry organization and food storage.",
    price: 22.99,
    rating: 5,
    reviews: 167,
    ecoIcon: Package,
    badgeIcon: Star,
    badgeText: "Premium",
  },
  {
    id: 17,
    name: "Refillable Cleaning Spray Bottle",
    image: sprayBottleImage,
    description:
      "Durable glass spray bottle with silicone sleeve - refillable design reduces plastic waste.",
    price: 12.99,
    rating: 4,
    reviews: 76,
    ecoIcon: Leaf,
    badgeIcon: Package,
    badgeText: "Refillable",
  },
  {
    id: 18,
    name: "Compost Bin for Kitchen Scraps",
    image: compostBinImage,
    description:
      "Countertop compost bin with charcoal filter - odor-free composting for kitchen scraps and organic waste.",
    price: 34.99,
    rating: 4,
    reviews: 128,
    ecoIcon: Recycle,
    badgeIcon: Coffee,
    badgeText: "Kitchen",
  },
];

export const sustainableFashion = [
  {
    id: 19,
    name: "Organic Cotton Tote Bag",
    image: handBagImage,
    description:
      "Heavy-duty organic cotton tote with reinforced handles - perfect for shopping, beach, or everyday use.",
    price: 14.99,
    rating: 5,
    reviews: 298,
    ecoIcon: ShoppingBag,
    badgeIcon: Sparkles,
    badgeText: "Organic",
  },
  {
    id: 20,
    name: "Hemp Fabric T-Shirt",
    image: hempShirtImage,
    description:
      "Soft hemp-cotton blend t-shirt - naturally antibacterial, breathable, and gets softer with each wash.",
    price: 26.99,
    rating: 4,
    reviews: 145,
    ecoIcon: Shirt,
    badgeIcon: Leaf,
    badgeText: "Hemp",
  },
  {
    id: 21,
    name: "Cork Leather Wallet",
    image: corkWalletImage,
    description:
      "Vegan leather wallet made from cork - water-resistant, durable, and supports sustainable forestry.",
    price: 32.99,
    rating: 5,
    reviews: 89,
    ecoIcon: Wallet,
    badgeIcon: TreePine,
    badgeText: "Vegan",
  },
  {
    id: 22,
    name: "Recycled Plastic Sunglasses",
    image: sunglassesImage,
    description:
      "UV400 protection sunglasses made from recycled ocean plastic - stylish and sustainable eyewear.",
    price: 45.99,
    rating: 4,
    reviews: 167,
    ecoIcon: Glasses,
    badgeIcon: Recycle,
    badgeText: "Recycled",
  },
  {
    id: 23,
    name: "Bamboo Fiber Socks",
    image: bambooSocksImage,
    description:
      "Pack of 3 bamboo fiber socks - naturally antimicrobial, moisture-wicking, and incredibly soft.",
    price: 18.99,
    rating: 5,
    reviews: 203,
    ecoIcon: Wind,
    badgeIcon: TreePine,
    badgeText: "Bamboo",
  },
  {
    id: 24,
    name: "Eco-Friendly Sneakers",
    image: ecoSneakersImage,
    description:
      "Sustainable sneakers made from recycled materials - comfortable, durable, and carbon-neutral shipping.",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4,
    reviews: 134,
    ecoIcon: Footprints,
    badgeIcon: Recycle,
    badgeText: "Recycled",
  },
];

export const greenCleaningSupplies = [
  {
    id: 25,
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
    id: 26,
    name: "Concentrated Laundry Detergent Refills",
    image: laundryRefillImage,
    description:
      "Eco-friendly laundry detergent refill pods - concentrated formula works in all water temperatures.",
    price: 19.99,
    rating: 4,
    reviews: 156,
    ecoIcon: Package,
    badgeIcon: Droplets,
    badgeText: "Refill",
  },
  {
    id: 27,
    name: "Compostable Cleaning Sponges",
    image: spongesImage,
    description:
      "Pack of 6 plant-based cleaning sponges - effective scrubbing power that's fully compostable.",
    price: 11.99,
    rating: 4,
    reviews: 87,
    ecoIcon: Recycle,
    badgeIcon: Leaf,
    badgeText: "Compostable",
  },
  {
    id: 28,
    name: "Eco-friendly Multi-surface Cleaner",
    image: multiSurfaceImage,
    description:
      "Plant-based multi-surface cleaner in refillable glass bottle - effective on all surfaces, safe for families.",
    price: 13.99,
    rating: 5,
    reviews: 243,
    ecoIcon: Leaf,
    badgeIcon: Sun,
    badgeText: "All-Natural",
  },
  {
    id: 29,
    name: "Wooden Dish Scrub Brush",
    image: scrubBrushImage,
    description:
      "Wooden dish brush with natural bristles - plastic-free cleaning tool with replaceable brush heads.",
    price: 9.99,
    rating: 5,
    reviews: 134,
    ecoIcon: Brush,
    badgeIcon: TreePine,
    badgeText: "Wooden",
  },
  {
    id: 30,
    name: "Natural Floor Cleaner",
    image: floorCleanerImage,
    description:
      "Concentrated natural floor cleaner - safe for all floor types and leaves no toxic residues.",
    price: 16.99,
    rating: 4,
    reviews: 98,
    ecoIcon: Leaf,
    badgeIcon: Home,
    badgeText: "Safe",
  },
];

export const allProducts = [
  ...sustainableHomeKitchen,
  ...ecoPersonalCare,
  ...zeroWasteLifestyle,
  ...sustainableFashion,
  ...greenCleaningSupplies,
];

export const categories = {
  sustainableHomeKitchen: {
    name: "Sustainable Home & Kitchen",
    icon: Home,
    description: "Eco-friendly essentials for your home and kitchen",
    products: sustainableHomeKitchen,
  },
  ecoPersonalCare: {
    name: "Eco-Friendly Personal Care",
    icon: Heart,
    description: "Natural and organic personal care products",
    products: ecoPersonalCare,
  },
  zeroWasteLifestyle: {
    name: "Zero-Waste Lifestyle",
    icon: Recycle,
    description: "Products to help you live a zero-waste lifestyle",
    products: zeroWasteLifestyle,
  },
  sustainableFashion: {
    name: "Sustainable Fashion & Accessories",
    icon: Shirt,
    description: "Eco-conscious fashion and accessories",
    products: sustainableFashion,
  },
  greenCleaningSupplies: {
    name: "Green Cleaning Supplies",
    icon: Leaf,
    description: "Plant-based and eco-friendly cleaning products",
    products: greenCleaningSupplies,
  },
};

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
