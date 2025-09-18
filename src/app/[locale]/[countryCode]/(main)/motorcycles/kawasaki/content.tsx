"use client"

import { Button } from "@lib/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useMemo } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"

const roModels = [
  {
    name: "Ninja 650",
    category: "Supersport & Sport",
    engine: "649 cc twin",
    power: "≈68 CP",
    price: null,
    image: "/assets/kawa/ninja650.png",
    features: ["KTRC", "TFT display", "A2‑ready"],
  },
  {
    name: "Versys 1100",
    category: "Adventure Tourer",
    engine: "1043 cc inline‑4",
    power: "≈120–130 CP",
    price: null,
    image: "/assets/kawa/versys1100.png",
    features: ["Long‑distance comfort", "Touring oriented"],
  },
  {
    name: "H2R",
    category: "Hipersport / Track-only",
    engine: "998 cc supercharged",
    power: "≈310+ CP",
    price: null,
    image: "/assets/kawa/h2r.png",
    features: ["Track only", "Supercharged", "Extreme performance"],
  },
  {
    name: "Ninja 7 Hybrid",
    category: "EV / HEV",
    engine: "451 cc parallel‑twin + electric",
    power: "≈? CP",
    price: "≈ €13 150",
    image: "/assets/kawa/7hyb.png",
    features: ["Hybrid", "e‑boost", "TFT display"],
  },
  {
    name: "Z7 Hybrid",
    category: "EV / HEV",
    engine: "451 cc twin + electric",
    power: "≈? CP",
    price: "≈ €13 150",
    image: "/assets/kawa/z7hyb.png",
    features: ["Hybrid", "e‑boost", "Retro‑modern styling"],
  },
  {
    name: "Z e‑1",
    category: "Supernaked / EV",
    engine: "electric",
    power: "≈? CP",
    price: null,
    image: "/assets/kawa/ze-1.png",
    features: ["Electric", "Naked styling"],
  },
  {
    name: "Ninja e‑1",
    category: "Supersport / EV",
    engine: "electric",
    power: "≈? CP",
    price: null,
    image: "/assets/kawa/ninjae1.png",
    features: ["Electric", "Supersport styling"],
  },
  {
    name: "Ninja ZX‑6R",
    category: "Supersport",
    engine: "636 cc inline‑4",
    power: "≈120–130 CP",
    price: null,
    image: "/assets/kawa/zx6r.png",
    features: ["Advanced electronics", "Supersport performance"],
  },
  {
    name: "Ninja ZX‑10R",
    category: "Hipersport",
    engine: "998 cc inline‑4",
    power: "≈200 CP",
    price: null,
    image: "/assets/kawa/zx10r.png",
    features: ["WSB‑derived electronics", "Track oriented"],
  },
  {
    name: "Ninja ZX‑10RR",
    category: "Hipersport",
    engine: "998 cc inline‑4",
    power: "≈200 CP",
    price: null,
    image: "/assets/kawa/zx10rr.png",
    features: ["VAI intake system", "Limited edition"],
  },
  {
    name: "Ninja ZX‑4R",
    category: "Supersport & Sport",
    engine: "399 cc inline‑4",
    power: "≈77 CP",
    price: null,
    image: "/assets/kawa/zx4r.png",
    features: ["Compact inline‑4", "Agile chassis"],
  },
  {
    name: "Ninja ZX‑4RR",
    category: "Supersport & Sport",
    engine: "399 cc inline‑4",
    power: "≈77–80 CP (air‑boxed)",
    price: null,
    image: "/assets/kawa/zx4rr.png",
    features: ["Top spec ZX‑4R", "Premium components"],
  },
  {
    name: "Ninja 500",
    category: "Supersport & Sport",
    engine: "451 cc twin",
    power: "≈45 CP",
    price: null,
    image: "/assets/kawa/ninja500.png",
    features: ["Lightweight", "Friendly for A2", "Modern styling"],
  },
  {
    name: "Ninja 500 SE",
    category: "Supersport & Sport",
    engine: "451 cc twin",
    power: "≈45 CP",
    price: "≈ €6 990",
    image: "/assets/kawa/ninja500se.png",
    features: ["ABS", "Sporty styling", "Lightweight"],
  },
  {
    name: "Z650",
    category: "Supernaked",
    engine: "649 cc twin",
    power: "≈67–68 CP",
    price: "≈ €8 500",
    image: "/assets/kawa/z650.png",
    features: ["Assist & Slipper Clutch", "TFT display", "A2‑ready"],
  },
  {
    name: "Z650RS",
    category: "Modern Classic",
    engine: "649 cc twin",
    power: "≈68 CP",
    price: "≈ €8 000",
    image: "/assets/kawa/z650rsse.png",
    features: ["Retro styling", "LCD dashboard", "Commuter‑friendly"],
  },
  {
    name: "Z900RS",
    category: "Modern Classic",
    engine: "948 cc inline‑4",
    power: "≈125 CP",
    price: null,
    image: "/assets/kawa/z900rs.png",
    features: ["Radial brakes", "Fine‑tuned exhaust", "Atemporal design"],
  },
  {
    name: "Z900RS SE",
    category: "Modern Classic",
    engine: "948 cc inline‑4",
    power: "≈125–140 CP",
    price: null,
    image: "/assets/kawa/z900rsse.png",
    features: ["Brembo radial brakes", "Öhlins suspension", "KTRC"],
  },
  {
    name: "Eliminator 500",
    category: "Cruiser / Urban Cruiser",
    engine: "451 cc twin",
    power: "≈45 CP",
    price: null,
    image: "/assets/kawa/eliminator500.png",
    features: ["Low seat height", "Cruiser styling"],
  },
  {
    name: "Eliminator 500 SE",
    category: "Cruiser / Urban Cruiser",
    engine: "451 cc twin",
    power: "≈45 CP",
    price: "≈ ? €",
    image: "/assets/kawa/eliminator500se.png",
    features: ["Low cruiser chassis", "Accessible"],
  },
  {
    name: "Vulcan S",
    category: "Cruiser / Urban Cruiser",
    engine: "649 cc twin",
    power: "≈61 CP",
    price: null,
    image: "/assets/kawa/vulcans.png",
    features: ["Low seat", "Commuter cruiser", "Easy to ride"],
  },

  {
    name: "Versys 1100 S",
    category: "Adventure Tourer",
    engine: "1043 cc inline‑4",
    power: "≈120–130 CP",
    price: null,
    image: "/assets/kawa/versys1100se.png",
    features: ["Sportier suspension", "Touring capability"],
  },
  {
    name: "Versys 650",
    category: "Adventure Tourer",
    engine: "649 cc twin",
    power: "≈68 CP",
    price: null,
    image: "/assets/kawa/versys650.png",
    features: ["Mid‑size touring", "Comfortable", "2026 model"],
  },
  {
    name: "1000SX",
    category: "Sport Touring",
    engine: "≈1000 cc inline‑4",
    power: "≈140 CP",
    price: null,
    image: "/assets/kawa/1000sx.png",
    features: ["Sport touring", "Comfort", "Electronics"],
  },
  {
    name: "1100SX",
    category: "Sport Touring",
    engine: "≈1100 cc inline‑4",
    power: "≈? CP",
    price: null,
    image: "/assets/kawa/1100sx.png",
    features: ["Advanced electronics", "Touring", "ABS"],
  },
  {
    name: "1100SX SE",
    category: "Sport Touring",
    engine: "≈1100 cc inline‑4",
    power: "≈? CP",
    price: null,
    image: "/assets/kawa/1100sxse.png",
    features: ["Special Edition", "Comfort", "TFT"],
  },
  {
    name: "40th Anniversary (ZX-10R)",
    category: "Hipersport",
    engine: "998 cc inline‑4",
    power: "≈200 CP",
    price: null,
    image: "/assets/kawa/zx10r40th.png",
    features: ["40th livery", "Track ready", "Electronics"],
  },
  {
    name: "ZX-4RR 40th",
    category: "Supersport",
    engine: "399 cc inline‑4",
    power: "≈80 CP",
    price: null,
    image: "/assets/kawa/zx4rr40th.png",
    features: ["Limited edition", "40th paint", "High‑revving"],
  },
  {
    name: "ZX-6R 40th",
    category: "Supersport",
    engine: "636 cc inline‑4",
    power: "≈130 CP",
    price: null,
    image: "/assets/kawa/zx6r40th.png",
    features: ["40th styling", "Race ready", "Electronics"],
  },

  {
    name: "H2 SX",
    category: "Sport Touring",
    engine: "998 cc supercharged",
    power: "≈200 CP",
    price: null,
    image: "/assets/kawa/h2sx.png",
    features: ["Sport touring", "Supercharged", "Electronics"],
  },
  {
    name: "SX SE H2",
    category: "Sport Touring",
    engine: "998 cc supercharged",
    power: "≈200 CP",
    price: null,
    image: "/assets/kawa/sxseh2.png",
    features: ["High-end touring", "Kawasaki Electronica", "Quickshifter"],
  },
  {
    name: "Z900",
    category: "Supernaked",
    engine: "948 cc inline‑4",
    power: "≈125 CP",
    price: null,
    image: "/assets/kawa/z900.png",
    features: ["Inline‑4 power", "Agile", "Modern styling"],
  },
  {
    name: "Z900 SE",
    category: "Supernaked",
    engine: "948 cc inline‑4",
    power: "≈125 CP",
    price: null,
    image: "/assets/kawa/z900se.png",
    features: ["Öhlins suspension", "Braking upgrade", "SE styling"],
  },
  {
    name: "Elektrode 20",
    category: "Kids Electric",
    engine: "electric",
    power: "Low output",
    price: null,
    image: "/assets/kawa/elektrode20.png",
    features: ["Electric", "For kids", "Off‑road style"],
  },
  {
    name: "KX65",
    category: "Motocross",
    engine: "65 cc 2‑stroke",
    power: "≈16 CP",
    price: null,
    image: "/assets/kawa/kx65.png",
    features: ["Youth MX", "Lightweight", "Manual transmission"],
  },
  {
    name: "KX85",
    category: "Motocross",
    engine: "85 cc 2‑stroke",
    power: "≈25 CP",
    price: null,
    image: "/assets/kawa/kx85.png",
    features: ["Beginner MX", "Lightweight", "Aggressive styling"],
  },
  {
    name: "KX85 II",
    category: "Motocross",
    engine: "85 cc 2‑stroke (big wheel)",
    power: "≈25 CP",
    price: null,
    image: "/assets/kawa/kx852.png",
    features: ["Big wheel", "Junior MX", "2‑stroke"],
  },
  {
    name: "KX250",
    category: "Motocross",
    engine: "249 cc 4‑stroke",
    power: "≈40–45 CP",
    price: null,
    image: "/assets/kawa/kx250.png",
    features: ["Race ready", "Light frame", "FI engine"],
  },
  {
    name: "KX450",
    category: "Motocross",
    engine: "449 cc 4‑stroke",
    power: "≈55–60 CP",
    price: null,
    image: "/assets/kawa/kx450.png",
    features: ["Top spec", "Launch control", "Hydraulic clutch"],
  },
  {
    name: "Meguro S1",
    category: "Modern Classic",
    engine: "≈650 cc twin",
    power: "≈50 CP",
    price: null,
    image: "/assets/kawa/meguros1.png",
    features: ["Vintage styling", "Chrome details", "Heritage model"],
  },
  {
    name: "W230",
    category: "Retro",
    engine: "≈230 cc single",
    power: "≈18 CP",
    price: null,
    image: "/assets/kawa/w230.png",
    features: ["Beginner friendly", "Retro look", "Lightweight"],
  },
  {
    name: "W800",
    category: "Retro",
    engine: "773 cc twin",
    power: "≈50 CP",
    price: null,
    image: "/assets/kawa/w800.png",
    features: ["Air‑cooled", "Classic styling", "Comfortable ride"],
  },
  {
    name: "Z500",
    category: "Supernaked / Entry",
    engine: "451 cc twin",
    power: "≈45 CP",
    price: null,
    image: "/assets/kawa/z500.png",
    features: ["A2 compliant", "Modern look", "Lightweight"],
  },
  {
    name: "Z500 SE",
    category: "Supernaked / Entry",
    engine: "451 cc twin",
    power: "≈45 CP",
    price: null,
    image: "/assets/kawa/z500se.png",
    features: ["Special Edition", "ABS", "Color styling"],
  },
  {
    name: "Z900RS SE",
    category: "Modern Classic",
    engine: "948 cc inline‑4",
    power: "≈125 CP",
    price: null,
    image: "/assets/kawa/z900rsse.png",
    features: ["SE styling", "Suspension upgrade", "Retro-modern"],
  },
  {
    name: "ZH2",
    category: "Hypernaked",
    engine: "998 cc supercharged",
    power: "≈200 CP",
    price: null,
    image: "/assets/kawa/zh2.png",
    features: ["Supercharged", "Naked", "Track or street"],
  },
  {
    name: "ZH2 SE",
    category: "Hypernaked",
    engine: "998 cc supercharged",
    power: "≈200 CP",
    price: null,
    image: "/assets/kawa/zh2se.png",
    features: ["Öhlins suspension", "SE paint", "Electronics suite"],
  },
  {
    name: "Ninja 125",
    category: "Supersport / Entry",
    engine: "125 cc single",
    power: "≈15 CP",
    price: null,
    image: "/assets/kawa/ninja125.png",
    features: ["A1 license", "Sporty look", "Beginner bike"],
  },
]

