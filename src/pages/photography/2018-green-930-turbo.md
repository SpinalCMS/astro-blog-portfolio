---
# imports
setup: |
  import Layout from "@/layouts/ShootLayout"
  import Image from "@/components/image/Image"

# meta
tags:
  - ice metallic green
  - porsche
  - 930 turbo
category: bring a trailer
date: 2018-05-08

# content
title: 1976 Ice Metallic Green 930 Turbo
description: My first shoot for Bring a Trailer is a pristine 930 Turbo.

# photos
hero: /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_006.jpeg
gallery01:
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_001.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_002.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_003.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_004.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_005.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_006.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_007.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_008.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_009.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_010.jpeg
  - /shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_011.jpeg
---

A friend with a rather large Porsche collection decided to start focusing strictly on air-cooled, early 911's. So unfortunately, his two 930 Turbo's had to go.

He knew that I had a camera and asked if I was interested in shooting the car for a "Bring a Trailer" auction. Of course I jumped at the opportunity. We met early morning at a nearby church.

Looking back at this shoot years later, there are so many things I would have done differently. The rear of some of the shots are far too busy, 35mm is too wide to shoot the exterior, I could go on and on.

But no matter what, 930's are one of my favorite Porsches, and in this color, who cares what the photos look like?

<div>
    {frontmatter.gallery01.map((i, index) =>
        <Image
            file={i}
            sizes="(min-width: 1024px) 800px, 100vw"
        />
    )}
</div>
