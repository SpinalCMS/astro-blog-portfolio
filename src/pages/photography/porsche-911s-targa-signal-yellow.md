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
  - 911s
  - dripping springs
  - turbo
category: bring a trailer
date: 2019-08-17

# content
title: Signal Yellow 1973 911S Targa
description: A gorgeous 911S Targa I shot for a future auction on Bring a Trailer. 

# photos
hero: shoots/2019/2019-08-17-signal-yellow-911/911s-targa_001.jpg
gallery01:
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_001.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_002.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_003.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_004.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_005.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_006.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_007.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_008.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_009.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_010.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_011.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_012.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_013.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_014.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_015.jpg
  - shoots/2019/2019-08-17-signal-yellow-911/911s-targa_016.jpg
---

<div class="gallery">
    {frontmatter.gallery01.map(i =>
        <Gallery file={i}>
            <figure>
                <picture>
                    <Image file={i} />
                </picture>
                <Caption file={i} showMeta={true} />
            </figure>
        </Gallery>
    )}
</div>