const enModels = [
  {
    name: "Ninja 650",
    category: "Supersport / Sport",
    engine: "649 cc twin",
    power: "≈68 HP",
    price: null,
    image: "/assets/kawa/ninja650.png",
    features: ["KTRC", "TFT display", "A2-ready"],
  },
  {
    name: "Versys 1100",
    category: "Adventure Tourer",
    engine: "1043 cc inline-4",
    power: "≈120–130 HP",
    price: null,
    image: "/assets/kawa/versys1100.png",
    features: ["Long-distance comfort", "Touring oriented"],
  },
  {
    name: "H2R",
    category: "Hypersport / Track-only",
    engine: "998 cc supercharged",
    power: "≈310+ HP",
    price: null,
    image: "/assets/kawa/h2r.png",
    features: ["Track only", "Supercharged", "Extreme performance"],
  },
  {
    name: "Ninja 7 Hybrid",
    category: "EV / HEV",
    engine: "451 cc parallel-twin + electric",
    power: "≈? HP",
    price: "≈ €13,150",
    image: "/assets/kawa/7hyb.png",
    features: ["Hybrid", "e-boost", "TFT display"],
  },
  {
    name: "Z7 Hybrid",
    category: "EV / HEV",
    engine: "451 cc twin + electric",
    power: "≈? HP",
    price: "≈ €13,150",
    image: "/assets/kawa/z7hyb.png",
    features: ["Hybrid", "e-boost", "Retro-modern styling"],
  },
  {
    name: "Z e-1",
    category: "Supernaked / EV",
    engine: "electric",
    power: "≈? HP",
    price: null,
    image: "/assets/kawa/ze-1.png",
    features: ["Electric", "Naked styling"],
  },
  {
    name: "Ninja e-1",
    category: "Supersport / EV",
    engine: "electric",
    power: "≈? HP",
    price: null,
    image: "/assets/kawa/ninjae1.png",
    features: ["Electric", "Supersport styling"],
  },
  {
    name: "Ninja ZX-6R",
    category: "Supersport",
    engine: "636 cc inline-4",
    power: "≈120–130 HP",
    price: null,
    image: "/assets/kawa/zx6r.png",
    features: ["Advanced electronics", "Supersport performance"],
  },
  {
    name: "Ninja ZX-10R",
    category: "Hypersport",
    engine: "998 cc inline-4",
    power: "≈200 HP",
    price: null,
    image: "/assets/kawa/zx10r.png",
    features: ["WSB-derived electronics", "Track oriented"],
  },
  {
    name: "Ninja ZX-10RR",
    category: "Hypersport",
    engine: "998 cc inline-4",
    power: "≈200 HP",
    price: null,
    image: "/assets/kawa/zx10rr.png",
    features: ["VAI intake system", "Limited edition"],
  },
  {
    name: "Ninja ZX-4R",
    category: "Supersport / Sport",
    engine: "399 cc inline-4",
    power: "≈77 HP",
    price: null,
    image: "/assets/kawa/zx4r.png",
    features: ["Compact inline-4", "Agile chassis"],
  },
  {
    name: "Ninja ZX-4RR",
    category: "Supersport / Sport",
    engine: "399 cc inline-4",
    power: "≈77–80 HP (air-boxed)",
    price: null,
    image: "/assets/kawa/zx4rr.png",
    features: ["Top spec ZX-4R", "Premium components"],
  },
  {
    name: "Ninja 500",
    category: "Supersport / Sport",
    engine: "451 cc twin",
    power: "≈45 HP",
    price: null,
    image: "/assets/kawa/ninja500.png",
    features: ["Lightweight", "Friendly for A2", "Modern styling"],
  },
  {
    name: "Ninja 500 SE",
    category: "Supersport / Sport",
    engine: "451 cc twin",
    power: "≈45 HP",
    price: "≈ €6,990",
    image: "/assets/kawa/ninja500se.png",
    features: ["ABS", "Sporty styling", "Lightweight"],
  },
  {
    name: "Z650",
    category: "Supernaked",
    engine: "649 cc twin",
    power: "≈67–68 HP",
    price: "≈ €8,500",
    image: "/assets/kawa/z650.png",
    features: ["Assist & Slipper Clutch", "TFT display", "A2-ready"],
  },
  {
    name: "Z650RS",
    category: "Modern Classic",
    engine: "649 cc twin",
    power: "≈68 HP",
    price: "≈ €8,000",
    image: "/assets/kawa/z650rsse.png",
    features: ["Retro styling", "LCD dashboard", "Commuter-friendly"],
  },
  {
    name: "Z900RS",
    category: "Modern Classic",
    engine: "948 cc inline-4",
    power: "≈125 HP",
    price: null,
    image: "/assets/kawa/z900rs.png",
    features: ["Radial brakes", "Fine-tuned exhaust", "Timeless design"],
  },
  {
    name: "Z900RS SE",
    category: "Modern Classic",
    engine: "948 cc inline-4",
    power: "≈125–140 HP",
    price: null,
    image: "/assets/kawa/z900rsse.png",
    features: ["Brembo radial brakes", "Öhlins suspension", "KTRC"],
  },
  {
    name: "Eliminator 500",
    category: "Cruiser / Urban Cruiser",
    engine: "451 cc twin",
    power: "≈45 HP",
    price: null,
    image: "/assets/kawa/eliminator500.png",
    features: ["Low seat height", "Cruiser styling"],
  },
  {
    name: "Eliminator 500 SE",
    category: "Cruiser / Urban Cruiser",
    engine: "451 cc twin",
    power: "≈45 HP",
    price: "≈ ? €",
    image: "/assets/kawa/eliminator500se.png",
    features: ["Low cruiser chassis", "Accessible"],
  },
  {
    name: "Vulcan S",
    category: "Cruiser / Urban Cruiser",
    engine: "649 cc twin",
    power: "≈61 HP",
    price: null,
    image: "/assets/kawa/vulcans.png",
    features: ["Low seat", "Commuter cruiser", "Easy to ride"],
  },
  {
    name: "Versys 1100 S",
    category: "Adventure Tourer",
    engine: "1043 cc inline-4",
    power: "≈120–130 HP",
    price: null,
    image: "/assets/kawa/versys1100se.png",
    features: ["Sportier suspension", "Touring capability"],
  },
  {
    name: "Versys 650",
    category: "Adventure Tourer",
    engine: "649 cc twin",
    power: "≈68 HP",
    price: null,
    image: "/assets/kawa/versys650.png",
    features: ["Mid-size touring", "Comfortable", "2026 model"],
  },
  {
    name: "1000SX",
    category: "Sport Touring",
    engine: "≈1000 cc inline-4",
    power: "≈140 HP",
    price: null,
    image: "/assets/kawa/1000sx.png",
    features: ["Sport touring", "Comfort", "Electronics"],
  },
  {
    name: "1100SX",
    category: "Sport Touring",
    engine: "≈1100 cc inline-4",
    power: "≈? HP",
    price: null,
    image: "/assets/kawa/1100sx.png",
    features: ["Advanced electronics", "Touring", "ABS"],
  },
  {
    name: "1100SX SE",
    category: "Sport Touring",
    engine: "≈1100 cc inline-4",
    power: "≈? HP",
    price: null,
    image: "/assets/kawa/1100sxse.png",
    features: ["Special Edition", "Comfort", "TFT"],
  },
  {
    name: "40th Anniversary (ZX-10R)",
    category: "Hypersport",
    engine: "998 cc inline-4",
    power: "≈200 HP",
    price: null,
    image: "/assets/kawa/zx10r40th.png",
    features: ["40th livery", "Track ready", "Electronics"],
  },
  {
    name: "ZX-4RR 40th",
    category: "Supersport",
    engine: "399 cc inline-4",
    power: "≈80 HP",
    price: null,
    image: "/assets/kawa/zx4rr40th.png",
    features: ["Limited edition", "40th paint", "High-revving"],
  },
  {
    name: "ZX-6R 40th",
    category: "Supersport",
    engine: "636 cc inline-4",
    power: "≈130 HP",
    price: null,
    image: "/assets/kawa/zx6r40th.png",
    features: ["40th styling", "Race ready", "Electronics"],
  },
  {
    name: "H2 SX",
    category: "Sport Touring",
    engine: "998 cc supercharged",
    power: "≈200 HP",
    price: null,
    image: "/assets/kawa/h2sx.png",
    features: ["Sport touring", "Supercharged", "Electronics"],
  },
  {
    name: "SX SE H2",
    category: "Sport Touring",
    engine: "998 cc supercharged",
    power: "≈200 HP",
    price: null,
    image: "/assets/kawa/sxseh2.png",
    features: ["High-end touring", "Kawasaki electronics", "Quickshifter"],
  },
  {
    name: "Z900",
    category: "Supernaked",
    engine: "948 cc inline-4",
    power: "≈125 HP",
    price: null,
    image: "/assets/kawa/z900.png",
    features: ["Inline-4 power", "Agile", "Modern styling"],
  },
  {
    name: "Z900 SE",
    category: "Supernaked",
    engine: "948 cc inline-4",
    power: "≈125 HP",
    price: null,
    image: "/assets/kawa/z900se.png",
    features: ["Öhlins suspension", "Braking upgrade", "SE styling"],
  },
  {
    name: "Elektrode 20",
    category: "Kids Electric",
    engine: "electric",
    power: "Low output",
    price: null,
    image: "/assets/kawa/elektrode20.png",
    features: ["Electric", "For kids", "Off-road style"],
  },
  {
    name: "KX65",
    category: "Motocross",
    engine: "65 cc 2-stroke",
    power: "≈16 HP",
    price: null,
    image: "/assets/kawa/kx65.png",
    features: ["Youth MX", "Lightweight", "Manual transmission"],
  },
  {
    name: "KX85",
    category: "Motocross",
    engine: "85 cc 2-stroke",
    power: "≈25 HP",
    price: null,
    image: "/assets/kawa/kx85.png",
    features: ["Beginner MX", "Lightweight", "Aggressive styling"],
  },
  {
    name: "KX85 II",
    category: "Motocross",
    engine: "85 cc 2-stroke (big wheel)",
    power: "≈25 HP",
    price: null,
    image: "/assets/kawa/kx852.png",
    features: ["Big wheel", "Junior MX", "2-stroke"],
  },
  {
    name: "KX250",
    category: "Motocross",
    engine: "249 cc 4-stroke",
    power: "≈40–45 HP",
    price: null,
    image: "/assets/kawa/kx250.png",
    features: ["Race ready", "Light frame", "FI engine"],
  },
  {
    name: "KX450",
    category: "Motocross",
    engine: "449 cc 4-stroke",
    power: "≈55–60 HP",
    price: null,
    image: "/assets/kawa/kx450.png",
    features: ["Top spec", "Launch control", "Hydraulic clutch"],
  },
  {
    name: "Meguro S1",
    category: "Modern Classic",
    engine: "≈650 cc twin",
    power: "≈50 HP",
    price: null,
    image: "/assets/kawa/meguros1.png",
    features: ["Vintage styling", "Chrome details", "Heritage model"],
  },
  {
    name: "W230",
    category: "Retro",
    engine: "≈230 cc single",
    power: "≈18 HP",
    price: null,
    image: "/assets/kawa/w230.png",
    features: ["Beginner friendly", "Retro look", "Lightweight"],
  },
  {
    name: "W800",
    category: "Retro",
    engine: "773 cc twin",
    power: "≈50 HP",
    price: null,
    image: "/assets/kawa/w800.png",
    features: ["Air-cooled", "Classic styling", "Comfortable ride"],
  },
  {
    name: "Z500",
    category: "Supernaked / Entry",
    engine: "451 cc twin",
    power: "≈45 HP",
    price: null,
    image: "/assets/kawa/z500.png",
    features: ["A2 compliant", "Modern look", "Lightweight"],
  },
  {
    name: "Z500 SE",
    category: "Supernaked / Entry",
    engine: "451 cc twin",
    power: "≈45 HP",
    price: null,
    image: "/assets/kawa/z500se.png",
    features: ["Special Edition", "ABS", "Color styling"],
  },
  {
    name: "Z900RS SE",
    category: "Modern Classic",
    engine: "948 cc inline-4",
    power: "≈125 HP",
    price: null,
    image: "/assets/kawa/z900rsse.png",
    features: ["SE styling", "Suspension upgrade", "Retro-modern"],
  },
  {
    name: "ZH2",
    category: "Hypernaked",
    engine: "998 cc supercharged",
    power: "≈200 HP",
    price: null,
    image: "/assets/kawa/zh2.png",
    features: ["Supercharged", "Naked", "Track or street"],
  },
  {
    name: "ZH2 SE",
    category: "Hypernaked",
    engine: "998 cc supercharged",
    power: "≈200 HP",
    price: null,
    image: "/assets/kawa/zh2se.png",
    features: ["Öhlins suspension", "SE paint", "Electronics suite"],
  },
  {
    name: "Ninja 125",
    category: "Supersport / Entry",
    engine: "125 cc single",
    power: "≈15 HP",
    price: null,
    image: "/assets/kawa/ninja125.png",
    features: ["A1 license", "Sporty look", "Beginner bike"],
  },
];

