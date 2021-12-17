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
date: 2020-03-01

# content
title: LIT Show 2020 Part 4
description: We finish off our trip with a visit to the incredible Petersen Museum to see an original 550 Spyder.

related:
  - lit-show-day-two
  - lit-show-day-four

# photos
hero: shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_004.jpg
gallery01:
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_001.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_002.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_003.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_004.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_005.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_006.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_007.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_008.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_009.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_010.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_011.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_012.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_013.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_014.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_015.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_016.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_017.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_018.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_019.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_020.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_021.jpg
  - shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_022.jpg
---

<div class="gallery">
    {frontmatter.gallery01.map(i =>
        <Gallery file={i}>
            <Image
                file={i}
            />
            <Caption file={i} showDesc=true />
        </Gallery>
    )}
</div>