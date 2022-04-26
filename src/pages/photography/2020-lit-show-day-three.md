---
# imports
setup: |
  import Layout from "@/layouts/ShootLayout"
  import { Picture } from "astro-imagetools/components";

# meta
tags:
  - lit show
  - porsche
  - los angeles
category: car show
date: 2020-02-29

title: LIT Show 2020 Part 3
description: Day three and we're off to CarParc USA and Emory Motorsports. I got to shoot a Singer 911 as well!

related:
  - lit-show-day-two
  - lit-show-day-four

# photos
hero: /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_007.jpg
gallery01:
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_001.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_002.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_003.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_004.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_005.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_006.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_007.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_008.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_009.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_010.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_011.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_012.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_013.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_014.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_015.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_016.jpg
gallery02:
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_017.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_018.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_019.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_020.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_021.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_022.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_023.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_024.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_025.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_026.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_027.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_028.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_029.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_030.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_031.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_032.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_033.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_034.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_035.jpg
gallery03:
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_036.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_037.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_038.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_039.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_040.jpg
  - /src/assets/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_041.jpg
---

## Outside the Hotel

Staying at the [LAX Hilton](https://www.hilton.com/en/hotels/laxahhh-hilton-los-angeles-airport/) in February 2020 was an interesting experience in early 2020. COVID was in the early stages and flights were arriving from hotspots across the world. However, none of that mattered when there was a Singer 911, 911R and a 996 GT2 parked out front!

### Singer 911

<div>
    {frontmatter.gallery01.map(i =>
        <Picture
            src={i}
            alt="hi"
            breakpoints={[400, 800, 1200]}
            sizes="(min-width: 1024px) 800px, 100vw"
        />
    )}
</div>

## CarParc USA

[CarParc](https://carparcusa.com/) USA is an interesting place, it's one part Porsche, one part art gallery. The Gulf hot rod up front was amazing. Attention to detail was insane and I would have loved to take that car home with me. I loved the yellow 911S with red houndstooth as well, such a perfect combination of style. CarParc USA had a Celette which was neat to see. There's not too many of those left around.

<div>
    {frontmatter.gallery02.map(i =>
        <Picture
            src={i}
            alt="hi"
            breakpoints={[400, 800, 1200]}
            sizes="(min-width: 1024px) 800px, 100vw"
        />
    )}
</div>

## Emory Motorsports Open House

Rod Emory is to 356's as Singer is to 911's. They're buying a ton of restoration level 356's and modifiying them for their customers. I love the unique customizations that come out of tuners like this. The obvious star of the show was Emory's shop car, a 356 they modified to have rear mounted twin turbos.

At the entrance to the shop [Gunther Werks](https://www.guntherwerks.com/) brought along a mint green 400R. Absolutely insane.

<div>
    {frontmatter.gallery03.map(i =>
        <Picture
            src={i}
            alt="hi"
            breakpoints={[400, 800, 1200]}
            sizes="(min-width: 1024px) 800px, 100vw"
        />
    )}
</div>