export default function KawasakiPageContent() {
  const { locale } = useParams()
  const t = useTranslations("kawasakiPage")

  const models = useMemo(() => {
    if (locale === 'en') return enModels

    return roModels
  }, [locale])

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <LocalizedClientLink href="/motorcycles">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("backToMotorcycles")}
            </LocalizedClientLink>
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t("cfMoto")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4 text-center">
                  <Image
                    src={model.image}
                    alt={model.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-xl text-primary">{model.name}</CardTitle>
                <CardDescription>{model.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("engine")}</span>
                    <span className="text-foreground">{model.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("power")}</span>
                    <span className="text-foreground">{model.power}</span>
                  </div>
                </div>

                {/*<div className="mb-6">*/}
                {/*  <h4 className="font-semibold mb-3 text-foreground">{t("features")}</h4>*/}
                {/*  <ul className="space-y-2">*/}
                {/*    {model.features.map((feature, featureIndex) => (*/}
                {/*      <li key={featureIndex} className="text-muted-foreground flex items-center">*/}
                {/*        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>*/}
                {/*        {t(feature.toLowerCase().replace(/\s+/g, "").replace(":", ""))}*/}
                {/*      </li>*/}
                {/*    ))}*/}
                {/*  </ul>*/}
                {/*</div>*/}

                <Button className="w-full bg-gradient-primary hover:shadow-glow">
                  <LocalizedClientLink href="/contact-us">{t("requestOffer")}</LocalizedClientLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
