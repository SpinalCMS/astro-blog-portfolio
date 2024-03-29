---
# imports
setup: |
  import Layout from "@/layouts/ShootLayout"
  import Image from "@/components/image/Image"

# meta
tags:
  - dripping springs
  - porsche
category: just for fun
date: 2019-05-26

# content
title: Porsches at the Shop
description: New lenses, so it's time to take a trip to the shop to shoot some cars.

# photos
hero: /shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_004.jpg
gallery01:
  - /shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_001.jpg
  - /shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_002.jpg
  - /shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_003.jpg
  - /shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_004.jpg
  - /shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_005.jpg
  - /shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_006.jpg
---

Armed with my new [Sony Zeiss 55mm f/1.8 and a Sony Zeiss 16-35mm f/4](/blog/car-photography-update), I header over to a friend's shop.

Up to this point I had been shooting with a 35mm Sony Zeiss f/2.8. I love that little lens, but it's not a great all around car photography lens. Since I wanted to continue the Sony Zeiss theme, I snagged their 16-35mm and 55mm. I figured the 55mm would give me a little longer reach.

In hindsight, it wasn't enough. I really needed another lens around the 85-100mm mark. But the Sony Zeiss series will always hold a special place in my heart.

<div>
    {frontmatter.gallery01.map((i, index) =>
        <Image
            file={i}
            sizes="(min-width: 1024px) 800px, 100vw"
        />
    )}
</div>
