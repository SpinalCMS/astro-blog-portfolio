---
# imports
setup: |
  import Layout from "@/layouts/PostLayout"
  import Image from "@/components/image/Image"
  import Caption from "@/components/image/Caption"
  import Gallery from "@/components/image/Gallery"

# meta
tags:
  - porsche
  - dripping springs
category: just for fun
date: 2019-05-26

# content
title: Porsche Collection Shoot
description: I'm in possession of a Sigma 50mm Art 1.4, so I need some cars to test shoot.

# photos
hero: shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_001.jpg
gallery01:
  - shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_001.jpg
  - shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_002.jpg
  - shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_003.jpg
  - shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_004.jpg
---

This isn't a major shoot, but I had a rented Sigma 50mm Art f/1.4 in my possession, so I hopped over to a friends shop to shoot a few of his colleciton.

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