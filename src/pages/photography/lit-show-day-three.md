---
# imports
setup: |
  import Layout from "@/layouts/PostLayout"
  import Image from "@/components/image/Image"
  import Caption from "@/components/image/Caption"

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
hero: shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_007.jpg
gallery01:
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_001.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_002.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_003.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_004.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_005.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_006.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_007.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_008.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_009.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_010.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_011.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_012.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_013.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_014.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_015.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_016.jpg
gallery02:
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_017.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_018.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_019.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_020.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_021.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_022.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_023.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_024.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_025.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_026.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_027.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_028.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_029.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_030.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_031.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_032.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_033.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_034.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_035.jpg
gallery03:
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_036.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_037.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_038.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_039.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_040.jpg
  - shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_041.jpg
---

<div class="gallery">
    {frontmatter.gallery01.map(i =>
            <Image
                file={i}
            />
            <Caption file={i} showDesc=true />
    )}
</div>

<div class="gallery">
    {frontmatter.gallery02.map(i =>
            <Image
                file={i}
            />
            <Caption file={i} showDesc=true />
    )}
</div>

<div class="gallery">
    {frontmatter.gallery03.map(i =>
            <Image
                file={i}
            />
            <Caption file={i} showDesc=true />
    )}
</div>