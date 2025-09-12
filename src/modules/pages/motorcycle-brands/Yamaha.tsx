import { Button } from "@lib/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@lib/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Yamaha = () => {
  const models = [
    {
      name: "YZF-R125",
      category: "Supersport",
      engine: "125cc, 1 cilindru",
      power: "15 CP",
      price: "€5,000",
      image: "/assets/yamaha/yamaha-r125-009112.jpg",
      features: ["A1 License", "Lightweight", "Sporty design"],
    },
    {
      name: "MT-07",
      category: "Naked",
      engine: "689cc, 2 cilindri",
      power: "74.8 CP",
      price: "€7,500",
      image: "/assets/yamaha/yamaha-mt-07-833903.jpg",
      features: ["Assist & Slipper Clutch", "LED Lighting", "TFT Display"],
    },
    {
      name: "MT-03",
      category: "Naked",
      engine: "321cc, 2 cilindri",
      power: "42 CP",
      price: "€4,600",
      image: "/assets/yamaha/yamaha-mt-03-119737.jpg",
      features: ["ABS", "Compact design", "Beginner-friendly"],
    },
    {
      name: "MT-09",
      category: "Naked",
      engine: "889cc, 3 cilindri",
      power: "119 CP",
      price: "€9,500",
      image: "/assets/yamaha/yamaha-mt-09-211226.jpg",
      features: ["Quickshifter", "TCS", "Power Mode"],
    },
    {
      name: "YZF-R1",
      category: "Supersport",
      engine: "998cc, 4 cilindri",
      power: "200 CP",
      price: "€17,200",
      image: "/assets/yamaha/yamaha-r1-race-068366.jpg",
      features: ["IMU 6D", "Slide Control", "Launch Control"],
    },

    {
      name: "Tracer 9",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€12,000",
      image: "/assets/yamaha/yamaha-tracer-9-912261.jpg",
      features: ["Rider Modes", "Cruise Control", "TFT Display"],
    },
    {
      name: "Ténéré 700",
      category: "Adventure",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€10,200",
      image: "/assets/yamaha/yamaha-tenere-700-769009.jpg",
      features: ["ABS", "Rally Mode", "LED Lighting"],
    },
    {
      name: "Ténéré 700 World Raid",
      category: "Adventure",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€13,000",
      image: "/assets/yamaha/yamaha-tenere-700-rally-102110.jpg",
      features: [
        "Dual Fuel Tank",
        "Longer Travel Suspension",
        "Rally-inspired",
      ],
    },
    {
      name: "XSR900",
      category: "Retro",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€9,900",
      image: "/assets/yamaha/yamaha-xsr900-156036.jpg",
      features: ["Retro styling", "LED Lights", "Modern suspension"],
    },
    {
      name: "XSR700",
      category: "Retro",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€7,400",
      image: "/assets/yamaha/XSR700.jpg",
      features: ["Retro design", "Comfortable ride", "LED Lighting"],
    },
    {
      name: "FJR1300",
      category: "Sport Touring",
      engine: "1298cc, 4 cilindri",
      power: "145 CP",
      price: "€14,500",
      image: "/assets/yamaha/yamaha-fjr1300-NEEDS_IMAGE.jpg",
      features: [
        "Cruise Control",
        "Comfortable ergonomics",
        "Advanced electronics",
      ],
    },
    {
      name: "PW50",
      category: "Mini / Off-road",
      engine: "50cc, 1 cilindru",
      power: "? CP",
      price: "€1,800",
      image: "/assets/yamaha/yamaha-pw50-043425.jpg",
      features: ["Beginner-friendly", "Compact", "Low seat"],
    },

    {
      name: "YZF-R3",
      category: "Supersport",
      engine: "321cc, 2 cilindri",
      power: "42 CP",
      price: "€6,200",
      image: "/assets/yamaha/yamaha-r3-413342.jpg",
      features: ["ABS", "Compact", "Beginner-friendly"],
    },
    {
      name: "R6 Race",
      category: "Supersport",
      engine: "599cc, 4 cilindri",
      power: "120+ CP",
      price: "€13,500",
      image: "/assets/yamaha/yamaha-r6-race-731094.jpg",
      features: ["Track-ready", "Aggressive riding", "No passenger seat"],
    },
    {
      name: "MT-125",
      category: "Naked",
      engine: "125cc, 1 cilindru",
      power: "15 CP",
      price: "€4,800",
      image: "/assets/yamaha/yamaha-mt-125-166469.jpg",
      features: ["Lightweight", "Beginner-friendly", "LED Lights"],
    },
    {
      name: "MT-09 SP",
      category: "Naked",
      engine: "889cc, 3 cilindri",
      power: "119 CP",
      price: "€11,500",
      image: "/assets/yamaha/yamaha-mt-09-sp-072231.jpg",
      features: ["Upgraded suspension", "TFT", "Sport tuning"],
    },
    {
      name: "MT-07 Y-AMT Automat",
      category: "Naked",
      engine: "689cc, 2 cilindri",
      power: "74.8 CP",
      price: "€8,200",
      image: "/assets/yamaha/yamaha-mt-07-y-amt-automat-812434.jpg",
      features: ["Automatic transmission", "LED Lighting", "Comfortable ride"],
    },
    {
      name: "MT-09 Y-AMT Automat",
      category: "Naked",
      engine: "889cc, 3 cilindri",
      power: "119 CP",
      price: "€10,800",
      image: "/assets/yamaha/yamaha-mt-09-y-amt-automat-836867.jpg",
      features: ["Automatic gearbox", "Sporty design", "Quickshifter"],
    },
    {
      name: "Tracer 9 GT",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€13,500",
      image: "/assets/yamaha/yamaha-tracer-9-gt-325884.jpg",
      features: ["Touring gear", "Electronic suspension", "Comfort seat"],
    },
    {
      name: "Tracer 9 GT Y-AMT Automat",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€14,200",
      image: "/assets/yamaha/yamaha-tracer-9-gt-y-amt-automat-607280.jpg",
      features: ["Automatic gearbox", "TFT", "Heated grips"],
    },
    {
      name: "Tracer 9 GT Y-AMT Automat (v2)",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€14,400",
      image: "/assets/yamaha/yamaha-tracer-9-gt-y-amt-automat-903271.jpg",
      features: ["Updated model", "Side cases", "Ride Modes"],
    },
    {
      name: "Tracer 9 Y-AMT",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€13,000",
      image: "/assets/yamaha/yamaha-tracer-9-y-amt-554448.jpg",
      features: ["Semi-auto", "TFT screen", "Comfortable ergonomics"],
    },
    {
      name: "TT-R110",
      category: "Off-road",
      engine: "110cc, 1 cilindru",
      power: "8.5 CP",
      price: "€2,600",
      image: "/assets/yamaha/yamaha-tt-r110-264332.jpg",
      features: ["Beginner dirt bike", "Electric start", "Manual clutch"],
    },
    {
      name: "TT-R50",
      category: "Off-road",
      engine: "50cc, 1 cilindru",
      power: "4.5 CP",
      price: "€2,000",
      image: "/assets/yamaha/yamaha-tt-r50-275806.jpg",
      features: ["Perfect for kids", "Auto clutch", "Small size"],
    },
    {
      name: "WR250F",
      category: "Enduro",
      engine: "250cc, 4 cilindri",
      power: "39 CP",
      price: "€8,200",
      image: "/assets/yamaha/yamaha-wr250-f-280011.jpg",
      features: ["Enduro focused", "Lightweight", "Reliable engine"],
    },
    {
      name: "WR450F",
      category: "Enduro",
      engine: "450cc, 4 cilindri",
      power: "56 CP",
      price: "€9,500",
      image: "/assets/yamaha/yamaha-wr450-f-935503.jpg",
      features: ["Powerful 450", "Yamaha Power Tuner", "Trail ready"],
    },
    {
      name: "XSR125",
      category: "Retro",
      engine: "125cc, 1 cilindru",
      power: "15 CP",
      price: "€4,600",
      image: "/assets/yamaha/yamaha-xsr125-150077.jpg",
      features: ["Retro style", "Lightweight", "Modern tech"],
    },
    {
      name: "XSR125 Legacy",
      category: "Retro",
      engine: "125cc, 1 cilindru",
      power: "15 CP",
      price: "€4,900",
      image: "/assets/yamaha/yamaha-xsr125-legacy-186268.jpg",
      features: ["Special edition", "Spoke wheels", "Heritage colors"],
    },
    {
      name: "XSR900 GP",
      category: "Retro Sport",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€11,900",
      image: "/assets/yamaha/yamaha-xsr900-gp-992049.jpg",
      features: ["Race fairing", "Retro MotoGP look", "Modern tech"],
    },
    {
      name: "YZ125",
      category: "Motocross",
      engine: "125cc, 2T",
      power: "34 CP",
      price: "€7,000",
      image: "/assets/yamaha/yamaha-yz125-755593.jpg",
      features: ["2-stroke engine", "Lightweight", "High rev"],
    },
    {
      name: "YZ250",
      category: "Motocross",
      engine: "250cc, 2T",
      power: "49 CP",
      price: "€8,000",
      image: "/assets/yamaha/yamaha-yz250-467778.jpg",
      features: ["Racing tuned", "Agile", "Powerful"],
    },
    {
      name: "YZ250F",
      category: "Motocross",
      engine: "250cc, 4T",
      power: "41 CP",
      price: "€8,500",
      image: "/assets/yamaha/yamaha-yz250-f-438008.jpg",
      features: ["Fuel injection", "Balance performance", "Race ready"],
    },
    {
      name: "YZ450F",
      category: "Motocross",
      engine: "450cc, 4T",
      power: "59 CP",
      price: "€9,200",
      image: "/assets/yamaha/yamaha-yz450-f-482834.jpg",
      features: ["High torque", "Tuned suspension", "Advanced electronics"],
    },
    {
      name: "YZ65",
      category: "Motocross",
      engine: "65cc, 2T",
      power: "16 CP",
      price: "€4,000",
      image: "/assets/yamaha/yamaha-yz65-709257.jpg",
      features: ["Youth racing", "Manual gearbox", "Mini MX"],
    },
    {
      name: "YZF-R7",
      category: "Supersport",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€8,800",
      image: "/assets/yamaha/yzf-r7.jpg",
      features: ["Quickshifter", "Traction Control", "Rider Modes"],
    },
    {
      name: "YZ85",
      category: "Motocross",
      engine: "85cc, 2T",
      power: "25 CP",
      price: "€4,800",
      image: "/assets/yamaha/yamaha-yz85-159654.jpg",
      features: ["MX8-ready", "Light chassis", "High-revving"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <Link href="/motociclete">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Motociclete
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Yamaha
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Inovație și calitate japoneză în fiecare motocicletă, pentru
              pasionații adevărați
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300"
            >
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
                <CardTitle className="text-xl text-primary">
                  {model.name}
                </CardTitle>
                <CardDescription>{model.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Motor:</span>
                    <span className="text-foreground">{model.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Putere:</span>
                    <span className="text-foreground">{model.power}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-muted-foreground">Preț:</span>
                    <span className="text-primary font-semibold">
                      {model.price}
                    </span>
                  </div> */}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Caracteristici:
                  </h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-glow">
                  <Link href={"/contact"}>Solicită Ofertă</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Yamaha
