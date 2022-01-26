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
  - turbo
category: car show
date: 2021-06-23
draft: true

# content
title: 930 Turbo Flachbau
description: I switch from photographer to the driver seat to grab some rolling shots of a Porsche 930 Turbo.

# photos
hero: shoots/2021/2021-06-23-porsche-930/porsche-930-2021_050.jpg
gallery01:
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_001.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_002.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_003.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_004.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_005.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_006.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_007.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_008.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_009.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_010.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_011.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_012.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_013.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_014.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_015.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_016.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_017.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_018.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_019.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_020.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_021.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_022.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_023.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_024.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_025.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_026.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_027.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_028.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_029.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_030.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_031.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_032.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_033.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_034.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_035.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_036.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_037.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_038.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_039.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_040.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_041.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_042.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_043.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_044.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_045.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_046.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_047.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_048.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_049.jpg
  - shoots/2021/2021-06-23-porsche-930/porsche-930-2021_050.jpg
---

If you're like me and have never heard of the [LIT Show](https://www.lalitandtoyshow.com/), it's a Porsche literature, toy and memorabilia show that takes place each year in Southern California. But that description from their website is selling it short. It's really a week long Porsche fest. Lots of cars everywhere, some for sale and most shops open their doors to enthusiasts. It's Porsche week in LA and it's glorious.
    
## Let's Get it Started
Our trip started with a visit to [CPR Classic](https://www.cprclassic.com/) in Fallbrook, CA. CPR has been in the Porsche restoration business for 40 years. Their facility is massive, spanning across multiple buildings. Each building holding numerous customer cars awaiting restoration.

<div class="gallery">
    {frontmatter.gallery01.map(i =>
        <Gallery file={i}>
            <figure>
                <picture>
                    <Image file={i} />
                </picture>
                <Caption file={i} showDesc=true />
            </figure>
        </Gallery>
    )}
</div>