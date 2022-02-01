---
# imports
setup: |
  import Layout from "@/layouts/PostLayout"
  import Image from "@/components/image/Image"
  import Caption from "@/components/image/Caption"
  import Gallery from "@/components/image/Gallery"
  import Video from "@/components/video/Video"

# meta
tags:
  - US vintage nationals
  - circuit of the americas
category: car show
date: 2017-11-03

# content
title: 2017 U.S. Vintage Nationals at COTA
description: I get an "in-the-pits" invitation to the U.S. Vintage National Championships

# photos
hero: shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004.jpg
gallery01:
  - shoots/2017/2017-11-03-cota-classic/cota-classic-2017_001.jpg
  - shoots/2017/2017-11-03-cota-classic/cota-classic-2017_002.jpg
  - shoots/2017/2017-11-03-cota-classic/cota-classic-2017_003.jpg
  - shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004.jpg
---

I received an invite from a friend to visit Circuit of the Americas during the [2017 U.S. Vintage National Championship](https://svra.com/race-results/2017-u-s-vintage-national-championship/) series. It was the first time I've been to COTA and was obviously blown away. It's new and beautiful. There are amazing race cars left and right. Just a stunning experience.

<div class="gallery">
    {frontmatter.gallery01.map((i, index) =>
        <Gallery file={i}>
            <figure>
                <picture>
                    <Image file={i} />
                </picture>
                <Caption file={i} showMeta={true}>
            </figure>
        </Gallery>
    )}
</div>