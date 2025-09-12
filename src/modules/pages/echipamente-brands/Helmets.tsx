import { Button } from "@lib/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@lib/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const Helmets = () => {
  const helmets = [
    {
      name: "ALPINESTARS Supertech M10",
      brand: "ALPINESTARS",
      type: "Off-Road",
      shell: "Carbon avansat",
      weight: "1260g ± 50g",
      price: "€599",
      features: [
        "MIPS system",
        "Ventilație avansată",
        "Interior lavabil",
        "Certificare ECE 22.06",
      ],
      image:
        "data:image/webp;base64,UklGRgYQAABXRUJQVlA4IPoPAABQOwCdASqMAIwAPlkkjkUjoiEXieYIOAWEs4ZSALcA/QDTcaIPQA/UD0xvZH+1X2h9V6ZH/l/Bvys/Eo9jCB6k/ZV+B62/4DvX+PP+Z6hf5D/Nv854mu2A1n/Q+gX7efYf9/6tU0T7i1AuCS9E9gP87f8/7gPlX/7P9f+XPt0+n//L/pfgK/nP9n/5/+E7Vv7kez9+2qfrjFsfuGb/UeJFudyBUVDj6gTzKGJaFr7FvMnsDU7x/x4xQl4QPrLoFMMsHK1ZwbcNRTWrKGk7V024XQkr0iLkGbTnfgVHDAmgDWt+ICyix5pshUDCT4ZwzZ9op2odaGyoh5Ldm3q0NTTDDK5gnwVlgTghJn1Fg8E382wH5hcYA136CHiDZdzqyZA7LusG0q2zSLNktAvyhFDEbqE2yLcA0cbGhpQTPjjZpPR+susJLHXsjt8IznK4C7lPPAXV4BfeEFPmmv4UtDf4awNhRXCNdQlSHB4ff30uV+NzuNsPhf/03M0+RHRhwacY3yE3Ot9w77ON6avx8srES+gt8cg+VXAyNIbHLiQtiQrqvZwnT++B8xCPsklpjoSsHrJfO0dxpm1Y4iZXFr1Yj/ZOprnSzJ/w6PbTz/pqkpA+uvfkW2ki356t362M1SPw2AAA/vydCp+uoxc3f5b7tzAS+6fK0wBfcxrvZvPIpAhnovgXezLdCTptwj1iZ6zW6BLH+bpRLy44hMlSZKY/vf/XTzheeFyyqk4DZ588vv1VLFs0s2xX/MyL1C31L4D9cTImXt2S9/Vi0p0101/EafUENbGve/vE7rNN9o1tS3cdvmyit1rZibq9APr/matwjEqUmxYBzZMMv43rm15v5qHSK1LQ6oMRqKRKY5XGOiQ/KQssZSp5p36eNCitBBYDc2aH/C7YWVffynMw1AFLz4zwN2s4/yfK+PsMg+r+1sk8jwLia2ee7WNBg79z8UpklnQMmamhyCMGt5m9eo1Y89ReJOSA97lfBoj0kOSI4DmyaG5huuJ8a+Thf6JbWsx6e0412XC25CmxByLwy5YxHyj2oFDAruCPn/QAJutkIxcco+zc9On5ie8Nov7/Hu16il1/3xFme2t0gPmYSeT3LiTplFq74DdkEECPNvUM2OuXPkNunoH8igTEoOPE7TyKLlyT3u0+cBj55SZAKruEEyazDcoQjZdPmbv4XW+ffdogJgkaMK0ukjilUxQPE89NNf6bzPRzlfmS0SVGTv+9iP2f1xGbSxdKydoqpDxFiXJrx2Y8Y8P0pjbRvu1eTj/nBLfbnoJpLQA9Za9DHYuZMfVahks75cjb7Bk7uuivGzXY9gl9/GG2yF4JMe9+3xMSOFdLVSte3pO3Xcoaw3TrxPEXCzk2P1gEYvgU2Rao1MXrGk7OGGz44L9zvW77qvFXs+4GilGBg0BBqbj5g6J6b8at4TH6rF5Waz8q9x5Md98FWP4NmtUC72B3XTTrBB+WFtnOIW48egJ7tHL6bb2xKrPTs0jWPSXqOdz22tNu0VTj3xQfiBHv75Cw/SDEnzWTUcn4UJrERTb9SLd1xRP8AE+B/RofuQbzHUdEOdZIckFnbGNAA5f8e8tM0sDoUwsWUusa/QT4PdMy7CrICmM9zY1F+qZxXOyfIUhZ3diMQZtiGMnRwgQ+JfnK+/4D2uNofWwT/OiKfDhADgnyIfOlWGVjds9yb5Ow9TT1fzNxE6eZvHOhm9rDnVVZyr4s3Y65IEl7jjF1zAEE33fU8WsMquylug4aBieQ7yfP8dVWiwxZAJJg8p+6hHvEOX2d5l/FWxCc2Xrn0fXBFv4Xs+GF7HLMQhf5Hnx7oDeT4crrC3ESU6iNCHT7Ojn1GLo0dXEHl5DxuOn5vlZHuJbfxLPPn/h+G/xj/Xj96Eww44XqAl6qY/nv+BIYy5S/tJ70CC0MBJUh7GVQORNpZzlvA246Agh+yAQHtnuFQmVtUab1oRL1eQ0Vdnz/vEoEJ2Aedyh+A8YfbkJh6c3PBNpODCKxaZZjT4g2u5GdDx1XZdFoHwIrPuw2rtoTWpiXPw/kaehiq2MJdH9DDMkb5JsS5ZM6vhsK6OhwguXotCr4Ab4luM5pE5tQni+NHW08D0aT2J/rDvkzLpTjITK4azBcFmYJN/SCedVhMHzGm4SEFqWArOcbs2ditrrqr8RVbnOiVoLO1mZ6fXDmjE8+6crqYqr4IO2b8nFvgvP1h3WgddKKA8Ujb3L97vBxA7g2G6fBf7SD084Urg1uo2WB25e12P/s804qMQ3Svt8Zl9ehPH+/puIyWMEpWkJPoLbbthGsqO/ZwqzSIE8qFla4WbNMFSyC1CoME+0BevBHUCpOG23l5aK+OyDQHvleRhFCpzhESQOqwkAqP5m2fGhEtzZxyaGuYxh6sbBgfS9OPYZ0L++Al46MZDuIn6XhDy59dOtHxRxUGex/ANsOsuLMEnBnQ7eiyetkD4a5dF/eiKsNsrjY4/emqpbfgpxG3L3DQSpmduRi9fDRVf/xh12OBPJ1FMv8z/Eu5tXFDTb73GBwmZFLj+LYjaqH6kpCz+nN6OEdljgmNG4zaKDup7iSrwhy5Jhj+Q/d26cBZTQMIro1eTUkUs3pTQMOsmOaUBtzqIXEGYpGvzv+L77DQvPxn5mTTQZp3c0R2iGSI0W3bt8qGUcS0eWAUqB+XoaYYIf0KlBzgYJCjctE51HjD7qJD6WF7tplHFQsuwkiZpf/ntxaiVyDs8sxq/nk+gbj6zF9GYkizUibKWUGZ+/kjiXgB7A7XNuXSxuYiXfjdOZhdSaycgx09SMIy6aqNUt7OQkivryJcKtFXwjuPglI9qHJfZ3MliEno4lVwhlkzYK9G3i9F+y58NirtaACMK5yauqZcrBn1Khty1YIQOFz/C0ke/9pVS6SlNv3J4DCEY50s/SPwDeI5Fun65wu+Ko911lIiu/7xSYrcmCkvZocCSY/ZAkD868mm7WJwcVKgMA7e5MNk6jFeKamzqSKQSQo1XckTj+2a64nfjh8pvH/pB5cMIs85psMf4P96JKcvYwig6/rMBS7ltLQi1kBX+aJ7PxMYTvy83GFQ7KIDza4okvfkBtsGIU8qi+JwnKTS6uCZbazdafv/8TH/G+/GL/lzMC/If/1TlDMrq37rn9Qb1mcVBofbeYv5n/6KUU79sgJ2Vxz91FtActvE5satzTy/5/ldpRak4dVPwWI9lK23d6YXq2wQHEQCLXlxrGmsgM3Ig6VnZHBso7/pjaoTLTsEPU+tNrTLmu2X7YvRq9D/92v+07vc3u2ZJAAvcJLIaJGAszN3oo21GJvZ0PdpPaUgvF5kEb99xK5m/by9CvuYcBcNLqZ5cylywyWDigtAyFX10t3yOvhoeODG2wnZyIiwCPNrVt+y/GI9w5548EXwR8ppYnhuGzp04K9H05Iuq879U8G5K6Pu50GU/K9/+qFdX1QmH4Hv6ACXUA31GFpND3vCyAJI7qiMX0QUPQeO9yFjmNJLhBhQow4ozczjtyeZma3m1qN1HAUF6GTt5wL8f9LrGSgysdbyOZ95ycC72s69w8NctKaO1RKvGlQrfz2joXjxrWefxKnc04/1EhFLEyHQkYlCBf2v7z8DNV0UHOcBqDhUXVM3ob7aDCTGi51Sho4X/pQsGzIZ9NWgHKmq68VDy/P/DI+ZJN2UEaz50XvXHazeB3Cv/nj3cf3o0TgR7QhSy26nGfOEW+vDl36CGxw1k2mczs6zWHv5D3w0AJVT/kI0aBSM5Fwj83xG6v6cv5+sxeCZsCAZTwNj4QRqnfwIPJRbVRcuC4vbRWUMFOahia6o5K1JODbAMRFZ9G41nsh53uUX8EhibzFf09tb1fmxPsbjootSfVYUeXSGKgyMeZ1NhIaJHmuHKxdoCXlG8OjQmfXTFACPKSXjs1eXEBUnDGgIsDX/NySukQ+9Zu8rEfnwb1tmaUE6LVdjVk6b8uuEIXR9UeLfsaelITdyLEkNtCbBWRftwlMyZaj2tvr5ap9vg5QeK1YZG0qJsAXqROiSm6dBKKmDDsrp0/JFd1bI/gawIQOO9gFWTk9ajJ/OoiFdq//Ofw6XY2vj6LcBiHHbZ2YZEmsS1IZILFP1bwlc1GSyoPLfQfY9eGeXb5kQSfSTLv3dHLwBmm8kywlZsUTSLEJnWwczzeU8tMwh/hfRB3P6xLf1Jtf01PTrmZuX5ZOQWtqC3eXRk+v73Qx1+xZ5LfwwFoePOYL+JFm/bGbZP+Q/ryL7fCNw6GtHNbxSZ5Es+XmhSeE3UrCajBjs4qCu9NG19tlk7usm5Ih9EhEB6EyW7rAksLa11t5ZX/X0YdqFhIuYzWjrK6/sSuRrW2X0b9B9n8V2xcsYyfuB4MCN7UDbLTNltjoG5BRTN5Xl+c/Pd1zMsho8L6dN+Oawy2xBup3b21a6M1jJp6gIs4LlnztJh/UHgrUodX/1bt6LegxgJfbxPvUBNwG5b3x+7KNAW3ffUHvdWQFgDoGxwerN7x8a7nZsqzUI9FiHbBmwnor7oa6gxLpdCC1vLs53Y9KYT0x2W+Lw9ie4Y7EEcRlbDqfG9qIUGTSRRBC+GKrQZ7aG6w48YnXv4ZVKoriiHxx+h81Pp8Q166QWWgUgeD7nOEbhNwjNP6USSygK1HDCg0gF7Ts03X8ij1LMQQrqn1R3YV/kne3OH0A8hAp+g5IOwJHkWUCVXVd1tBTZNvYVVuVttHfLHupM371UPTVjPVfJo72CzwtqZBVxOmoqtNJUiP9XY7mh6XdjP7xwuNMKpDMhDfZikP6j91MAGdBP13ivLL0YukocLhzcAwuBdmIharMskKoiLKdy8btUMqR7JuOKsFyP8lmRJ7Ya7xPWZZpUyvYdH7Ovx4Z/DVlz+4gTSo4iMHuOsfnuwZk/+pGRcZFP6WYRSE8sF0xr8Fod+mhwWxSXtxzsXTMKcGMccB8GC270NZl9UR4JvWexVBN8fzb3NCQ6l2Ewix9oAjwd/52kQopD/okFB8Gc5lwSxsI63y+YTfkZUVwyp5h6jnRi7DC7qVUdGKo5xYj0aqHxdaxfx0tqB2y5nahogYD23sq1fbkFQ/rNSYF2PZ/7OLZLJ7EzGd/vOVvxOa46o4P59jtbJi1hCC2vrTbNO31O3Uzer1b1h3rgAFbW5jcy+6cISj9Powy8Pqka/u9vb0LBCs9ZiKxqPNaqbaZ+eUJrh5g05p60CHv2j23K5xK67bdn7WMnuEnKbemJbsWBLqwgQ3dIRqAeMVzx1fkhdKqXxwpCGT5Ght5UD3AO7CNcZ5quwuaPGz/ncGEqrzkFhpar+Bq/S2pNeeoawZNTLH4+BKOKbjVjbN+J8St3mzrlW2yyBdECZofduyH/V//jxOU282Fy9D8j3VcupIEGm8agHc7l5Gmth6LhxGKtoLYAAHP/Ao0ulW6v/CYQnSrkTvzt+2IDJBK2tbDM07YPxAAAAAA",
    },
    {
      name: "Scorpion EXO-R1 Air",
      brand: "Scorpion",
      type: "Sport / Cursă",
      shell: "TCT Ultra®",
      weight: "1380g",
      price: "€419",
      features: [
        "Pinlock inclus",
        "Interior KwikWick3",
        "Sistem Airfit",
        "Certificare ECE 22.06",
      ],
      image:
        "data:image/webp;base64,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",
    },
    {
      name: "HJC RPHA 11",
      brand: "HJC",
      type: "Sport / Racing",
      shell: "Fibra compozită PIM+",
      weight: "1300g ± 50g",
      price: "€499",
      features: [
        "Ventilație excelentă",
        "Interior antibacterian",
        "Pinlock și vizieră fumurie incluse",
        "Certificare ECE 22.06",
      ],
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEHXFbQZCw7ftnpQFT7IsiTsP9a4-zZlaimTQCvShzTt0B_kuSIuTD0LANrsUEiiBltme0Ait8pbtBYgB68pp-3N2-loqxxReszfcNaCpAgZYSZxOd2ESElS7d-UJpQZZOQoAb75mMEA&usqp=CAc",
    },
    {
      name: "AXXIS Draken S",
      brand: "AXXIS",
      type: "Street",
      shell: "ABS avansat",
      weight: "1450g",
      price: "€129",
      features: [
        "Vizieră anti-zgârieturi",
        "Interior complet detașabil",
        "Design sportiv",
        "Certificare ECE 22.05",
      ],
      image:
        "data:image/webp;base64,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",
    },
    {
      name: "Caberg Drift Evo",
      brand: "CABERG",
      type: "Sport Touring",
      shell: "Tricompozit (Kevlar, Carbon, Fibra de sticlă)",
      weight: "1350g ± 50g",
      price: "€369",
      features: [
        "Vizieră dublă (solar)",
        "Pinlock inclus",
        "Interior lavabil",
        "Certificare ECE 22.06",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPgXh0DL11TJfNWRxRTZxECUMoGFsuU3r3QQCxcIuk_z_pA9TPEW0rHjU91MwAkrAJqP2YPmtYHgPS6STYIu3jItLd0zItiUyftfFMULRlAfJJdWNQ17Gak2t2ALLd-UPXxyLHnxU-RTo&usqp=CAc",
    },
    {
      name: "MT HELMETS Thunder 4 SV",
      brand: "MT HELMETS",
      type: "Touring",
      shell: "Policarbonat HIRP",
      weight: "1550g ± 50g",
      price: "€179",
      features: [
        "Ochelari de soare integrați",
        "Pinlock pregătit",
        "Design aerodinamic",
        "Certificare ECE 22.06",
      ],
      image:
        "data:image/webp;base64,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",
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
            <Link href="/echipamente">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Echipamente
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Căști Moto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Găsește casca ideală pentru stilul tău de condus — protecție,
              confort și performanță din partea brandurilor de top.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helmets.map((helmet, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="text-4xl mb-4 text-center">
                  <img
                    src={helmet.image}
                    alt={helmet.name}
                    className="w-full h-48 object-contain rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-xl text-primary">
                  {helmet.name}
                </CardTitle>
                <CardDescription>{helmet.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tip:</span>
                    <span className="text-foreground">{helmet.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Carcasă:</span>
                    <span className="text-foreground">{helmet.shell}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Greutate:</span>
                    <span className="text-foreground">{helmet.weight}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-muted-foreground">Preț:</span>
                    <span className="text-primary font-semibold">
                      {helmet.price}
                    </span>
                  </div> */}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Caracteristici:
                  </h4>
                  <ul className="space-y-2">
                    {helmet.features.map((feature, featureIndex) => (
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

export default Helmets
