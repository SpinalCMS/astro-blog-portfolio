---
# imports
setup: |
  import Layout from "@/layouts/ShootLayout"
  import Image from "@/components/image/Image"

# meta
tags:
  - coffee with cars
  - dripping springs
  - greater goods coffee
category: car show
date: 2019-05-26

# content
title: Coffee With Cars May 2019
description: After picking up a Sony 24-105mm lens, I head to Coffee With Cars.

# photos
hero: /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_014.jpg
gallery01:
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_001.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_002.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_003.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_004.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_005.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_006.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_007.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_008.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_009.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_010.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_011.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_012.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_013.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_014.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_015.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_016.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_017.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_018.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_019.jpg
  - /shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_020.jpg
---

After my [move from three lenses to one large zoom](/blog/lens-change-from-3-to-1), I wanted to test it out. Every month, [Greater Goods](https://greatergoodsroasting.com/) hosts a car show in Dripping Springs, TX. It's a great mix of vehicles, some new, some old, some trucks.

The 24-105mm Sony for full frame E-mount lenses is such a great and versatile lens for car photography. If you're okay with the limited, minimum aperture of f/4, it's the perfect zoom. 24mm is just enough to grab nice interiors, 105mm gives you great depth of field, even at f/4.

If I had to stick one one lens for car photography for the rest of my life, it's the 24-105 for sure.

<div>
    {frontmatter.gallery01.map((i, index) =>
        <Image
            file={i}
            sizes="(min-width: 1024px) 800px, 100vw"
        />
    )}
</div>
